/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setPlaying,
  setTime,
  setIsHalfWay,
  getIsHalfWay,
  getIsPlaying,
  getTime,
  getInitialTime,
  setIsFinished,
  getIsFinished,
  getIsModifying,
  getSpeed,
  getHalf,
} from "../slices/timerSlice";
import TimerControls from "./TimerControls";
import Message from "./Message";
import TimeItem from "./TimeItem";

const Timer = () => {
  const dispatch = useDispatch();
  let time = useSelector(getTime);
  const isPlaying = useSelector(getIsPlaying);
  const initialTime = useSelector(getInitialTime);
  const isHalfWay = useSelector(getIsHalfWay);
  const half = useSelector(getHalf);
  const isFinished = useSelector(getIsFinished);
  const isModifying = useSelector(getIsModifying);
  const speed = useSelector(getSpeed);
  const handleAction = () => {
    dispatch(setPlaying(!isPlaying));
  };
  const belowHandlers = () => {
    let classes;
    const isBelow20 = time < 20 ? "text-red-600" : "";
    const isBelow11 = time < 11 ? "blink-text" : "";
    classes = `${isBelow11} ${isBelow20}`;
    if (isPlaying) return classes;
  };
  useEffect(() => {
    let countInterval;
    if (isPlaying && time > 0) {
      countInterval = setInterval(() => {
        if (time !== -1) dispatch(setTime(time--));
        // probably could use local state to handle if time is equal to the halfway point
        if (time === half - 1) dispatch(setIsHalfWay(true));
        // when counter has reached 0
        if (time < 0) {
          clearInterval(countInterval);
          handleAction();
          dispatch(setIsHalfWay(false));
          dispatch(setIsFinished(true));
        }
      }, speed);
    } else {
      clearInterval(countInterval);
    }
    return () => clearInterval(countInterval);
  }, [isPlaying]);
  const handleMinutes = () => {
    let resolveMinutes = Math.floor(time / 60);
    if (resolveMinutes < 10) {
      // convert to string so that it ignores math and just appends the 0
      resolveMinutes = 0 + resolveMinutes.toString();
    }
    return resolveMinutes;
  };
  const handleSeconds = () => {
    let resolveSeconds = time % 60;
    if (resolveSeconds < 10) {
      resolveSeconds = 0 + resolveSeconds.toString();
    }
    return resolveSeconds;
  };
  const closeMessage = () => {
    dispatch(setIsHalfWay(false));
    dispatch(setIsFinished(false));
  };
  return (
    <div>
      <Message
        isFinished={isFinished}
        isHalfWay={isHalfWay}
        closeMessage={closeMessage}
      />
      <div
        className={`text-5xl font-bold mt-2 mb-5 text-timer-text ${belowHandlers()} flex justify-center`}
      >
        <TimeItem time="Minutes" value={handleMinutes()} />
        :
        <TimeItem time="Seconds" value={handleSeconds()} />
      </div>
      <TimerControls
        time={time}
        isPlaying={isPlaying}
        setPlaying={setPlaying}
        setTime={setTime}
        setIsHalfWay={setIsHalfWay}
        isFinished={isFinished}
        setIsFinished={setIsFinished}
        initialTime={initialTime}
        isModifying={isModifying}
        handleAction={handleAction}
      />
    </div>
  );
};

export default Timer;
