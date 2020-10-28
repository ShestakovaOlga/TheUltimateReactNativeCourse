import React from "react";
import { TouchableOpacity, StyleSheet, Image, View } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";

export default function Card({ title, subtitle, source }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.img} source={source} />
      <View style={styles.textView}>
        <AppText>{title}</AppText>
        <AppText style={{ color: colors.secondary }}>{subtitle}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 10,
    justifyContent: "center",
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: 250,
  },
  textView: {
    padding: 15,
  },
});
