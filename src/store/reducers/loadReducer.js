import { LOADING, LOADED } from "../actions/actions";

const loadReducer = (state = false, action) => {
  switch (action.type) {
    case LOADING:
      return true;
    case LOADED:
      return false;
    default:
      return state;
  }
};

export default loadReducer;
