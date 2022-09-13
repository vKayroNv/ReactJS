import { useParams } from 'react-router-dom';
import { List, ListItem } from '@mui/material';
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import Message from './Message'
import { getMessages } from '../store/selectors';
import { useEffect } from 'react';
import { getMessagesAsync } from '../services/repos/messages';
import Loading from './pages/Loading'

export default function MessagesBlock() {

  const dispatch = useDispatch();
  const { chatId } = useParams();
  const { messages, loading, error } = useSelector(getMessages, shallowEqual);

  useEffect(() =>{
    dispatch(getMessagesAsync(chatId));
  }, [])

  if (chatId === undefined)
    return <List><ListItem>Выберите чат</ListItem></List>

  if (loading) {
    return  <Loading /> ;
  }

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