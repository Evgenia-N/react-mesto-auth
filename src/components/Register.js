import { Link, useNavigate } from "react-router-dom";
import * as auth from "../auth";
import React from "react";
import "./styles/Register.css"

export default function Register() {
  const [values, setValues] = React.useState({
    email:'',
    password:'',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.register(
      values.email,
      values.password
    )
    .then((res)=> {
      if (res.statusCode !== 400) {
        navigate('/sign-in')
      }
      else {
      console.log(`Произошла ошибка: ${res.status, res.statusText}`)
    }})
    }

    return (
      <div className="register">
        <p className="register__enter">Регистрация</p>
        <form onSubmit={handleSubmit} className="register__form">
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className="register__input"
            placeholder="Email"
          />
          <input
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            className="register__input"
            placeholder="Пароль"
          />
            <button
              type="submit"
              onSubmit={handleSubmit}
              className="register__link">
            </button>
        </form>
  
        <div className="register-login">
          <p className="register-login__text">Уже зарегистрированы?</p>
          <Link to="/sign-in" className="register-login__link">
            Войти
          </Link>
        </div>
      </div>
    );
}
