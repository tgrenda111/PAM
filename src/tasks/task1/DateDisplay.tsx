import React from "react";
import { Text } from "react-native";

const DateDisplay: React.FC = () => {
  const now = new Date();
  const formatted = now.toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return <Text style={{ fontSize: 20, marginVertical: 10 }}>{formatted}</Text>;
};

export default DateDisplay;
