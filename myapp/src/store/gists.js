import { createAsyncThunk } from "@reduxjs/toolkit";

const URL_GISTS_PUBLIC = "https://api.github.com/gists/public";

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