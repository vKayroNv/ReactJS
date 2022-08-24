import {useState, useEffect} from 'react';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

import MessageInput from '../MessageInput';
import ChatsBlock from '../ChatsBlock';
import MessagesBlock from '../MessagesBlock';

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
      <>
        <div className='middle-block'>
          <div className='chats-block'>
            <ChatsBlock chatsList={chatsList}/>
          </div>
          <div className='messages-block'>
            {
              chatId === undefined || chatId > props.chatsList.length - 1 ?
                <MessagesBlock /> :
                <MessagesBlock messagesList={props.chatsList[chatId].messagesList}/>
            }
          </div>
        </div>
        <div className='message-input'>
          <MessageInput onChangeMessage={newMessage}/>
        </div>
      </>
  );
}