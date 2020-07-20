import React from "react";
import './tailwind.css';
import "./App.css";
import TimerForm from "./components/TimerForm";
import Timer from "./components/Timer";
import SpeedControls from "./components/SpeedControls";

function App() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://upload.wikimedia.org/wikipedia/commons/1/1a/Abstract-background-white-12.jpg)",
      }}
      className="flex items-center justify-center h-screen w-screen"
    >
      <div>
        <h1 className="text-3xl font-bold mb-4">
          Welcome to the countdown timer.
        </h1>
        <TimerForm />
        <Timer />
        <SpeedControls />
      </div>
    </div>
  );
}

export default App;
