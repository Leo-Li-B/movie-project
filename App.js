import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import axios from "axios";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "./components/SearchBar";
import AppHeader from "./components/AppHeader";
import ListScreen from "./components/screens/ListScreen";
import SearchScreen from "./components/screens/SearchScreen";
import NowPlayingList from "./components/NowPlayingList";

import Movies from "./components/screens/Movies";

const API_KEY = "8367b1854dccedcfc9001204de735470";

export class Search extends Component {
  render() {
    // const { loading, movie_data } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: "#fff", height: 30 }}>
        <AppHeader headerText="Search" />
        <SearchScreen />
      </View>
    );
  }
}
export class NowPlaying extends Component {
  state = {
    NowPlaying_data: []
  };
  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ NowPlaying_data: data.results });
      });
  }

  render() {
    const { NowPlaying_data } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: "#ddd", height: 30 }}>
        <AppHeader headerText="Now Playing" />

        <NowPlayingList NowPlaying_data={NowPlaying_data} />
      </View>
    );
  }
}
export class Lists extends Component {
  render() {
    return <ListScreen />;
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    NowPlaying: {
      screen: NowPlaying,
      navigationOptions: {
        tabBarLabel: "Now Playing",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-star" color={tintColor} size={24} />
        )
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarLabel: "Search",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-search" color={tintColor} size={24} />
        )
      }
    },
    Lists: {
      screen: Lists,
      navigationOptions: {
        tabBarLabel: "List",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-list" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    navigationOptions: {
      tabBarVisible: true
    },
    tabBarOptions: {
      activeTintColor: "#3498DB",
      inactiveTintColor: "grey"
    }
  }
);

export default createAppContainer(TabNavigator);
