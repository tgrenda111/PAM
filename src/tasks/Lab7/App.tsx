import React, { useState } from 'react';
import { SafeAreaView, Button, ScrollView, Text, StyleSheet } from 'react-native';
import PlatformLogoExample from './components/PlatformLogoExample';
import PatternMatchingExample from './components/PatternMatchingExample';
import CameraExample from './components/CameraExample';
import AudioExample from './components/AudioExample';
import VibrationExample from './components/VibrationExample';
import SensorsExample from './components/SensorsExample';
import LocationExample from './components/LocationExample';
import BatteryExample from './components/BatteryExample';
import BrightnessExample from './components/BrightnessExample';

const exercises = [
  { name: 'Platform Logo', component: PlatformLogoExample },
  { name: 'Pattern Matching', component: PatternMatchingExample },
  { name: 'Camera', component: CameraExample },
  { name: 'Audio', component: AudioExample },
  { name: 'Vibration', component: VibrationExample },
  { name: 'Sensors', component: SensorsExample },
  { name: 'Location', component: LocationExample },
  { name: 'Battery', component: BatteryExample },
  { name: 'Brightness', component: BrightnessExample },
];

export default function App() {
  const [selected, setSelected] = useState<number | null>(null);
  const SelectedComponent = selected !== null ? exercises[selected].component : null;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {selected === null ? (
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Expo API Exercises</Text>
          {exercises.map((ex, idx) => (
            <Button key={idx} title={ex.name} onPress={() => setSelected(idx)} />
          ))}
        </ScrollView>
      ) : (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Button title="Back" onPress={() => setSelected(null)} />
          {SelectedComponent && <SelectedComponent />}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
