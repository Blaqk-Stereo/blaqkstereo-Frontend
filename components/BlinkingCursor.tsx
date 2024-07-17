import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color, Border, Padding } from "../GlobalStyles";

const BlinkingCursor = () => {
  return (
    <View style={styles.blinkingCursor}>
      <View style={styles.rectangleLayout}>
        <View style={[styles.rectangle, styles.rectangleLayout]} />
        <View style={styles.line} />
      </View>
      <View style={[styles.property1variant2, styles.rectangleLayout]}>
        <View style={[styles.rectangle, styles.rectangleLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 21,
    width: 10,
  },
  rectangle: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  line: {
    height: "80.95%",
    width: "10%",
    top: "7.14%",
    right: "45%",
    bottom: "11.9%",
    left: "45%",
    borderStyle: "solid",
    borderColor: Color.white,
    borderRightWidth: 1,
    position: "absolute",
  },
  property1variant2: {
    marginTop: 27,
  },
  blinkingCursor: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.primary,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    overflow: "hidden",
    padding: Padding.p_base,
  },
});

export default BlinkingCursor;
