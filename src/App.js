import React, { Component } from "react";
import "./App.css";

//Importing Components..
import Form from "./Components/Form";

class App extends Component {
  render() {
    return (
      <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500  ">
        <header className="text-center p-10">
          <h1 className="todo text-4xl font-semibold text-white   ">
            React Todo List
          </h1>
        </header>
        <Form />
      </div>
    );
  }
}
export default App;
