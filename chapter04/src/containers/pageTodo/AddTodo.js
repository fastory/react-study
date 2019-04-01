import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'
import Todo from "../../components/Todo";


 
const AddTodo = ({ dispatch }) => {
  // handleSubmit = e => {
  //   e.preventDefault();
  //   if (!input.value.trim()) {
  //     return;
  //   }
  //   dispatch(addTodo(input.value));
  //   input.value = "";
  // };
  return (
    <div>
      <Todo
        handleSubmit={values => {
          dispatch(addTodo(values.name));
          // input.value = ''
        }}
      />
    </div>
  );
}


export default connect()(AddTodo)
