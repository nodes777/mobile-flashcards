import React from "react";
import { StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { getDecks, saveDeckTitle, setInitialData } from "../utils/helpers";
import { purple, white } from "../utils/colors";
import { defaultState } from "../exampleDataShape";

import { receiveDecks } from "../actions/actions";

class DeckList extends React.Component {
	componentDidMount() {
		const { dispatch } = this.props;
		setInitialData(defaultState).then(decks => {
			// console.log(decks);
		});
		getDecks().then(results => {
			const decks = JSON.parse(results);
			dispatch(receiveDecks(decks));
		});
	}
	render() {
		const { decks } = this.props;
		console.log("rendering DeckList");
		///console.log(this.props);
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
							<Text>
								{deckTitle} {decks[deckTitle].questions.length}
							</Text>
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
