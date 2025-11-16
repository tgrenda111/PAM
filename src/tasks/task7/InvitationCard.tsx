import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface InvitationProps {
  date: string;
  time: string;
  location: string;
  dressCode: string;
}

const InvitationCard: React.FC<InvitationProps> = ({ date, time, location, dressCode }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Zaproszenie urodzinowe</Text>
      <Text>Data: {date}</Text>
      <Text>Godzina: {time}</Text>
      <Text>Miejsce: {location}</Text>
      <Text>Strój: {dressCode}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  }
});

export default InvitationCard;
