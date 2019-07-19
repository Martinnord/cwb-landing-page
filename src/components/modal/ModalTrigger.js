import React from "react";
import styled from "styled-components";

const PrimaryButton = styled.button`
  background: palevioletred;
  color: white;
  font-size: 0.8em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  z-index: 1;
  font-weight: 700;
`;

export const ModalTrigger = ({ toggleOpen }) => (
  <PrimaryButton onClick={() => toggleOpen(true)}>Notify me</PrimaryButton>
);
