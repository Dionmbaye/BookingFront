import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import { RootState } from "../app/store";
import { User } from "../domain/User";


const BookRoom: React.FC = () => {
    const initialBookingState = {
        id: 0,
        date: new Date(),
        startSlot: null,
        endSlot: null,
        room: {name:"", id:0},
        user : {id:0,firstName:"", lastName:""}
      };

      useEffect(() => {
        dispatch({ type: "FETCH_USERS" });
        dispatch({ type: "FETCH_ROOMS" });
         }, []);
        const users = useSelector((state: RootState) => state.user.users);
        const rooms = useSelector((state: RootState) => state.room.rooms);
        const [startDate, setStartDate] = useState(new Date());
        const [booking, setBooking] = useState(initialBookingState);
        const [submitted, setSubmitted] = useState(false);
        booking.date=startDate;
        const dispatch = useDispatch();

        const BookRoomEvent=()=>{
            dispatch({booking: {date:booking.date, 
                id:null, startSlot:booking.startSlot, 
                endSlot:booking.endSlot, 
                user:booking.user,
                room:booking.room
            }, type: "BOOK_ROOM"});
            setSubmitted(true);
            setBooking({ ...initialBookingState});
        }
        const handleDateChange = (date: any) => {
            booking.date=date;
           }

        const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setBooking({ ...booking, [name]: value });
      };

      const handleSelectedUserChange=(event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        const u=users.find(i=>i.id==event.target.value)
        if(u)
        {
            booking.user={id:u.id, firstName:u.firstName, lastName:u.lastName};
        }
        
      };

      const handleSelectedRoomChange=(event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        const r=rooms.find(i=>i.id==event.target.value)
        if(r)
        {
            booking.room={id:r.id, name:r.name};
        }
        
      };
     
        return (
            <div>
                 <DatePicker 
                    selected={startDate} 
                    onChange={handleDateChange} 
            />
            <br/>
            <input
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                    }
                }}
                placeholder="Start Slot"
                id="startSlot"
                required
                value={booking.startSlot || ''}
                name="startSlot"
                onChange={handleInputChange}
            />
            <br/>
            <input
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                    }
                }}
                placeholder="End Slot"
                id="endSlot"
                required
                value={booking.endSlot || ''}
                name="endSlot"
                onChange={handleInputChange}
            />
            <br/>
            <select name="user" id="user" onChange={handleSelectedUserChange}>
            <option>Select user</option>
            {users.map((option) => (
              <option key={option.id} value={option.id}>{option.firstName} {option.lastName}</option>
            ))}
            </select>

            <br/>
            <select name="room" id="room" onChange={handleSelectedRoomChange}>
                <option>Select room</option>
            {rooms.map((option) => (
              <option key={option.id} value={option.id}>{option.id}-{option.name}</option>
            ))}
            </select>
            <br/>

            <button onClick={BookRoomEvent}>
                Submit
            </button>
            </div>)

    }

    export default BookRoom;