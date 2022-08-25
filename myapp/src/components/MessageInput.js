import {useState} from 'react';
import { Button, TextField, Container, createTheme, ThemeProvider } from '@mui/material';

export default function MessageInput(props) {
  const [messageText, setMessageText] = useState('');

  return (
      <Container>
        <TextField disabled fullWidth label="Сообщение" variant="filled" value={messageText} onChange={event => setMessageText(event.target.value)}/>
        <Button disabled fullWidth variant="contained" onClick={() => { 
            if (messageText) {
                props.onChangeMessage(messageText);
                setMessageText('');
            }
        }}>Отправить</Button>
      </Container>
  );
}