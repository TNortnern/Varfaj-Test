import React from "react";
import { useDispatch } from "react-redux";

const TimerControls = ({
  isPlaying,
  setPlaying,
  setTime,
  initialTime,
  handleAction,
  time,
  setIsHalfWay,
  setIsFinished,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center">
      <button
        onClick={() => {
          handleAction();
          dispatch(setIsFinished(false));
        }}
        className={`btn bg-black text-white block ml-3 ${
          time === 0 ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      {isPlaying ? (
        <>
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
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default TimerControls;
