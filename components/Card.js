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

class Card extends React.Component {
	render() {
		console.log("Card: ");
		console.log(this.props);
		console.log(this.props.navigation.state.params);
		const deckTitle = this.props.navigation.state.params;
		const deck = this.props.state[deckTitle];
		const question = deck.questions[0].question;
		const answer = deck.questions[0].answer;
		const cardTotal = deck.questions.length;
		return (
			<KeyboardAvoidingView style={styles.container}>
				<Text>Card</Text>
				<Text>{cardTotal}</Text>
				<Text>{question}</Text>
				<Text>{answer}</Text>
				<TouchableOpacity>
					<Text style={styles.buttonText}>Show Answer</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={styles.button}>
						<Text style={styles.buttonText}>Next</Text>
					</View>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		);
	}
}
function mapStateToProps(state) {
	return {
		state
	};
}
export default connect(mapStateToProps)(Card);
