import './App.css';
import {useState, useEffect} from 'react';
import Message from './Message';
import { MessageInput } from './MessageInput';
import { Grid, List, ListItem } from '@mui/material';

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
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <List>
            <ListItem>Тест1</ListItem>
            <ListItem>Тест2</ListItem>
          </List>
        </Grid>
        <Grid item xs={9}>
          <List>
            {messagesList.map(({author, messageText}, index) => <Message key={index} author={author} messageText={messageText}/>)}
          </List>
        </Grid>
        <Grid item xs={12}>
          <MessageInput onChangeMessage={newMessage}/>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
