import { AsyncStorage } from "react-native";
// import reducer from "../reducers";

export const DECKS_STORAGE_KEY = "mobile-flashcards:decks";

export const getDecks = () => {
	//return all of the decks along with their titles, questions, and answers.
	return AsyncStorage.getItem(DECKS_STORAGE_KEY);
};
export const getDeck = id => {
	//take in a single id argument and return the deck associated with that id.
};
export const saveDeckTitle = title => {
	console.log(title);
	//take in a single title argument and add it to the decks.
	const data = { [title]: "" };
	console.log(data);
	return AsyncStorage.mergeItem(
		DECKS_STORAGE_KEY,
		JSON.stringify(data),
		err => {
			console.log(err);
		}
	);
};
export const addCardToDeck = (title, card) => {
	//will add the card to the list of questions for the deck with the associated title.
};

export const setInitialData = data => {
	return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
};

// export const saveDeckTitle = async title => {
// 	console.log(title);
// 	//take in a single title argument and add it to the decks.
// 	const data = { [title]: "" };
// 	console.log(data);
// 	return AsyncStorage.mergeItem(
// 		DECKS_STORAGE_KEY,
// 		JSON.stringify(data),
// 		err => {
// 			console.log(err);
// 		}
// 	);
// };
