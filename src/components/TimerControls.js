import React from "react";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";

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


TimerControls.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  setPlaying: PropTypes.func.isRequired,
  setTime: PropTypes.func.isRequired,
  initialTime: PropTypes.number,
  handleAction: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
  setIsHalfWay: PropTypes.func.isRequired,
  isFinished: PropTypes.bool.isRequired,
  setIsFinished: PropTypes.func.isRequired,
  isModifying: PropTypes.bool.isRequired,
};

export default TimerControls;
