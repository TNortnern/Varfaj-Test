import React, { useState } from "react";
import { setTime } from '../slices/timerSlice';
import { useDispatch } from "react-redux";

const TimerForm = () => {
  const [minutes, setMinutes] = useState("");
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(setTime(5))
      }}
      className="flex items-center space-x-4"
    >
      <input
        value={minutes}
        onChange={({target}) => setMinutes(target.value)}
        placeholder="Enter the time"
        className="input"
        type="text"
      />
      <button type="submit" className="btn-primary">
        Start counting
      </button>
    </form>
  );
};

export default TimerForm;
