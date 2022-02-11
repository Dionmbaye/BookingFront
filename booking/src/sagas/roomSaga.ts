import { fetchRooms } from "../api/roomApi";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { RoomsResponse } from "../responses/RoomsResponse";

export function* getRooms() {
    try {
        const response: AxiosResponse<RoomsResponse> = yield call(fetchRooms);
        yield put({
            type: "FETCH_ROOMS_SUCCESS",
            payload: response.data.rooms
        });
    } catch (e) {
        yield put({
            type: "FETCH_ROOMS_FAIL"
        });
    }
}

export default function* () {
    yield all([
        takeLatest("FETCH_ROOMS", getRooms)
    ]);
}