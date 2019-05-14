import React, { Component } from "react";
import AddTodo from './AddTodo'
import VisibleTodoList from "./VisibleTodoList";
import FilterLink from "./FilterLink";


export default class pageTodo  extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <FilterLink />
        <VisibleTodoList />
      </div>
    );
  }
}
