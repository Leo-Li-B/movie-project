import React, { Component } from "react";
import { View, Text } from "react-native";
import ButtonGroup1 from "../ButtonGroup1";
import AppHeader from "../AppHeader";
import { ButtonGroup } from "react-native-elements";

import People from "./People";
import Movies from "./Movies";
import TvShows from "./TvShows";
import { createStackNavigator, createAppContainer } from "react-navigation";

export class SearchScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#ddd", height: 30 }}>
        <SearchStack />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Movies: {
    screen: Movies
  },
  People: {
    screen: People
  },
  TvShows: {
    screen: TvShows
  }
});

const SearchStack = createAppContainer(AppNavigator);

export default SearchScreen;
