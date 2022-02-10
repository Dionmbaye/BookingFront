import _ from "lodash";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./Rooms.css";
import { Room } from "../domain/Room"
import { RootState } from "../app/store";
import { fetchRooms } from "../actions/roomActions";

type RoomsProps = {
    rooms: Room[],
    fetchRooms: () => any;
};

export const Rooms: React.FC<RoomsProps> = ({
    rooms,
    fetchRooms
}: RoomsProps) => {
    useEffect(() => {
        fetchRooms();
    }, []);

    if (!rooms) {
        return <></>;
    }

    return <div>
        {rooms.map(r => <div key={r.id} className="room">{r.id} - {r.name}</div>)}
    </div> 
};

const mapStateToProps = (state: RootState) => ({
    rooms: _.values(state.room.items)
});

const mapDispatchToProps = {
    fetchRooms
};

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);