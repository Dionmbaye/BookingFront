import { runSaga } from "redux-saga";
import { getBookings } from "../bookingSaga";
import * as api from "../../api/bookingApi";
import { Booking } from "../../domain/Booking";

test("should fetch bookings and dispatch success action", async () => {
    const bookings: Booking[] = [{ id: 1, 
        date: new Date('2022-02-15T15:00:00'), 
        startSlot:5, 
        endSlot:10, 
        user: {id: 1, firstName:"test 1", lastName:"test2"},
        room: {id:1, name:"test room"}
    }];
    const fetchBookings = jest.spyOn(api, "fetchBookings")
        .mockImplementation(() => Promise.resolve(bookings));
    const dispatched = [];

    await runSaga({
        dispatch: (action) => dispatched.push(action),
    }, getBookings);

    const successAction = {
        type: "FETCH_BOOKINGS_SUCCESS",
        payload: bookings
    };

    expect(fetchBookings).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([successAction]);
    fetchBookings.mockClear();
});

test("should fetch bookings and dispatch fail action", async () => {
    const fetchBookings = jest.spyOn(api, "fetchBookings")
        .mockImplementation(() => Promise.reject());
    const dispatched = [];

    await runSaga({
        dispatch: (action) => dispatched.push(action),
    }, getBookings);

    const failAction = {
        type: "FETCH_BOOKINGS_FAIL"
    };

    expect(fetchBookings).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([failAction]);
    fetchBookings.mockClear();
});