import { fetchUsers } from "../userActions";

test("should create an action to fetch users", () => {
    const  expectedAction = {
        type: "FETCH_USERS"
    };

    expect(fetchUsers()).toEqual(expectedAction)
});