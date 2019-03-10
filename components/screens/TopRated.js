import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import TopRatedList from "../TopRatedList";

const API_KEY = "8367b1854dccedcfc9001204de735470";

class TopRated extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    TopRated_data: []
  };
  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ TopRated_data: data.results });
      });
  }
  render() {
    const { TopRated_data } = this.state;
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
        <TopRatedList TopRated_data={TopRated_data} />
      </View>
    );
  }
}
export default TopRated;
