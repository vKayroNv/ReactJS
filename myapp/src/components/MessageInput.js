import { useState} from 'react';
import { Button, TextField, Container } from '@mui/material';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { addMessage } from '../store/messagesActions';
import { useParams } from 'react-router-dom';
import { getChats } from '../store/selectors';
import { addMessageThunk } from '../store/thunks';

export default function MessageInput() {

  const dispatch = useDispatch();
  const [messageText, setMessageText] = useState('');
  const { chatId } = useParams();
  const chats = useSelector(getChats, shallowEqual);

  const disableInput = chatId === undefined || !chats.some(obj => obj.id === chatId) ? true : false;

  const sendMessage = () => dispatch => {
    dispatch(addMessage({
      chatId: chatId,
      fromMe: true,
      message: messageText
    }));
  }

  return (
      <Container>
        <TextField disabled={disableInput} fullWidth label="Сообщение" variant="filled" value={messageText} onChange={event => setMessageText(event.target.value)} inputProps={{style: {color: "white"}}} />
        <Button disabled={disableInput} fullWidth variant="contained" onClick={() => { 
            if (messageText) {
                dispatch(sendMessage());
                setMessageText('');
            }
        }}>Отправить</Button>
      </Container>
  );
}