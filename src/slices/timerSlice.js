import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
  name: "timer",
  initialState: {
    time: 0,
    isPaused: true,
    isPlaying: false,
    speed: 1,
  },
  reducers: {
    setTime: (state, { payload }) => {
      state.time = payload;
    },
    setPaused: (state, { payload }) => {
      if (payload) {
        state.isPaused = payload;
      } else {
        state.isPaused = !state.isPaused;
      }
    },
    setPlaying: (state, { payload }) => {
      if (payload) {
        state.isPlaying = payload;
      } else {
        state.isPlaying = !state.isPlaying;
      }
    },
    setSpeed: (state, { payload }) => {
      state.speed = payload;
    },
  },
});

export const { setTime, setPaused, setPlaying, setSpeed } = timerSlice.actions;
export const time = state => state.time;
export const isPaused = state => state.isPaused;
export const isPlaying = state => state.isPlaying;
export const speed = state => state.speed;

export default timerSlice.reducer;
