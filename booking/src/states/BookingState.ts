import { Booking } from "../domain/Booking";

export default interface BookingsState {
    bookings: Booking[];
    booking: Booking|undefined;
    isOpen: boolean;
    isLoading: boolean
}