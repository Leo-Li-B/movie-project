import React, { Component } from "react";
import { ButtonGroup } from "react-native-elements";
import { createStackNavigator } from "react-navigation";
// import { People } from "./screens/People";

class ButtonGroup1 extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
    console.log(selectedIndex);
  }

  render() {
    const buttons = ["Movies", "People", "TV Show"];
    const { selectedIndex } = this.props;

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
