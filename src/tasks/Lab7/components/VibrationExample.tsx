import React from 'react';
import { View, Button, Text, StyleSheet, Vibration } from 'react-native';

export default function VibrationExample() {
  const trigger = (pattern: number | number[], label: string) => {
    Vibration.vibrate(pattern);
    alert(`Triggered: ${label}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vibration & Haptic Feedback</Text>
      <Button title="Light Impact" onPress={() => trigger(50, 'Light')} />
      <Button title="Medium Impact" onPress={() => trigger([0, 100, 50, 100], 'Medium')} />
      <Button title="Heavy Impact" onPress={() => trigger([0, 200, 100, 200], 'Heavy')} />
      <Button title="SOS Pattern" onPress={() => trigger([0, 200, 100, 200, 50, 50], 'SOS')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
});
