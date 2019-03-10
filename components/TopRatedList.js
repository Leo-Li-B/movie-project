import React from "react";
import { ScrollView, View } from "react-native";
import TopRatedListItem from "./TopRatedListItem";

const TopRatedList = ({ TopRated_data }) => {
  const TopRatedItems = TopRated_data.map(TopRated_data => (
    <TopRatedListItem key={TopRated_data.id} TopRated_data={TopRated_data} />
  ));

  return (
    <ScrollView>
      <View style={styles.containerStyle}>{TopRatedItems}</View>
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
export default TopRatedList;
