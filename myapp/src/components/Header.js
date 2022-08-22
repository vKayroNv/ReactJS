import * as React from 'react';
import {AppBar,Button,Toolbar,Typography} from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <AppBar position="relative">
        <Toolbar>
          <Typography variant="h4" margin="0px 30px">myapp</Typography>
          <Button color="inherit" to="/" component={Link}>Главная</Button>
          <Button color="inherit" to="/profile" component={Link}>Профиль</Button>
          <Button color="inherit" to="/chats" component={Link}>Чаты</Button>
        </Toolbar>
    </AppBar>
  );
};