import './App.css';
import { useEffect, useState } from "react";
import LoginPage from './components/login/login-page';
import Profile from './components/profile/profile-page';

const App = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const storedUser = JSON.parse(localStorage.getItem('user'));
  
  if(storedUser){
    return(
      <Profile storedUser={storedUser} setLoginSuccess={setLoginSuccess}></Profile>
    )
  }
  return(
    <div className="container">
      {
        !loginSuccess ? <LoginPage setLoginSuccess={setLoginSuccess}></LoginPage> 
        : <Profile storedUser={storedUser} setLoginSuccess={setLoginSuccess}></Profile>
      }
    </div>
  )
}

export default App;