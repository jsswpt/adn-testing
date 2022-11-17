import { useMemo, useEffect } from "react";
import ReactDOM from "react-dom";

import st from "./styles.module.scss";

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

export const Modal = (props: ModalProps) => {
  const el = useMemo(() => {
    const element = document.createElement("div");
    element.id = "modal";
    element.className = st.modal;

    return element;
  }, []);

  useEffect(() => {
    if (props.isOpen) {
      document.body.appendChild(el);
      document.body.style.overflow = "hidden";
    } else {
      el.remove();
    }
  }, [props.isOpen]);
  return ReactDOM.createPortal(props.children, el);
};
