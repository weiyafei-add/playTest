import React, { useState, useEffect } from "react";
import Modal from "../../components/customModal";
import MockList from "../listView";
import Header from "../header";
import { renderRoutes } from "react-router-config";
const Home = (props) => {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(props);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const close = () => {
    setShow(false);
  };

  const addCount = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      <Header />
      <div id="app-root"></div>
      <div id="modal-root"></div>
      <Modal show={show} close={close} addCount={addCount} />
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        打开modal{count}
      </button>
      <MockList />
      {renderRoutes(props.route.routes)}
    </div>
  );
};

export default Home;
