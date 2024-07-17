import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const Eye = () => {
  return (
    <View style={styles.eye}>
      <Image
        style={[styles.property1eyeSlashIcon, styles.property1eyeIconLayout]}
        contentFit="cover"
        source={require("../assets/property-1eyeslash.png")}
      />
      <Image
        style={[styles.property1eyeIcon, styles.property1eyeIconLayout]}
        contentFit="cover"
        source={require("../assets/property-1eye.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  property1eyeIconLayout: {
    height: 24,
    width: 24,
    top: 20,
    position: "absolute",
  },
  property1eyeSlashIcon: {
    left: 68,
  },
  property1eyeIcon: {
    left: 20,
  },
  eye: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.primary30,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 112,
    height: 64,
    overflow: "hidden",
  },
});

export default Eye;
