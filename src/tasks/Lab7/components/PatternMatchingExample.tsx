import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function PatternMatchingExample() {
  const [name, setName] = useState('');
  const [month, setMonth] = useState('');
  const [result, setResult] = useState('');

  const getSeasonActivity = (name: string, month: string) => {
    const m = month.toLowerCase();
    if (!name) return 'Enter a valid name';
    switch (m) {
      case 'december':
      case 'january':
      case 'february':
        return `${name} rides a sled`;
      case 'march':
      case 'april':
      case 'may':
        return `${name} walks through puddles`;
      case 'june':
      case 'july':
      case 'august':
        return `${name} sunbathes`;
      case 'september':
      case 'october':
      case 'november':
        return `${name} collects leaves`;
      default:
        return `${name} is learning JS`;
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter a month"
        value={month}
        onChangeText={setMonth}
      />
      <Button title="Get Activity" onPress={() => setResult(getSeasonActivity(name, month))} />
      {result ? <Text style={styles.result}>{result}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 10, borderRadius: 6 },
  result: { marginTop: 20, fontSize: 18, fontWeight: 'bold' },
});
