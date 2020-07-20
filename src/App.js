import React from "react";
import './tailwind.css';
import "./App.css";
import TimerForm from "./components/TimerForm";
import Timer from "./components/Timer";
import Controls from "./components/Controls";

function App() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div>
        <h1 className="text-3xl font-bold mb-4">Welcome to the countdown timer.</h1>
        <TimerForm />
        <Timer />
        <Controls />
      </div>
    </div>
  );
}

export default App;
