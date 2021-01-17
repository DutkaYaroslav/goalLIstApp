import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/header";
import GoalsItem from "./components/GoalsItem";
import AddGoal from "./components/addGoal";
import Sandbox from "./components/sandbox";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [goals, setGoals] = useState([]);

  const pressHandler = (key) => {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.key !== key);
    });
  };

  const textHandler = (text) => {
    if (text.length > 3) {
      setGoals((prevGaols) => {
        return [{ goals: text, key: Math.random().toString() }, ...prevGaols];
      });
    } else {
      Alert.alert("OOPS", "Goals must be over then 3 characters", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddGoal textHandler={textHandler} />
          <View style={styles.list}>
            <FlatList
              data={goals}
              renderItem={({ item }) => (
                <GoalsItem pressHandler={pressHandler} item={item} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    padding: 40,
    flex: 1,
    backgroundColor: "grey",
  },

  list: {
    marginTop: 20,
    flex: 1,
  },
});
