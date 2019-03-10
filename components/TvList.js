import React from "react";
import { ScrollView, View } from "react-native";
import TvListItem from "./TvListItem";

const TvList = ({ Tv_data }) => {
  const TvItems = Tv_data.map(Tv_data => (
    <TvListItem key={Tv_data.id} Tv_data={Tv_data} />
  ));

  console.log(TvItems);
  return (
    <ScrollView>
      <View style={styles.containerStyle}>{TvItems}</View>
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
export default TvList;
