import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const AddCredits = () => {
  return (
    <View style={styles.addCredits}>
      <View style={[styles.property1addMore, styles.addCredits1Border]}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/addcircle1.png")}
        />
        <Text style={[styles.blc, styles.blcLayout]}>Add more credits</Text>
      </View>
      <View style={styles.property1frame1171274902}>
        <View>
          <View style={styles.inputLayout}>
            <View style={styles.inputFieldChild} />
            <Text style={[styles.blinker, styles.blinkerPosition]}>
              Select role
            </Text>
            <Image
              style={[styles.arrowRightIcon, styles.blinkerPosition]}
              contentFit="cover"
              source={require("../assets/arrowright4.png")}
            />
          </View>
          <View style={[styles.inputField1, styles.inputLayout]}>
            <View style={styles.inputFieldChild} />
            <Text style={[styles.blinker, styles.blinkerPosition]}>
              Enter name
            </Text>
            <Image
              style={styles.eyeIcon}
              contentFit="cover"
              source={require("../assets/eye4.png")}
            />
          </View>
        </View>
        <View style={[styles.addCredits1, styles.addCredits1Border]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/addcircle1.png")}
          />
          <Text style={[styles.blc, styles.blcLayout]}>Add more credits</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addCredits1Border: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 2,
    borderColor: Color.primary30,
    borderStyle: "solid",
    borderRadius: Border.br_81xl,
    alignItems: "center",
    backgroundColor: Color.primary,
  },
  blcLayout: {
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  blinkerPosition: {
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  inputLayout: {
    height: 52,
    width: 335,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  blc: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH3HeadingPage,
    color: Color.white,
    textAlign: "center",
    marginLeft: 8,
  },
  property1addMore: {
    top: 19,
    left: 100,
    position: "absolute",
  },
  inputFieldChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGray_400,
    position: "absolute",
  },
  blinker: {
    left: 16,
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.primary0,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  arrowRightIcon: {
    right: 16,
    height: 24,
    width: 24,
  },
  eyeIcon: {
    height: "46.15%",
    width: "6.99%",
    top: "26.92%",
    right: "4.69%",
    bottom: "26.92%",
    left: "88.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  inputField1: {
    marginTop: 16,
  },
  addCredits1: {
    marginTop: 36,
  },
  property1frame1171274902: {
    top: 120,
    left: 20,
    alignItems: "center",
    position: "absolute",
  },
  addCredits: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 375,
    height: 336,
    overflow: "hidden",
    backgroundColor: Color.primary,
  },
});

export default AddCredits;
