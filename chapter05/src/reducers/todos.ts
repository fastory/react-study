import * as constants from "../constants";
import * as action from "../actions";

const todos = (
  // state: Array<object> = [],
  state: Array<object>=[],
  action: action.todoAction
): Array<object> => {
  switch (action.type) {
    case constants.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: action.complete
        }
      ];
    case constants.TOGGLE_TODO:
      return state.map((todo: any) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos
