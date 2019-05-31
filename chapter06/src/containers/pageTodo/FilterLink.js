import React, { Component } from "react";
import { connect } from "react-redux";
import { setVisibilityFilter, VisibilityFilters } from "../../actions";
import FilterBtn from "../../components/Todo/FilterBtn";

class FilterLink extends Component {
  filterHandle = filter => {
    this.props.changeFilter(filter);
    // input.value = ''
  };
  render() {
    const arr = [
      { text: "显示全部", filter: VisibilityFilters.SHOW_ALL },
      { text: "显示已完成", filter: VisibilityFilters.SHOW_COMPLETED },
      { text: "显示未完成", filter: VisibilityFilters.SHOW_ACTIVE }
    ];
    return (
      <div>
        <FilterBtn arr={arr} filterHandle={this.filterHandle} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => {
    dispatch(setVisibilityFilter(filter));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink);
