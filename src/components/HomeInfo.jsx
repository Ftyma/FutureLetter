import React from "react";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1) {
    return (
      <div className="text-center text-xl">
        Welcome to{" "}
        <span className="text-6xl">
          <br />
          Future Letter
        </span>
      </div>
    );
  }

  if (currentStage === 2) {
    return (
      <div>
        A Time Capsule{" "}
        <span>
          <br />
          For Your Thoughts.
        </span>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
