import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
  name: "timer",
  initialState: {
    time: 0,
    // to retain the initial value on reset button click
    initialTime: 0,
    isPaused: true,
    isPlaying: false,
    isHalfWay: false,
    isFinished: false,
    speed: 1,
  },
  reducers: {
    setTime: (state, { payload }) => {
      state.time = payload;
    },
    setInitialTime: (state, { payload }) => {
      state.initialTime = payload;
    },
    setIsHalfWay: (state, { payload }) => {
      state.isHalfWay = payload;
    },
    setIsFinished: (state, { payload }) => {
      state.isFinished = payload
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


export const { setTime, setPaused, setPlaying, setSpeed, setInitialTime, setIsHalfWay, setIsFinished } = timerSlice.actions;
export const getTime = state => state.timer.time;
export const getInitialTime = state => state.timer.initialTime;
export const getIsHalfWay = state => state.timer.isHalfWay;
export const getIsFinished = state => state.timer.isFinished;
export const getIsPaused = state => state.timer.isPaused;
export const getIsPlaying = state => state.timer.isPlaying;
export const getSpeed = state => state.timer.speed;

export default timerSlice.reducer;
