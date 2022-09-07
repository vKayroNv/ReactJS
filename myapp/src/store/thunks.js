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

export const URL_GISTS_PUBLIC = "https://api.github.com/gists/public";

export const getAllGists = createAsyncThunk(
  "getAllGists",
  async function() {
    const response = await fetch(URL_GISTS_PUBLIC);
    try {
      if (!response.ok){
        throw new Error(`Request failed (status code ${response.status})`);
      }

      return response.json();
    }
    finally {
      
    }
  }
);