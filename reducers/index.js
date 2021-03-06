import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from "../actions/actions";

function reducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      console.log("reducer: RECEIVE_DECKS");
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      console.log("reducer: ADD_DECK");
      console.log(action);
      // because we're getting the entire db from AsyncStorage, I just replace it here, no need to include the previous state.
      return {
        ...action.newDeckSet
      };
    case ADD_CARD:
      console.log("reducer: ADD_CARD");
      console.log(action);
      return {
        ...state,
        [action.deckTitle]: {
          ...state[action.deckTitle],
          questions: state[action.deckTitle].questions.concat([action.question])
        }
      };
    default:
      return state;
  }
}

export default reducer;
