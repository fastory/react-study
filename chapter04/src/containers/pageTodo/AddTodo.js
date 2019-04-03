import React, { Component } from "react";
import { connect } from 'react-redux'
import { addTodo } from '../../actions'
import Todo from "../../components/Todo";

class AddTodo extends Component {
  handleSubmit = values => {
    this.props.dispatch(addTodo(values.name));
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

export default connect()(AddTodo)
