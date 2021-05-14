import axios from "axios";
import React, { useState } from "react";
import "./App.css";

//Importing Components..
import Form from "./Components/Form";

const App = () => {
  const [text, setText] = useState("");
  const [mytodos, setMyTodos] = useState([]);
  const [todosAPI, setTodosAPI] = useState([]);

  const getTodosAPI = async () => {
    let { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    setTodosAPI(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500  ">
      <header className="text-center p-10">
        <h1 className="todo text-4xl font-semibold text-white   ">
          React Todo List
        </h1>
      </header>
      <Form
        todosAPI={todosAPI}
        getTodosAPI={getTodosAPI}
        inputText={text}
        setInputText={setText}
        mytodos={mytodos}
        setMyTodos={setMyTodos}
        setTodosAPI={setTodosAPI}
      />
    </div>
  );
};
export default App;
