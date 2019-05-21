import * as  React from "react";
import { connect } from "react-redux";
import { setVisibilityFilter, VisibilityFilter, VisibilityFilters, filterAction} from "../../actions";
import FilterBtn from "../../components/Todo/FilterBtn";

interface FilterProps{
  btns:Array<object>;
  changeFilter?: (filter: VisibilityFilters)=> void;
}
class FilterLink extends React.Component<FilterProps> {
  filterHandle = (filter: VisibilityFilters) => {
    this.props.changeFilter(filter);
  };
  render() {
    const arr = [
      { text: "显示全部", filter: VisibilityFilters.SHOW_ALL },
      { text: "显示已完成", filter: VisibilityFilters.SHOW_COMPLETED },
      { text: "显示未完成", filter: VisibilityFilters.SHOW_ACTIVE }
    ];
    return (
      <div>
        <FilterBtn btns={arr} filterHandle={this.filterHandle} />
      </div>
    );
  }
}

const mapStateToProps = (state:any, ownProps:any) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch: any) => ({
  changeFilter: (filter: VisibilityFilters) => {
    dispatch(setVisibilityFilter(filter));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink);
