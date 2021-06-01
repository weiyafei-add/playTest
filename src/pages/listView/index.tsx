import Axios from "axios";
import React, { useState, useEffect } from "react";
import CustomListView from "../../components/custom-list-view";

import "./index.less";
const prefix = "lesson-lv";

const MockList = () => {
  const [pageInfo] = useState({
    pageSize: 20,
  });
  const [pageData, setPageData] = useState([]);
  const [loading, setIsloading] = useState(false);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = () => {
    setIsloading(true);
    Axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
      if (res.data.status !== "success") {
        console.log("获取数据失败");
        return;
      }
      const arr = new Array(pageInfo.pageSize)
        .fill(res.data.message)
        .map((item, index) => ({ id: index, item }));

      setTimeout(() => {
        setPageData((current) => {
          setIsloading(false);
          return current.concat(arr as any);
        });
      }, 2000);
    });
  };

  const renderRowItem = (rowData: any, sectionID: any, rowID: any) => {
    return (
      <p
        className={`${prefix}-item-p ${rowID % 2 === 0 ? "odd" : ""}`}
        key={rowID}
      >
        {(rowData as any).item}
      </p>
    );
  };

  const onEndReached = () => {
    fetchData();
  };

  return (
    <div className={`${prefix}-mock-list`}>
      <CustomListView
        pagination={pageInfo}
        dataSource={pageData}
        initialListSize={pageInfo.pageSize}
        hasFooter={true}
        renderRowItem={renderRowItem as any}
        onEndReached={onEndReached as any}
        loading={loading}
      />
    </div>
  );
};

export default MockList;
