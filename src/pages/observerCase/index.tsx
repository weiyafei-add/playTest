import Axios from "axios";
import React, { FC, useEffect, useRef, useState } from "react";
import Header from "../header";
import "./index.less";

const prefix = "observer-oc";
const ObserverCase: FC = (props: any) => {
  const listenerRef = useRef(null);
  const ioRef = useRef(null);
  const [listData, setListData] = useState([]);

  useEffect(() => {
    if (listenerRef.current) {
      if (ioRef.current) ioRef.current.unobserve(listenerRef.current);
      ioRef.current = new IntersectionObserver(
        () => {
          Axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
            if (res.data.status !== "success") {
              console.log("获取数据失败");
              return;
            }
            setListData((current) => {
              return current.concat([res.data.message]);
            });
          });
        },
        {
          threshold: [0, 0.75],
        }
      );
      ioRef.current.observe(listenerRef.current);
    }
  }, []);

  return (
    <div className={`${prefix}-container`} id="container">
      <Header />
      {/* <div ref={listenerRef} className={`${prefix}-bottom`}></div> */}
      <div className={`${prefix}-content`}>
        {listData.map((item) => (
          <p style={{ height: 100 }} key={item}>
            {item}
          </p>
        ))}
        <div className={`${prefix}-more-info`} ref={listenerRef}>
          暂无更多信息
        </div>
      </div>
    </div>
  );
};

export default ObserverCase;
