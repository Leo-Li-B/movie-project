import React from "react";
import { View, Text, Image } from "react-native";

const PopularListItem = ({ Popular_data }) => {
  const imgURL = "http://image.tmdb.org/t/p/w92/";
  const { imageStyle } = styles;
  return (
    <View>
      <Image
        style={imageStyle}
        source={{ uri: `${imgURL}` + Popular_data.poster_path }}
      />
      <Text>{Popular_data.title}</Text>
      <Text>{Popular_data.overview}</Text>
    </View>
  );
};
const styles = {
  imageStyle: {
    width: 92,
    height: 152
  }
};

export default PopularListItem;
