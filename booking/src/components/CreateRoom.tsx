import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input } from 'semantic-ui-react'
import { RootState } from "../app/store";

const CreateRoom: React.FC = () => {
    const initialRoomState = {
        id: null,
        name: ""
      };
        const [room, setRoom] = useState(initialRoomState);
        const [submitted, setSubmitted] = useState(false);
        const dispatch = useDispatch();
        
        const PostRoom=()=>{
                dispatch({room: {name:room.name, id:null}, type: "CREATE_ROOM"});
                setSubmitted(true);
                room.name="";
            }
            //useSelector((state: RootState) => state.room.room);
        const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setRoom({ ...room, [name]: value });
      };

    return (
        <div>
            <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input
                type="text"
                placeholder="Name"
                id="name"
                required
                value={room.name || ''}
                onChange={handleInputChange}
                name="name"/>
            </div>   
            <button onClick={PostRoom}>
            Submit
        </button>
    </div>
    )
}
export default CreateRoom;