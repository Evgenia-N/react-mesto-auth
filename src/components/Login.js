import react from "react";
import { Link, useNavigate } from "react-router-dom";
import * as auth from "../auth"

export default function Login({onLogin}) {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange =(e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.email || values.password) {
      return;
    }
    auth.authorize(values.email, values.password)
    .then((res) => {
      if(res.user && res.jwt) {
        setValues({
          email: '',
          password: '',
        })
        localStorage.setItem('jwt', res.jwt);
        onLogin();
        navigate('/');
      }
    })
    .catch((err) => console.log(`${err}`));
  };

  return
}

