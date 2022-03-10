import { Fade, makeStyles, Modal } from "@material-ui/core";
import { getValue } from "@testing-library/user-event/dist/utils";
import _ from "lodash";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import DatePicker from "react-datepicker";

const BookingEditor: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: "FETCH_USERS" });
        dispatch({ type: "FETCH_ROOMS" });
         }, []);
        const users = useSelector((state: RootState) => state.user.users);
        const rooms = useSelector((state: RootState) => state.room.rooms);

    const currentBooking = useSelector((state: RootState) => state.booking.booking);

    const currentBookingId = _.isNil(currentBooking) ? 0 : currentBooking.id;
    const currentBookingDate = _.isNil(currentBooking) ? new Date() : currentBooking.date;
    const currentBookingStartSlot = _.isNil(currentBooking) ? "" : currentBooking.startSlot;
    const currentBookingEndSlot = _.isNil(currentBooking) ? "" : currentBooking.endSlot;
    const currentBookingUser = _.isNil(currentBooking) ? "" : currentBooking.user;
    const currentBookingRoom = _.isNil(currentBooking) ? "" : currentBooking.room;

    const [id, setId] = React.useState(currentBookingId);
    const [startSlot, setStartSlot] = React.useState(currentBookingStartSlot);
    const [endSlot, setEndSlot] = React.useState(currentBookingEndSlot);
    const [date, setDate] = React.useState(currentBookingDate);
    const [user, setUser] = React.useState(currentBookingUser);
    const [room, setRoom] = React.useState(currentBookingRoom);

    useEffect(() => {
        setId(currentBookingId);
        setDate(currentBookingDate);
        setStartSlot(currentBookingStartSlot);
        setEndSlot(currentBookingEndSlot);
        setUser(currentBookingUser);
        setRoom(currentBookingRoom);
    }, [currentBooking]);

    const saveBooking = () => {
            dispatch({ type: "CREATE_BOOKING", payload: { date, startSlot, endSlot, user, room } });
            window.location.reload();
        } 
    
    const handleDateChange = (date: any) => {
        setDate(date);
       }

    const handleSelectedUserChange=(event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        const u=users.find(i=>i.id==event.target.value)
        if(u)
        {
           setUser(u);
        }
        
      };

    const handleSelectedRoomChange=(event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        const r=rooms.find(i=>i.id==event.target.value)
        if(r)
        {
           setRoom(r);
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
                            selected={currentBookingDate} 
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
                            value={currentBookingStartSlot || ''}
                            name="startSlot"
                            onChange={(e) => setStartSlot(e.target.value)}/>
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
                        value={currentBookingEndSlot || ''}
                        name="endSlot"
                        onChange={(e) => setEndSlot(e.target.value)}
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
                            <button onClick={saveBooking}>Save</button>
                        </div>
                    </div>
                </Fade>
            </Modal>
    </div>
};

export default BookingEditor;