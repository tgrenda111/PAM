import React, { useState, useEffect } from 'react';
import { View, Text, Slider, Button, StyleSheet } from 'react-native';
import * as Brightness from 'expo-brightness';

export default function BrightnessExample() {
  const [brightness, setBrightness] = useState<number>(0.5);

  useEffect(() => {
    (async () => {
      const system = await Brightness.getSystemBrightnessAsync();
      setBrightness(system);
    })();
  }, []);

  const setScreenBrightness = async (value: number) => {
    setBrightness(value);
    await Brightness.setBrightnessAsync(value);
  };

  const resetSystem = async () => {
    const system = await Brightness.getSystemBrightnessAsync();
    setBrightness(system);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen Brightness</Text>
      <Text>Brightness: {(brightness * 100).toFixed(0)}%</Text>
      <Slider value={brightness} onValueChange={setScreenBrightness} minimumValue={0} maximumValue={1} />
      <View style={styles.buttons}>
        <Button title="Dim" onPress={() => setScreenBrightness(0.25)} />
        <Button title="Medium" onPress={() => setScreenBrightness(0.5)} />
        <Button title="Bright" onPress={() => setScreenBrightness(0.75)} />
        <Button title="Max" onPress={() => setScreenBrightness(1)} />
        <Button title="Reset" onPress={resetSystem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  buttons: { marginTop: 10, gap: 10 },
});
