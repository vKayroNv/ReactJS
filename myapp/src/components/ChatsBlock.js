import { Button, List } from '@mui/material';
import ChatElement from './ChatElement';

import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { addChat } from '../store/chatsActions';
import { getChats } from '../store/selectors';

export default function ChatsBlock(){

  const dispatch = useDispatch();
  const chats = useSelector(getChats, shallowEqual);

  const createChat = () => {
    const name = prompt("Введите название чата");

    if (!name) {
      alert("Название чата не было введено");
      return;
    }

    dispatch(addChat(name));
  }

  return(
    <>
      <Button fullWidth color="inherit" size="large" onClick={createChat}>Добавить чат</Button>
      <List>
        {chats.map((value, index) => <ChatElement key={index} chatId={value.id} name={value.username} />)}
      </List>
    </>
  );
}