import * as React from "react";
import { StyleSheet, View } from "react-native";

import { Text, TextProps } from "./Themed";
import { MaterialIcons } from "@expo/vector-icons";

export function AddIcon() {
  return <MaterialIcons name="add" style={styles.icon} />;
}
const styles = StyleSheet.create({
  icon: {
    backgroundColor: "#000",
    color: "#fff",
    padding: 10,
    fontSize: 20,
    borderRadius: 40,
  },
});
