import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function GoalItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <Text style={styles.text}>{item.goals}</Text>
        <MaterialIcons name="delete" size={24} color="pink" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginTop: 10,
    borderColor: "#bbb",
    borderRadius: 10,
    borderStyle: "dotted",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text: {
    color: "pink",
  },
});
