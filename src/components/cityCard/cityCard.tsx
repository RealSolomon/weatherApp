import React from 'react';
import classNames from 'classnames/bind';
import { Card, CardContent } from '@mui/material';

import { IBigCityCardProps } from './type';
import styles from './cityCard.module.scss';

const cx = classNames.bind(styles);

export const CityCard = ({
  weather,
  temp,
  wind_speed,
  feels_like,
  pressure,
  humidity,
  temp_min,
  temp_max,
  name,
}: IBigCityCardProps)  => {
  return (
    <div className={cx('card')}>
      <Card>
        <CardContent>
          <span className={cx('card__title')}>{name}</span>
          <div className={cx('card__content')}>
            <div className={cx('card__content_left')}>
              <span data-testid='temp' className={cx('card__content_temp')}>
                {`${Math.round(temp)}°`}
              </span>
            </div>
            <div className={cx('card__content_details')}>
              <span className={cx('card__content_details_item')}>
                <span>Wind {wind_speed} kmp</span>
              </span>
              <span className={cx('card__content_details_item')}>
                <span>Pressure: {pressure} hPa</span>
              </span>
              <span className={cx('card__content_details_item')}>
                <span>Humidity: {humidity} %</span>
              </span>
              <span className={cx('card__content_details_item')}>
                <span>High temp: {temp_max}°</span>
              </span>
              <span className={cx('card__content_details_item')}>
                <span>Min temp: {temp_min}°</span>
              </span>
            </div>
          </div>
            <span className={cx('card__content_descr')}>{weather.description}</span>
            <span className={cx('card__content_descr')}>Feels like {Math.round(feels_like)}°</span>
        </CardContent>
      </Card>
    </div>
  );
};
