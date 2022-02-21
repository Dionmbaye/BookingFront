import { User } from "../domain/User";

type FetchUsers = {
    type: "FETCH_USERS";
};

type FetchUsersSuccess = {
    type: "FETCH_USERS_SUCCESS";
    payload: User[];
};

type FetchUsersFail = {
    type: "FETCH_USERS_FAIL";
};

export const fetchUsers = (): FetchUsers => ({
    type: "FETCH_USERS"
});


type CreateUser = {
    type: "CREATE_USER";
};
type CreateUserSuccess = {
    type: "CREATE_USER_SUCCESS";
    payload: User;
};

type CreateUserFail = {
    type: "CREATE_USER_FAIL";
};

export const postUser = (user: User): CreateUser => ({
    type: "CREATE_USER"
});


export type UserAction =
    FetchUsers
    | FetchUsersSuccess
    | FetchUsersFail|CreateUser|CreateUserSuccess|CreateUserFail;