import {useState, useEffect} from 'react';
import { MessageInput } from './MessageInput';
import { Grid } from '@mui/material';
import ChatsBlock from './ChatsBlock';
import MessagesBlock from './MessagesBlock';
import { useParams } from 'react-router-dom';

export default function Chats(props){

  const [chatsList, setChatsList] = useState(props.chatsList);
  const { chatId } = useParams();

  const [messagesList, setMessagesList] = useState([]);
  const botName = 'bot';

  const newMessage = (input) => {
    setMessagesList(messagesList => { return [...messagesList, {author: props.username, messageText: input}]})
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

  return(
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <ChatsBlock chatsList={chatsList}/>
      </Grid>
      <Grid item xs={9}>
        {
          chatId === undefined || chatId > props.chatsList.length - 1 ?
            <MessagesBlock /> :
            <MessagesBlock messagesList={props.chatsList[chatId].messagesList}/>
        }
      </Grid>
      <Grid item xs={12}>
        <MessageInput onChangeMessage={newMessage}/>
      </Grid>
    </Grid>
  );
}