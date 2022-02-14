import client from "../api";
import { Booking } from "../domain/Booking";

export const fetchBookings = async (): Promise<Booking[]> => {
    const response = await client.get("/Bookings");
    return response.data.bookings;
};
