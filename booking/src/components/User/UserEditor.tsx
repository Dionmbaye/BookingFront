import { Fade, makeStyles, Modal } from "@material-ui/core";
import _ from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";

const UserEditor: React.FC = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector((state: RootState) => state.user.user);

    const currentUserId = _.isNil(currentUser) ? 0 : currentUser.id;
    const currentUserFirstName = _.isNil(currentUser) ? "" : currentUser.firstName;
    const currentUserLastName = _.isNil(currentUser) ? "" : currentUser.lastName;

    const [id, setId] = React.useState(currentUserId);
    const [firstName, setFirstName] = React.useState(currentUserFirstName);
    const [lastName, setLastName] = React.useState(currentUserLastName);

    useEffect(() => {
        setId(currentUserId);
        setFirstName(currentUserFirstName);
        setLastName(currentUserLastName);
    }, [currentUser]);

    const saveUser = () => {
        if (id === 0) {
            dispatch({ type: "CREATE_USER", payload: { firstName, lastName } });
            window.location.reload();
        } else {
            dispatch({ type: "UPDATE_USER", payload: { id, firstName, lastName } });
            window.location.reload();
        }
    };

    const roomStyle = makeStyles(theme => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));
    const classes = roomStyle();
    return <div>
         <Modal
                className={classes.modal}
                open={true}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={true}>
                    <div className={classes.paper}>
                        <div>Fist Name</div>
                        <div>
                            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>

                        <div>Last Name</div>
                        <div>
                            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div>
                            <button onClick={saveUser}>Save</button>
                        </div>
                    </div>
                </Fade>
            </Modal>
    </div>
};

export default UserEditor;