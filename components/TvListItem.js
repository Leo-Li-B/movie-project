import React from "react";
import { View, Text, Image } from "react-native";

const TvListItem = ({ Tv_data }) => {
  const imgURL = "http://image.tmdb.org/t/p/w92/";
  const { imageStyle } = styles;
  return (
    <View>
      <Image
        style={imageStyle}
        source={{ uri: `${imgURL}` + Tv_data.poster_path }}
      />
      <Text>{Tv_data.name}</Text>
      <Text>{Tv_data.overview}</Text>
    </View>
  );
};
const styles = {
  imageStyle: {
    width: 92,
    height: 152
  }
};

export default TvListItem;
