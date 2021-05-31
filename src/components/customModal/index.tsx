import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import "./index.less";

const Modal = (props: any) => {
  const [target, setTarget] = useState(null);

  useEffect(() => {
    setTarget(document.getElementById("modal-root") as any);
  }, []);

  useEffect(() => {
    console.log(props.show);
  }, [props.show]);

  if (!props.show) {
    return null;
  }

  const children = (
    <div className="modal">
      modal <button onClick={props.close}>close</button>
      <button onClick={props.addCount}>点击</button>
    </div>
  );

  return target ? (
    ReactDom.createPortal(children, target as any)
  ) : (
    <div>无父元素</div>
  );
};

export default Modal;
