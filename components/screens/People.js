import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

class People extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Button
            title="Movies"
            onPress={() => this.props.navigation.navigate("Movies")}
            style={{ width: 100, height: 50 }}
          />
          <Button
            title="People"
            onPress={() => this.props.navigation.navigate("People")}
            style={{ width: 100, height: 50 }}
          />
          <Button
            title="TvShows"
            onPress={() => this.props.navigation.navigate("TvShows")}
            style={{ width: 100, height: 50 }}
          />
        </View>
        <Text>People</Text>
      </View>
    );
  }
}
export default People;
