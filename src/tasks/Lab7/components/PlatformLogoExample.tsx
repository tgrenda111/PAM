import React from 'react';
import { View, Text, Platform, ImageBackground, StyleSheet } from 'react-native';

const logos = {
  ios: require('../assets/ios.png'),
  android: require('../assets/android.png'),
  web: require('../assets/web.png'),
};

export default function PlatformLogoExample() {
  const currentLogo = logos[Platform.OS] || logos.web;

  return (
    <ImageBackground source={currentLogo} style={styles.bg}>
      <View style={styles.overlay}>
        <Text style={styles.text}>Current Platform: {Platform.OS}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, resizeMode: 'cover', justifyContent: 'center' },
  overlay: { backgroundColor: 'rgba(0,0,0,0.4)', padding: 20, alignItems: 'center' },
  text: { color: 'white', fontSize: 24, fontWeight: 'bold' },
});
