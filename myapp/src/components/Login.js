import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { loginAsync } from "../services/repos/auth";
import { getFirebaseApp } from "../store/selectors";
import Loading from './pages/Loading'
import { clearState } from "../store/firebaseActions";

export default function Login() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(getFirebaseApp, shallowEqual);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function login() {
    if (!email || !password)
      return;

    dispatch(loginAsync({email, password}));
  }

  if (loading) {
    return  <Loading /> ;
  }

  if (error) {
    alert(error);
    dispatch(clearState());
  }

  return(
    <>
      <TextField label="Email" variant="filled" id="myapp-email" fullWidth inputProps={{style: {color: "white"}}} type="email" 
        value={email} onChange={(event) => setEmail(event.target.value)} />
      <TextField label="Пароль" variant="filled" id="myapp-password" fullWidth inputProps={{style: {color: "white"}}} type="password"
        value={password} onChange={(event) => setPassword(event.target.value)} />
      <Button fullWidth variant="contained" onClick={() => login()} >Войти</Button>
    </>
  )
}