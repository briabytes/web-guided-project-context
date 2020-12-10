import React from 'react';
import { render, useState } from 'react-dom';
import './styles.scss';
import data from './data';
import App from './App';
import AppContextReducer from './AppContextReducer';

render(
    <AppContextReducer/>,
    document.querySelector('#root')
);