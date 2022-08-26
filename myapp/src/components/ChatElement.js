import { ListItemButton, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';

export default function ChatElement(props) {
  return(
    <ListItem disablePadding>
      <ListItemButton component={Link} to={`/chats/${props.chatId}`} style={{width: "inherit"}}>
        {props.name}
      </ListItemButton>
      <ListItemButton >
        <ClearIcon />
      </ListItemButton>
    </ListItem>
  )
}