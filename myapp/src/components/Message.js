import { ListItem } from "@mui/material";

export default function Message(props) {
    if (props.author && props.messageText)
      return (
        <ListItem>{props.author}: {props.messageText}</ListItem>
      )
}