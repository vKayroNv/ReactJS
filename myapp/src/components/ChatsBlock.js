import { Button, List } from '@mui/material';
import ChatElement from './ChatElement';

import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getChats } from '../store/selectors';
import { addChatAsync, getChatsAsync } from '../services/repos/chats';
import { auth } from '../services/firebase';
import Loading from './pages/Loading'
import {  useCallback, useEffect } from 'react';

export default function ChatsBlock(){

  const dispatch = useDispatch();
  const { chats, loading, error } = useSelector(getChats, shallowEqual);
  const messages = useSelector(getChats, shallowEqual);

  const createChat = () => {
    const uid = prompt("Введите uid пользователя");

    if (!uid) {
      alert("uid не был введен");
      return;
    }

    if (uid === auth.currentUser.uid) {
      alert("Нельзя вводить свой uid");
    }

    dispatch(addChatAsync(uid));
    dispatch(getChatsAsync());
  }

  useEffect(()=>{
    dispatch(getChatsAsync());
  }, []);

  const renderChatElement = useCallback((chat) => {
    return <ChatElement key={chat.id} chatId={chat.id} name={chat.userDisplayName} />;
  })

  if (loading) {
    return  <Loading /> ;
  }

  if (error) {
    alert(error);
  }

  return(
    <>
      <Button fullWidth color="inherit" size="large" onClick={createChat}>Добавить чат</Button>
      <List>
        {chats.map(renderChatElement)}
      </List>
    </>
  );
}