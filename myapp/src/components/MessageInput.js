import {useState} from 'react';
import { Button, TextField, Container, createTheme, ThemeProvider } from '@mui/material';

export const MessageInput = props => {
    const [messageText, setMessageText] = useState('');

    const theme = createTheme({
      palette: {
        primary: {
          main: "#FFFFFF"
        }
      },
    });

    return (
        <Container>
          <ThemeProvider theme={theme}>
            <TextField disabled fullWidth label="Сообщение" variant="filled" value={messageText} onChange={event => setMessageText(event.target.value)}/>
            <Button disabled fullWidth variant="contained" onClick={() => { 
                if (messageText) {
                    props.onChangeMessage(messageText);
                    setMessageText('');
                }
            }}>Отправить</Button>
          </ThemeProvider>
        </Container>
    );
}