import React, { useState } from "react";
import { setTime, getIsPlaying, setInitialTime, setIsHalfWay } from '../slices/timerSlice';
import { useDispatch, useSelector } from "react-redux";

const TimerForm = () => {
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
    const isPlaying = useSelector(getIsPlaying);

  return (
    <form
      onSubmit={(e) => {
        if(number < 0 || !number) {
          // small validation
          alert('Time can only be positive.')
        }
        e.preventDefault();
        const resolveNumber = Number(number * 60)
        dispatch(setIsHalfWay(false));
        dispatch(setTime(resolveNumber))
        dispatch(setInitialTime(resolveNumber))
      }}
      className="flex items-center space-x-4"
    >
      <input
        value={number}
        onChange={({target}) => setNumber(target.value)}
        placeholder="Enter minutes"
        className="input w-4/6"
        type="number"
        min={0}
      />
      <button type="submit" className={`btn-primary ${isPlaying ? 'opacity-50 pointer-events-none' : ''}`}>
        Set time
      </button>
    </form>
  );
};

export default TimerForm;
