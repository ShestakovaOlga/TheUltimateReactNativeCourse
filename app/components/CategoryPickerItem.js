import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import IconApp from "./IconApp";

export default function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <IconApp
        backgroundColor={item.backgroundColor}
        name={item.icon}
        size={80}
      />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
