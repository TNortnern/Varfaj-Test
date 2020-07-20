import React from 'react';

const Controls = () => {
    return (
      <div className="flex space-x-4 mt-4">
        <button className="px-6 py-2 rounded-md border border-black">1x</button>
        <button className="px-6 py-2 rounded-md border border-black">
          1.5x
        </button>
        <button className="px-6 py-2 rounded-md border border-black">2x</button>
      </div>
    );
}

export default Controls;