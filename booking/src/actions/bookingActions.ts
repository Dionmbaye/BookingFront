import { Booking } from "../domain/Booking";
import { Slot } from "../domain/Slot";

type FetchBookings = {
    type: "FETCH_BOOKINGS";
};

type FetchBookingsSuccess = {
    type: "FETCH_BOOKINGS_SUCCESS";
    payload: Booking[];
};

type FetchBookingsFail = {
    type: "FETCH_BOOKINGS_FAIL";
};


type OpenBookingEditor = {
    type: "OPEN_BOOKING_EDITOR";
};
export type CreateBooking = {
    type: "CREATE_BOOKING";
    payload: Booking;
};
type CreateBookingSuccess = {
    type: "CREATE_BOOKING_SUCCESS";
    payload: Booking;
};

type CreateBookingConclict = {
    type: "CREATE_BOOKING_CONFLICT";
    payload: Slot[];
};
type CreateBookingFail = {
    type: "CREATE_BOOKING_FAIL";
};

export type FetchBooking = {
    type: "FETCH_BOOKING";
    payload: number;
};

type FetchBookingSuccess = {
    type: "FETCH_BOOKING_SUCCESS";
    payload: Booking;
};

type FetchBookingFail = {
    type: "FETCH_BOOKING_FAIL";
};



export type BookingAction =
    FetchBookings
    | FetchBookingsSuccess
    | FetchBookingsFail
    | CreateBooking
    | CreateBookingSuccess
    | CreateBookingFail
    | OpenBookingEditor
    | FetchBooking
    | FetchBookingFail
    | FetchBookingSuccess
    | CreateBookingConclict;