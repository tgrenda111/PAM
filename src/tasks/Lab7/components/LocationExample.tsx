import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function LocationExample() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission denied');
      return;
    }

    const loc = await Location.getCurrentPositionAsync({});
    setLocation(loc);
  };

  useEffect(() => { getLocation(); }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Location Tracker</Text>
      <Button title="Refresh Location" onPress={getLocation} />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      {location && (
        <Text>
          Latitude: {location.coords.latitude.toFixed(6)} {"\n"}
          Longitude: {location.coords.longitude.toFixed(6)} {"\n"}
          Accuracy: {location.coords.accuracy} m
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
});
