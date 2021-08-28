import { CARD_HIDDEN, CARD_SHOWN } from "../actions/actions";

export const cardShown = (index) => ({
  type: CARD_SHOWN,
  payload: index,
});

export const cardHidden = (index) => ({
  type: CARD_HIDDEN,
});
