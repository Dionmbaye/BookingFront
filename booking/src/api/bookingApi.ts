import client from "../api";
import { Booking } from "../domain/Booking";
import { Slot } from "../domain/Slot";

export const fetchBookings = async (): Promise<Booking[]> => {
    const response = await client.get("/Bookings");
    return response.data.bookings;
};


export const postBooking = async (booking: any): Promise<Slot[]>=>{
    try
    {
    const response = await client.post("/Bookings", {id:0, date:booking.date, 
        startSlot:booking.startSlot,
        endSlot: booking.endSlot,
        user: booking.user,
        room:booking.room});
        return [];
    }
    catch (ex: any)
    {
        if(ex.message.includes("409"))
        {
            return ex.response.data.slots;
        }
        return [];
    }

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
