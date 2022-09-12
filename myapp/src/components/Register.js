import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { registerAsync } from "../services/repos/auth";
import { getFirebaseApp } from "../store/selectors";
import Loading from './pages/Loading'

export default function Register() {

  const dispatch = useDispatch();
  const { loading, error } = useSelector(getFirebaseApp, shallowEqual);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  
  function register() {
    if (password !== passwordRepeat) {
      alert('Пароли не совпадают');
      return;
    }

    dispatch(registerAsync({email, password}));
  }

  if (loading) {
    return  <Loading /> ;
  }

  if (error) {
    alert(error);
  }

  return(
    <>
      <TextField label="Email" variant="filled" id="myapp-email" fullWidth inputProps={{style: {color: "white"}}} type="email" 
        value={email} onChange={event => setEmail(event.target.value)} />
      <TextField label="Пароль" variant="filled" id="myapp-password" fullWidth inputProps={{style: {color: "white"}}} type="password" 
        value={password} onChange={event => setPassword(event.target.value)} />
      <TextField label="Повторите пароль" variant="filled" id="myapp-password-repeat" fullWidth inputProps={{style: {color: "white"}}} type="password" 
        value={passwordRepeat} onChange={event => setPasswordRepeat(event.target.value)} />
      <Button fullWidth variant="contained" onClick={()=>register()} >Зарегистрироваться</Button>
    </>
  )
}