import { LOADED, LOADING } from "../actions/actions";

export const loading = () => ({
  type: LOADING,
});

export const loaded = () => ({
  type: LOADED,
});
