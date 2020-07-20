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
  setIsModifying,
  getIsModifying,
  getSpeed,
} from "../slices/timerSlice";
import TimerControls from "./TimerControls";
import Message from "./Message";

const Timer = () => {
  const dispatch = useDispatch();
  const [half, setHalf] = useState(null);
  let time = useSelector(getTime);
  const isPlaying = useSelector(getIsPlaying);
  const initialTime = useSelector(getInitialTime);
  const isHalfWay = useSelector(getIsHalfWay);
  const isFinished = useSelector(getIsFinished);
  const isModifying = useSelector(getIsModifying);
  const speed = useSelector(getSpeed);
  const handleAction = () => {
    dispatch(setPlaying(!isPlaying));
  };
  const belowHandlers = () => {
    let classes;
    const isBelow20 = time < 20 ? 'text-red-600' : '';
    const isBelow11 = time < 11 ? 'blink-text' : '';
    classes = `${isBelow11} ${isBelow20}`
    if (isPlaying) return classes;
  };
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
        if (time !== -1) dispatch(setTime(time--));
        if (time === initialHalfTime) dispatch(setIsHalfWay(true));
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
  }
  return (
    <div>
     <Message isFinished={isFinished} isHalfWay={isHalfWay} closeMessage={closeMessage} />
      <h1
        className={`text-5xl font-bold text-center my-2 text-timer-text ${belowHandlers()}`}
      >
        {handleMinutes()}:{handleSeconds()}
      </h1>
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
