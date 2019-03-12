import React from "react";
import { ScrollView, View } from "react-native";
import UpcomingListItem from "./UpcomingListItem";

const UpcomingList = ({ Upcoming_data }) => {
  const UpcomingItems = Upcoming_data.map(Upcoming_data => (
    <UpcomingListItem key={Upcoming_data.id} Upcoming_data={Upcoming_data} />
  ));

  return (
    <ScrollView style={{ backgroundColor: "#ddd" }}>
      <View style={styles.containerStyle}>{UpcomingItems}</View>
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
export default UpcomingList;
