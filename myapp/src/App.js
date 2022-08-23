import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Profile from './components/Profile';
import Chats from './components/Chats';
import Home from './components/Home';
import Header from './components/Header';
import { useState } from 'react';
  
const initialChats = [
  {
    username: "user1",
    messagesList: [
      {
        username: "bot",
        messageText: "Hello"
      }
    ]
  },
  {
    username: "user2",
    messagesList: [
      {
        username: "user2",
        messageText: "Hello"
      }
    ]
  }
];

function App() {

  const [username, setUsername] = useState('testuser');
  const [chatsList, setChatsList] = useState(initialChats);

  const changeUsername = input => {
    setUsername(input);
  };

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile username={username} onChangeUsername={changeUsername} />}/>
          <Route path="/chats" element={<Chats username={username} chatsList={chatsList} />}/>
          <Route path="/chats/:chatId" element={<Chats username={username} chatsList={chatsList}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
