import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { store } from "./app/store";
import Bookings from "./components/Bookings";
import CreateUser from "./components/CreateUser";
import BookRoom from "./components/BookRoom";
import Users from "./components/Users";
import Room from "./components/room/Room";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Room />
        <Users />
        <CreateUser />
        <BookRoom />
        <Bookings />
      </Provider>
    </div>
  );
}

export default App;
