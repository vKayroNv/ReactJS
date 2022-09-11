import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header({authenticated}) {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h4" margin="0px 30px">myapp</Typography>
        <Button color="inherit" to="/" component={Link}>Главная</Button>
        {
          authenticated && 
            <>
              <Button color="inherit" to="/profile" component={Link}>Профиль</Button>
              <Button color="inherit" to="/chats" component={Link}>Чаты</Button>
            </>
        }
        <Button color="inherit" to="/gists" component={Link}>Gists</Button>
      </Toolbar>
    </AppBar>
  );
};