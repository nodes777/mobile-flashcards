import { AsyncStorage } from "react-native";
// import reducer from "../reducers";
import { Notifications, Permissions } from "expo";

const NOTIFICATION_KEY = "mobile-flashcards:notifications";
export const DECKS_STORAGE_KEY = "mobile-flashcards:decks";

export const getDecks = () => {
	//return all of the decks along with their titles, questions, and answers.
	return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(data => {
		return JSON.parse(data);
	});
};
export const getDeck = id => {
	//take in a single id argument and return the deck associated with that id.
};
export const saveDeckTitle = title => {
	//take in a single title argument and add it to the decks.
	const data = {
		[title]: {
			questions: [],
			title: title
		}
	};
	console.log("saveDeckTitle");
	console.log(data);
	return AsyncStorage.mergeItem(
		DECKS_STORAGE_KEY,
		JSON.stringify(data),
		err => {
			console.log(err);
		}
	)
		.then(() => AsyncStorage.getItem(DECKS_STORAGE_KEY))
		.then(result => {
			console.log("end saveDeckTitle");
			console.log(JSON.parse(result));
			return JSON.parse(result);
		});
};
export const saveCardToDeck = action => {
	// currently getting the action, not the updated state from arg here.
	//will add the card to the list of questions for the deck with the associated title.
	console.log("saveCardToDeck action: ");
	console.log(action);
	return AsyncStorage.getItem(DECKS_STORAGE_KEY)
		.then(storage => {
			console.log(storage);
			const oldStorage = JSON.parse(storage);
			console.log(oldStorage);
			const newStorage = {
				...oldStorage,
				[action.deckTitle]: {
					...oldStorage[action.deckTitle],
					questions: oldStorage[action.deckTitle].questions.concat([
						action.question
					])
				}
			};
			return newStorage;
		})
		.then(newStorage => {
			AsyncStorage.mergeItem(
				DECKS_STORAGE_KEY,
				JSON.stringify(newStorage),
				err => {
					console.log(err);
				}
			).then(result => {
				console.log("saveCardToDeck getItem: ");
				console.log(JSON.parse(result));
				return JSON.parse(result);
			});
		});
};

export const setInitialData = data => {
	return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
};

function createNotification() {
	return {
		title: "Study Today!",
		body: "👋 don't forget to study today!",
		ios: {
			sound: true
		},
		android: {
			sound: true,
			priority: "high",
			sticky: false,
			vibrate: true
		}
	};
}

export function setLocalNotification() {
	console.log("setLocalNotification");
	AsyncStorage.getItem(NOTIFICATION_KEY)
		.then(JSON.parse)
		.then(data => {
			if (data === null) {
				Permissions.askAsync(Permissions.NOTIFICATIONS).then(
					({ status }) => {
						console.log(status);
						if (status === "granted") {
							Notifications.cancelAllScheduledNotificationsAsync();

							let tomorrow = new Date();
							tomorrow.setSeconds(tomorrow.getSeconds() + 1);

							Notifications.scheduleLocalNotificationAsync(
								createNotification(),
								{
									time: tomorrow,
									repeat: "day"
								}
							);

							AsyncStorage.setItem(
								NOTIFICATION_KEY,
								JSON.stringify(true)
							);
						}
					}
				);
			}
		});
}

export function clearLocalNotification() {
	return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
		Notifications.cancelAllScheduledNotificationsAsync()
	);
}
