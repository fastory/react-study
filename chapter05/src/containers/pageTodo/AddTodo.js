import React, { Component } from "react";
import { connect } from 'react-redux'
import { AddTodo } from "../../actions";
import Todo from "../../components/Todo";

class PageTodo extends Component {
  handleSubmit = values => {
    this.props.dispatch(AddTodo(values.name));
    // input.value = ''
  };
  render() {
    return (
      <div>
        <Todo handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default connect()(PageTodo);
