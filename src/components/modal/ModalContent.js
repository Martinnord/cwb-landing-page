import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import swal from "sweetalert2";
import { PrimaryButton } from "../PrimaryButton";

const successSwal = () =>
  swal.fire({
    title: "We will notify you!",
    position: "center",
    type: "success",
    timer: 1400,
    showConfirmButton: false
  });

const errorSwal = title =>
  swal.fire({
    title,
    position: "center",
    type: "error",
    heightAuto: false
  });

const apiUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_SERVER_API
    : process.env.REACT_APP_LOCAL_SERVER_API;

export const ModalContent = ({ toggleOpen, role = "dialog", onKeyDown }) => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = async event => {
    event.preventDefault();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) return errorSwal("Email not valid");

    const res = await axios({
      method: "post",
      url: `${apiUrl}/email_received`,
      data: { email }
    });

    if (res.status === 200 && res.data === "You will be notified!") {
      return successSwal();
    } else {
      return errorSwal(res.data);
    }
  };

  return ReactDOM.createPortal(
    <aside
      tabIndex="-1"
      role={role}
      onKeyDown={onKeyDown}
      aria-modal="true"
      aria-label="some content"
      className="c-modal-cover"
    >
      <div className="c-modal">
        <button
          className="c-modal__close"
          onClick={() => toggleOpen(prev => prev && false)}
        >
          <span className="u-hide-visually">Close</span>
          <svg className="c-modal__close-icon" viewBox="0 0 40 40">
            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </button>
        <div className="c-modal__body">
          <div>
            <h1>Enter your email below</h1>
            <form>
              <input
                type="email"
                placeholder="Email"
                required
                onChange={e => setEmail(e.target.value)}
              />
              <PrimaryButton onClick={handleEmailSubmit}>Send!</PrimaryButton>
            </form>
          </div>
        </div>
      </div>
    </aside>,
    document.body
  );
};
