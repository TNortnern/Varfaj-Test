import React, { useState } from "react";
import { setTime } from '../slices/timerSlice';
import { useDispatch } from "react-redux";

const TimerForm = () => {
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(setTime(Number(number * 60)))
      }}
      className="flex items-center space-x-4"
    >
      <input
        value={number}
        onChange={({target}) => setNumber(target.value)}
        placeholder="Enter the amount of minutes you want to countdown from"
        className="input"
        type="number"
      />
      <button type="submit" className="btn-primary">
        Set time
      </button>
    </form>
  );
};

export default TimerForm;
