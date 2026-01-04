import React, { useState, useRef } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default function AudioExample() {
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [status, setStatus] = useState('');
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  const startRecording = async () => {
    try {
      const { status } = await Audio.requestPermissionsAsync();
      if (status !== 'granted') {
        setStatus('Permission denied');
        return;
      }
      await Audio.setAudioModeAsync({ allowsRecordingIOS: true, playsInSilentModeIOS: true });
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync();
      setRecording(recording);
      setStatus('Recording...');
    } catch (err) {
      console.error(err);
    }
  };

  const stopRecording = async () => {
    if (!recording) return;
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    setRecording(null);
    setStatus(`Recording stopped. URI: ${uri}`);
    const { sound } = await recording.createNewLoadedSoundAsync();
    setSound(sound);
  };

  const playRecording = async () => {
    if (!sound) return;
    await sound.replayAsync();
  };

  return (
    <View style={styles.container}>
      <Button title="Start Recording" onPress={startRecording} disabled={!!recording} />
      <Button title="Stop Recording" onPress={stopRecording} disabled={!recording} />
      <Button title="Play Recording" onPress={playRecording} disabled={!sound} />
      <Text>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({ container: { padding: 20 } });
