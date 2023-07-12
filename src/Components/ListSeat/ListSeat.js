import React, { useState } from "react";
import { arrSeat } from "../../assets/data";
import { useDispatch } from "react-redux";
import { addBookedSeats } from "../../redux/features/bookingSeatsReducer";

const ListSeat = ({ infoUser, isSelectSeat }) => {
  const [orderSeatList, setOrderSeatList] = useState(arrSeat);
  console.log(arrSeat);
  console.log("orderSeatList: ", orderSeatList);

  // get data from redux
  const dispatch = useDispatch();

  const handleConfirmOrderSeat = () => {
    const currentSeatList = [];
    let currentPrice = 0;
    orderSeatList.forEach((item1) => {
      item1.danhSachGhe.forEach((item2) => {
        if (item2.dangChon) {
          currentSeatList.push(item2.soGhe);
          currentPrice += item2.gia;
        }
      });
    });
    console.log("currentPrice", currentPrice);
    const orderSeat = {
      ...infoUser,
      seats: currentSeatList.join(","),
      price: currentPrice,
    };
    const action = addBookedSeats(orderSeat);
    dispatch(action);
  };

  const handleChangeSelectSeat = (event, index, soGhe) => {
    setOrderSeatList(() => {
      const indexSeat = arrSeat[index].danhSachGhe.findIndex(
        (seat) => seat.soGhe === soGhe
      );
      if (indexSeat !== -1) {
        arrSeat[index].danhSachGhe[indexSeat] = {
          ...arrSeat[index].danhSachGhe[indexSeat],
          dangChon: event.target.checked,
        };
      }
      return [...orderSeatList];
    });
  };

  const checkDisabledButton = () => {
    const arrDangChon = [];
    orderSeatList.forEach((item) => {
      item.danhSachGhe.forEach((item1) => {
        if (item1.dangChon) {
          arrDangChon.push(item1);
        }
      });
    });
    return (
      isSelectSeat &&
      infoUser.numberOfSeats > 0 &&
      arrDangChon.length === infoUser.numberOfSeats * 1
    );
  };

  const renderSeats = () =>
    arrSeat.map((item1, index) => {
      const renderInputs = arrSeat[index].danhSachGhe.map((seat, seatIndex) => {
        if (index !== 0) {
          return (
            <td
              className={`p-1 ${seatIndex === 4 ? "pe-5" : ""} ${
                index === 4 ? "pb-5" : ""
              }`}
              key={`${seat.soGhe}${seatIndex}`}
            >
              <input
                type="checkbox"
                className={`seats ${seat.daDat ? "reserved" : ""}`}
                disabled={seat.daDat}
                checked={seat.dangChon ?? false}
                onChange={(event) =>
                  handleChangeSelectSeat(event, index, seat.soGhe)
                }
              ></input>
            </td>
          );
        } else {
          return (
            <td key={`${seat.soGhe}${seatIndex}`} className="p-1">
              {seat.soGhe}
            </td>
          );
        }
      });

      return (
        <tr key={`${item1.hang}${index}`}>
          <td
            className={`p-1 ${index === 4 ? "pb-5" : ""}`}
            key={`${item1.hang}${index}`}
          >
            {item1.hang}
          </td>
          {renderInputs}
        </tr>
      );
    });

  return (
    <div>
      <table className={`m-auto ${isSelectSeat ? "" : "preventEvent"}`}>
        <tbody>{renderSeats()}</tbody>
      </table>
      <div
        className="s d-flex flex-column justify-content-center align-items-center mb-3"
        style={{ overflowX: "auto" }}
      >
        <p id="notification" />
        <div className="screen-title w-100 bg-warning d-flex justify-content-center align-items-center mb-3 py-3">
          <p>Screen this way</p>
        </div>
        <button
          className="btn btn-primary mx-auto"
          onClick={handleConfirmOrderSeat}
          disabled={!checkDisabledButton()}
        >
          Confirm Selection
        </button>
      </div>
    </div>
  );
};

export default ListSeat;
