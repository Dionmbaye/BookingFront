import { fetchUsers, getUser, postUser, putUser } from "../api/userApi";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { User } from "../domain/User";
import { UpdateUser, CreateUser, FetchUser} from "../actions/userActions";

export function* getUsers() {
    try {
        const users: User[] = yield call(fetchUsers);
        yield put({
            type: "FETCH_USERS_SUCCESS",
            payload: users
        });
    } catch (e) {
        yield put({
            type: "FETCH_USERS_FAIL"
        });
    }
}

export function* createUser(action: CreateUser): any {
    try {
        yield call(postUser, action.payload);
        yield put({
            type: "CREATE_USER_SUCCESS"
        });
    } catch (e) {
        yield put({
            type: "CREATE_USER_FAIL"
        });
    }
}

export function* updateUser(action: UpdateUser) {
    try {
        yield putUser(action.payload); 
        yield put({
            type: "UPDATE_USER_SUCCESS"
        });
    } catch (e) {
        yield put({
            type: "UPDATE_USER_FAIL"
        });
    }
}

export function* fetchUser(action: FetchUser) {
    try {
            const user: User = yield call(getUser, action.payload);
            yield put({
                type: "FETCH_USER_SUCCESS",
                payload: user
        });
    } catch (e) {
        yield put({
            type: "FETCH_USER_FAIL"
        });
    }
}

export default function* () {
    yield all([
        takeLatest("FETCH_USERS", getUsers), 
        takeLatest("CREATE_USER", createUser),
        takeLatest("FETCH_USER", fetchUser),
        takeLatest("UPDATE_USER", updateUser)
    ]);
}