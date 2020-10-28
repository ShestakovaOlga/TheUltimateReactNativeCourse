import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";

export default function ListingDetailsScreen() {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/jacket.jpg")}
      />
      <View style={styles.main}>
        <AppText>Red jacket for sale</AppText>
        <AppText style={{ color: colors.secondary }}>$100</AppText>

        <View style={styles.row}>
          <Image
            resizeMode="contain"
            style={styles.avatar}
            source={require("../assets/mosh.jpg")}
          />
          <View style={styles.textView}>
            <AppText>Mosh Hamedani</AppText>
            <AppText style={{ color: "gray" }}>5 Listings</AppText>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 250,
  },
  main: {
    padding: 15,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  textView: {
    marginLeft: 15,
  },
});
