import { List } from '@mui/material';
import ChatElement from './ChatElement';

export default function ChatsBlock({chatsList}){
  return(
    <List>
      {chatsList.map(({username}, index) => <ChatElement key={index} chatId={index} name={username} />)}
    </List>  
  );
}