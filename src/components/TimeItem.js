import React from 'react'

const TimeItem = ({time, value}) => {
    return (
      <div className="flex flex-col">
        <span className="block">{value}</span>
        <span className="text-sm text-center">{time}</span>
      </div>
    );
}

export default TimeItem;