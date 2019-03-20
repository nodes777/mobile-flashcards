import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { bindActionCreators } from "redux";

import { connect } from "react-redux";
import { getDecks, saveDeckTitle } from "../utils/helpers";
//import { defaultState } from "../exampleDataShape";

import { receiveDecks } from "../actions/actions";

export class DeckList extends React.Component {
	componentDidMount() {
		const { dispatch } = this.props;
		// console.log(defaultState);
		// saveDeckTitle(defaultState).then(decks => {
		//   console.log(decks);
		// });
		getDecks().then(decks => {
			console.log(`Get Decks: \n${decks}`);
			dispatch(receiveDecks(decks));
		});
	}
	render() {
		console.log("Rendering DeckList " + JSON.stringify(this.props));
		return (
			<View>
				<Text>Deck List</Text>
				{Object.keys(this.props).map(deckTitle => {
					<Text>{deckTitle}</Text>;
				})}
			</View>
		);
	}
}

function mapStateToProps(state) {
	return {
		decks: state
	};
}

export default connect(mapStateToProps)(DeckList);
