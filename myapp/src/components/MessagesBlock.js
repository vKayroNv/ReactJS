import { List } from '@mui/material';
import Message from './Message'

export default function MessagesBlock(props){
  if (props.messagesList===undefined)
    return <List>Выберите чат</List>

  return(
    <List>
      {props.messagesList.map(({username, messageText}, index) => <Message key={index} author={username} messageText={messageText}/>)}
    </List>
  );
}