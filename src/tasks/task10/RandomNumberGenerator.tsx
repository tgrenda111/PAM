import React from 'react';
import { View, Button } from 'react-native';

interface RNGProps {
  onGenerate: (num: number) => void;
}

const RandomNumberGenerator: React.FC<RNGProps> = ({ onGenerate }) => {
  const generate = () => {
    const n = Math.floor(Math.random() * 10) + 1;
    onGenerate(n);
  };

  return (
    <View style={{ marginVertical: 10 }}>
      <Button title="Generuj liczbę" onPress={generate} />
    </View>
  );
};

export default RandomNumberGenerator;
