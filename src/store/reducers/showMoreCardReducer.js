import { CARD_HIDDEN, CARD_SHOWN } from "../actions/actions";

const initialState = [];

export const showMoreCard = (state = initialState, action) => {
  switch (action.type) {
    case CARD_SHOWN:
      return {
        ...state,
        isCardShown: true,
      };
    case CARD_HIDDEN:
      return {
        ...state,
        isCardShown: false,
      };
    default:
      return state;
  }
};
