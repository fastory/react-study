import * as  React from "react";
import { connect } from 'react-redux'
import { ToggleTodo } from '../../actions'
import TodoList from '../../components/Todo/TodoList'
import { VisibilityFilter, VisibilityFilters, filterAction} from '../../actions'

const getVisibleTodos = (todos: any, filter: VisibilityFilter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t:any) => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t: any) => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
interface visibleProps{
  todos:Array<object>;
  completeId?: (id:number)=> void;
}

class VisibleList extends React.Component<visibleProps,any> {
  complete = (id:number) =>{
    this.props.completeId(id);
  }
  render() {
    const todos = this.props.todos;
    return (
      // <div>水电费</div>
      <TodoList todos={todos} complete={this.complete} />
    );
  }
}
const mapStateToProps = (state:any) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch:any) => ({
  completeId: (id:number) => {
    dispatch(ToggleTodo(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleList)


