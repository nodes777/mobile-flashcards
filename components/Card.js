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
	buttonCorrect: {
		marginBottom: 30,
		width: 260,
		alignItems: "center",
		backgroundColor: "#008000"
	},
	buttonIncorrect: {
		marginBottom: 30,
		width: 260,
		alignItems: "center",
		backgroundColor: "#7f0000"
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
		console.log(this.props.navigation.state.params);
		const deckTitle = this.props.navigation.state.params.deckTitle;
		const deck = this.props.state[deckTitle];
		const cardNumber = this.props.navigation.state.params.cardNumber + 1;
		const cardTotal = deck.questions.length + 1;

		const endOfDeck = cardNumber >= cardTotal;
		console.log("cardNumber  " + cardNumber);
		console.log("cardTotal " + cardTotal);
		console.log("endOfDeck " + endOfDeck);
		let question = null;
		let answer = null;
		if (!endOfDeck) {
			question = deck.questions[cardNumber - 1].question;
			answer = deck.questions[cardNumber - 1].answer;
		}
		console.log(question);
		console.log(answer);
		const score = this.props.navigation.state.params.score || {
			correct: 0,
			incorrect: 0
		};
		return (
			<KeyboardAvoidingView style={styles.container}>
				<Text>Card</Text>
				<Text>
					{cardNumber}/{cardTotal - 1}
				</Text>

				{!endOfDeck ? (
					<View>
						<Text>{question}</Text>
						{this.state.answerIsShowing && <Text>{answer}</Text>}
						<TouchableOpacity
							onPress={() => {
								this.setState({
									answerIsShowing: !this.state.answerIsShowing
								});
							}}
						/>
						{!this.state.answerIsShowing ? (
							<Text style={styles.buttonText}>Show Answer</Text>
						) : (
							<Text style={styles.buttonText}>Hide Answer</Text>
						)}
						<TouchableOpacity
							style={styles.buttonIncorrect}
							onPress={() => {
								// add incorrect for this deck
								score.incorrect = score.incorrect++;
								return this.props.navigation.push("Card", {
									deckTitle: deckTitle,
									cardNumber: cardNumber,
									score: score
								});
							}}
						>
							<View>
								<Text style={styles.buttonText}>Incorrect</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.buttonCorrect}
							onPress={() => {
								// add correct for this deck
								score.correct = score.correct++;
								return this.props.navigation.push("Card", {
									deckTitle: deckTitle,
									cardNumber: cardNumber,
									score: score
								});
							}}
						>
							<View>
								<Text style={styles.buttonText}>Correct</Text>
							</View>
						</TouchableOpacity>
					</View>
				) : (
					<View>
						<Text>
							{score.correct}/{cardTotal}
						</Text>
						<TouchableOpacity
							style={styles.button}
							onPress={() => {
								return this.props.navigation.navigate("Home");
							}}
						>
							<View>
								<Text style={styles.buttonText}>
									Back to Home
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.button}
							onPress={() => {
								return this.props.navigation.navigate("Card", {
									deckTitle: deckTitle,
									cardNumber: 0
								});
							}}
						>
							<View>
								<Text style={styles.buttonText}>Restart</Text>
							</View>
						</TouchableOpacity>
					</View>
				)}
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
