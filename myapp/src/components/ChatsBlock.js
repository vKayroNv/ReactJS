import { Button, List } from '@mui/material';
import ChatElement from './ChatElement';

import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { addChat } from '../store/chatsActions';
import { getChatsNames } from '../store/selectors';

export default function ChatsBlock(){

  const dispatch = useDispatch();
  const chatsNames = useSelector(getChatsNames, shallowEqual);

  const createChat = () => {
    const name = prompt("Введите название чата");

    if (name === undefined || name === '') {
      alert("Название чата не было введено");
      return;
    }

    dispatch(addChat(name));
  }

  return(
    <>
      <Button fullWidth color="inherit" size="large" onClick={createChat}>Добавить чат</Button>
      <List>
        {chatsNames.map((value, index) => <ChatElement key={index} chatId={index} name={value} />)}
      </List>
    </>
  );
}