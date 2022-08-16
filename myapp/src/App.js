import './App.css';
import {useState, useEffect} from 'react';
import Message from './Message';
import { MessageInput } from './MessageInput';

function App() {

  const [messagesList, setMessagesList] = useState([{}]);
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
      <div className='messages-area'>
        {messagesList.map(({author, messageText}, index) => <Message key={index} author={author} messageText={messageText}/>)}
      </div>
      <MessageInput onChangeMessage={newMessage}/>
    </>
  );
}

export default App;
