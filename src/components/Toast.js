import React from "react";
import PropTypes from "prop-types";

const Toast = ({ error }) => {
  return (
    <>
      {error ? (
        <div className="absolute inset-y-0 inset-x-0 mt-3 flex justify-center w-11/12 sm:w-screen h-12 mx-auto">
          <div>
            <div className="bg-white px-8 py-1 rounded-md shadow-xl flex justify-center flex-wrap items-center text-red-500">
              <span className="block w-full text-center text-2xl">Error:</span>
              <span class="whitespace-no-wrap">{error}</span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

Toast.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Toast;
