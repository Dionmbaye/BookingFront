import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga"
import { roomReducer, RoomState } from "../reducers/roomReducer";
import { userReducer, UserState } from "../reducers/userReducer";
import { bookingReducer, BookingState } from "../reducers/bookingReducer";
import { RoomAction } from "../actions/roomActions";
import { UserAction } from "../actions/userActions";
import { BookingAction } from "../actions/bookingActions";
import { initSagas } from "../sagas/rootSaga"
import BookingsState from "../states/BookingState";

export interface RootState {
    readonly room: RoomState;
    readonly user: UserState;
    readonly booking: BookingState;
}

const rootReducer = combineReducers<RootState>({
    room: roomReducer,
    user: userReducer,
    booking: bookingReducer
});

export type RootActions = RoomAction |UserAction|BookingAction;

const sagaMiddleware = createSagaMiddleware();

export const store = (): any => {
    const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(sagaMiddleware)
        )
    );
    initSagas(sagaMiddleware);
    return store;
};