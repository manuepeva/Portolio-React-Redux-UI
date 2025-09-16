import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendFormData } from "../../Redux/SendFormAction";
import Error from "../../Components/ErrorBoundary/ErrorBoundary";
import "./FormStyles.scss";

const Form = () => {
  const dispatch = useDispatch();
  const SendFormInfo = () => dispatch(sendFormData(message));
  // State
  const [message, updateMessage] = useState({
    firstName: "",
    lastName: "",
    date: "",
    comments: "",
  });
  const { firstName, lastName, date, comments } = message;
  const [error, updateError] = useState(false);
  const [success, setSuccess] = useState(false);
  // Handle change function
  const handleChange = (e) => {
    updateMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };
  // Submit function
  const handleOnBlur = (e) => {
    e.preventDefault();
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      date.trim() === ""
    ) {
      updateError(true);
    }
  };
  const submitDate = (e) => {
    e.preventDefault();
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      date.trim() === ""
    ) {
      updateError(true);
      return;
    }
    SendFormInfo();
    setSuccess(true);
    updateMessage({
      firstName: " ",
      lastName: " ",
      date: " ",
      comments: " ",
    });
    updateError(false);
  };
return (
  <div className="form-container">
    <form className="form-main" onSubmit={submitDate}>
      <h2 className="form-title">Please Enter Your Information</h2>
      <br />
      {error && (
        <Error message="Please Enter Your Name, Last Name and Date" />
      )}
      <div className="form-row">
        <label className="form-label">
          Name:
          <input
            type="text"
            name="firstName"
            className="input-name"
            onChange={handleChange}
            value={firstName}
            placeholder="Your Name"
          />
        </label>
        <label className="form-label">
          Last Name:
          <input
            type="text"
            name="lastName"
            className="input-lastName"
            onChange={handleChange}
            value={lastName}
            placeholder="Your Last Name"
          />
        </label>
        <label className="form-label">
          Date:
          <input
            type="date"
            name="date"
            className="input-date"
            onChange={handleChange}
            value={date}
          />
        </label>
      </div>
      <textarea
        className="txt-area"
        name="comments"
        onChange={handleChange}
        value={comments}
        placeholder="Comments"
      ></textarea>
      <button type="submit" className="btn-form">
        Send
      </button>
      {success && (
        <p className="success">Your Message was Successfully Send</p>
      )}
    </form>
  </div>
);
};

export default Form;
