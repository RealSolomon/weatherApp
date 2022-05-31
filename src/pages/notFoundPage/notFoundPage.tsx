import React from 'react';
import classNames from 'classnames/bind';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './notFoundPage.module.scss';

const cx = classNames.bind(styles);

export const NotFoundPage = () => {
    const navigate = useNavigate()
    return (
    <div className={cx('container')}>
        <h1 className={cx('header')}>404</h1>
        <p className={cx('desc')}>Not Found</p>
        <Button variant="contained" className={cx('home__btn')} onClick={() => navigate('/')}>Home</Button>
    </div>
    );
}
