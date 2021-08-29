import axiosBackend from "../../axios";
import axios from 'axios'
import { loaded, loading } from "./loading";
import { ADD_SEARCH, CLEAR_SEARCH, ERROR_SEARCH, ADD_SUPPLIER_DESCRIPTION } from "../actions/actions";

const supplierURL = process.env.REACT_APP_METAPROM_API_URL;

const clearSearch = () => ({
  type: CLEAR_SEARCH,
});

const addError = (msg) => ({
  type: ERROR_SEARCH,
  payload: msg,
});

export const addResponse = (response) => ({
  type: ADD_SEARCH,
  payload: response,
});

export const addSupplierDescription = (id, description) => ({
  type: ADD_SUPPLIER_DESCRIPTION,
  payload: {id,description},
});


export const searchByName = (name, type) => {
  return async (dispatch) => {
    dispatch(clearSearch());
    dispatch(loading());
    try {
      //
      const response = await axiosBackend.post(
        "/find",
        JSON.stringify({
          type,
          text: name,
        })
      );
      //TODO:dispatch array!!!!
      console.log(response.data);
      dispatch(addResponse(response.data));
    } catch (error) {
      console.error(error);
      dispatch(addError("Произошла ошибка"));
    }
    dispatch(loaded());
  };
};

// id example id577623-avers-ooo
export const searchSupplierByID = (id) => {
  return async (dispatch) => {
    // dispatch(clearSearch());
    dispatch(loading());
    try {
      const response = await axios.get(supplierURL+"?id="+id);
      console.log(response.data);
      dispatch(addSupplierDescription(id, response.data?.company));
    } catch (error) {
      console.error(error);
      dispatch(addError("Произошла ошибка"));
    }
    dispatch(loaded());
  };
};
