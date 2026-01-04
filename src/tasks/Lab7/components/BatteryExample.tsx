import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Battery from 'expo-battery';

export default function BatteryExample() {
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const [charging, setCharging] = useState<boolean | null>(null);

  const updateBattery = async () => {
    const level = await Battery.getBatteryLevelAsync();
    const charging = await Battery.getBatteryStateAsync();
    setBatteryLevel(level);
    setCharging(charging === Battery.BatteryState.CHARGING);
  };

  useEffect(() => {
    updateBattery();
    const sub = Battery.addBatteryLevelListener(({ batteryLevel }) => setBatteryLevel(batteryLevel));
    return () => sub.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Battery Monitor</Text>
      <Text>Battery Level: {batteryLevel !== null ? (batteryLevel * 100).toFixed(0) + '%' : 'Loading...'}</Text>
      <Text>Status: {charging ? 'Charging' : 'Not Charging'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
});
