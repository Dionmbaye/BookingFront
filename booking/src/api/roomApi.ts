import client from "../api";
import { Room } from "../domain/Room";

export const getRooms = async (): Promise<Room[]> => {
    const response = await client.get("/Rooms");
    return response.data.rooms.map((r: any) => ({
        id: r.id,
        name: r.name
    }));
};

export const getRoom = async (id: number): Promise<Room> => {
    const response = await client.get(`/Rooms/${id}`);
    return {
        id: response.data.room.id,
        name: response.data.room.name
    };
};

export const postRoom = async (room: Room): Promise<Room> => {
    const response = await client.post("/Rooms", { name: room.name, id: 0 });
    return room;
};

export const putRoom = async (room: Room): Promise<Room> => {
    const response = await client.put(`/Rooms/${room.id}`, { name: room.name, id: room.id });
    return room;
};