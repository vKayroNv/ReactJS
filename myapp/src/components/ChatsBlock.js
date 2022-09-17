import { Button, List, ListItem } from '@mui/material';
import ChatElement from './ChatElement';

import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getChats } from '../store/selectors';
import { addChatAsync } from '../services/repos/chats';
import { auth } from '../services/firebase';
import {  useCallback } from 'react';

export default function ChatsBlock(){

  const dispatch = useDispatch();
  const { chats, error, loading } = useSelector(getChats, shallowEqual);

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
  }

  const renderChatElement = useCallback((chat) => {
    return <ChatElement key={chat.id} chatId={chat.id} name={chat.userDisplayName} />;
  })


  if (error) {
    alert(error);
  }

  return(
    <>
      <Button fullWidth color="inherit" size="large" onClick={createChat}>Добавить чат</Button>
      <List>
      {
        loading ? 
          <ListItem><h3>Загрузка...</h3></ListItem> :
          chats.map(renderChatElement)
      }
      </List>
    </>
  );
}