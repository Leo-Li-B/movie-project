import React from "react";
import { View, Text, Image } from "react-native";
import { Card } from "react-native-elements";

const NowPlayingListItem = ({ NowPlaying_data }) => {
  const imgURL = "http://image.tmdb.org/t/p/w185/";
  const {
    imageStyle,
    textStyle,
    titleStyle,
    cardStyle,
    containerStyle
  } = styles;
  return (
    <View>
      <Card containerStyle={cardStyle}>
        <Image
          style={imageStyle}
          source={{ uri: `${imgURL}` + NowPlaying_data.poster_path }}
        />
        <View style={containerStyle}>
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
      </Card>
    </View>
  );
};
const styles = {
  cardStyle: {
    padding: 5
  },
  imageStyle: {
    width: 185,
    height: 277,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    marginBottom: 20
  },
  textStyle: {
    textAlign: "center"
  },
  titleStyle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20
  },
  containerStyle: {
    flex: 1,
    padding: 20
  }
};

export default NowPlayingListItem;
