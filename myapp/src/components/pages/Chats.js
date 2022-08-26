import MessageInput from '../MessageInput';
import ChatsBlock from '../ChatsBlock';
import MessagesBlock from '../MessagesBlock';

export default function Chats() {
  return(
      <>
        <div className='middle-block'>
          <div className='chats-block'>
            <ChatsBlock />
          </div>
          <div className='messages-block'>
            <MessagesBlock />
          </div>
        </div>
        <div className='message-input'>
          <MessageInput />
        </div>
      </>
  );
}