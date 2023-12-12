import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
const initialState = {
  greeting: "",
  isLoading: true,
  error: null,
};
const url = "/api/greetings/random";
export const getGreetingsAsync = createAsyncThunk(
  "greetings/Async",
  async () => {
    try {
      const res = await axios.get(url);
      const { data } = res;
      return data;
    } catch (e) {
      return e.message;
    }
  }
);
const greetingSlice = createSlice({
  name: "greetings",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getGreetingsAsync.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getGreetingsAsync.fulfilled, (state, action) => ({
        ...state,
        greeting: action.payload,
        isLoading: false,
      }))
      .addCase(getGreetingsAsync.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message,
      }));
  },
});
export default greetingSlice.reducer;
