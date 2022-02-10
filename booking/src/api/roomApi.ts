import client from "../api";
import { AxiosResponse } from "axios";
import { Room } from "../domain/Room";

// TODO KSO missing mapping
export const fetchRooms: () => Promise<AxiosResponse<Room[]>> = () => client.get("/Rooms");