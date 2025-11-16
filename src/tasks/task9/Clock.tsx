import React, { useState, useEffect } from "react";
import { Text } from "react-native";

const Clock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <Text style={{ fontSize: 18, marginVertical: 10 }}>Aktualny czas: {currentTime}</Text>;
};

export default Clock;
