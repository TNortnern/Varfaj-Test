import React from 'react';
import SpeedButton from './SpeedButton';

const Controls = () => {
    return (
      <div className="flex space-x-4 mt-4 justify-center">
        <SpeedButton text="1x" value={1000} />
        <SpeedButton text="1.5x" value={750} />
        <SpeedButton text="2x" value={500} />
      </div>
    );
}

export default Controls;