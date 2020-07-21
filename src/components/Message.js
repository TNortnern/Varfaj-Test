import React from 'react'
import PropTypes from 'prop-types';

const Message = ({isHalfWay, isFinished, closeMessage}) => {
    return (
      <div>
        {isHalfWay || isFinished ? (
          <>
            {isHalfWay ? (
              <h1 className="text-green-400 text-center mt-4 bg-white shadow-lg rounded-md py-4 text-xl">
                More than halfway there!
                <span
                  onClick={closeMessage}
                  className="float-right mr-8 text-black cursor-pointer hover: opacity-75"
                >
                  x
                </span>
              </h1>
            ) : (
              <h1 className="text-purple-500 text-center mt-4 bg-white shadow-lg rounded-md py-4 text-xl">
                Time's up!
                <span
                  onClick={closeMessage}
                  className="float-right mr-8 text-black cursor-pointer hover: opacity-75"
                >
                  x
                </span>
              </h1>
            )}
          </>
        ) : (
          ""
        )}
      </div>
    );
}

Message.propTypes = {
  isHalfWay: PropTypes.bool.isRequired,
  isFinished: PropTypes.bool.isRequired,
  closeMessage: PropTypes.func.isRequired,
};

export default Message;