import _ from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
        <h1>Rooms</h1>
        {rooms.map((r, index) => <li key={r.id} className="liList">{++index} - {r.name}</li>)}
    </div>
};

export default Rooms;