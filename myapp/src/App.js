import './css/App.css';
import {useState, useEffect} from 'react';
import Message from './components/Message';
import { MessageInput } from './components/MessageInput';
import { Grid, List, ListItem } from '@mui/material';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

import Profile from './components/Profile';
import Chats from './components/Chats';
import Home from './components/Home';
  

function App() {

  const [messagesList, setMessagesList] = useState([]);
  const botName = 'bot';

  const newMessage = (input) => {
    setMessagesList(messagesList => { return [...messagesList,input]})
  }

  useEffect(()=>{
    if (messagesList.length === 0)
      return;
    const lastMessage = messagesList[messagesList.length - 1];

    if (lastMessage.author && lastMessage.author !== botName) {
        setTimeout(()=>setMessagesList(messages => {
          return [...messages, {author: botName, messageText: `Здравствуйте, ${lastMessage.author}!`}]
      }), 2000)
    }
  },[messagesList])

  return (
    <>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">profile</Link>
          </li>
          <li>
            <Link to="/chats">chats</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/chats" element={<Chats />}/>
        </Routes>
      </BrowserRouter>
      {/*<Grid container spacing={2}>
        <Grid item xs={3}>
          <List>
            <ListItem>Тест1</ListItem>
            <ListItem>Тест2</ListItem>
          </List>
        </Grid>
        <Grid item xs={9}>
          <List>
            {messagesList.map(({author, messageText}, index) => <Message key={index} author={author} messageText={messageText}/>)}
          </List>
        </Grid>
        <Grid item xs={12}>
          <MessageInput onChangeMessage={newMessage}/>
        </Grid>
      </Grid>*/}
    </>
  );
}

export default App;
