import React, { FC, useRef, useEffect } from "react";
import { Button } from "antd";
import "./index.less";

const prefix = "lesson-ra";

interface ObjProps {
  name: string;
  age: number;
  sex: string;
  [key: string]: any;
}

// version: 1
// version: 2
// version: 3

const CustomAnimation: FC = () => {
  const boxRef = useRef<any>(null);

  useEffect(() => {
    window.addEventListener("mousemove", handleOnScroll, false);

    return () => {
      window.removeEventListener("mousemove", handleOnScroll, false);
    };
  }, []);

  const handleOnScroll = (e: MouseEvent) => {};

  return (
    <div className={`${prefix}-content`}>
      <div>演示requestAnimationFrame动画</div>
      <div
        className={`${prefix}-animation-box`}
        id="some-element-you-want-to-animate"
        ref={boxRef}
      ></div>
      <Button>点我</Button>
    </div>
  );
};

export default CustomAnimation;
