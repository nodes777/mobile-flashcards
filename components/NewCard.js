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
	buttonDisabled: {
		marginBottom: 30,
		width: 260,
		alignItems: "center",
		backgroundColor: "#808080"
	},
	buttonText: {
		padding: 20,
		color: "white"
	}
});

class NewCard extends React.Component {
	state = {
		question: "",
		answer: ""
	};
	render() {
		console.log("NewCard: ");
		console.log(this.props);
		return (
			<KeyboardAvoidingView style={styles.container}>
				<Text>New Card</Text>
				<Text>Question</Text>
				<TextInput
					style={{
						height: 40,
						borderColor: "gray",
						borderWidth: 1,
						width: 260
					}}
					onChangeText={question => this.setState({ question })}
					value={this.state.question}
				/>

				<Text>Answer</Text>
				<TextInput
					style={{
						height: 40,
						borderColor: "gray",
						borderWidth: 1,
						width: 260
					}}
					onChangeText={answer => this.setState({ answer })}
					value={this.state.answer}
				/>
				<TouchableOpacity
					disabled={this.state.text === ""}
					onPress={() => {
						//updates redux first
						const action = this.props.dispatch(
							addCard(
								this.state,
								this.props.navigation.state.params
							)
						);
						//then update AsyncStorage
						console.log("action in NewCard.js: ");
						console.log(action);
						saveCardToDeck(action);
						// Go Home
						this.props.navigation.navigate("Home");
					}}
				>
					<View
						style={
							this.state.question === "" ||
							this.state.answer === ""
								? styles.buttonDisabled
								: styles.button
						}
					>
						<Text style={styles.buttonText}>Save Card</Text>
					</View>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		);
	}
}

export default connect()(NewCard);
