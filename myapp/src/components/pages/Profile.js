import { useState } from 'react';
import { Button, TextField, Container } from '@mui/material';

import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { changePasswordAsync, logoutAsync } from '../../services/firebase';
import { getFirebaseApp } from "../../store/selectors";
import Loading from './Loading'

export default function Profile() {

  const dispatch = useDispatch();
  const { loading, error } = useSelector(getFirebaseApp, shallowEqual);

  const [newPassword, setNewPassword] = useState('');
  const [newPasswordRepeat, setNewPasswordRepeat] = useState('');

  function changePassword() {
    if (newPassword !== newPasswordRepeat) {
      alert('Пароли не совпадают');
      return;
    }

    dispatch(changePasswordAsync(newPassword));
  }

  if (loading) {
    return  <Loading /> ;
  }

  if (error) {
    alert(error);
  }

  return(
    <>
      <br/>
      <Container>
        <Button fullWidth variant="contained" onClick={() => { 
          dispatch(logoutAsync());
        }}>Выйти из аккаунта</Button>
        <p>Сменить пароль</p>
        <TextField fullWidth label="Новый пароль" variant="filled" inputProps={{style: {color: "white"}}} type="password"
          value={newPassword} onChange={event => setNewPassword(event.target.value)} />
        <TextField fullWidth label="Новый пароль еще раз" variant="filled" inputProps={{style: {color: "white"}}} type="password"
          value={newPasswordRepeat} onChange={event => setNewPasswordRepeat(event.target.value)} />
        <Button fullWidth variant="contained" onClick={() => { 
          changePassword();
        }}>Сохранить</Button>
      </Container>
    </>
  );
}