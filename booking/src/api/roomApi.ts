import client from "../api";
import { AxiosResponse } from "axios";
import { RoomsResponse } from "../responses/RoomsResponse";

// TODO KSO missing mapping
export const fetchRooms: () => Promise<AxiosResponse<RoomsResponse>> = () => client.get("/Rooms");