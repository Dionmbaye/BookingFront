import { BookingAction } from "../actions/bookingActions";
import { Reducer } from "redux";
import BookingState from "../states/BookingState";

const initialState: BookingState = {
    bookings: [],
    booking: undefined,
    freeSlots:[],
    isOpen: false,
    isLoading: false,
    isFreeSlotsOpen: false
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
            case "FETCH_BOOKING":
            return {
                ...state,
                booking: {
                    id: action.payload,
                    date: new Date(),
                    startSlot: 0,
                    endSlot: 0,
                    user: {id:0, firstName:"", lastName:""},
                    room: {id:0, name:""}
                },
                isLoading: true
            };
        case "FETCH_BOOKING_SUCCESS":
            return {
                ...state,
                booking: action.payload,
                isOpen: true,
                isLoading: false
            };
        case "OPEN_BOOKING_EDITOR":
            return {
                ...state,
                booking: {
                    id: 0,
                    date: new Date(),
                    startSlot: 0,
                    endSlot: 0,
                    user: {id:0, firstName:"", lastName:""},
                    room: {id:0, name:""}
                },
                isOpen: true
            };
        case "CREATE_BOOKING":
            return {
                ...state,
                booking: action.payload,
                isLoading: true
            };
        case "CREATE_BOOKING_SUCCESS":
            return {
                ...state,
                isOpen: false,
                isLoading: false
            };
        case "CREATE_BOOKING_CONFLICT":
            return {
                ...state,
                freeSlots: action.payload,
                isOpen: false,
                isLoading: false,
                isFreeSlotsOpen:true
            };
        default:
            return state;
    }
};