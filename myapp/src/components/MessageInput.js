import { useState} from 'react';
import { Button, TextField, Container } from '@mui/material';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { addMessage } from '../store/messagesActions';
import { useParams } from 'react-router-dom';
import { getAnswerphone, getChats } from '../store/selectors';
import { addMessageThunk } from '../store/thunks';

export default function MessageInput() {

  const dispatch = useDispatch();
  const [messageText, setMessageText] = useState('');
  const { chatId } = useParams();
  const chats = useSelector(getChats, shallowEqual);
  const answerphone = useSelector(getAnswerphone, shallowEqual);

  const disableInput = chatId === undefined || !chats.some(obj => obj.id === chatId) ? true : false;

  const sendMessage = () => dispatch => { // правильно ли я понимаю, что на этом все готово?
    dispatch(addMessage({
      chatId: chatId,
      fromMe: true,
      message: messageText
    }));

    if (answerphone)
      dispatch(addMessageThunk({chatId}));
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