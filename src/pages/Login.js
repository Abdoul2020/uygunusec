import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { loginWithEmailAndPassword } from '../services/firebase';
import { updateUser } from '../services/userSlice';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../services/userSlice';
import "./styles/Login.css";
import "./styles/SignUp.css";
import { toastify } from '../services/toastify';
import showPassword from "../show-password.svg";
import hidePassword from "../hide-password.svg";





//TODO Kullanıcı adı eklenencek 

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://controlza.net">
        CONTROLZA
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  console.log('I am in Login');
  const user = useSelector(selectUser);
  console.log(user);

//show passoword
const [password, setPassword] = React.useState('');
const [validPassoword, setValidPassword] = React.useState(false);





  const navigate = useNavigate();
  useEffect(() => { if (user.uid) { navigate("/profile"); toastify({ type: 'info', message: 'Lutfen suanki kullanicidan cikis yapiniz.' }); } });

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    loginWithEmailAndPassword(data.get('email'), data.get('password')).then(
      (respUser, verified) => {
        if (verified === false) {
          toastify({ type: 'success', message: 'Email Dogrulama linki gonderildi' });
        }
        else {
          let { uid,
            displayName,
            email,
            phoneNumber,
            emailVerified } = respUser.user;
          dispatch(updateUser(
            {
              uid,
              displayName,
              email,
              phoneNumber,
              emailVerified
            })); navigate("/profile");
        }
      }

    )
      .catch(error => {
        toastify({ type: 'error', message: error })
      })
  };


  return (
    <section theme={theme}>
      <div class="container" id="container">

        <div class=" sign-in-containere">
          <form onSubmit={handleSubmit}>
            <h1>Kullanıcı Girişi</h1>
            <span>E - Posta Adresiniz</span>
            <div className='form-group login-box'>
            <input type="email" required autoComplete="email" name="email" id='email' autofocus placeholder="E-Posta Adresiniz" />
            </div>
            <div style={{position:"relative"}}  className="form-group login-box">
            <input type={validPassoword ? "text" :"password"}
            autoComplete="current-password" required id="password" name='password' placeholder="Parola" />
                     <img  style={{position:"absolute",  top:"11%", right:"17px"}}  src={validPassoword ? hidePassword : showPassword}
                     title={validPassoword ? "Hide password" : "Show password"}
                     onClick={() => setValidPassword(prevState => !prevState)}
                     alt="" />
                     </div>

            <br />

            <div className="custom-control custom-checkbox" >
              <input type="checkbox" className="custom-control-input"
                id="customCheck1" style={{ width: "5%" }} />
              <label className="custom-control-label"
                htmlFor="customCheck1" > Beni Hatırla </label> </div>

            <br />
            <button>Üye Girişi</button><br /><br />
            <div className="alt-line">
              <span><a href="#">Şifremi Unuttum</a></span>
              <p>Üye değilseniz, <a href="">Üye Olun</a></p>
            </div>

          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <h1>Mehabalar !</h1>
              <p>Kişisel bilgilerinizi girin ve bizimle yolculuğa başlayın.</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}