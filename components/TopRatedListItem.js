import React from "react";
import { View, Text, Image } from "react-native";

const TopRatedListItem = ({ TopRated_data }) => {
  const imgURL = "http://image.tmdb.org/t/p/w92/";
  const { imageStyle } = styles;
  return (
    <View>
      <Image
        style={imageStyle}
        source={{ uri: `${imgURL}` + TopRated_data.poster_path }}
      />
      <Text>{TopRated_data.title}</Text>
      <Text>{TopRated_data.overview}</Text>
    </View>
  );
};
const styles = {
  imageStyle: {
    width: 92,
    height: 152
  }
};

export default TopRatedListItem;
