import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

class Upcoming extends Component {
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
            title="Popular"
            onPress={() => this.props.navigation.navigate("Popular")}
            style={{
              width: 100,
              height: 50
            }}
          />
          <Button
            title="TopRated"
            onPress={() => this.props.navigation.navigate("TopRated")}
            style={{
              width: 100,
              height: 50
            }}
          />
          <Button
            title="Upcoming"
            onPress={() => this.props.navigation.navigate("Upcoming")}
            style={{
              width: 100,
              height: 50
            }}
          />
        </View>
        <Text>Upcoming</Text>
      </View>
    );
  }
}
export default Upcoming;
