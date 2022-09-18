import React from 'react'
import './Login.scss'
import { Button, Input } from 'antd';
import { loginEnter, LoginInput } from '../../const/Login';
const Login = () => {
  return (
    <div className='login_root'>
      <div className='login_wrap'>
        <h1 className='login_title'>Вход</h1>
        <Input
          placeholder="Введите логин"
          style={LoginInput}
        />
        <Input.Password
          placeholder="Введите пароль"
          style={LoginInput}
        />
        <Button
          style={loginEnter}
        >
          Войти
        </Button>
      </div>
    </div>
  )
}

export default Login