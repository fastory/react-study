import * as React from "react";
import { AddTodoCom} from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";
import FilterLink from "./FilterLink";

export default class PageTodo extends React.Component<any,any> {
  render() {
    return (
      <div>
        <AddTodoCom />
        <FilterLink />
        <VisibleTodoList />
      </div>
    );
  }
}
