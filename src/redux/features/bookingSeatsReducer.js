import { createSlice } from "@reduxjs/toolkit";
// import { layDuLieuLocal } from "../../utils/localStore";
// Lần đầu tiên tạo trang web store khởi tạo
const initialState = [];

// {
//   name: "",
//   numberSeats: 0,
//   seats: "",
//   price: 0,
// };
export const bookingSeatsReducer = createSlice({
  name: "bookingSeats",
  initialState,
  reducers: {
    // Ở đây tạo một phương thức gíup xử lí state bên trên store redux
    addBookedSeats: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBookedSeats } = bookingSeatsReducer.actions;

export default bookingSeatsReducer.reducer;
