import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import TvList from "../TvList";
import SearchBar from "../SearchBar";

const API_KEY = "8367b1854dccedcfc9001204de735470";

class TvShows extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    loading: false,
    Tv_data: []
  };

  onPressSearch = term => {
    this.movieSearch(term);
  };
  movieSearch = async term => {
    const url = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&query=${term}`;

    const api_call = await fetch(url);

    const data = await api_call.json();

    this.setState({
      Tv_data: data.results
    });
  };
  render() {
    const { loading, Tv_data } = this.state;
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
        <SearchBar loading={loading} onPressSearch={this.onPressSearch} />
        <TvList Tv_data={Tv_data} />
      </View>
    );
  }
}
export default TvShows;
