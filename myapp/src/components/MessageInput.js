import { useState} from 'react';
import { Button, TextField, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { addMessage } from '../store/chatsActions';
import { useParams } from 'react-router-dom';

export default function MessageInput() {

  const dispatch = useDispatch();
  const [messageText, setMessageText] = useState('');
  const { chatId } = useParams();
  const chatCount = useSelector((state) => state.chats.value.length);
  const answerphone = useSelector((state) => state.answerphone.value);

  const disableInput = chatId === undefined || chatId > chatCount - 1 ? true : false;

  const sendMessage = () => {
    dispatch(addMessage({
      index: chatId,
      message: {
        fromMe: true,
        messageText: messageText
      }
    }));

    if (answerphone)
      setTimeout(() => {
        dispatch(addMessage({
          index: chatId,
          message: {
            fromMe: false,
            messageText: "Hello!"
          }
        }));
      }, 2000);
  }

  return (
      <Container>
        <TextField disabled={disableInput} fullWidth label="Сообщение" variant="filled" value={messageText} onChange={event => setMessageText(event.target.value)} inputProps={{style: {color: "white"}}} />
        <Button disabled={disableInput} fullWidth variant="contained" onClick={() => { 
            if (messageText) {
                sendMessage();
                setMessageText('');
            }
        }}>Отправить</Button>
      </Container>
  );
}