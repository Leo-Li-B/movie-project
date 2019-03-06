import React, { Component } from "react";
import { View } from "react-native";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import AppHeader from "./components/AppHeader";
import MovieList from "./components/MovieList";

const API_KEY = "8367b1854dccedcfc9001204de735470";

export default class App extends Component {
  state = {
    loading: false,
    movie_data: []
  };

  onPressSearch = term => {
    this.axiosSearch(term);
  };

  axiosSearch = term => {
    this.setState({ loading: true });
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${term}&include_adult=false`
      )
      .then(res => {
        const movie_data = res.data;
        console.log(movie_data);
        this.setState({ loading: false, movie_data });
      });
  };
  render() {
    const { loading, movie_data } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: "#ddd", height: 30 }}>
        <AppHeader headerText="Movie App" />
        <SearchBar loading={loading} onPressSearch={this.onPressSearch} />
        <MovieList movie_data={movie_data} />
      </View>
    );
  }
}

//Header
//SearchBar
//List Movies -> listmovieitem
