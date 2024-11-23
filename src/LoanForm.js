import "./LoanForm.css";
import Success from "./Success";

import { useState } from "react";
export default function LoanForm() {
  const [ErrorMessage, setErrorMessage] = useState(null);
  const [showmodel, setModel] = useState(false);
  const [Inputs, setInputs] = useState({
    Name: "",
    PhoneNumber: "",
    Age: "",
    checke: false,
    Salary: "",
  });
  function handleSubmitbtn(event) {
    event.preventDefault();
    if (Inputs.Age < 18 || Inputs.Age > 100) {
      setErrorMessage("Age is not allowed");
    } else if (
      Inputs.PhoneNumber.length > 12 ||
      Inputs.PhoneNumber.length < 10
    ) {
      setErrorMessage("Phone number format is not correct");
    } else {
      setErrorMessage(null);
    }
    setModel(true);
  }
  const btnisDisabled =
    Inputs.Name === "" || Inputs.Age === "" || Inputs.PhoneNumber === "";
  let btnClasses = "";
  if (!btnisDisabled) {
    btnClasses = "disabled";
  } else {
    btnClasses = "";
  }
  function handleDiv() {
    if (showmodel) {
      setModel(false);
    }
  }
  return (
    <div className="form" onClick={handleDiv}>
      <label>Name</label>
      <input
        value={Inputs.name}
        onChange={(event) => {
          setInputs({ ...Inputs, Name: event.target.value });
        }}
      ></input>
      <label>Age</label>
      <input
        type="number"
        value={Inputs.Age}
        onChange={(event) => {
          setInputs({ ...Inputs, Age: event.target.value });
        }}
      ></input>
      <label>Phone Number</label>
      <input
        type="number"
        value={Inputs.PhoneNumber}
        onChange={(event) => {
          setInputs({ ...Inputs, PhoneNumber: event.target.value });
        }}
      ></input>
      <label>Are you apployed</label>
      <input
        type="checkbox"
        checked={Inputs.checke}
        onChange={(event) => {
          setInputs({ ...Inputs, checke: event.target.checked });
        }}
      ></input>
      <label>Salary</label>
      <select
        value={Inputs.Salary}
        onChange={(event) => {
          setInputs({ ...Inputs, Salary: event.target.value });
        }}
      >
        <option>1000$</option>
        <option>1000$ - 1500$</option>
        <option>2000$</option>
      </select>
      <button
        className={btnClasses}
        style={{ cursor: "pointer", color: "white" }}
        disabled={btnisDisabled}
        onClick={handleSubmitbtn}
      >
        Submit
      </button>
      <Success ErrorMessage={ErrorMessage} isVisible={showmodel} />
    </div>
  );
}
