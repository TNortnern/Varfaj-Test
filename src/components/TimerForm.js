import React, { useState } from "react";
import {
  setTime,
  getIsPlaying,
  setInitialTime,
  setIsHalfWay,
  setIsFinished,
} from "../slices/timerSlice";
import { useDispatch, useSelector } from "react-redux";

const TimerForm = () => {
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const isPlaying = useSelector(getIsPlaying);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (isPlaying) return;
        if (number < 0 || !number) {
          // small validation
          alert("Time can only be positive.");
        }
        const resolveNumber = Number(number * 60);
        dispatch(setIsFinished(false));
        dispatch(setIsHalfWay(false));
        dispatch(setTime(resolveNumber));
        dispatch(setInitialTime(resolveNumber));
      }}
      className="flex flex-wrap items-center sm:space-x-4"
    >
      <input
        value={number}
        onChange={({ target }) => setNumber(target.value)}
        placeholder="Enter minutes"
        className="input w-11/12 mx-auto sm:mx-0 mb-2 sm:mb-0 sm:w-4/6"
        type="number"
        min={0}
      />
      <button
        type="submit"
        className={`btn-primary w-11/12 sm:w-auto mx-auto sm:mx-0 ${
          isPlaying ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        Set time
      </button>
    </form>
  );
};

export default TimerForm;
