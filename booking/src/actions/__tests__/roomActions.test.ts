
import { fetchRooms, postRoom } from "../roomActions";

test("should create an action to fetch rooms", () => {
    const expectedAction = {
        type: "FETCH_ROOMS"
    };

    expect(fetchRooms()).toEqual(expectedAction)
});

test("should create an action to post a room", () => {
    const expectedAction = {
        type: "CREATE_ROOM"
    };

    expect(postRoom({name:"", id:0})).toEqual(expectedAction)
});