import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import User from "../assets/svg/Vector";
import { MaterialIcons } from "@expo/vector-icons";
import { AddIcon } from "../components/AddIcon";
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View>
          <Text>Pocket</Text>
          <Text style={styles.look}>Look</Text>
        </View>
        <View>
          <MaterialIcons name="bookmark-outline" style={styles.bookMark} />
        </View>
      </View>
      <View style={styles.addIcons}>
        <View style={styles.addIconFirst}>
          <AddIcon />
        </View>
        <View style={styles.addIconSecond}>
          <AddIcon />
        </View>
        <View style={styles.addIconThird}>
          <AddIcon />
        </View>
        <View style={styles.addIconFourth}>
          <AddIcon />
        </View>
      </View>
      <User />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  subContainer: {
    flex: 0.5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-around",
    marginTop: 50,
    padding: 10,
  },

  bookMark: {
    fontSize: 30,
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 40,
  },
  look: {
    fontWeight: "bold",
  },
  addIcons: {
    position: "absolute",
    top: 140,
  },

  addIconFirst: {
    left: 160,
   
  },
  addIconSecond: {
    left: 180,
    top: 100,
  },
  addIconThird: {
    left: 190,
    top: 220,
  },
  addIconFourth: {
    left: 170,
    top: 330,
  },
});
