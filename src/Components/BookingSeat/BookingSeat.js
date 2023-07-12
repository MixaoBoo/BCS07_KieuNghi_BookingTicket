import React, { useState } from "react";
import { arrSeat } from "../../assets/data";

const BookingSeat = () => {
  const [listOrderSeat, setListOrderSeat] = useState(arrSeat);
  const [infoUser, setInfoUser] = useState({
    name: "",
    numberOfSeats: 0,
  });
  const [isSelectSeat, setIsSelectSeat] = useState(false);
  console.log(arrSeat);
  console.log("listOrderSeat: ", listOrderSeat);

  const renderSeats = () =>
    arrSeat.map((item1, index) => {
      const renderInputs = arrSeat[index].danhSachGhe.map((item) =>
        index !== 0 ? (
          <td className="p-1" key={`${item.soGhe}${index}`}>
            <input
              type="checkbox"
              className={`seats ${item.daDat ? "reserved" : ""}`}
              disabled={item.daDat}
              value={item.dangChon ?? false}
              onChange={(event) => {
                setListOrderSeat(() => {
                  const indexSeat = arrSeat[index].danhSachGhe.findIndex(
                    ({ soGhe }) => soGhe === item.soGhe
                  );
                  console.log("event.target.value: ", event.target.value);
                  if (indexSeat !== -1) {
                    arrSeat[index].danhSachGhe[indexSeat] = {
                      ...arrSeat[index].danhSachGhe[indexSeat],
                      dangChon: event.target.value,
                    };
                  }
                  return [...listOrderSeat];
                });
              }}
            ></input>
          </td>
        ) : (
          <td key={`${item.soGhe}${index}`} className="p-1">
            {item.soGhe}
          </td>
        )
      );
      return (
        <tr key={`${item1.hang}${index}`}>
          <td className="p-1" key={`${item1.hang}${index}`}>
            {item1.hang}
          </td>
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
                Fill the required details below and select your seats
              </h2>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Name{" "}
                    <span style={{ color: "red", fontSize: "20px" }}>*</span>
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
                    className="form-control"
                    id="numberSeats"
                    onChange={(event) => {
                      setInfoUser({
                        ...infoUser,
                        numberOfSeats: event.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <button
                className="btn btn-primary mb-3"
                disabled={!(infoUser.name.length && infoUser.numberOfSeats > 0)}
                onClick={() => {
                  setIsSelectSeat(true);
                }}
              >
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
            {isSelectSeat ? (
              <p
                className="p-1"
                style={{
                  backgroundColor: "orange",
                  color: "#000",
                  width: "50%",
                  margin: "auto",
                  textAlign: "center",
                }}
              >
                Please Select your Seats NOW!
              </p>
            ) : (
              <p></p>
            )}

            {/* render list seats */}
            <table>
              <tbody>{renderSeats()}</tbody>
            </table>
            {/* <table className={isSelectSeat ? "" : "preventEvent"}>
              <tbody>{renderSeats()}</tbody>
            </table> */}

            <div
              className="s d-flex flex-column justify-content-center align-items-center mb-3"
              style={{ overflowX: "auto" }}
            >
              <p id="notification" />
              <div className="screen-title w-100 bg-warning d-flex justify-content-center align-items-center mb-3 py-3">
                <p>Screen this way</p>
              </div>
              <button className="btn btn-primary mx-auto" disabled>
                Confirm Selection
              </button>
            </div>
            <div
              className="displayerBoxes txt-center"
              style={{ overflowX: "auto" }}
            >
              <table className="table table-light">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Number of Seats</th>
                    <th scope="col">Seats</th>
                    <th scope="col">Price</th>
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
