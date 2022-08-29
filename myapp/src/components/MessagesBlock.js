import { useParams } from 'react-router-dom';
import { List } from '@mui/material';
import { useSelector, shallowEqual } from 'react-redux'

import Message from './Message'
import { getChats, getUsername } from '../store/selectors';

export default function MessagesBlock() {

  const { chatId } = useParams();
  const chats = useSelector(getChats, shallowEqual);
  const username = useSelector(getUsername, shallowEqual);

  if (chatId === undefined || chatId > chats.length - 1)
    return <List>Выберите чат</List>

  const currentChat = chats[chatId];

  return(
    <List>
      {currentChat.messagesList.map(({fromMe, messageText}, index) => (
        fromMe ?
          <Message key={index} author={username} messageText={messageText}/> :
          <Message key={index} author={currentChat.username} messageText={messageText}/> 
      ))}
    </List>
  );
}