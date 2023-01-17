import React from "react";

const Info = ({ text, color }) => {
  return (
    <div className="info" style={{ backgroundColor: color }}>
      <p>{text}</p>
    </div>
  );
};

export default Info;
