import { useState } from 'react';
import './login-page.css';
import axios from 'axios';

const LoginPage = ({setLoginSuccess}) => {

  const login = async (event) => {
    event.preventDefault();
    console.log(event.target)
    const userDetails = {
      username: event.target.username.value,
      password: event.target.password.value
    };
    // console.log('user..', userDetails)
    try {
      const response = await axios({
        url: 'https://dummyjson.com/auth/login',
        method: 'POST',
        data: userDetails
      });
      if (response?.request?.status == 200) {
        setLoginSuccess(true);
        localStorage.setItem('user', JSON.stringify(
          {
            id: response.data.id,
            token: response.data.token
          })
        );
      }
      else{
        alert('Invalid credentials');
      }
    } catch (error) {
      alert('Invalid credentials');
      console.log('err>', error);
    }
  }
  return (
    <div className="login-page">
      <form onSubmit={login}>
        <input type="text" placeholder="Enter Username" name="username" required />
        <input type='password' placeholder="Enter Password" name="password" required />
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;