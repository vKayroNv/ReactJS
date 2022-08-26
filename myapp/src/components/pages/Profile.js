import { useState } from 'react';
import { Button, TextField, Container } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux'
import { changeUsername } from '../../store/usernameActions';

export default function Profile() {

  const username = useSelector((state) => state.username.value)
  const dispatch = useDispatch()

  const [tempUsername, setTempUsername] = useState(username);

  const tempChangeUsername = input => {
    setTempUsername(input);
  }

  return(
    <>
      <br/>
      <Container>
        <TextField autoFocus fullWidth label="Ваше имя" variant="filled" value={tempUsername} onChange={event => tempChangeUsername(event.target.value)}/>
        <Button fullWidth variant="contained" onClick={() => { 
          dispatch(changeUsername(tempUsername));
          alert('Имя изменено');
        }}>Изменить</Button>
      </Container>
    </>
  );
}