import { useParams } from 'react-router-dom';
import { List } from '@mui/material';
import { useSelector } from 'react-redux'

import Message from './Message'

export default function MessagesBlock() {

  const { chatId } = useParams();
  const chats = useSelector((state) => state.chats.value);

  if (chatId === undefined || chatId > chats.length - 1)
    return <List>Выберите чат</List>

  return(
    <List>
      {chats[chatId].messagesList.map(({username, messageText}, index) => <Message key={index} author={username} messageText={messageText}/>)}
    </List>
  );
}