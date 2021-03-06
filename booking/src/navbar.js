import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';
import "./navbar.css";


function NavBar(props) {

    return (
        <List component="nav">
            <ListItem component="div">
                <ListItemText inset>
                    <TypoGraphy color="inherit">
                    <a href='users' color="inherit">Users</a>
                </TypoGraphy>
                </ListItemText>


                <ListItemText inset>
                    <TypoGraphy color="inherit" >
                    <a href='rooms' color="inherit">Rooms</a>
               </TypoGraphy>
                </ListItemText>


                <ListItemText inset>
                    <TypoGraphy color="inherit">
                    <a href='bookings' color="inherit">Bookings</a>
               </TypoGraphy>
                </ListItemText>
            </ListItem >

        </List>
    )
}


export default NavBar;