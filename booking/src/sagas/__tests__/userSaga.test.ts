import { runSaga } from "redux-saga";
import { getUsers } from "../userSaga";
import * as api from "../../api/userApi";
import { User } from "../../domain/User";

test("should fetch users and dispatch success action", async () => {
    const users: User[] = [{ id: 1, firstName: "test1", lastName:"test2" }];
    const fetchUsers = jest.spyOn(api, "fetchUsers")
        .mockImplementation(() => Promise.resolve(users));
    const dispatched = [];

    await runSaga({
        dispatch: (action) => dispatched.push(action),
    }, getUsers);

    const successAction = {
        type: "FETCH_USERS_SUCCESS",
        payload: users
    };

    expect(fetchUsers).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([successAction]);
    fetchUsers.mockClear();
});

test("should fetch users and dispatch fail action", async () => {
    const fetchUsers = jest.spyOn(api, "fetchUsers")
        .mockImplementation(() => Promise.reject());
    const dispatched = [];

    await runSaga({
        dispatch: (action) => dispatched.push(action),
    }, getUsers);

    const failAction = {
        type: "FETCH_USERS_FAIL"
    };

    expect(fetchUsers).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([failAction]);
    fetchUsers.mockClear();
});