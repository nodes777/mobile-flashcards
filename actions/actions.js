export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";

import { getDecks } from "../utils/helpers";

export function receiveDecks(decks) {
	console.log("receiveDecks Action");
	return {
		type: RECEIVE_DECKS,
		decks
	};
}

export function addDeck(entry) {
	return {
		type: ADD_ENTRY,
		entry
	};
}
export function addDeckTitle(newDeckSet) {
	console.log("addDeckTitle");
	console.log(newDeckSet);
	return {
		type: ADD_DECK,
		newDeckSet
	};
}
export function handleRecieveDecks(dispatch) {
	return dispatch => {
		dispatch(getDecks());
	};
}
