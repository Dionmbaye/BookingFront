import { Booking } from "../domain/Booking";
import { Slot } from "../domain/Slot";

export default interface BookingsState {
    bookings: Booking[];
    booking: Booking|undefined;
    freeSlots: Slot[];
    isOpen: boolean;
    isLoading: boolean;
    isFreeSlotsOpen: boolean;
}