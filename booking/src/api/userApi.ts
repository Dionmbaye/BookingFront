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
export const getUser = async (id: number): Promise<User> => {
    const response = await client.get(`/Users/${id}`);
    return {
        id: response.data.user.id,
        firstName: response.data.user.firstName,
        lastName: response.data.user.lastName
    };
};

export const postUser = async(user: User): Promise<User> =>{
    const response = await client.post("/Users", 
    {
        firstName:user.firstName, 
        id:0, 
        lastName:user.lastName});
    return user;
};

export const putUser = async (user: User): Promise<User> => {
    
        const response = await client.put(`/Users/${user.id}`, 
        {   firstName: user.firstName, 
            lastName: user.lastName,
            id: user.id 
        });
    return user;
};
