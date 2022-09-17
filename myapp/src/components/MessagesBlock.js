import { useParams } from 'react-router-dom';
import { List, ListItem } from '@mui/material';
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import Message from './Message'
import { getChats, getMessages } from '../store/selectors';
import { useEffect } from 'react';
import { getMessagesAsync } from '../services/repos/messages';

export default function MessagesBlock() {

  const dispatch = useDispatch();
  const { chatId } = useParams();
  const { messages, error, loading } = useSelector(getMessages, shallowEqual);
  const { chats } = useSelector(getChats, shallowEqual);

  useEffect(() =>{
    dispatch(getMessagesAsync(chatId));
  }, [chats])

  if (!chatId)
    return <List><ListItem>Выберите чат</ListItem></List>
    
  if (loading)
    return <List><ListItem><h3>Загрузка...</h3></ListItem></List>

  if (error) {
    alert(error);
  }

  return(
    <List>
      {messages.map((message, index) => (
        <Message key={index} author={message.displayName} messageText={message.message}/>))}
    </List>
  );
}