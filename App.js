import React, { Component } from "react";
import { View } from "react-native";
import SearchBar from "./components/SearchBar";
import AppHeader from "./components/AppHeader";

const API_KEY = "8367b1854dccedcfc9001204de735470";

export default class App extends Component {
  onPressSearch = term => {
    console.log(term);
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#ddd", height: 30 }}>
        <AppHeader headerText="Movie App" />
        <SearchBar onPressSearch={this.onPressSearch} />
      </View>
    );
  }
}

//Header
//SearchBar
//List Movies -> listmovieitem
