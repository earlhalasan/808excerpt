import React from "react";

const Steps = ({ coun = 0 }) => {
  let content = [...Array(count)].map((el, i) => (
    <div className="step" key={i + 1}>
      {i + 1}
    </div>
  ));

  return <div className="steps">{content}</div>;
};

export default Steps;
