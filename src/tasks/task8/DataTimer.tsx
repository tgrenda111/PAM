import React from 'react';
import { Text } from 'react-native';

interface DataTimerProps {
  currentTime: string;
}

const DataTimer: React.FC<DataTimerProps> = ({ currentTime }) => {
  return <Text style={{ fontSize: 18, marginVertical: 10 }}>Aktualny czas: {currentTime}</Text>;
};

export default DataTimer;
