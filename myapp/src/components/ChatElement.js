import { ListItemButton, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch } from 'react-redux';
import { deleteChat } from '../store/chatsActions';
import { removeMessagesByUserId } from '../store/messagesActions';

export default function ChatElement(props) {

  const dispatch = useDispatch();

  return(
    <ListItem disablePadding>
      <ListItemButton component={Link} to={`/chats/${props.chatId}`} style={{width: "inherit"}}>
        {props.name}
      </ListItemButton>
      <ListItemButton component={Link} to={'/chats'} onClick={()=>{
        dispatch(deleteChat(props.chatId));
        dispatch(removeMessagesByUserId(props.chatId));
      }}>
        <ClearIcon />
      </ListItemButton>
    </ListItem>
  )
}