import React from 'react';
import SpeedButton from './SpeedButton';

const Controls = () => {
    return (
      <div className="flex space-x-4 mt-4 justify-center">
        <SpeedButton text="1x" />
        <SpeedButton text="1.5x" />
        <SpeedButton text="2x" />
      </div>
    );
}

export default Controls;