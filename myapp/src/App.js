import './App.css';
import {useState, useEffect} from 'react';

function App() {

  const [messagesList, setMessagesList] = useState([{}]);
  const botName = 'bot';

  const newMessage = (input) => {
    setMessagesList(messagesList => { return [...messagesList,input]})
  }

  useEffect(()=>{
    const lastMessage = messagesList[messagesList.length - 1];

    if (lastMessage.author && lastMessage.author !== botName) {
        setTimeout(()=>setMessagesList(messages => {
          return [...messages, {author: botName, messageText: `Здравствуйте, ${lastMessage.author}!`}]
      }), 2000)
    }
  },[messagesList])

  const MessageInput = props => {
    const [messageText, setMessageText] = useState('');
    const [author, setAuthor] = useState('');

    return (
      <div className='input-area'>
        <input type="text" autoFocus placeholder="Имя" value={author} onChange={event => setAuthor(event.target.value)}/>
        <input type="text" placeholder="Сообщение" value={messageText} onChange={event => setMessageText(event.target.value)}/>
        <button onClick={() => { if (author && messageText) props.onChangeMessage({ author: author, messageText: messageText }) }}>Отправить</button>
      </div>
    );
  }

  function Message({author, messageText}) {
    if (author && messageText)
      return (
        <p>{author}: {messageText}</p>
      )
  }

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
