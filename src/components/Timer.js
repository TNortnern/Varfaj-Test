import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getIsPlaying,
  setPlaying,
  setTime,
  getTime,
} from "../slices/timerSlice";
import TimerControls from "./TimerControls";

const Timer = () => {
  const dispatch = useDispatch();
  const [half, setHalf] = useState(null);
  const [initialTime, setInitialTime] = useState(0);
  let time = useSelector(getTime);
  const isPlaying = useSelector(getIsPlaying);
  const handleAction = () => {
    dispatch(setPlaying(!isPlaying));
  };
  // useEffect(() => {
  //   if (seconds < 1) {
  //     dispatch(setMinutes(minutes-1));
  //   }
  // }, [input])
  useEffect(() => {
    if (!initialTime) setInitialTime(time);
    let initialHalfTime = time / 2;
    if (time !== 0 && !half) {
      setHalf(time / 2);
    }
    let countInterval;
    if (isPlaying && time > 0) {
      countInterval = setInterval(() => {
        if (half) {
          initialHalfTime = half;
        }
        console.log(time);
        if (time !== -1) dispatch(setTime(time--));
        if (time === initialHalfTime) console.log("its halftime!!", time);
        if (time < 0) {
          clearInterval(countInterval);
          handleAction();
        }
      }, 250);
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
  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-2 text-timer-text">
        {handleMinutes()}:{handleSeconds()}
      </h1>
      <TimerControls
        isPlaying={isPlaying}
        setPlaying={setPlaying}
        setTime={setTime}
        initialTime={initialTime}
        handleAction={handleAction}
      />
    </div>
  );
};

export default Timer;
