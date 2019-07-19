import React from "react";
import { PrimaryButton } from "../PrimaryButton";

export const ModalTrigger = ({ toggleOpen }) => (
  <PrimaryButton onClick={() => toggleOpen(true)}>
    Stay in the know
  </PrimaryButton>
);
