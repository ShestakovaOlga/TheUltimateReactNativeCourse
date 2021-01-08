import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";

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
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
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
  userContainer: { marginVertical: 40 },
});
