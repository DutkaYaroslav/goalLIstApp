import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My goals for 2021</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    padding: 38,
    backgroundColor: "#a9e9a9",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
