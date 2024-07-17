import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Toggle = () => {
  return (
    <View style={styles.toggle}>
      <View style={[styles.stateoff, styles.stateonLayout]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
        <Text style={[styles.no, styles.noTypo]}>No</Text>
      </View>
      <View style={[styles.stateon, styles.stateonLayout]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
        <Text style={[styles.yes, styles.noTypo]}>Yes</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stateonLayout: {
    height: 30,
    width: 70,
    top: 16,
    position: "absolute",
  },
  vectorIconPosition: {
    height: 24,
    width: 24,
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  noTypo: {
    textAlign: "left",
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
    fontSize: FontSize.btnSmallNormal_size,
    left: "50%",
    marginTop: -7,
    top: "50%",
    position: "absolute",
  },
  vectorIcon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon1: {
    left: 4,
  },
  no: {
    marginLeft: 3,
    color: Color.white,
  },
  stateoff: {
    left: 7,
  },
  vectorIcon3: {
    right: 4,
  },
  yes: {
    marginLeft: -23,
    color: Color.success50,
  },
  stateon: {
    left: 83,
  },
  toggle: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 160,
    height: 60,
    overflow: "hidden",
  },
});

export default Toggle;
