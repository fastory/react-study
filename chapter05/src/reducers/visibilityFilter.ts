import * as constants from "../constants";
import { filterAction, VisibilityFilter,VisibilityFilters } from "../actions";

const visibilityFilter = (
  state: VisibilityFilter = VisibilityFilters.SHOW_ALL,
  action: filterAction
): VisibilityFilter => {
  switch (action.type) {
    case constants.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter
