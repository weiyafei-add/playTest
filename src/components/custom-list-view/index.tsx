import React, { useState, useEffect } from "react";
import { ListView } from "antd-mobile";

interface ListProps {
  className?: string;
  style?: React.CSSProperties;
  pagination: any;
  initialListSize: number;
  hasFooter: boolean;
  children?: React.ReactChildren;
  renderRowItem: () => React.ReactElement;
  dataSource: Array<{}>;
  onEndReached: () => {};
  loading: boolean;
}

const prefix = "clv";

const CustomListView: React.FC<ListProps> = (props) => {
  const {
    className = "",
    style = {},
    pagination,
    initialListSize,
    hasFooter = true,
    renderRowItem,
    onEndReached,
    loading,
  } = props;

  const [dataSource, setDataSource] = useState(() => {
    return new ListView.DataSource({
      rowHasChanged: (row1: any, row2: any) => row1 !== row2,
    });
  });

  useEffect(() => {
    if (!props.dataSource.length) {
      return;
    }
    setDataSource(dataSource.cloneWithRows(props.dataSource));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.dataSource]);

  const renderFooter = () => {
    if (!hasFooter) {
      return <div>{null}</div>;
    }
    return loading ? <div>正在加载更多数据</div> : <div>加载完毕</div>;
  };

  return (
    <div className={`${prefix}-custom-listview ${className}`}>
      <ListView
        pageSize={pagination.pageSize} // 每帧渲染的行数
        dataSource={dataSource} // 数据源
        useBodyScroll // 使用body作为滚动容器
        initialListSize={initialListSize} //首次渲染大小
        style={style}
        renderRow={renderRowItem}
        renderFooter={renderFooter}
        scrollRenderAheadDistance={200}
        onEndReachedThreshold={10}
        onEndReached={onEndReached}
      />
    </div>
  );
};

export default CustomListView;
