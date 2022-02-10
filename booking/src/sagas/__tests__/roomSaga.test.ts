import { runSaga } from 'redux-saga';
import { getRooms } from "../roomSaga";
import * as api from "../../api/roomApi";
import { Room } from "../../domain/Room";
import { AxiosResponse } from "axios";

test("should fetch rooms and dispatch success action", async () => {
    const rooms: Room[] = [{ id: 1, name: "Title" }];
    const response: AxiosResponse<Room[]> = {
        data: rooms, status: 200, statusText: "", config: null, headers: "", request: ""
    };
    const fetchRooms = jest.spyOn(api, "fetchRooms")
        .mockImplementation(() => Promise.resolve(response));
    const dispatched = [];

    await runSaga({
        dispatch: (action) => dispatched.push(action),
    }, getRooms);

    const successAction = {
        type: "FETCH_ROOMS_SUCCESS",
        payload: rooms
    };

    expect(fetchRooms).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([successAction]);
    fetchRooms.mockClear();
});

test("should fetch rooms and dispatch fail action", async () => {
    const fetchRooms = jest.spyOn(api, "fetchRooms")
        .mockImplementation(() => Promise.reject());
    const dispatched = [];

    await runSaga({
        dispatch: (action) => dispatched.push(action),
    }, getRooms);

    const failAction = {
        type: "FETCH_ROOMS_FAIL"
    };

    expect(fetchRooms).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([failAction]);
    fetchRooms.mockClear();
});