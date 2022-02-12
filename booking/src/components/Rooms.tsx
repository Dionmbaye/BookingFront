import _ from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Rooms.css";
import { RootState } from "../app/store";

 const Rooms: React.FC = () => {
     const dispatch = useDispatch();
     
     useEffect(() => {
         dispatch({ type: "FETCH_ROOMS" });
     }, []);

    const rooms = useSelector((state: RootState) => state.room.rooms);

    if (!rooms) {
        return <></>;
    }

    rooms.sort((a, b) => a.id - b.id);
    
    return <div>
        {rooms.map(r => <li key={r.id} className="roomList">{r.id} - {r.name}</li>)}
    </div>
};

export default Rooms;