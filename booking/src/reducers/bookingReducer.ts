import { BookingAction } from "../actions/bookingActions";
import { Reducer } from "redux";
import { Booking } from "../domain/Booking";

export interface BookingState {
    bookings: Booking[];
    booking: Booking
}

const initialState: BookingState = {
    bookings: [],
    booking: { id: 0, date:new Date(), startSlot: 0, endSlot: 0,room: {name:"", id:0},user : {id:0,firstName:"", lastName:""}}
};

export const bookingReducer: Reducer<BookingState, BookingAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "FETCH_BOOKINGS_SUCCESS":
            return {
                ...state,
                bookings: action.payload
            };
        default:
            return state;
    }
};