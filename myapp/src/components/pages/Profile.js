import { useState } from 'react';
import { Button, TextField, Container } from '@mui/material';

export default function Profile(props) {

  const [username, setUsername] = useState(props.username);

  const changeUsername = input => {
    setUsername(input);
  }

  return(
    <>
      <br/>
      <Container>
        <TextField autoFocus fullWidth label="Ваше имя" variant="filled" value={username} onChange={event => changeUsername(event.target.value)}/>
        <Button fullWidth variant="contained" onClick={() => { 
          props.onChangeUsername(username);
          alert('Имя изменено');
        }}>Изменить</Button>
      </Container>
    </>
  );
}