import React from "react";
import { ScrollView, View } from "react-native";
import MovieListItem from "./MovieListItem";

const MovieList = ({ movie_data }) => {
  const movieItems = movie_data.map(movie_data => (
    <MovieListItem key={movie_data.id} movie_data={movie_data} />
  ));

  return (
    <ScrollView>
      <View style={styles.containerStyle}>{movieItems}</View>
    </ScrollView>
  );
};

const styles = {
  containerStyle: {
    marginButtom: 10,
    marginLeft: 10,
    marginRight: 10
  }
};
export default MovieList;
