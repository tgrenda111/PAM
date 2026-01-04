import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Accelerometer, Gyroscope } from 'expo-sensors';

export default function SensorsExample() {
  const [accelData, setAccelData] = useState({ x: 0, y: 0, z: 0 });
  const [gyroData, setGyroData] = useState({ x: 0, y: 0, z: 0 });
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = () => {
    Accelerometer.setUpdateInterval(200);
    Gyroscope.setUpdateInterval(200);

    const accelSub = Accelerometer.addListener(setAccelData);
    const gyroSub = Gyroscope.addListener(setGyroData);

    setSubscribed(true);
    return () => {
      accelSub && accelSub.remove();
      gyroSub && gyroSub.remove();
      setSubscribed(false);
    };
  };

  useEffect(() => subscribe(), []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sensors Data</Text>
      <Text>Accelerometer: x: {accelData.x.toFixed(2)}, y: {accelData.y.toFixed(2)}, z: {accelData.z.toFixed(2)}</Text>
      <Text>Gyroscope: x: {gyroData.x.toFixed(2)}, y: {gyroData.y.toFixed(2)}, z: {gyroData.z.toFixed(2)}</Text>
      <Button title={subscribed ? "Stop Sensors" : "Start Sensors"} onPress={subscribe} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
});
