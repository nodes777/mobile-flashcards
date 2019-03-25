import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createStackNavigator } from "react-navigation";
import thunk from "redux-thunk";

import reducer from "./reducers";
import { logger } from "./middleware/logger";

import TopStatusBar from "./components/TopStatusBar";
import { purple, white } from "./utils/colors";
import DeckList from "./components/DeckList";
import NewDeck from "./components/NewDeck";
import DeckView from "./components/DeckView";

const store = createStore(reducer, applyMiddleware(thunk, logger));
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TopStatusBar backgroundColor={purple} />
          <DeckListNavigator />
          <NewDeck />
        </View>
      </Provider>
    );
  }
}

export const DeckListNavigator = createStackNavigator({
  Home: {
    screen: DeckList
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  }
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
