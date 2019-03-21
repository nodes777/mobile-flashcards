import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
// import { bindActionCreators } from "redux";

import { connect } from "react-redux";
import { getDecks, saveDeckTitle, setInitialData } from "../utils/helpers";
import { defaultState } from "../exampleDataShape";

import { receiveDecks } from "../actions/actions";

class DeckList extends React.Component {
	state = {
		loading: true
	};
	componentDidMount() {
		const { dispatch } = this.props;
		setInitialData(defaultState).then(decks => {
			console.log(decks);
		});
		getDecks()
			.then(results => {
				const decks = JSON.parse(results);
				dispatch(receiveDecks(decks));
			})
			.then(this.setState({ loading: false }));
	}
	render() {
		console.log("Rendering DeckList ");
		const { decks } = this.props;
		return (
			<ScrollView>
				<Text>Deck List</Text>
				{Object.keys(decks).map((deckTitle, i) => {
					return (
						<Text key={i}>
							{deckTitle} {/*decks[deckTitle].questions.length*/}
						</Text>
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
