import React, { useReducer } from "react";
import {
  ALL_TODOS,
  SET_INPUT_TEXT,
  SET_TODOSAPI,
  SET_TEXT_EMPTY,
  DELETE_MYTODOS,
  DELETE_TODOSAPI,
} from "../types";

import axios from "axios";
//Importing Components...
import TodoContext from "./TodoContext";
import TodoReducer from "./TodoReducer";

const TodoState = (props) => {
  const initialState = {
    inputText: "",
    mytodos: [],
    todosAPI: [],
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const getTodosAPI = async () => {
    let { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    dispatch({ type: ALL_TODOS, payload: data });
  };

  const setInputText = (e) => {
    dispatch({ type: SET_INPUT_TEXT, payload: e.target.value });
  };

  const submitHandler = (inputText, mytodos) => {
    if (inputText !== "") {
      let todoItem = {
        text: inputText,
        key: Date.now(),
      };
      dispatch({
        type: SET_TODOSAPI,
        payload: mytodos.concat(todoItem), //Can add .reverse() after todoItem to display items pile up on each other..
      });
      dispatch({ type: SET_TEXT_EMPTY, payload: "" });
    }
  };

  const deleteHandler = (todo, mytodos, todosAPI) => {
    dispatch({
      type: DELETE_MYTODOS,
      payload: mytodos.filter((element) => element.key !== todo.key),
    });
    dispatch({
      type: DELETE_TODOSAPI,
      payload: todosAPI.filter((element) => element.id !== todo.id),
    });
  };

  return (
    <TodoContext.Provider
      value={{
        ...state,
        getTodosAPI,
        submitHandler,
        setInputText,
        deleteHandler,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
export default TodoState;
