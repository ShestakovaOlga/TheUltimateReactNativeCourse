import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";

export default function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style={styles.image} source={listing.image} />
      <View style={styles.main}>
        <AppText>{listing.title}</AppText>
        <AppText style={{ color: colors.secondary }}>${listing.price}</AppText>
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
