import React, { Component } from "react";
import { connect } from 'react-redux'
import { toggleTodo } from '../../actions'
import TodoList from '../../components/Todo/TodoList'
import { VisibilityFilters } from '../../actions'

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
@connect(
  state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }),
  { toggleTodo }
)
export default class  extends Component {
  complete = id => {
    this.props.toggleTodo(id);
  };
  render() {
    const todos = this.props.todos;
    return (
      // <div>水电费</div>
      <TodoList todos={todos} complete={this.complete} />
    );
  }
}


