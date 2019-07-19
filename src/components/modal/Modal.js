import React, { useState } from "react";
import { ModalContent } from "./ModalContent";
import { ModalTrigger } from "./ModalTrigger";
import "./modal.scss";

export const Modal = ({ role }) => {
  const [open, toggleOpen] = useState(false);

  const onKeyDown = ({ keyCode }) => keyCode === 27 && toggleOpen();

  return (
    <>
      <ModalTrigger toggleOpen={toggleOpen} />
      {open && (
        <ModalContent
          toggleOpen={toggleOpen}
          role={role}
          onKeyDown={onKeyDown}
        />
      )}
    </>
  );
};
