import axios from "../../axios";
import { loaded, loading } from "./loading";
import { ADD_SEARCH, CLEAR_SEARCH, ERROR_SEARCH } from "../actions/actions";

const clearSearch = () => ({
  type: CLEAR_SEARCH,
});

const addError = (msg) => ({
  type: ERROR_SEARCH,
  payload: msg,
});

const addResponse = (response) => ({
  type: ADD_SEARCH,
  payload: response,
});

export const searchByName = (name, type) => {
  return async (dispatch) => {
    dispatch(clearSearch());
    dispatch(loading());
    try {
      //
      const response = await axios.post(
        "/find",
        JSON.stringify({
          type,
          text: name,
        })
      );
      //TODO:dispatch array!!!!
      console.log(response.data);
      dispatch(addResponse(response.data));
      // setTimeout(() => {
      //   dispatch(loaded());
      // }, 3000);
      // dispatch(addResponseToStore(response.data));
    } catch (error) {
      console.error(error);
      dispatch(addError("Произошла ошибка"));
    }
    dispatch(loaded());
  };
};
