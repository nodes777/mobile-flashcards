import React from "react";
import { connect } from "react-redux";
import {
	TextInput,
	View,
	TouchableOpacity,
	KeyboardAvoidingView,
	StyleSheet,
	Text
} from "react-native";

class DeckView extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<Text>{this.props.deckName}</Text>
				<Text>{this.props.numberOfCards}</Text>
				<TouchableOpacity>Add Card</TouchableOpacity>
				<TouchableOpacity>Start</TouchableOpacity>
			</View>
		);
	}
}

function mapStateToProps(state) {
	return {};
}
export default connect(
	mapStateToProps
	// Implement map dispatch to props
)(DeckView);
