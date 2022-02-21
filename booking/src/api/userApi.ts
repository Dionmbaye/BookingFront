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

export const postUser = (user: any)=>async (): Promise<User> =>{
    const response = await client.post("/Users", {firstName:user.user.firstName, id:0, lastName:user.user.lastName});
    return user.user;
};
