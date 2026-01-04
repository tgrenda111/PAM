import React, { useState, useEffect, useRef } from 'react';
import { View, Button, Image, StyleSheet, Text } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraExample() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhotoUri(photo.uri);
    }
  };

  if (hasPermission === null) return <Text>Requesting camera permission...</Text>;
  if (!hasPermission) return <Text>No access to camera</Text>;

  return (
    <View style={styles.container}>
      {!photoUri ? (
        <Camera style={styles.camera} ref={cameraRef} />
      ) : (
        <Image source={{ uri: photoUri }} style={styles.camera} />
      )}
      <Button title={photoUri ? "Retake" : "Take Photo"} onPress={takePhoto} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1, width: '100%' },
});
