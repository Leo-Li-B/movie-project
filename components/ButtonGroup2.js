import React, { Component } from "react";
import { ButtonGroup } from "react-native-elements";

class ButtonGroup2 extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 2
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    const buttons = ["Popular", "Top Rated", "Upcoming"];
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

export default ButtonGroup2;
