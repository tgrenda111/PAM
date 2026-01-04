import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const UseStateExample: React.FC = () => {
  const [color, setColor] = useState("#FF69B4"); // początkowy kolor

  const handleChangeColor = () => {
    setColor("#4CAF50"); // zmiana koloru po kliknięciu
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: color }]}
        onPress={handleChangeColor}
      >
        <Text style={styles.buttonText}>Change color</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default UseStateExample;
