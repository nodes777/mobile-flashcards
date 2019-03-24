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
import { saveCardToDeck } from "../utils/helpers";

import { addCard } from "../actions/actions";

class NewCard extends React.Component {
	state = {
		question: "",
		answer: ""
	};
	render() {
		console.log("NewCard: ");
		console.log(this.props);
		return (
			<KeyboardAvoidingView>
				<Text>New Card</Text>
				<TextInput
					style={{
						height: 40,
						borderColor: "gray",
						borderWidth: 1
					}}
					onChangeText={question => this.setState({ question })}
					value={this.state.question}
				/>
				<TextInput
					style={{
						height: 40,
						borderColor: "gray",
						borderWidth: 1
					}}
					onChangeText={answer => this.setState({ answer })}
					value={this.state.answer}
				/>
				<TouchableOpacity
					onPress={() => {
						//updates redux first
						dispatch(
							addCard(this.state, this.props.deck.title)
							//then update AsyncStorage
						).then(updatedState => {
							saveCard(updatedState);
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

export default connect(
	mapStateToProps
	// Implement map dispatch to props
)(NewCard);
