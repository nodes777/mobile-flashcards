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
	state = {
		answerIsShowing: false
	};
	render() {
		console.log("Card: ");
		const deckTitle = this.props.navigation.state.params.deckTitle;
		const deck = this.props.state[deckTitle];
		const questionNumber = this.props.navigation.state.params.cardNumber;
		const question = deck.questions[questionNumber].question;
		const answer = deck.questions[questionNumber].answer;
		const cardTotal = deck.questions.length;
		return (
			<KeyboardAvoidingView style={styles.container}>
				<Text>Card</Text>
				<Text>
					{questionNumber + 1}/{cardTotal}
				</Text>
				<Text>{question}</Text>
				{this.state.answerIsShowing && <Text>{answer}</Text>}
				<TouchableOpacity
					onPress={() => {
						this.setState({
							answerIsShowing: !this.state.answerIsShowing
						});
					}}
				>
					{!this.state.answerIsShowing ? (
						<Text style={styles.buttonText}>Show Answer</Text>
					) : (
						<Text style={styles.buttonText}>Hide Answer</Text>
					)}
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						return this.props.navigation.push("Card", {
							deckTitle: deckTitle,
							cardNumber: questionNumber + 1
						});
					}}
				>
					{!(questionNumber + 1 === cardTotal) && (
						<View style={styles.button}>
							<Text style={styles.buttonText}>Next</Text>
						</View>
					)}
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
