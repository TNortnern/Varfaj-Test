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
      className="flex items-center"
    >
      <input
        value={minutes}
        onChange={({target}) => setMinutes(target.value)}
        placeholder="Enter the time"
        className="input mr2 text-size"
        type="text"
      />
      <button type="submit" className="btn primary text-size">
        Start counting
      </button>
    </form>
  );
};

export default TimerForm;
