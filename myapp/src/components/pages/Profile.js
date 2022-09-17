import { useEffect, useState } from 'react';
import { Button, TextField, Container } from '@mui/material';

import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { changeDisplayNameAsync, changePasswordAsync, getDisplayNameAsync } from '../../services/repos/profile';
import { logoutAsync } from '../../services/repos/auth';
import { getProfile } from "../../store/selectors";
import Loading from './Loading'
import { clearProfile } from '../../store/profileActions';
import { clearChats } from '../../store/chatsActions';
import { clearMessages } from '../../store/messagesActions';

export default function Profile() {

  const dispatch = useDispatch();
  const { uid, displayName, loading, error } = useSelector(getProfile, shallowEqual);

  const [newDisplayName, setNewDisplayName] = useState(displayName);
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordRepeat, setNewPasswordRepeat] = useState('');

  function changePassword() {
    if (newPassword !== newPasswordRepeat) {
      alert('Пароли не совпадают');
      return;
    }

    dispatch(changePasswordAsync(newPassword));
  }

  function changeDisplayName() {
    dispatch(changeDisplayNameAsync(newDisplayName));
  }

  useEffect(() => {
    dispatch(getDisplayNameAsync());
    setNewDisplayName(displayName);
  }, [displayName])

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
        <p>Идентификатор: {uid}</p>
        <Button fullWidth variant="contained" onClick={() => { 
          dispatch(logoutAsync());
          dispatch(clearProfile());
          dispatch(clearChats());
          dispatch(clearMessages());
        }}>Выйти из аккаунта</Button>
        
        <p>Отображаемое имя</p>
        <TextField fullWidth label="Имя" variant="filled" inputProps={{style: {color: "white"}}}
          value={newDisplayName || ''} onChange={event => setNewDisplayName(event.target.value)} />
        <Button fullWidth variant="contained" onClick={() => { 
          changeDisplayName();
        }}>Сохранить</Button>
        
        <p>Сменить пароль</p>
        <TextField fullWidth label="Новый пароль" variant="filled" inputProps={{style: {color: "white"}}} type="password"
          value={newPassword} onChange={event => setNewPassword(event.target.value)} />
        <TextField fullWidth label="Новый пароль еще раз" variant="filled" inputProps={{style: {color: "white"}}} type="password"
          value={newPasswordRepeat} onChange={event => setNewPasswordRepeat(event.target.value)} />
        <Button fullWidth variant="contained" onClick={() => { 
          changePassword();
        }}>Изменить пароль</Button>
      </Container>
    </>
  );
}