import { Room } from "./Room";
import { User } from "./User";

export interface Booking {
    id: number,
    date: Date,
    startSlot: number,
    endSlot: number,
    room: Room,
    user: User
}