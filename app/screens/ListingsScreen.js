import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, ActivityIndicator } from "react-native";

import Card from "../components/Card";
import route from "../navigation/routes";
import Screen from "../components/Screen";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  useApi();

  useEffect(() => {
    const {
      data: listing,
      error,
      loading,
      request: loadListings,
    } = loadListings(listingsApi.getListings);
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <AppButton title="RETRY" onPress={loadListings} />
        </>
      )}
      <AppActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            onPress={() => {
              navigation.navigate(route.LISTING_DETAILS, item);
            }}
            title={item.title}
            subtitle={item.price + "€"}
            source={item.images[0].url}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 20,
  },
});

export default ListingsScreen;
