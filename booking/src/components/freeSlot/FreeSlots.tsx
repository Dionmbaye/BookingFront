import MaterialTable from "@material-table/core";
import { Fade, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import { Search } from "semantic-ui-react";
import {RootState} from "../../app/store";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const Slots : React.FC = () => {
    const dispatch = useDispatch();

    const slots = useSelector((state : RootState) => state.booking.freeSlots);

    if (!slots) {
        return <></>;
    }

   const columns = [
        { title: "Date", field: "date" },
        { title: "Start", field: "start" },
        { title: "End", field: "end" }
    ];

    const closeStyle = {
        left: '90%',
    };

    const popupStyle = makeStyles(theme => ({
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
    const classes = popupStyle();
    const onClose = () => {window.location.reload();}

   return <div><Modal
                className={classes.modal}
                open={true}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={true}>
                    <div className={classes.paper}>
                            <IconButton style={closeStyle} onClick={onClose}>
                                <CloseIcon />
                            </IconButton>
                            <MaterialTable title="Free Slots" columns={columns} data={slots} 
                            options={{
                                search: false
                              }}
                            />
                            
                    </div>
                </Fade>
            </Modal>
        </div>
   
};

export default Slots;