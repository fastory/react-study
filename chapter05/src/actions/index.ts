import * as constants from "../constants";

let nextTodoId = 0;

interface AddTodo {
  type: constants.ADD_TODO;
  id: Number;
  text: String;
  complete:Boolean
}

interface ToggleTodo {
  type: constants.TOGGLE_TODO;
  id: Number;
}

export const AddTodo = (text: String): AddTodo => {
  return {
    type: constants.ADD_TODO,
    id: nextTodoId++,
    complete: false,
    text
  };
};

export const ToggleTodo = (id: Number) => ({
  type: "TOGGLE_TODO",
  id
});

export enum VisibilityFilters {
  SHOW_ALL = "SHOW_ALL",
  SHOW_COMPLETED = "SHOW_COMPLETED",
  SHOW_ACTIVE = "SHOW_ACTIVE",
};
export type VisibilityFilter = typeof VisibilityFilters.SHOW_ALL | VisibilityFilters.SHOW_ACTIVE |VisibilityFilters.SHOW_COMPLETED;

interface setVisibilityFilter {
  type: constants.SET_VISIBILITY_FILTER;
  id:number;
  filter: VisibilityFilter
}

export const setVisibilityFilter = (filter: VisibilityFilter) => ({
    type: constants.SET_VISIBILITY_FILTER,
    filter
});


export type todoAction = AddTodo | ToggleTodo;

export type filterAction = setVisibilityFilter;