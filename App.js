import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import thunk from "redux-thunk";

import reducer from "./reducers";
import { logger } from "./middleware/logger";

import TopStatusBar from "./components/TopStatusBar";
import { purple, white } from "./utils/colors";
import DeckList from "./components/DeckList";
import NewDeck from "./components/NewDeck";
import DeckView from "./components/DeckView";
import NewCard from "./components/NewCard";
import Card from "./components/Card";

const store = createStore(reducer, applyMiddleware(thunk, logger));
export default class App extends React.Component {
  render() {
    console.log(DeckListNavigator);

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TopStatusBar backgroundColor={purple} />
          <Tabs />
        </View>
      </Provider>
    );
  }
}

const stackNavOptions = {
  headerTintColor: white,
  headerStyle: {
    backgroundColor: purple
  }
};
export const DeckListNavigator = createStackNavigator({
  Home: {
    screen: DeckList
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: stackNavOptions
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: stackNavOptions
  },
  Card: {
    screen: Card,
    navigationOptions: stackNavOptions
  }
});

const Tabs = createBottomTabNavigator({
  DeckList: {
    screen: DeckList
  },
  NewDeck: {
    screen: NewDeck
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
