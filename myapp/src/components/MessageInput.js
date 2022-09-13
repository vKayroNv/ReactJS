import { useState } from 'react';
import { Button, TextField, Container } from '@mui/material';
import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';
import { addMessageAsync, getMessagesAsync } from '../services/repos/messages'

export default function MessageInput() {

  const dispatch = useDispatch();
  const [messageText, setMessageText] = useState('');
  const { chatId } = useParams();

  const disableInput = !chatId;

  return (
      <Container>
        <TextField disabled={disableInput} fullWidth label="Сообщение" variant="filled" value={messageText} onChange={event => setMessageText(event.target.value)} inputProps={{style: {color: "white"}}} />
        <Button disabled={disableInput} fullWidth variant="contained" onClick={() => { 
            if (messageText) {
                dispatch(addMessageAsync({
                  chatId: chatId,
                  message: messageText
                }));
                setMessageText('');
                dispatch(getMessagesAsync(chatId));
            }
        }}>Отправить</Button>
      </Container>
  );
}