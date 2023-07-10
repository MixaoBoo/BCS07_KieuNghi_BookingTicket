import React from "react";
import { arrSeat } from "../../assets/data";

const BookingSeat = () => {
  console.log(arrSeat);

  const renderSeats = () =>
    arrSeat.map((item, index) => {
      const renderInputs = arrSeat[index].danhSachGhe.map((item) =>
        index !== 0 ? (
          <td className="p-1">
            <input
              type="checkbox"
              class="seats"
              value={item.soGhe}
              disabled=""
            ></input>
          </td>
        ) : (
          <td className="p-1">{item.soGhe}</td>
        )
      );
      return (
        <tr key={index}>
          <td className="p-1">{item.hang}</td>
          {renderInputs}
        </tr>
      );
    });
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 mx-auto">
          <div className="main">
            <div className="inputForm">
              <h2 className="mb-3">
                fill the required details below and select your seats
              </h2>
              <div className="row mb-3">
                <div class="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Name*
                  </label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="numberSeats" className="form-label">
                    Number of seat*
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="numberSeats"
                  />
                </div>
              </div>
              <button className="btn btn-primary mb-3" onclick="takeData()">
                Start Selecting
              </button>
            </div>
            <ul className="seatStatus d-flex justify-content-start align-items-center gap-3 list-unstyled mb-3">
              <li>
                <span className="greenBox"></span>Selected Seat
              </li>
              <li>
                <span className="redBox"></span>Reserved Seat
              </li>
              <li>
                <span className="emptyBox"></span>Empty Seat
              </li>
            </ul>

            {/* render list seats */}
            <table>
              <tbody>{renderSeats()}</tbody>
            </table>

            <div
              className="s d-flex flex-column justify-content-center align-items-center mb-3"
              style={{ overflowX: "auto" }}
            >
              <p id="notification" />
              <div className="screen-title w-100 bg-danger d-flex justify-content-center align-items-center mb-3">
                <p>Screen this way</p>
              </div>
              <button
                className="btn btn-primary mx-auto"
                onclick="updateTextArea()"
                disabled
              >
                Confirm Selection
              </button>
            </div>
            <div
              className="displayerBoxes txt-center"
              style={{ overflowX: "auto" }}
            >
              <table class="table table-light">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Number of Seats</th>
                    <th scope="col">Seats</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSeat;
