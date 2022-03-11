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

import { useSelector } from 'react-redux';
import { selectUser } from '../services/userSlice'
import { toastify } from '../services/toastify'
import { registerWithEmailAndPassword } from '../services/firebase';
import "./styles/SignUp.css"
import { useNavigate } from 'react-router-dom';
import showPassword from "../show-password.svg";
import hidePassword from "../hide-password.svg";
import Autocomplete from '@material-ui/lab/Autocomplete';



//TODO Şimdilik güncel bilgiler almak istiyorum kaldırıldı. Nodjs hazır olursa devam edilecek.

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://controlza.net/">
        CONTROLZA
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Register() {
  console.log('I am in register');


  // contact part

 const turkcell = ['530', '531', '532', '533', '534', '535', '536', '537', '538', '539']
 const turkTelekom = ['501', '505', '506', '507', '551']
const bimcell = ['552', '553', '554', '555', '559']
const vodafone = ['540', '541', '542', '543', '544', '545', '546', '547', '548', '549']
// kktcvodafone = ['54285-88']
// kktcell = ['53383-87']
const allGsmCodes = [].concat(
    turkcell,
    turkTelekom,
    bimcell, 
    vodafone);



  //show passoword
const [password, setPassword] = React.useState('');
const [validPassoword, setValidPassword] = React.useState(false);

  const user = useSelector(selectUser);
  console.log(user);

  const navigate = useNavigate();
  useEffect(() => { if (user.uid) { navigate("/profile"); toastify({ type: 'info', message: 'Lutfen suanki kullanicidan cikis yapiniz.' }); } });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    registerWithEmailAndPassword(
      data.get('email'),
      data.get('password'),
      data.get('firstName'),
      data.get('lastName'),
      data.get("phone"),
      data.get("phone-line"))
      .then(
        (result) => {
          if (result === "Success") {
            toastify({ type: 'success', message: 'Email Dogrulama linki gonderildi' });
            navigate("/login");
          }
          else {
            throw new Error('Bilinmeyen Bir Hata Olustu');
          }
        })
      .catch(error => { toastify({ type: 'error', message: error }) });
  };

  return (


    <section theme={theme}>
      <div class="container right-panel-active" id="container">

        <div class="form-container sign-in-container">

          <h2>Ücretsiz Üye Olun.</h2>
          <form className="signup-form"  onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="namePart">
                <div className="margin-right">
                  <label>Adınız</label>
                  <input type="text"

                    autoComplete="off"
                    name="firstName"
                    required
                    id="firstName"
                    autoFocus
                    className="form-control" placeholder="" />
                </div>

                <div className="margin-left">
                  <label>Soyadınız</label>
                  <input type="text"
                    required
                    id="lastName"
                    name="lastName"
                    autoComplete="off"

                    className="form-control" placeholder="" />
                </div>
              </div>

            </div>

            <div className="form-group">
              <label>E-posta Adresiniz</label>
              <input type="email"
                required
                id="email"
                label="Email Address"
                name="email"
                autoComplete="off"
                className="form-control" placeholder="" />
            </div>

            <div className="form-group">
              <label>Cep Telefonu Numaranız</label>

              <div className="telefonPart">
 <div  className="margin-right"  style={{width:"75%"}}>
      <Autocomplete
        options={allGsmCodes}
        renderInput={(params) =>
          <TextField {...params} label="Seçiniz" name='phone-line' variant="outlined"  />}/>
                 </div>

                <div className=" telefon-input">
                  <input type="text"

                    required
                    name="phone"
                    id="phone"
                    autoComplete="off"

                    className="form-control" placeholder="" />
                </div>
              </div>
            </div>

            <div className="form-group" style={{position:"relative"}}>
              <label>Parola</label>
              <input type={validPassoword ? "text" :"password"}
                required
                name="password"
                id="password"
                autoComplete="off"
                className="form-control" placeholder="Parola" />
                <img  style={{position:"absolute",  top:"40%", right:"17px"}} src={validPassoword ? hidePassword : showPassword}
                     title={validPassoword ? "Hide password" : "Show password"}
                     onClick={() => setValidPassword(prevState => !prevState)}
                     alt="" />
            </div>
            {/* <div className="custom-control custom-checkbox" >
              <input type="checkbox" className="custom-control-input"
                id="customCheck1" style={{ width: "5%" }} />
              <label className="custom-control-label"
                htmlFor="customCheck1" > Güncel Bilgiler almak istiyorum. </label> </div> */}
            <br />
            <div className="buttonpart">

              <button type="submit" className="btn btn-dark btn-lg btn-block mt-2">Üye ol</button>
              <p className="forgot-password" >
                Üye iseniz  &nbsp;<a href="#">Üye Girişi</a>
              </p>

            </div>


          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Hoşgeldiniz!</h1>
              <p>Bizimle bağlantıda kalmak için lütfen kişisel bilgilerinizle girin.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
}