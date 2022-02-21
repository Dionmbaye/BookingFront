import client from "../api";
import { Booking } from "../domain/Booking";

export const fetchBookings = async (): Promise<Booking[]> => {
    const response = await client.get("/Bookings");
    return response.data.bookings;
};


export const postBooking = (booking: any)=>async ()=>{
    
    const response = await client.post("/Bookings", {id:0, date:booking.booking.date, 
        startSlot:booking.booking.startSlot,
        endSlot: booking.booking.endSlot,
        user: booking.booking.user,
        room:booking.booking.room});
    return response;
};