import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import logo from '../images/logo.svg';

export default function Header({onSignOut, userData}) {
  let {email} = userData;
  return (
    <header className="header page__header">
    <img src={logo} alt="Логотип_Mesto" className="header__logo" />
    <Routes>
      <Route path='/sign-up' element={
        <Link to='/sign-in' className="header__link">Войти</Link>} /> 
      <Route path='/sign-in' element={
        <Link to='/sign-up' className="header__link">Регистрация</Link>}/>
      <Route path='/' element={
        <div className="header__container">
          <span className="header__email">{email}</span>
          <button className="header__logout-button" onClick={onSignOut}>Выйти</button>
        </div>} /> 
    </Routes>
  </header>
  )}