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

export const getBooking = async (id: number): Promise<Booking> => {
    const response = await client.get(`/Bookings/${id}`);
    return {
        id: response.data.user.id,
        date: response.data.booking.date,
        startSlot: response.data.booking.startSlot,
        endSlot:response.data.booking.endSlot,
        user:response.data.booking.user,
        room:response.data.booking.room
    };
};
