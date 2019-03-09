import React, { Component } from "react";
import { View, Text } from "react-native";

import AppHeader from "../AppHeader";
import Popular from "./Popular";
import TopRated from "./TopRated";
import Upcoming from "./Upcoming";
import { createStackNavigator, createAppContainer } from "react-navigation";

export class ListScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#ddd", height: 30 }}>
        <AppHeader headerText="List" />

        <ListStack />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Popular: {
    screen: Popular
  },
  TopRated: {
    screen: TopRated
  },
  Upcoming: {
    screen: Upcoming
  }
});

const ListStack = createAppContainer(AppNavigator);

export default ListScreen;
