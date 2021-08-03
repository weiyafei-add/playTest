import React, { FC, useEffect, useRef, useState } from "react";
import Header from "../header";
import fetch from "../../utils/network/fetch";
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
          fetch({
            path: `https://dog.ceo/api/breeds/image/random`,
            method: "get",
          }).then((res) => {
            console.log(res);
            if (!res.success) {
              console.log("获取数据失败");
              return;
            }
            setListData((current) => {
              return current.concat([res.message]);
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
