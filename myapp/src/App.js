import './css/App.css';
import {useState, useEffect} from 'react';
import Message from './components/Message';
import { MessageInput } from './components/MessageInput';
import { Grid, List, ListItem } from '@mui/material';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

import Profile from './components/Profile';
import Chats from './components/Chats';
import Home from './components/Home';
import Header from './components/Header';
  

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
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/chats" element={<Chats />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
