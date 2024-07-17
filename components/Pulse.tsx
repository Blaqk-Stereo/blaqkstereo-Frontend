import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const Pulse = () => {
  return (
    <View style={styles.pulse2}>
      <Image
        style={[styles.property1startIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/pulse2.png")}
      />
      <Image
        style={[styles.property1endIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/property-1end.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 200,
    width: 200,
    top: 16,
    position: "absolute",
    overflow: "hidden",
  },
  property1startIcon: {
    left: 16,
  },
  property1endIcon: {
    left: 240,
  },
  pulse2: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.primary,
    borderStyle: "dashed",
    borderColor: "#7a51e2",
    borderWidth: 1,
    width: 456,
    height: 232,
    overflow: "hidden",
  },
});

export default Pulse;
