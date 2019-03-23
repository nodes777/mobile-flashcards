import React from "react";
import { StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import { TabNavigator, StackNavigator } from "react-navigation";
import { connect } from "react-redux";

import { getDecks, saveDeckTitle, setInitialData } from "../utils/helpers";
import { purple, white } from "../utils/colors";
import { defaultState } from "../exampleDataShape";

import { receiveDecks } from "../actions/actions";
import { DeckView } from "./DeckView";

// need to render DeckListNavigator somewhere
const DeckListNavigator = createStackNavigator({
	Home: {
		screen: DeckList
	},
	DeckView: {
		screen: DeckView,
		navigationOptions: {
			headerTintColor: white,
			headerStyle: {
				backgroundColor: purple
			}
		}
	}
});

class DeckList extends React.Component {
	componentDidMount() {
		const { dispatch } = this.props;
		setInitialData(defaultState).then(decks => {
			console.log(decks);
		});
		getDecks().then(results => {
			const decks = JSON.parse(results);
			dispatch(receiveDecks(decks));
		});
	}
	render() {
		console.log("Rendering DeckList ");
		const { decks } = this.props;
		console.log(decks);
		return (
			<ScrollView>
				<Text>Deck List</Text>
				{Object.keys(decks).map((deckTitle, i) => {
					return (
						<TouchableOpacity
							key={i}
							onPress={() =>
								this.props.navigation.navigate(
									"DeckView",
									decks[deckTitle]
								)
							}
						>
							{deckTitle} {decks[deckTitle].questions.length}
						</TouchableOpacity>
					);
				})}
			</ScrollView>
		);
	}
}

function mapStateToProps(state) {
	return {
		decks: state
	};
}

export default connect(mapStateToProps)(DeckList);
