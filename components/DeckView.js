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

class DeckView extends React.Component {
	render() {
		const { title, questions } = this.props.navigation.state.params;
		return (
			<View style={styles.container}>
				<Text>{title}</Text>
				<Text>{questions.length} Cards</Text>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						return this.props.navigation.navigate("NewCard", title);
					}}
				>
					<Text style={styles.buttonText}>Add Card</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						return this.props.navigation.navigate("Card", title);
					}}
				>
					<Text style={styles.buttonText}>Start</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default connect()(DeckView);
