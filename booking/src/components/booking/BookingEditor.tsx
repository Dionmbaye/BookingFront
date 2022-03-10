import { Fade, makeStyles, Modal } from "@material-ui/core";
import { getValue } from "@testing-library/user-event/dist/utils";
import _ from "lodash";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import DatePicker from "react-datepicker";

const BookingEditor: React.FC = () => {

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
        const [startDate, setStartDate] = React.useState(new Date());
        const [booking, setBooking] = React.useState(initialBookingState);
        booking.date=startDate;
        const dispatch = useDispatch();
        const BookRoomEvent=()=>{
            dispatch({booking: {date:booking.date, 
                id:null, startSlot:booking.startSlot, 
                endSlot:booking.endSlot, 
                user:booking.user,
                room:booking.room
            }, type: "CREATE_BOOKING"});
            setBooking({ ...initialBookingState});
            window.location.reload();
        }
        const handleDateChange = (date: any) => {
            booking.date=date;
            setStartDate(date);
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

    const bookingStyle = makeStyles(theme => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));
    const classes = bookingStyle();
    return <div>
         <Modal
                className={classes.modal}
                open={true}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={true}>
                    <div className={classes.paper}>
                        <DatePicker 
                            selected={startDate} 
                            onChange={handleDateChange} />
                        <br/>
                        <input
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();}
                            }}
                            placeholder="Start Slot"
                            id="startSlot"
                            required
                            value={booking.startSlot || ''}
                            name="startSlot"
                            onChange={handleInputChange}/>
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
                        <div>
                            <button onClick={BookRoomEvent}>Save</button>
                        </div>
                    </div>
                </Fade>
            </Modal>
    </div>
};

export default BookingEditor;