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

export const fetchBookings = (): FetchBookings => ({
    type: "FETCH_BOOKINGS"
});


type BookRoom = {
    type: "BOOK_ROOM";
};
type BookRoomSuccess = {
    type: "BOOK_ROOM_SUCCESS";
};

type BookRoomFail = {
    type: "BOOK_ROOM_FAIL";
};

export const bookRoom = (booking: Booking): BookRoom => ({
    type: "BOOK_ROOM"
});


export type BookingAction =FetchBookings| FetchBookingsSuccess| FetchBookingsFail|BookRoom|BookRoomSuccess|BookRoomFail;