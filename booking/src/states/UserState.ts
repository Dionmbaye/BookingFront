import { User } from "../domain/User";

export default interface UsersState {
    users: User[];
    user: User;
}