import './App.css';
import Message from './Message';

function App(props) {
  return (
    <Message message={props.message} />
  );
}

export default App;
