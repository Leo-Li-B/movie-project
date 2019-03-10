import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import axios from "axios";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "./components/SearchBar";
import AppHeader from "./components/AppHeader";
import ListScreen from "./components/screens/ListScreen";
import SearchScreen from "./components/screens/SearchScreen";
import MovieList from "./components/MovieList";

import Movies from "./components/screens/Movies";

const API_KEY = "8367b1854dccedcfc9001204de735470";

export class Search extends Component {
  // state = {
  //   loading: false,
  //   movie_data: []
  // };

  // onPressSearch = term => {
  //   this.movieSearch(term);
  // };
  // movieSearch = async term => {
  //   const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${term}&include_adult=false`;

  //   const api_call = await fetch(url);

  //   const data = await api_call.json();

  //   this.setState({
  //     movie_data: data.results
  //   });
  // };

  // axiosSearch = term => {
  //   this.setState({ loading: true });
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${term}&include_adult=false`
  //     )
  //     .then(res => {
  //       const movie_data = res.data;

  //       this.setState({ loading: false, movie_data: movie_data });
  //       console.log(movie_data);
  //     });
  // };

  render() {
    // const { loading, movie_data } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: "#fff", height: 30 }}>
        <AppHeader headerText="Search" />
        {/* <SearchBar loading={loading} onPressSearch={this.onPressSearch} /> */}
        <SearchScreen />
        {/* <MovieList movie_data={movie_data} /> */}
      </View>
    );
  }
}
export class NowPlaying extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#ddd", height: 30 }}>
        <AppHeader headerText="Now Playing" />
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
