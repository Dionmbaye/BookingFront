import { Room } from "../domain/Room";

type FetchRooms = {
    type: "FETCH_ROOMS";
};

type FetchRoomsSuccess = {
    type: "FETCH_ROOMS_SUCCESS";
    payload: Room[];
};

type FetchRoomsFail = {
    type: "FETCH_ROOMS_FAIL";
};

export const fetchRooms = (): FetchRooms => ({
    type: "FETCH_ROOMS"
});
type CreateRoomSuccess = {
    type: "CREATE_ROOM_SUCCESS";
    payload: Room;
};

type CreateRoomFail = {
    type: "CREATE_ROOM_FAIL";
};
type CreateRoom = {
    type: "CREATE_ROOM";
};

export const postRoom = (room: Room): CreateRoom => ({
    type: "CREATE_ROOM"
});
export type RoomAction =
    FetchRooms
    | FetchRoomsSuccess
    | FetchRoomsFail|CreateRoom|CreateRoomSuccess|CreateRoomFail;