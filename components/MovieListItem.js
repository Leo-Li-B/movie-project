import React from "react";
import { View, Text, Image } from "react-native";

const MovieListItem = ({ movie_data }) => {
  const imgURL = "http://image.tmdb.org/t/p/w92/";
  const { imageStyle } = styles;
  return (
    <View>
      <Image
        style={imageStyle}
        source={{ uri: `${imgURL}` + movie_data.poster_path }}
      />
      <Text>{movie_data.title}</Text>
      <Text>{movie_data.overview}</Text>
    </View>
  );
};
const styles = {
  imageStyle: {
    width: 92,
    height: 152
  }
};

export default MovieListItem;
