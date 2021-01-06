import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 15,
        }}
      >
        <MaterialCommunityIcons name="close" size={30} color="white" />
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={30}
          color="white"
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
