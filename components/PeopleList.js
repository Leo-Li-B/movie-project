import React from "react";
import { ScrollView, View } from "react-native";
import PeopleListItem from "./PeopleListItem";

const PeopleList = ({ people_data }) => {
  const peopleItems = people_data.map(people_data => (
    <PeopleListItem key={people_data.id} people_data={people_data} />
  ));

  return (
    <ScrollView>
      <View style={styles.containerStyle}>{peopleItems}</View>
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
export default PeopleList;
