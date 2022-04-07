import { useEffect, useState } from 'react';
import validator from 'validator'
import backgraund from '../../images/backgraund.png';

function Login({ onLogin }) {

  const [login, setLogin] = useState('');
  const [errorLogin, setErrorLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [valid, setValid] = useState(true);

  useEffect(() => {
    if (!login || !password || errorLogin || errorPassword) {
      setValid(false)
    } else {
      setValid(true)
    }
  }, [login, password, errorLogin, errorPassword])

  function handleLogin(e) {
    const value = e.target.value
    if (!validator.isEmail(value)) {
      setErrorLogin('Введите корректный E-mail')
    } else {
      setErrorLogin('')
      setLogin(value)
    }
  }

  function handlePassword(e) {
    const value = e.target.value
    const regexp = /[а-яё]/i

    if (regexp.test(value)) {
      setErrorPassword('Пароль не должен содержать кириллицы')
    } else if (value.length < 8) {
      setErrorPassword('Пароль не должен быть короче 8 символов')
    } else {
      setErrorPassword('')
      setPassword(value)
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({
      login: login,
      password: password,
    })
  }

  const submitButtonClassName = (
    `${!valid ? 'form__submit_type_disactive' : 'form__submit'}`
  );

  return (
    <div className="login">
      <img src={backgraund} alt="backgraund" className="login__backgraund" />
      <form className="form" onSubmit={handleSubmit} noValidate>
        <h1 className="form__header">Simple Hotel Check</h1>
        <div className="form__input-container">
          <span className={ !errorLogin ? "form__input-name" : "form__input-name_type_error"}>Логин</span>
          <input className={ !errorLogin ? "form__input" : "form__input_type_error"} onChange={handleLogin} type="text" name="login" required />
          <span className="form__input-error">{errorLogin}</span>
        </div>
        <div className="form__input-container">
          <span className={ !errorPassword ? "form__input-name" : "form__input-name_type_error"}>Пароль</span>
          <input className={ !errorPassword ? "form__input" : "form__input_type_error"} onChange={handlePassword} type="text" name="password" required />
          <span className="form__input-error">{errorPassword}</span>
        </div>
        <button disabled={!valid} type="submit" className={submitButtonClassName} >Войти</button>
      </form>
    </div>
  );
}

export default Login;
