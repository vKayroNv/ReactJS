import { Button, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';

export default function ChatElement(props) {
  return(
    <ListItem>
      <Button fullWidth variant="outlined" color="inherit" component={Link} to={`/chats/${props.chatId}`}>
        {props.name}
      </Button>
      {/* <Button variant="contained" color="error" style={{maxWidth: '36.5px', minWidth: '36.5px'}}>
        <ClearIcon/>
      </Button> */}
    </ListItem>
  )
}