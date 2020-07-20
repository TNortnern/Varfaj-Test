import React from "react";
import './tailwind.css';
import "./App.css";
import TimerForm from "./components/TimerForm";
import Timer from "./components/Timer";
import Controls from "./components/Controls";

function App() {
  return (
    <div className="app">
      <div>
        <h1 className="text-2xl">Welcome to the countdown timer.</h1>
        <TimerForm />
        <Timer />
        <Controls />
      </div>
    </div>
  );
}

export default App;
