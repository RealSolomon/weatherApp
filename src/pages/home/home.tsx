import React, { ChangeEvent, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

import { statusCodeSelector } from '../../redux/weather/weatherSelector';
import { SearchBar } from '../../components/searchBar/searchBar';
import { CitiesList } from '../../components/citiesList/citiesList';
import { addNewCity, initialCitiesList } from '../../redux/weather/weatherSlice';
import { addItemInStorage, getItemsFromStorage } from '../../utils/localStorage';
import { IRootState } from '../../redux/rootType';
import styles from './home.module.scss'

const cx = classNames.bind(styles);

export const Home = ()  => {
  const dispatch = useDispatch();

  const [value, setValue] = useState<string>('');

  const cod = useSelector(statusCodeSelector);
  const listOfCity = useSelector((state: IRootState) => state.weatherData.citiesList);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>):void => setValue(e.target.value);

  const addCity = ():void => {
    const isInList = listOfCity.map((city) => city.toLocaleLowerCase()).includes(value);
    if (!!value.length && !isInList) {
      dispatch(addNewCity(addItemInStorage(value)));
    }
    setValue('');
  };

  useEffect(() => {
    dispatch(initialCitiesList(getItemsFromStorage()));
  }, []);

    return (
      <div className={cx('container')}>
        <div className={cx('loader')}>{cod !== 200 && <CircularProgress />}</div>
        <CitiesList citiesList={listOfCity}/>
        <SearchBar
          status={cod}
          onChange={inputHandler}
          value={value}
          onClick={addCity}
        />
      </div>
    );
};
