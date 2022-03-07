import { Room } from "../domain/Room";

export default interface RoomState {
    rooms: Room[];
    room: Room | undefined;
    isOpen: boolean;
    isLoading: boolean
}