import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const ComponentSet = () => {
  return (
    <View style={styles.view}>
      <View style={[styles.property1variant3, styles.property1variantLayout]}>
        <Text style={styles.text}>...</Text>
      </View>
      <View style={[styles.property1variant2, styles.property1variantLayout]}>
        <Text style={styles.text}>..</Text>
      </View>
      <View style={[styles.property1default, styles.property1variantLayout]}>
        <Text style={styles.text}>.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1variantLayout: {
    height: 34,
    width: 5,
    left: 20,
    position: "absolute",
  },
  text: {
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  property1variant3: {
    top: 128,
  },
  property1variant2: {
    top: 74,
  },
  property1default: {
    top: 20,
  },
  view: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.primary,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 45,
    height: 182,
    overflow: "hidden",
  },
});

export default ComponentSet;
