import React from "react";
import { View, Text, Image } from "react-native";

const PeopleListItem = ({ people_data }) => {
  const imgURL = "http://image.tmdb.org/t/p/w92/";
  const { imageStyle } = styles;
  // console.log(people_data.known_for[0].title);
  return (
    <View>
      <Image
        style={imageStyle}
        source={{ uri: `${imgURL}` + people_data.profile_path }}
      />
      <Text>{people_data.name}</Text>
      <Text>Known for:{"\n"} </Text>
      <Text>{people_data.known_for[0].title}</Text>
      {/* <Text>{people_data.known_for[1].title}</Text>
      <Text>{people_data.known_for[2].title}</Text> */}
    </View>
  );
};
const styles = {
  imageStyle: {
    width: 92,
    height: 152
  }
};

export default PeopleListItem;
