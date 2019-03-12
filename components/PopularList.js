import React from "react";
import { ScrollView, View } from "react-native";
import PopularListItem from "./PopularListItem";

const PopularList = ({ Popular_data }) => {
  const PopularItems = Popular_data.map(Popular_data => (
    <PopularListItem key={Popular_data.id} Popular_data={Popular_data} />
  ));

  return (
    <ScrollView style={{ backgroundColor: "#ddd" }}>
      <View style={styles.containerStyle}>{PopularItems}</View>
    </ScrollView>
  );
};

const styles = {
  containerStyle: {
    marginButtom: 10,
    marginLeft: 10,
    marginRight: 10
  }
};
export default PopularList;
