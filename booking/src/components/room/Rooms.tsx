import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Room } from "../../domain/Room";
import MaterialTable from '@material-table/core';
import Button from "@material-ui/core/Button";
import { Edit } from "@material-ui/icons";

const Rooms: React.FC = () => {
    const dispatch = useDispatch();
     
    useEffect(() => {
        dispatch({ type: "FETCH_ROOMS" });
    }, []);

    const rooms = useSelector((state: RootState) => state.room.rooms);

    const columns = [
        { title: "Id", field: "id" },
        { title: "Name", field: "name" },
        { title: 'Actions', render: (rowData: Room) => 
            <div>
                <Button onClick={() => dispatch({ type: "FETCH_ROOM", payload: rowData.id })}>Edit</Button>
            </div>
        }
      ];

    if (!rooms) {
        return <></>;
    }

    const roomStyle = {
        height: "100px",
        width: "800px",
        margin: "5px auto",
    };

    return <div style={roomStyle}>
        <h1>Manage Rooms</h1>
        <Button variant="contained" color="primary" onClick={() => dispatch({ type: "OPEN_ROOM_EDITOR" })}>
          New Room
        </Button>
        <br/>
        <MaterialTable title="Rooms" columns={columns} data={rooms} />
        
    </div>
};

export default Rooms;