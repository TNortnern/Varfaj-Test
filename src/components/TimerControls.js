import React from "react";
import { useDispatch } from "react-redux";
import { getIsFinished } from "../slices/timerSlice";

const TimerControls = ({
  isPlaying,
  setPlaying,
  setTime,
  initialTime,
  handleAction,
  time,
  setIsHalfWay,
  isFinished,
  setIsFinished,
  isModifying,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center">
      <button
        onClick={() => {
          handleAction();
          dispatch(setIsFinished(false));
        }}
        className={`btn bg-green-400 text-white block ml-3 ${
          time === 0 ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        {isPlaying || isModifying ? "Pause" : "Play"}
      </button>
      {isPlaying || isModifying || isFinished ? (
        <button
          onClick={() => {
            dispatch(setIsFinished(false));
            dispatch(setIsHalfWay(false));
            if (isPlaying) {
              dispatch(setPlaying(false));
            }
            dispatch(setTime(initialTime));
            setTimeout(() => {
              dispatch(setPlaying(true));
            }, 1);
          }}
          className="btn bg-blue-500 text-white block ml-3"
        >
          Reset
        </button>
      ) : (
        ""
      )}
      {isPlaying || isModifying ? (
        <button
          onClick={() => {
            dispatch(setIsFinished(false));
            dispatch(setIsHalfWay(false));
            dispatch(setPlaying(false));
            dispatch(setTime(initialTime));
          }}
          className="btn bg-red-500 text-white block ml-3"
        >
          Stop
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default TimerControls;
