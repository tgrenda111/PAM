import React from "react";
import { View } from "react-native";

interface Props {
  color: string;
  size: number;
}

const ColorBlock: React.FC<Props> = ({ color, size }) => (
  <View style={{ backgroundColor: color, width: size, height: size, margin: 10 }} />
);

export default ColorBlock;
