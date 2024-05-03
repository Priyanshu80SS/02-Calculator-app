import React from "react";

const Display = ({ display }) => {
  return (
    <>
      <input
        type="text"
        placeholder=" Press the key to enter the number"
        value={display}
        readOnly
      />
    </>
  );
};

export default Display;
