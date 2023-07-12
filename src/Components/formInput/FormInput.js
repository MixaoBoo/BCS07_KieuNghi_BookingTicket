import React from "react";

const FormInput = ({ infoUser, setInfoUser, setIsSelectSeat }) => (
  <div className="inputForm">
    <h2 className="mb-3">
      Fill the required details below and select your seats
    </h2>
    <div className="row mb-3">
      <div className="col-md-6">
        <label htmlFor="name" className="form-label">
          Name <span style={{ color: "red", fontSize: "20px" }}>*</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          onChange={(event) =>
            setInfoUser({
              ...infoUser,
              name: event.target.value.trim(),
            })
          }
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="numberSeats" className="form-label">
          Number of seat{" "}
          <span style={{ color: "red", fontSize: "20px" }}>*</span>
        </label>
        <input
          type="number"
          className={`form-control ${
            !(infoUser.numberOfSeats >= 0 && infoUser.numberOfSeats <= 120)
              ? "is-invalid"
              : ""
          }`}
          id="numberSeats"
          onChange={(event) => {
            setInfoUser({
              ...infoUser,
              numberOfSeats: event.target.value,
            });
          }}
          aria-describedby="validationFeedback"
        />
        {!(infoUser.numberOfSeats >= 0 && infoUser.numberOfSeats <= 120) && (
          <div id="validationFeedback" className="invalid-feedback">
            Invalid number of seats
          </div>
        )}
      </div>
    </div>
    <button
      className="btn btn-primary mb-3"
      disabled={
        !(
          infoUser.name.length &&
          infoUser.numberOfSeats > 0 &&
          infoUser.numberOfSeats <= 120
        )
      }
      onClick={() => {
        setIsSelectSeat(true);
      }}
    >
      Start Selecting
    </button>
  </div>
);

export default FormInput;
