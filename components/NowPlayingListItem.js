import React from "react";
import { View, Text, Image } from "react-native";

const NowPlayingListItem = ({ NowPlaying_data }) => {
  const imgURL = "http://image.tmdb.org/t/p/w92/";
  const { imageStyle } = styles;
  return (
    <View>
      <Image
        style={imageStyle}
        source={{ uri: `${imgURL}` + NowPlaying_data.poster_path }}
      />
      <Text>{NowPlaying_data.title}</Text>
      <Text>{NowPlaying_data.overview}</Text>
    </View>
  );
};
const styles = {
  imageStyle: {
    width: 92,
    height: 152
  }
};

export default NowPlayingListItem;
