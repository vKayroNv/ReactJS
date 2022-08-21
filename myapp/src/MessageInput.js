import {useState} from 'react';
import { Button, TextField, Container } from '@mui/material';

export const MessageInput = props => {
    const [messageText, setMessageText] = useState('');
    const [author, setAuthor] = useState('');

    return (
        <Container>
            <TextField autoFocus fullWidth label="Имя" variant="filled" value={author} onChange={event => setAuthor(event.target.value)}/>
            <TextField fullWidth label="Сообщение" variant="filled" value={messageText} onChange={event => setMessageText(event.target.value)}/>
            <Button fullWidth variant="contained" onClick={() => { 
                if (author && messageText) {
                    props.onChangeMessage({ author: author, messageText: messageText });
                    setAuthor('');
                    setMessageText('');
                }
            }}>Отправить</Button>
        </Container>
    );
}