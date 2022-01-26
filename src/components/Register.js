import { Link, useNavigate } from "react-router-dom";
import * as auth from "../auth";
import React from "react";

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
      }})
    }
  return
}
