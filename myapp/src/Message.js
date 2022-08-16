export default function Message(props) {
    if (props.author && props.messageText)
      return (
        <p>{props.author}: {props.messageText}</p>
      )
  }