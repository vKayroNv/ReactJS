import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Profile from './components/pages/Profile';
import Chats from './components/pages/Chats';
import Home from './components/pages/Home';
import Header from './components/pages/Header';
import Gists from './components/pages/Gists';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/chats" element={<Chats />}/>
          <Route path="/chats/:chatId" element={<Chats />}/>
          <Route path="/gists" element={<Gists />}/>
          <Route path="/gists/:gistId" element={<Gists />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
