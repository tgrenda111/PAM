import React from "react";
import { Text, StyleSheet } from "react-native";

const StyledPizzaText: React.FC = () => {
  return (
    <Text style={styles.base}>
      <Text style={styles.italic}>Pizza</Text> to bardzo smaczne włoskie danie.
      Wykonuje się ją z ciasta drożdżowego. Na ciasto wylewa się sos pomidorowy.
      Na wierzch kładzie się składniki:
      <Text style={styles.bold}> kiełbasa, ser żółty, oliwki, papryka</Text>.
      Istnieje wiele rodzajów
      <Text style={styles.italic}> pizzy</Text>, może być mięsna, bezmięsna,
      rybna lub słodka z
      <Text style={styles.yellow}> ananasem</Text>.
    </Text>
  );
};

const styles = StyleSheet.create({
  base: { fontSize: 16, marginVertical: 20 },
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  yellow: { color: "yellow", fontWeight: "bold" }
});

export default StyledPizzaText;
