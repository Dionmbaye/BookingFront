import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { store } from "./app/store";
import Bookings from "./components/Bookings";
import CreateRoom from "./components/CreateRoom";
import CreateUser from "./components/CreateUser";
import BookRoom from "./components/BookRoom";
import Rooms from "./components/Rooms";
import Users from "./components/Users";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <Rooms />
        <CreateRoom/> */}
        <Users />
        <CreateUser />
        <BookRoom />
        <Bookings />
      </Provider>
    </div>
  );
}

export default App;
