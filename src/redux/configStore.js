import { configureStore } from "@reduxjs/toolkit";
import bookingSeatsReducer from './features/bookingSeatsReducer'

export const store = configureStore({
  reducer: {
    bookingSeats: bookingSeatsReducer
  },
});
