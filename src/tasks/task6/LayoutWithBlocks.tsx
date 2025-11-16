import React from "react";
import { View } from "react-native";
import ColorBlock from "./ColorBlock";

const LayoutWithBlocks: React.FC = () => (
  <View style={{ flexDirection: "row" }}>
    <ColorBlock color="red" size={80} />
    <ColorBlock color="green" size={80} />
    <ColorBlock color="blue" size={80} />
  </View>
);

export default LayoutWithBlocks;
