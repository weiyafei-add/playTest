import React from "react";
import "./index.less";

const prefix = "lesson-ra";

const CustomAnimation = () => {
  return (
    <div className={`${prefix}-content`}>
      <div>演示requestAnimationFrame动画</div>
      <div className={`${prefix}-animation-box`}></div>
    </div>
  );
};

export default CustomAnimation;
