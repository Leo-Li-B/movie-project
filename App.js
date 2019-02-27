import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Header, Button } from "react-native-elements";

export default class App extends Component {
  state = { term: "" };

  render() {
    const { containerStyle, searchTextStyle, buttonStyle } = styles;
    return (
      <View style={{ flex: 1, backgroundColor: "#ddd", height: 30 }}>
        <Header
          centerComponent={{ text: "Movie Search", style: { color: "white" } }}
        />
        <View style={containerStyle}>
          <TextInput
            style={searchTextStyle}
            onChangeText={term => this.setState({ term })} //search term
            value={this.state.term}
          />

          <Button
            buttonStyle={buttonStyle}
            title="Search"
            onPress={() => console.log(this.state.term)}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  searchTextStyle: {
    flex: 1
  },
  buttonStyle: {
    height: 40,
    marginBottom: 8
  }
};

//Header
//SearchBar
//List Movies -> listmovieitem
