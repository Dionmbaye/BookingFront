import { fetchRooms } from "../api/roomApi";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { Room } from "../domain/Room";

export function* getRooms() {
    try {
        const response: AxiosResponse<Room[]> = yield call(fetchRooms);
        yield put({
            type: "FETCH_ROOMS_SUCCESS",
            payload: [
                // TODO KSO fake data
                {
                    id: 1,
                    name: "Test"
                }
            ]
            //payload: response.data.rooms
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