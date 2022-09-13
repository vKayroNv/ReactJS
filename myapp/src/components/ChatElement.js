import { ListItemButton, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch } from 'react-redux';
import { deleteChatAsync } from '../services/repos/chats';
import { getMessagesAsync } from '../services/repos/messages';

export default function ChatElement(props) {

  const dispatch = useDispatch();

  return(
    <ListItem disablePadding>
      <ListItemButton component={Link} to={`/chats/${props.chatId}`} style={{width: "inherit"}} onClick={() => {
        dispatch(getMessagesAsync(props.chatId));
      }}>
        {props.name}
      </ListItemButton>
      <ListItemButton component={Link} to={'/chats'} onClick={()=>{
        dispatch(deleteChatAsync(props.chatId));
      }}>
        <ClearIcon />
      </ListItemButton>
    </ListItem>
  )
}