import { Booking } from "../domain/Booking";

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

type BookRoom = {
    type: "BOOK_ROOM";
};
type BookRoomSuccess = {
    type: "BOOK_ROOM_SUCCESS";
};

type BookRoomFail = {
    type: "BOOK_ROOM_FAIL";
};

export type BookingAction =
    FetchBookings
    | FetchBookingsSuccess
    | FetchBookingsFail
    | BookRoom
    | BookRoomSuccess
    | BookRoomFail;