import React, { useState, useEffect, useRef, useContext } from "react";
import useMousePosition from "../components/customHook/useMousePosition";
import useURLLoader from "../components/customHook/useURLLoader";
import { themeContext, theme } from "../App";
import "./index.less";

interface dataProps {
  message: string;
  status: string;
}

const LikeButton: React.FC = () => {
  const [status, setStatus] = useState(false);
  const position = useMousePosition();
  const [data, loading] = useURLLoader(
    "https://dog.ceo/api/breeds/image/random",
    [status]
  );
  const dogResult = data as dataProps;
  const domRef = useRef(false);
  const context = useContext(themeContext);
  const [style, setStyle] = useState(theme.drak);
  useEffect(() => {
    console.log(style);
    console.log("模拟componentDidMount");

    return () => {
      console.log("模拟componentsDidUnmount");
    };
  }, []);

  useEffect(() => {
    if (domRef.current) {
      console.log("模拟componentDidUpdate");
    } else {
      domRef.current = true;
    }
  }, [dogResult]);

  return (
    <>
      <h1 style={style} className="hhhhh">
        点击页面查看鼠标坐标{" "}
      </h1>
      <h1>
        x:{position.x}, y:{position.y}
      </h1>
      <button
        onClick={() => {
          setStatus(!status);
        }}
      >
        点我换图片
      </button>
      <button
        onClick={() => {
          if (style.background === "#fff") {
            return setStyle(theme.drak);
          }
          setStyle(theme.light);
        }}
      >
        点我换背景
      </button>
      <h2>使用自定义hook获取图片</h2>
      {loading ? (
        <p>正在加载图片</p>
      ) : (
        <img src={dogResult && dogResult.message} />
      )}
    </>
  );
};

export default LikeButton;
