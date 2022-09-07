import { addMessage } from "./messagesActions";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addMessageThunk = createAsyncThunk(
  "addMessageThunk",
  (args, {dispatch}) => {
    const {chatId} = args;

    setTimeout(() => {
    dispatch(addMessage({
      chatId: chatId,
      fromMe: false,
      message: "Hello!"
    }))
    }, 2000);

    return args;
  }
)