import { UserAction } from "../actions/userActions";
import { Reducer } from "redux";
import UserState from "../states/UserState";

const initialState: UserState = {
    users: [],
    user: undefined,
    isOpen: false,
    isLoading: false
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
        case "FETCH_USER":
            return {
                ...state,
                user: {
                    id: action.payload,
                    firstName: "",
                    lastName:""
                },
                isLoading: true
            };
        case "FETCH_USER_SUCCESS":
            return {
                ...state,
                user: action.payload,
                isOpen: true,
                isLoading: false
            };
        case "OPEN_USER_EDITOR":
            return {
                ...state,
                user: undefined,
                isOpen: true
            };
        case "CREATE_USER":
        case "UPDATE_USER":
            return {
                ...state,
                user: action.payload,
                isLoading: true
            };
        case "CREATE_USER_SUCCESS":
        case "UPDATE_USER_SUCCESS":
            return {
                ...state,
                isOpen: false,
                isLoading: false
            };
        default:
            return state;
    }
};