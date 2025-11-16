import React from "react";
import { ScrollView, View } from "react-native";

import DateDisplay from "./src/tasks/task1/DateDisplay";
import MapImage from "./src/tasks/task2/MapImage";
import StyledPizzaText from "./src/tasks/task3/StyledPizzaText";
import FlexLayout from "./src/tasks/task4/FlexLayout";
import UserName from "./src/tasks/task5/UserName";
import UserSurname from "./src/tasks/task5/UserSurname";
import LayoutWithBlocks from "./src/tasks/task6/LayoutWithBlocks";

export default function App() {
  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <DateDisplay />
        <MapImage />
        <StyledPizzaText />
        <FlexLayout />
        <UserName name="Jan" />
        <UserSurname surname="Kowalski" />
        <LayoutWithBlocks />
      </View>
    </ScrollView>
  );
}
