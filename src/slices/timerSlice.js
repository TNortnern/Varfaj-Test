import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
  name: "timer",
  initialState: {
    time: 0,
    // to retain the initial value on reset button click
    initialTime: 0,
    half: 0,
    isPlaying: false,
    isHalfWay: false,
    isFinished: false,
    // isModifying is the indicator to stop buttons from rerendering when resetting timer or changing speed
    // in order to change things within the interval, stopping the timer is required and some elements depend on playing to be true
    isModifying: false,
    speed: 1000,
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
    setHalf: (state, { payload }) => {
      state.half = payload;
    },
    setIsFinished: (state, { payload }) => {
      state.isFinished = payload
    },
    setIsModifying: (state, { payload }) => {
      state.isModifying = payload;
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


export const { setTime, setPlaying, setSpeed, setInitialTime, setIsHalfWay, setIsFinished, setIsModifying, setHalf } = timerSlice.actions;
export const getTime = state => state.timer.time;
export const getInitialTime = state => state.timer.initialTime;
export const getIsHalfWay = state => state.timer.isHalfWay;
export const getHalf = state => state.timer.half;
export const getIsFinished = state => state.timer.isFinished;
export const getIsPlaying = state => state.timer.isPlaying;
export const getSpeed = state => state.timer.speed;
export const getIsModifying = state => state.timer.isModifying;

export default timerSlice.reducer;
