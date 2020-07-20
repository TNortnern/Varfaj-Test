import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setPlaying,
  setTime,
  setIsHalfWay,
  getIsHalfWay,
  getIsPlaying,
  getTime,
  getInitialTime
} from "../slices/timerSlice";
import TimerControls from "./TimerControls";

const Timer = () => {
  const dispatch = useDispatch();
  const [half, setHalf] = useState(null);
  let time = useSelector(getTime);
  const isPlaying = useSelector(getIsPlaying);
  const initialTime = useSelector(getInitialTime);
  const isHalfWay = useSelector(getIsHalfWay);
  const handleAction = () => {
    dispatch(setPlaying(!isPlaying));
  };
  // useEffect(() => {
  //   if (seconds < 1) {
  //     dispatch(setMinutes(minutes-1));
  //   }
  // }, [input])
  useEffect(() => {
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
        if (time === initialHalfTime) dispatch(setIsHalfWay(true));
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
      {isHalfWay && isPlaying ? (
        <h1 className="text-green-400 text-center mt-4 bg-white shadow-lg rounded-md py-4 text-md">
          More than halfway there! &#x2713;
        </h1>
      ) : (
        ""
      )}
      <h1 className="text-5xl font-bold text-center my-2 text-timer-text">
        {handleMinutes()}:{handleSeconds()}
      </h1>
      <TimerControls
        time={time}
        isPlaying={isPlaying}
        setPlaying={setPlaying}
        setTime={setTime}
        setIsHalfWay={setIsHalfWay}
        initialTime={initialTime}
        handleAction={handleAction}
      />
    </div>
  );
};

export default Timer;
