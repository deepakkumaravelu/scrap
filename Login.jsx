import Google from "../img/google.png";
import Github from "../img/github.png";
import Discord from "../img/discord.png";
import './Login.css';
import { useState } from "react";
const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };


  const discord = () => {
    window.open("http://localhost:5000/auth/discord", "_self");
  };
  const [activeForm, setActiveForm] = useState('login'); // Possible values: 'login', 'register', 'forgot'

  const toggleForm = (form) => {
    setActiveForm(form);
  };
  return (
    <div className="login">
      <div className="wrapper">

        <div className="center">
        <div className="login-page">
        <div className="form">
      {activeForm === 'login' && (
        <form className="login-form" action="/login" method="post">
          <input type="text" placeholder="email address" name="emailaddress" />
          <input type="password" placeholder="password" name="password" />
          <button>login</button>
          <p className="message">
            <a href="#" onClick={() => toggleForm('forgot')}>Forgot password?</a>
          </p>
          <p className="message">
            Not registered? <a href="#" onClick={() => toggleForm('register')}>Create an account</a>
          </p>
          <div className="buttonss">
      <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
           <div className="loginButton discord" onClick={discord}>
            <img src={Discord} alt="" className="icon" />
            Discord
          </div>
          </div>
        </form>
      )}

      {activeForm === 'register' && (
        <form className="register-form" action="/register" method="post">
          <input type="text" placeholder="name" name="username" />
          <input type="password" placeholder="password" name="password" />
          <input type="text" placeholder="email address" name="email" />
          <button>create</button>
          <p className="message">
            Already registered? <a href="#" onClick={() => toggleForm('login')}>Sign In</a>
          </p>
          <div className="buttonss">
      <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
           <div className="loginButton discord" onClick={discord}>
            <img src={Discord} alt="" className="icon" />
            Discord
          </div>
          </div>
        </form>
      )}

      {activeForm === 'forgot' && (
        <form className="forgotpassword-form" action="/forgotpassword" method="post">
          <input type="text" placeholder="email address" name="email" />
          <button>Reset</button>
          <p className="message">
            Not registered? <a href="#" onClick={() => toggleForm('register')}>Create an account</a>
          </p>
          <div className="buttonss">
      <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
           <div className="loginButton discord" onClick={discord}>
            <img src={Discord} alt="" className="icon" />
            Discord
          </div>
          </div>
        </form>
      )}
    </div>
      </div>
      </div>

      </div>
      
    </div>
  );
};

export default Login;
