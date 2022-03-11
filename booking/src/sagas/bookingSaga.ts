import { fetchBookings, getBooking, postBooking } from "../api/bookingApi";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { Booking } from "../domain/Booking";
import { CreateBooking, FetchBooking } from "../actions/bookingActions";

export function* getBookings() {
    try {
        const bookings: Booking[] = yield call(fetchBookings);
        yield put({
            type: "FETCH_BOOKINGS_SUCCESS",
            payload: bookings
        });
    } catch (e) {
        yield put({
            type: "FETCH_BOOKINGS_FAIL"
        });
    }
}
export function* fetchBooking(action: FetchBooking) {
    try {
        const booking: Booking = yield call(getBooking, action.payload);
        yield put({
            type: "FETCH_BOOKING_SUCCESS",
            payload: booking
        });
    } catch (e) {
        yield put({
            type: "FETCH_BOOKING_FAIL"
        });
    }
}

export function* createBooking(action: CreateBooking): any {
    try {
        const freeSlots= yield  call(postBooking, action.payload);
        if(freeSlots.length>0)
        {
            yield put({
                type: "CREATE_BOOKING_CONFLICT",
                payload:freeSlots
            });
        }
        else{
            yield put({
                type: "CREATE_BOOKING_SUCCESS",
                payload:[]
            });
        }
        
    } catch (e) {
        yield put({
            type: "CREATE_BOOKING_FAIL"
        });
    }
}


export default function* () {
    yield all([
        takeLatest("FETCH_BOOKINGS", getBookings),
        takeLatest("FETCH_BOOKING", fetchBooking),
        takeLatest("CREATE_BOOKING", createBooking)
    ]);
}