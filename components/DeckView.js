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
				<Text>{this.props.navigation.state.params.title}</Text>
				<Text>
					{this.props.navigation.state.params.questions.length}
				</Text>
				<TouchableOpacity>
					<Text>Add Card</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text>Start</Text>
				</TouchableOpacity>
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
