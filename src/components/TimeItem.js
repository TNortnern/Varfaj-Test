import React from 'react'
import PropTypes from 'prop-types';

const TimeItem = ({time, value}) => {
    return (
      <div className="flex flex-col">
        <span className="block">{value}</span>
        <span className="text-sm text-center">{time}</span>
      </div>
    );
}

TimeItem.propTypes = {
  time: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

export default TimeItem;