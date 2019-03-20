export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";

import { getDecks } from "../utils/helpers";

export function receiveDecks() {
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

export function handleRecieveDecks(dispatch) {
	return dispatch => {
		dispatch(getDecks());
	};
}