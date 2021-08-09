import React, { FC, useRef, useEffect, useCallback } from "react";
import { Button } from "antd";
import { toPng } from "html-to-image";
import "./index.less";

const prefix = "lesson-ra";

const CustomAnimation: FC = () => {
  const boxRef = useRef<any>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("mousemove", handleOnScroll, false);

    return () => {
      window.removeEventListener("mousemove", handleOnScroll, false);
    };
  }, []);

  const handleOnScroll = (e: MouseEvent) => {};

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <div className={`${prefix}-content`}>
      <div ref={ref}>演示requestAnimationFrame动画</div>
      <div
        className={`${prefix}-animation-box`}
        id="some-element-you-want-to-animate"
        ref={boxRef}
      ></div>
      <Button onClick={onButtonClick}>点我</Button>
    </div>
  );
};

export default CustomAnimation;
