import React from "react";
import { View, StyleSheet } from "react-native";

const FlexLayout: React.FC = () => (
  <View style={styles.container}>
    <View style={[styles.box, { backgroundColor: "blue", flex: 1 }]} />
    <View style={[styles.box, { backgroundColor: "red", flex: 2 }]} />
    <View style={{ flexDirection: "row", flex: 1 }}>
      <View style={[styles.box, { backgroundColor: "yellow", flex: 1 }]} />
      <View style={[styles.box, { backgroundColor: "yellow", flex: 1 }]} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { height: 300, width: "100%", marginVertical: 20 },
  box: { borderWidth: 1, borderColor: "black" }
});

export default FlexLayout;
