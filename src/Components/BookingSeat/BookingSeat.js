import React, { useState } from "react";
import FormInput from "../formInput/FormInput";
import ListSeat from "../ListSeat/ListSeat";
import { useSelector } from "react-redux";

const BookingSeat = () => {
  // const [listOrderSeat, setListOrderSeat] = useState(arrSeat);
  const [infoUser, setInfoUser] = useState({
    name: "",
    numberOfSeats: 0,
  });
  const [isSelectSeat, setIsSelectSeat] = useState(false);

  const seatList = useSelector((state) => state.bookingSeats);
  console.log("seatList: ", seatList);
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 mx-auto">
          <div className="main">
            <FormInput
              infoUser={infoUser}
              setInfoUser={setInfoUser}
              setIsSelectSeat={setIsSelectSeat}
            />
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

            <ListSeat infoUser={infoUser} isSelectSeat={isSelectSeat} />

            <div
              className="displayerBoxes txt-center"
              style={{ overflowX: "auto" }}
            >
              <table className="table table-light">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Seats</th>
                    <th scope="col">Number of Seats</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {seatList?.map((_, index1) => (
                    <tr key={`row${index1}`}>
                      {Object.values(seatList[index1])?.map((item, index2) => (
                        <td key={`col${index2}`}>{item}</td>
                      ))}
                    </tr>
                  ))}
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
