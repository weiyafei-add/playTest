import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./index.less";

const prefix = "lesson-h";

const Header = () => {
  const [menu, setMenu] = useState([
    { id: 1, text: "主页", actived: true, path: "/" },
    {
      id: 2,
      text: "ScrollTable-HooK",
      actived: false,
      path: "/home/scroll-table",
    },
  ]);

  const handleOnMenuClick = (item: object) => {
    setMenu(
      menu.map((_item) => ({
        ..._item,
        actived: _item.id === (item as any).id,
      }))
    );
  };

  return (
    <div className={`${prefix}-head`}>
      <ul>
        {menu.map((item) => (
          <Link
            className={`${prefix}-li ${item.actived ? "actived" : ""}`}
            key={item.id}
            onClick={() => handleOnMenuClick(item)}
            to={item.path}
          >
            {item.text}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Header;
