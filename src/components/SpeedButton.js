import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  setSpeed,
  getSpeed,
  setPlaying,
  setIsModifying,
  getIsPlaying,
} from "../slices/timerSlice";

const SpeedButton = ({ text, value }) => {
  const dispatch = useDispatch();
  const speed = useSelector(getSpeed);
  const isPlaying = useSelector(getIsPlaying);
  const activeClasses = "bg-black text-white hover:opacity-75 duration-150";
  const inActiveClasses =
    "hover:bg-black hover:text-white border-black duration-150";
  const handleClasses = () => {
    if (speed === value) return activeClasses;
    return inActiveClasses;
  };
  return (
    <button
      onClick={() => {
        dispatch(setSpeed(value));
        // if not playing then don't wanna modify any controls
        if (!isPlaying) return;
        dispatch(setPlaying(false));
        dispatch(setIsModifying(true));
        setTimeout(() => {
          dispatch(setPlaying(true));
          dispatch(setIsModifying(false));
        }, 1);
      }}
      type="button"
      className={`px-6 py-2 rounded-md border ${handleClasses()}`}
    >
      {text}
    </button>
  );
};

SpeedButton.propTypes = {
  text: PropTypes.string,
  value: PropTypes.number,
};

SpeedButton.defaultProps = {
  text: '',
  value: 0,
}

export default SpeedButton;
