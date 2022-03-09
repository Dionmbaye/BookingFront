import React, { useEffect } from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Fade, makeStyles, Modal } from "@material-ui/core";

const RoomEditor: React.FC = () => {
    const dispatch = useDispatch();
    const currentRoom = useSelector((state: RootState) => state.room.room);

    const currentRoomId = _.isNil(currentRoom) ? 0 : currentRoom.id;
    const currentRoomName = _.isNil(currentRoom) ? "" : currentRoom.name;

    const [id, setId] = React.useState(currentRoomId);
    const [name, setName] = React.useState(currentRoomName);

    useEffect(() => {
        setId(currentRoomId);
        setName(currentRoomName);
    }, [currentRoom]);

    const saveRoom = () => {
        if (id === 0) {
            dispatch({ type: "CREATE_ROOM", payload: { name } });
        } else {
            dispatch({ type: "UPDATE_ROOM", payload: { id, name } });
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
                        <div>Name</div>
                        <div>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <button onClick={saveRoom}>Save</button>
                        </div>
                    </div>
                </Fade>
            </Modal>
    </div>

    // return <div style={roomStyle}>
    //     <div>
    //         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    //     </div>
    //     <div>
    //         <button onClick={saveRoom}>Save</button>
    //     </div>
    // </div>;
};

export default RoomEditor;