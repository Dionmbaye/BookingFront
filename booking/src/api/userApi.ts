import client from "../api";
import { User } from "../domain/User";

export const fetchUsers = async (): Promise<User[]> => {
    const response = await client.get("/Users");
    return response.data.users.map((u: any) => ({
        id: u.id,
        firstName: u.firstName,
        lastName: u.lastName
    }));
};
