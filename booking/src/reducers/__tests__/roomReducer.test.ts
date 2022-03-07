import { roomReducer } from "../roomReducer";

test("should handle FETCH_ROOMS", () => {
    expect(
        roomReducer({
            rooms: [],
            room: undefined,
            isOpen: false,
            isLoading: false
        }, {
            type: "FETCH_ROOMS"
        })
    ).toEqual({
        rooms: [],
        room: undefined,
        isOpen: false,
        isLoading: false
    });
});

test("should handle FETCH_ROOMS_SUCCESS", () => {
    expect(
        roomReducer({
            rooms: [],
            room: undefined,
            isOpen: false,
            isLoading: false
        }, {
            type: "FETCH_ROOMS_SUCCESS",
            payload: [{ id: 1, name: "Title" }]
        })
    ).toEqual({
        rooms: [{ id: 1, name: "Title" }],
        room: undefined,
        isOpen: false,
        isLoading: false
    });
});

test("should handle FETCH_ROOMS_FAIL", () => {
    expect(
        roomReducer({
            rooms: [],
            room: undefined,
            isOpen: false,
            isLoading: false
        }, {
            type: "FETCH_ROOMS_FAIL"
        })
    ).toEqual({
        rooms: [],
        room: undefined,
        isOpen: false,
        isLoading: false
    });
});