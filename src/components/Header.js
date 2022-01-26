import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import logo from '../images/logo.svg';

export default function Header({onLogout}) {
  const currentUser = React.useContext(CurrentUserContext);
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
          <span className="header__email">{currentUser.email}</span>
          <button className="header__logout-button" onClick={onLogout}>Выйти</button>
        </div>} /> 
    </Routes>
  </header>
  )}