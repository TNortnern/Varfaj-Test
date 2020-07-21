import React, { useState } from "react";
import {
  setTime,
  getIsPlaying,
  setInitialTime,
  setIsHalfWay,
  setIsFinished,
  setHalf,
} from "../slices/timerSlice";
import { useDispatch, useSelector } from "react-redux";
import Toast from "./Toast";

const TimerForm = () => {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const isPlaying = useSelector(getIsPlaying);
  return (
    <>
      <Toast error={error} />
      <form
        onSubmit={(e) => {
          setError("");
          e.preventDefault();
          if (isPlaying) return;
          if (number < 0 || !number) {
            // small validation
            setError("Time can only be positive.");
          }
          const resolveNumber = Number(number * 60);
          dispatch(setIsFinished(false));
          dispatch(setIsHalfWay(false));
          dispatch(setTime(resolveNumber));
          dispatch(setInitialTime(resolveNumber));
          dispatch(setHalf(resolveNumber / 2));
        }}
        className="flex flex-wrap items-center sm:space-x-4"
      >
        <input
          value={number}
          onChange={({ target }) => setNumber(target.value)}
          placeholder="Enter minutes"
          className={`input w-11/12 mx-auto sm:mx-0 mb-2 sm:mb-0 sm:w-4/6 ${
            isPlaying ? "opacity-50 pointer-events-none" : ""
          } `}
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
    </>
  );
};

export default TimerForm;
