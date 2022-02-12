import React from "react";
import { Provider } from "react-redux";
// import logo from "./logo.svg";
import "./App.css";
import { store } from "./app/store";
import Rooms from "./components/Rooms";

function App() {
  return (
    <div className="App">
      <Provider store={store()}>
        <Rooms />
      </Provider>
    </div>
  );
}

export default App;
