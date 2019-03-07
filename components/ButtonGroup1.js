import React, { Component } from "react";
import { ButtonGroup } from "react-native-elements";
import { createStackNavigator } from "react-navigation";
// import { People } from "./screens/People";

class ButtonGroup1 extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 2
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
    console.log(selectedIndex);
    // if (selectedIndex == 1) {
    //   this.props.navigation.navigate("People");
    // } else {
    //   return;
    // }
  }

  render() {
    const buttons = ["Movies", "People", "TV Show"];
    const { selectedIndex } = this.state;

    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{ height: 30 }}
      />
    );
  }
}
// export const StackNavigator = createStackNavigator({
//   People: { screen: People }
// });

export default ButtonGroup1;
