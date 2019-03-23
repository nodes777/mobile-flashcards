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
import { saveDeckTitle } from "../utils/helpers";

import { addDeckTitle } from "../actions/actions";

class NewDeck extends React.Component {
	state = {
		text: ""
	};
	render() {
		const { dispatch } = this.props;
		return (
			<KeyboardAvoidingView behavior="padding">
				<TextInput
					style={{
						height: 40,
						borderColor: "gray",
						borderWidth: 1
					}}
					onChangeText={text => this.setState({ text })}
					value={this.state.text}
				/>

				<TouchableOpacity
					onPress={() => {
						saveDeckTitle(this.state.text).then(results => {
							console.log(
								"Results after saveDeckTitle: " + results
							);
							dispatch(addDeckTitle(results));
						});
					}}
				>
					<View style={styles.button}>
						<Text style={styles.buttonText}>Save Deck</Text>
					</View>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		);
	}
}
function mapStateToProps(state) {
	return {};
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 60,
		alignItems: "center"
	},
	button: {
		marginBottom: 30,
		width: 260,
		alignItems: "center",
		backgroundColor: "#2196F3"
	},
	buttonText: {
		padding: 20,
		color: "white"
	}
});
export default connect(mapStateToProps)(NewDeck);
