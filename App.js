import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
  Platform,
  Dimensions,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppPicker from "./app/components/AppPicker";
import Screen from "./app/components/Screen";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import { ListItem } from "./app/components/lists";

const categories = [
  {
    label: "Clothing",
    value: 1,
  },
  {
    label: "Cameras",
    value: 2,
  },
  {
    label: "Tecnology",
    value: 3,
  },
];

export default function App() {
  const [category, setCategory] = useState();
  return (
    <ListingEditScreen />
    // <Screen>
    //   <AppPicker
    //     selectedItem={category}
    //     onSelectedItem={(item) => setCategory(item)}
    //     items={categories}
    //     icon={"apps"}
    //     placeholder={"Categories"}
    //   />
    // </Screen>
  );
}

const styles = StyleSheet.create({});
