import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Profile from './components/Profile';
import Chats from './components/Chats';
import Home from './components/Home';
import Header from './components/Header';
  

function App() {
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
