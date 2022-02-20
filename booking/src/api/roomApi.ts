import { AxiosResponse } from "axios";
import client from "../api";
import { Room } from "../domain/Room";
import { RoomState } from "../reducers/roomReducer";

export const fetchRooms = async (): Promise<Room[]> => {
    const response = await client.get("/Rooms");
    return response.data.rooms.map((r: any) => ({
        id: r.id,
        name: r.name
    }));
};

export const postRoom = (room: any)=>async () =>{
    const response = await client.post("/Rooms", {name:room.room.name, id:0});
};
