import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function AddGoal({ textHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        placeholder={"new goal"}
        onChangeText={changeHandler}
        style={styles.input}
      ></TextInput>
      <Button
        title={"ADD GOAL"}
        color="#a9e9a9"
        onPress={() => textHandler(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 8,
    marginBottom: 10,
    marginVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
