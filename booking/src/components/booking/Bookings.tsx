import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Booking } from "../../domain/Booking";
import MaterialTable from '@material-table/core';

const Bookings: React.FC = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch({ type: "FETCH_BOOKINGS" });
    }, []);

   const bookings = useSelector((state: RootState) => state.booking.bookings);


   if (!bookings) {
       return <></>;
   }

   
   const columns = [
    { title: "Id", field: "id" },
    { title: "Date", field: "date"},
    { title: "Start Slot", field: "startSlot" },
    { title: "End Slot", field: "endSlot"},
    { title: "User", field: "user"},
    { title: "Room", field: "room"}
  ];

   bookings.sort((a, b) => a.id - b.id);

   const tableBookings = bookings.map(item => {
        return {id: item.id, date:item.date, startSlot: item.startSlot, endSlot: item.endSlot, 
            user: item.user.firstName+" "+item.user.lastName,
            room: item.room.name
        }
    })

   
    const bookingStyle = {
        height: "100px",
        width: "800px",
        margin: "5px auto",
    };

    return <div style={bookingStyle}>
        <h1>Manage Bookings</h1>
        <Button variant="contained" color="primary" onClick={() => dispatch({ type: "OPEN_BOOKING_EDITOR" })}>
          Book Room
        </Button>
        <br/>
        <MaterialTable title="Bookings" columns={columns} data={tableBookings} />
        
    </div>
};

export default Bookings;