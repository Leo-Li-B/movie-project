import React from "react";
import { View, Text, Image } from "react-native";

const NowPlayingListItem = ({ NowPlaying_data }) => {
  const imgURL = "http://image.tmdb.org/t/p/w185/";
  const { imageStyle, textStyle, titleStyle } = styles;
  return (
    <View>
      <Image
        style={imageStyle}
        source={{ uri: `${imgURL}` + NowPlaying_data.poster_path }}
      />

      <Text style={titleStyle}>
        {NowPlaying_data.title}
        {"\n"}
      </Text>
      <Text style={textStyle}>
        Popularity: {NowPlaying_data.popularity}
        {" \n"}
      </Text>
      <Text style={textStyle}>
        Release Date: {NowPlaying_data.release_date}
        {"\n"}
      </Text>
      <Text style={textStyle}>{NowPlaying_data.overview}</Text>
    </View>
  );
};
const styles = {
  imageStyle: {
    width: 185,
    maxHeight: 277,
    minHeight: 250,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    marginBottom: 20
  },
  textStyle: {
    textAlign: "center"
  },
  titleStyle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20
  }
};

export default NowPlayingListItem;
