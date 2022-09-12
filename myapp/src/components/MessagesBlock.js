import { useParams } from 'react-router-dom';
import { List } from '@mui/material';
import { useSelector, shallowEqual } from 'react-redux'

import Message from './Message'
import { getChats, getUsername, getMessagesByUserId } from '../store/selectors';

export default function MessagesBlock() {

  // const { chatId } = useParams();
  // const chats = useSelector(getChats, shallowEqual);
  // const username = useSelector(getUsername, shallowEqual);

  // const messages = useSelector((state) => getMessagesByUserId(state, chatId), shallowEqual);

  // if (chatId === undefined || !chats.some(obj => obj.id === chatId))
  //   return <List>Выберите чат</List>

  // return(
  //   <List>
  //     {messages.map(({fromMe, message}, index) => (
  //       fromMe ?
  //         <Message key={index} author={username} messageText={message}/> :
  //         <Message key={index} author={chats.filter(obj => obj.id === chatId)[0].username} messageText={message}/> 
  //     ))}
  //   </List>
  // );
}