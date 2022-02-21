import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CreateUser: React.FC = () => {
    const initialUserState = {
        id: null,
        firstName: "",
        lastName:""
      };
        const [user, setUser] = useState(initialUserState);
        const [submitted, setSubmitted] = useState(false);
        const dispatch = useDispatch();
        
        const CreateUserEvent=()=>{
                dispatch({user: {firstName:user.firstName, id:null, lastName:user.lastName}, type: "CREATE_USER"});
                setSubmitted(true);
                user.firstName="";
                user.lastName="";
            }
           
        const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
      };

    return (
        <div>
            <div className="form-group">
            <label htmlFor="firstName">First Name: </label>
            <input
                type="text"
                placeholder="First Name"
                id="firstName"
                required
                value={user.firstName || ''}
                onChange={handleInputChange}
                name="firstName"/>
            </div>   
            <div className="form-group">
            <label htmlFor="lastName">Last Name: </label>
            <input
                type="text"
                placeholder="Last Name"
                id="lastName"
                required
                value={user.lastName || ''}
                onChange={handleInputChange}
                name="lastName"/>
            </div>   
            <button onClick={CreateUserEvent}>
            Submit
        </button>
    </div>
    )
}
export default CreateUser;