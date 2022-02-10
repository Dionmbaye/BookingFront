import _ from "lodash";
import { RoomAction } from "../actions/roomActions";
import { Reducer } from "redux";
import { Room } from "../domain/Room";

export interface Rooms {
    [id: number]: Room;
}

export interface RoomState {
    items: Rooms;
}

const initialState: RoomState = {
    items: {}
};

export const roomReducer: Reducer<RoomState, RoomAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "FETCH_ROOMS_SUCCESS":
            debugger;
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
};
