import React, { useState } from "react";
import Modal from "../../components/customModal";

const Home = () => {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  const close = () => {
    setShow(false);
  };

  const addCount = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      <div>home</div>
      <div id="app-root"></div>
      <div id="modal-root"></div>
      <Modal show={show} close={close} addCount={addCount} />
      <button onClick={() => setShow(!show)}>打开modal{count}</button>
    </div>
  );
};

export default Home;
