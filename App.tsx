import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";

import DateDisplay from "./src/tasks/task1/DateDisplay";
import MapImage from "./src/tasks/task2/MapImage";
import StyledPizzaText from "./src/tasks/task3/StyledPizzaText";
import FlexLayout from "./src/tasks/task4/FlexLayout";
import UserName from "./src/tasks/task5/UserName";
import UserSurname from "./src/tasks/task5/UserSurname";
import LayoutWithBlocks from "./src/tasks/task6/LayoutWithBlocks";
import InvitationCard from "./src/tasks/task7/InvitationCard";
import DataTimer from "./src/tasks/task8/DataTimer";
import Clock from "./src/tasks/task9/Clock";
import RandomNumberGenerator from "./src/tasks/task10/RandomNumberGenerator";

export default function App() {

  const initialDateTime = new Date().toLocaleString();

  const [randomNumber, setRandomNumber] = useState(0);

  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        {/* Zadania 1–6 */}
        <DateDisplay />
        <MapImage />
        <StyledPizzaText />
        <FlexLayout />
        <UserName name="Jan" />
        <UserSurname surname="Kowalski" />
        <LayoutWithBlocks />

        {/* Zadanie 7 */}
        <InvitationCard 
          date="20.11.2025"
          time="18:00"
          location="Warszawa"
          dressCode="Elegancki"
        />

        {/* Zadanie 8 */}
        <DataTimer currentTime={initialDateTime} />

        {/* Zadanie 9 */}
        <Clock />

        {/* Zadanie 10 */}
        <RandomNumberGenerator onGenerate={setRandomNumber} />
        <Text style={{ fontSize: 20, marginVertical: 10 }}>
          Wylosowana liczba: {randomNumber}
        </Text>
      </View>
    </ScrollView>
  );
}
