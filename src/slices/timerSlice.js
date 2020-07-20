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

export const handleMinutes = minutes => (dispatch, getState) => {
  console.log('getState()', getState())
  // setTimeout(() => {
  //   dispatch(incrementByAmount(amount));
  // }, 1000);
};


export const { setTime, setPaused, setPlaying, setSpeed } = timerSlice.actions;
export const getTime = state => state.timer.time;
export const getIsPaused = state => state.timer.isPaused;
export const getIsPlaying = state => state.timer.isPlaying;
export const getSpeed = state => state.timer.speed;

export default timerSlice.reducer;
