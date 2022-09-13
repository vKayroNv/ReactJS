import './css/App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Profile from './components/pages/Profile';
import Chats from './components/pages/Chats';
import Home from './components/pages/Home';
import Header from './components/pages/Header';
import Gists from './components/pages/Gists';

import { auth } from './services/firebase'

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user)
        setAuthenticated(true);
      else
        setAuthenticated(false);
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header authenticated={authenticated}/>
        <Routes>
          <Route path="/" element={<Home authenticated={authenticated} />}/>
          {
            authenticated &&
            <>
              <Route path="/profile" element={<Profile />}/>
              <Route path="/chats" element={<Chats />}/>
              <Route path="/chats/:chatId" element={<Chats />}/>
            </>
          }
          <Route path="/gists" element={<Gists />}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
