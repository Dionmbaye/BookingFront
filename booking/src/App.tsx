import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { store } from "./app/store";
import Bookings from "./components/booking/Bookings";
import Room from "./components/room/Room";
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import NavBar from "./navbar";
import User from "./components/User/User";
import Booking from "./components/booking/Booking";

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
        <Router>
          <Routes>
            <Route path="/" element={<div><h1>Home Page <br/></h1></div>} />
            <Route path="users" element={<User />} />
            <Route path="rooms" element={<Room />} />
            <Route path="bookings" element={<Booking />} />
          </Routes>
         
        </Router>
      </Provider>
    </div>
  );
}

export default App;
