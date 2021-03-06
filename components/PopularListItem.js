import React from "react";
import { View, Text, Image } from "react-native";
import { Card } from "react-native-elements";

const PopularListItem = ({ Popular_data }) => {
  const imgURL = "http://image.tmdb.org/t/p/w92/";
  const { imageStyle, cardStyle, titleStyle, contentStyle, textStyle } = styles;
  return (
    <Card containerStyle={cardStyle}>
      <View style={contentStyle}>
        <Image
          style={imageStyle}
          source={{ uri: `${imgURL}` + Popular_data.poster_path }}
        />
        <View style={textStyle}>
          <Text style={titleStyle}>{Popular_data.title}</Text>
          <Text>{Popular_data.overview}</Text>
        </View>
      </View>
    </Card>
  );
};
const styles = {
  imageStyle: {
    width: 92,
    height: 152,
    marginTop: 40,
    marginLeft: 20
  },
  cardStyle: {
    padding: 5
  },
  titleStyle: {
    fontWeight: "bold"
  },
  textStyle: {
    marginRight: 120,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20
  },
  contentStyle: {
    flexDirection: "row"
  }
};

export default PopularListItem;
