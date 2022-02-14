import _ from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";

const Bookings: React.FC = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch({ type: "FETCH_BOOKINGS" });
    }, []);

   const bookings = useSelector((state: RootState) => state.booking.bookings);

   if (!bookings) {
       return <></>;
   }

   bookings.sort((a, b) => a.id - b.id);
   
   return <div>
       <h1>Bookings</h1>
       {bookings.map((b, index) => <li key={b.id} className="liList">{++index} - User: {b.user.firstName} {b.user.lastName} Room: {b.room.name} StartSlot: {b.startSlot} EnndSlot: {b.endSlot}</li>)}
   </div>
}

export default Bookings;