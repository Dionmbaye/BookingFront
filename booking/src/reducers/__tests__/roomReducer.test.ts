import { roomReducer } from "../roomReducer";

test("should handle FETCH_ROOMS", () => {
    expect(
        roomReducer({
            items: {}
        }, {
            type: "FETCH_ROOMS"
        })
    ).toEqual(
        {
            items: {}
        }
    )
});

test("should handle FETCH_ROOMS_SUCCESS", () => {
    expect(
        roomReducer({
            items: {}
        }, {
            type: "FETCH_ROOMS_SUCCESS",
            payload: [{ id: 1, name: "Title" }]
        })
    ).toEqual(
        {
            items: { "1": { id: 1, name: "Title" } }
        }
    )
});

test("should handle FETCH_ROOMS_FAIL", () => {
    expect(
        roomReducer({
            items: {}
        }, {
            type: "FETCH_ROOMS_FAIL"
        })
    ).toEqual(
        {
            items: {}
        }
    )
});