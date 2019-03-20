import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { connect } from "react-redux";

function mapStateToProps(state) {
	return {};
}

export class DeckList extends React.Component {
	render() {
		return <Text>Deck List</Text>;
	}
}

export default connect(mapStateToProps)(DeckList);
