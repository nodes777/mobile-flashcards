import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from "../actions/actions";

function reducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      };
    case ADD_CARD:
      return {
        ...state,
        [action.deckTitle]: {
          ...state[action.deckTitle],
          ...action.card
        }
      };
    default:
      return state;
  }
}

export default reducer;
