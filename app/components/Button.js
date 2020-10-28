import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";

export default function Button({ children, color }) {
  return (
    <TouchableOpacity style={styles(color).container}>
      <AppText style={{ color: "white" }}>{children}</AppText>
    </TouchableOpacity>
  );
}

const styles = (color) =>
  StyleSheet.create({
    container: {
      width: "100%",
      padding: 10,
      backgroundColor:
        color === "secondary" ? colors.secondary : colors.primary,
      borderRadius: 25,
      marginBottom: 10,
      alignItems: "center",
    },
  });
