import {useState} from 'react';
import { Button, TextField, Container, createTheme, ThemeProvider } from '@mui/material';

export const MessageInput = props => {
    const [messageText, setMessageText] = useState('');
    const [author, setAuthor] = useState('');

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
            <TextField autoFocus fullWidth label="Имя" variant="filled" value={author} onChange={event => setAuthor(event.target.value)}/>
            <TextField fullWidth label="Сообщение" variant="filled" value={messageText} onChange={event => setMessageText(event.target.value)}/>
            <Button fullWidth variant="contained" onClick={() => { 
                if (author && messageText) {
                    props.onChangeMessage({ author: author, messageText: messageText });
                    setAuthor('');
                    setMessageText('');
                }
            }}>Отправить</Button>
          </ThemeProvider>
        </Container>
    );
}