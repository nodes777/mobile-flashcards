import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { bindActionCreators } from "redux";

import { connect } from "react-redux";
import { getDecks, saveDeckTitle } from "../utils/helpers";
//import { defaultState } from "../exampleDataShape";

import { receiveDecks } from "../actions/actions";

class DeckList extends React.Component {
	state = {
		loading: true
	};
	componentDidMount() {
		const { dispatch } = this.props;
		// console.log(defaultState);
		// saveDeckTitle(defaultState).then(decks => {
		//   console.log(decks);
		// });
		getDecks()
			.then(results => {
				const decks = JSON.parse(results);
				dispatch(receiveDecks(decks));
			})
			.then(this.setState({ loading: false }));
	}
	render() {
		console.log("Rendering DeckList ");
		console.log(Object.keys(this.props.decks));
		return (
			<View>
				<Text>Deck List</Text>
				{Object.keys(this.props.decks).map((deckTitle, i) => {
					return <Text key={i}>{deckTitle}</Text>;
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
