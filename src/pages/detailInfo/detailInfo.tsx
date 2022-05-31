import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { CityCard } from '../../components/cityCard/cityCard';
import store from '../../redux/store';
import { Chart } from '../../components/chart/chart';
import { fetchDetailyWeatherAction } from '../../redux/detailWeather/detailWeatherApi';
import { fetchHourlyWeatherAction } from '../../redux/weatherHourly/weatherHourlyApi';
import { hourlyListSelector } from '../../redux/weatherHourly/weatherHourlySelector';
import { coordinateSelector, detailWeatherSelector } from '../../redux/detailWeather/detailWeatherSelector';
import styles from './detailInfo.module.scss';

const cx = classNames.bind(styles);

export const DetailInfo = ()  => {
    const dispatch: typeof store.dispatch = useDispatch();
    const navigate = useNavigate()
    
    const hourlyListTemp = useSelector(hourlyListSelector);
    const coordinate = useSelector(coordinateSelector);
    
    const { id } = useParams();
    const {
      weather,
      temp,
      wind_speed,
      feels_like,
      pressure,
      humidity,
      temp_min,
      temp_max,
      name,
    } = useSelector(detailWeatherSelector);

   
    useEffect(() => {
      coordinate && dispatch(fetchHourlyWeatherAction(coordinate));
      id && dispatch(fetchDetailyWeatherAction(id));
    }, [id, coordinate]);

  return (
    <div className={cx('container')}>
      <div className={cx('chart')}>
        <CityCard
          name={name}
          weather={weather}
          temp={temp}
          wind_speed={wind_speed}
          feels_like={feels_like}
          pressure={pressure}
          humidity={humidity}
          temp_min={temp_min}
          temp_max={temp_max}
        />
        <Chart data={hourlyListTemp} />
        <Button variant="contained" className={cx('back__btn')} onClick={() => navigate(-1)}>Back</Button>
      </div>
    </div>
  );
};
