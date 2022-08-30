import { useParams } from 'react-router-dom';
import { List } from '@mui/material';
import { useSelector } from 'react-redux'

import Message from './Message'

export default function MessagesBlock() {

  const { chatId } = useParams();
  const chats = useSelector((state) => state.chats.value);
  const username = useSelector((state) => state.username.value);

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