import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import AppText from "./AppText";

export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <AppText style={styles.text}>{error}</AppText>;
}

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});
