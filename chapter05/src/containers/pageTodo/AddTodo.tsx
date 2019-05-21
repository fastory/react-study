import * as React from "react";
// import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AddTodo as AddTodoAction }  from "../../actions";
import { TodoCom } from "../../components/Todo";

interface todoProps {
  addTodo?: any;
}
class AddTodo extends React.Component<todoProps, any> {
  public handleSubmit = (values: string) => {
    this.props.addTodo(values);
    // input.value = ''
  };
  public render () {
    return (
      <div>
        <TodoCom handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    addTodo: (name: string) => dispatch(AddTodoAction(name))
  };
};
// export default connect(
//     null,
//     mapDispatchToProps
// )(PageTodo);

export const AddTodoCom = connect(
  null,
  mapDispatchToProps
)(AddTodo);

