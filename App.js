import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { TabNavigator, StackNavigator } from "react-navigation";

import reducer from "./reducers";
import { logger } from "./middleware/logger";

import TopStatusBar from "./components/TopStatusBar";
import { purple, white } from "./utils/colors";
import { DeckList } from "./components/DeckList";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, applyMiddleware(logger))}>
        <View style={styles.container}>
          <TopStatusBar backgroundColor={purple} />
          <DeckList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
