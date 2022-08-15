import './Message.css';

function Message(props) {
  return (
    <div className="Message">
      <header className="Message-header">
        Тестовое сообщение: {props.message}
      </header>
    </div>
  );
}

export default Message;
