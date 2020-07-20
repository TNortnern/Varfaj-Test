import React from "react";
import PropTypes from "prop-types";

const SpeedButton = ({ text, value }) => {
  return (
    <button type="button" className="px-6 py-2 rounded-md border border-black hover:bg-black hover:text-white">
      {text}
    </button>
  );
};

SpeedButton.propTypes = {
  text: PropTypes.string,
  value: PropTypes.number,
};

export default SpeedButton;
