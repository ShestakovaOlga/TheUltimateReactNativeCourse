import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";
import AppText from "../components/AppText";
import Card from "../components/Card";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={{ backgroundColor: "#f8f4f4", width: "100%" }}>
        <Card
          source={require("../assets/jacket.jpg")}
          title="Red jacket for sale!"
          subtitle="$100"
        />
      </View>

      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <AppText style={styles.title}>Sell What You Don't Need</AppText>
      </View>
      <Button>Login</Button>
      <Button color="secondary">Register</Button>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
