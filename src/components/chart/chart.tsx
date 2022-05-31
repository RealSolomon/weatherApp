import React from 'react';
import classNames from 'classnames/bind';
import { Card } from '@mui/material';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import { IChartProps } from './type';
import styles from './chart.module.scss';

const cx = classNames.bind(styles);

export const Chart = ({ data }: IChartProps) => (
  <Card data-testid='chartContainer' className={cx('chart')}>
    <LineChart
      data-testid='chartLine'
      width={550}
      height={250}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="10 10" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="temp"
        stroke="rgb(74, 111, 161)"
        fill="rgb(74, 111, 161)"
      />
    </LineChart>
  </Card>
);
