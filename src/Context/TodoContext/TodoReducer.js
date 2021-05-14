import {
  ALL_TODOS,
  DELETE_TODOSAPI,
  SET_INPUT_TEXT,
  DELETE_MYTODOS,
  SET_TEXT_EMPTY,
  SET_TODOSAPI,
} from "../types";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ALL_TODOS:
      return {
        ...state,
        todosAPI: payload,
      };
    case SET_TODOSAPI:
      return {
        ...state,
        mytodos: payload,
      };
    case SET_TEXT_EMPTY:
      return {
        ...state,
        inputText: payload,
      };
    case SET_INPUT_TEXT:
      return {
        ...state,
        inputText: payload,
      };
    case DELETE_MYTODOS:
      return {
        ...state,
        mytodos: payload,
      };
    case DELETE_TODOSAPI:
      return {
        ...state,
        todosAPI: payload,
      };
    default:
      return state;
  }
};
export default reducer;
