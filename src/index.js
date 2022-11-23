import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { AdminComponent } from './AdminComponent';
import { UserComponent } from './components/userCompoonent';
import { NavR } from './components/nav';

const root = document.getElementById('root');

render(
  <>
    <NavR/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserComponent/>}/>
        <Route path='/admin' element={<AdminComponent/>}/>
      </Routes>
    </BrowserRouter>
  </>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
