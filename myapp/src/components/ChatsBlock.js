import { List } from '@mui/material';
import ChatElement from './ChatElement';

import { useSelector } from 'react-redux'

export default function ChatsBlock(){

  const chatsNames = useSelector((state) => state.chats.value.map(obj => obj.username));

  return(
    <List>
      {chatsNames.map((value, index) => <ChatElement key={index} chatId={index} name={value} />)}
    </List>  
  );
}