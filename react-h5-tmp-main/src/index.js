/*
 * @Descripttion: 入口js文件
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-28 09:54:02
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-18 14:30:09
 */
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import { createRoot } from 'react-dom/client';
import '@/assets/css/index.scss';
import App from '@/views/app/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from '@/packages/store';
// vconsole
import '@/packages/console';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    // <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    // </React.StrictMode>
);

// 性能测试
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
