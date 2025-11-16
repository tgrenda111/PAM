import React from "react";
import { Text } from "react-native";

interface Props {
  name: string;
}

const UserName: React.FC<Props> = ({ name }) => (
  <Text style={{ fontSize: 18, marginTop: 20 }}>{name}</Text>
);

export default UserName;
