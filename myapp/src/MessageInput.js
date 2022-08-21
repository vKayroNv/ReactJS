import {useState} from 'react';

export const MessageInput = props => {
    const [messageText, setMessageText] = useState('');
    const [author, setAuthor] = useState('');

    return (
        <div className='input-area'>
            <input type="text" autoFocus placeholder="Имя" value={author} onChange={event => setAuthor(event.target.value)}/>
            <input type="text" placeholder="Сообщение" value={messageText} onChange={event => setMessageText(event.target.value)}/>
            <button onClick={() => { 
                if (author && messageText) {
                    props.onChangeMessage({ author: author, messageText: messageText });
                    setAuthor('');
                    setMessageText('');
                }
            }}>Отправить</button>
        </div>
    );
}