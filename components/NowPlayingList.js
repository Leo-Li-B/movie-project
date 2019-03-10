import React from "react";
import { ScrollView, View } from "react-native";
import NowPlayingListItem from "./NowPlayingListItem";

const NowPlayingList = ({ NowPlaying_data }) => {
  const NowPlayingItems = NowPlaying_data.map(NowPlaying_data => (
    <NowPlayingListItem
      key={NowPlaying_data.id}
      NowPlaying_data={NowPlaying_data}
    />
  ));

  return (
    <ScrollView>
      <View style={styles.containerStyle}>{NowPlayingItems}</View>
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
export default NowPlayingList;
