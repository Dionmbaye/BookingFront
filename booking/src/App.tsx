import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { store } from "./app/store";
import Bookings from "./components/Bookings";
import CreateUser from "./components/CreateUser";
import BookRoom from "./components/BookRoom";
import Users from "./components/Users";
import Room from "./components/room/Room";
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Rooms from "./components/room/Rooms";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import NavBar from "./navbar";

function App() {
  return (
    <div className="App">
      <div>
      <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy
              color="inherit">
              Room Booking App
           </TypoGraphy>
           <NavBar/>
          </Toolbar>
        </AppBar>
      </div>
      <Provider store={store}>
        {/* <Room />
        <Users />
        <CreateUser />
        <BookRoom />
        <Bookings /> */}
      

        <Router>
          <Routes>
            <Route path="/" element={<div><h1>Home Page <br/></h1></div>} />
            <Route path="users" element={<Users />} />
            <Route path="rooms" element={<Room />} />
            <Route path="bookings" element={<Bookings />} />
          </Routes>
         
        </Router>
      </Provider>
    </div>
  );
}

export default App;
