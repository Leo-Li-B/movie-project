import React from "react";
import { View, Text, Image } from "react-native";

const UpcomingListItem = ({ Upcoming_data }) => {
  const imgURL = "http://image.tmdb.org/t/p/w92/";
  const { imageStyle } = styles;
  return (
    <View>
      <Image
        style={imageStyle}
        source={{ uri: `${imgURL}` + Upcoming_data.poster_path }}
      />
      <Text>{Upcoming_data.title}</Text>
      <Text>{Upcoming_data.overview}</Text>
    </View>
  );
};
const styles = {
  imageStyle: {
    width: 92,
    height: 152
  }
};

export default UpcomingListItem;
