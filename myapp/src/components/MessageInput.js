import { useState} from 'react';
import { Button, TextField, Container } from '@mui/material';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { addMessage } from '../store/chatsActions';
import { useParams } from 'react-router-dom';
import { getAnswerphone, getChatsCount } from '../store/selectors';

export default function MessageInput() {

  const dispatch = useDispatch();
  const [messageText, setMessageText] = useState('');
  const { chatId } = useParams();
  const chatsCount = useSelector(getChatsCount, shallowEqual);
  const answerphone = useSelector(getAnswerphone, shallowEqual);

  const disableInput = chatId === undefined || chatId > chatsCount - 1 ? true : false;

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