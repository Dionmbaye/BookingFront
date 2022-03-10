import MaterialTable from "@material-table/core";
import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { User } from "../../domain/User";

const Users: React.FC = () => {
    const dispatch = useDispatch();
     
    useEffect(() => {
        dispatch({ type: "FETCH_USERS" });
    }, []);

    const users = useSelector((state: RootState) => state.user.users);

    const columns = [
        { title: "Id", field: "id" },
        { title: "First Name", field: "firstName" },
        { title: "Last Name", field: "lastName" },
        { title: 'Actions', render: (rowData: User) => 
            <div>
                <Button onClick={() => dispatch({ type: "FETCH_USER", payload: rowData.id })}>Edit</Button>
            </div>
        }
      ];

    if (!users) {
        return <></>;
    }

    const userStyle = {
        height: "100px",
        width: "800px",
        margin: "5px auto",
    };

    return <div style={userStyle}>
        <h1>Manage Users</h1>
        <Button variant="contained" color="primary" onClick={() => dispatch({ type: "OPEN_USER_EDITOR" })}>
          New User
        </Button>
        <br/>
        <MaterialTable title="Users" columns={columns} data={users} />
        
    </div>
};

export default Users;