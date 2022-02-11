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
        rooms.sort((a, b) => a.id - b.id);
        return <div>
            {rooms.map(r => <li key={r.id} className="roomList">{r.id} - {r.name}</li>)}
        </div> 
};

const mapStateToProps = (state: RootState) => ({
    rooms: _.values(state.room.items)
});

const mapDispatchToProps = {
    fetchRooms
};

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);