import { fetchBookings } from "../bookingActions";

test("should create an action to fetch bookings", () => {
    const expectedAction = {
        type: "FETCH_BOOKINGS"
    };

    expect(fetchBookings()).toEqual(expectedAction)
});