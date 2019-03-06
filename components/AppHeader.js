import React from "react";
import { Header } from "react-native-elements";

const AppHeader = ({ headerText }) => (
  <Header centerComponent={{ text: headerText, style: { color: "white" } }} />
);

export default AppHeader;
