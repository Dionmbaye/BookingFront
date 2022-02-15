import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";

const Users: React.FC = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch({ type: "FETCH_USERS" });
    }, []);

    const users = useSelector((state: RootState) => state.user.users);

    if (!users) {
        return <></>;
    }

    users.sort((a, b) => a.id - b.id);

    return <div>
        <h1>Users</h1>
        {users.map((u, index) => <li key={u.id} className="liList">{++index} - {u.firstName} {u.lastName}</li>)}
    </div>
}

export default Users;