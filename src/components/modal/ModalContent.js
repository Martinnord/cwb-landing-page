import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export const ModalContent = ({ toggleOpen, role = "dialog", onKeyDown }) => {
  const [email, setEmail] = useState("test@gmail.com");
  const handleEmailSubmit = event => {
    event.preventDefault();
    console.log("email", email);
    return axios
      .post(`${process.env.REACT_APP_SERVER_API}/email_received`, {
        email
      })
      .then(res => {
        console.log("RES", res);
      });
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
          <label>Enter your email below</label>
          <input
            type="email"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
          <button onClick={handleEmailSubmit}>Send!</button>
        </div>
      </div>
    </aside>,
    document.body
  );
};
