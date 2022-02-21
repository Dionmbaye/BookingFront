import { UserAction } from "../actions/userActions";
import { Reducer } from "redux";
import { User } from "../domain/User";

export interface UserState {
    users: User[];
    user: User;
}

const initialState: UserState = {
    users: [],
    user: {id:0, firstName:"", lastName:""}
};

export const userReducer: Reducer<UserState, UserAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "FETCH_USERS_SUCCESS":
            return {
                ...state,
                users: action.payload
            };
        case "CREATE_USER_SUCCESS":
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
};