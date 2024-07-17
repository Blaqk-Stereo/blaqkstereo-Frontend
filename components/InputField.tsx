import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const InputField = () => {
  return (
    <View style={styles.inputField}>
      <View style={[styles.fieldWithIcondefault, styles.fieldLayout]}>
        <View style={styles.fieldWithIcondefaultChild} />
        <Text style={[styles.password, styles.passwordTypo]}>Placeholder</Text>
        <Image
          style={[styles.eyeIcon, styles.eyeIconLayout]}
          contentFit="cover"
          source={require("../assets/property-1eye.png")}
        />
      </View>
      <View style={[styles.fieldWithIcontyping, styles.fieldLayout]}>
        <View
          style={[styles.fieldWithIcontypingChild, styles.fieldChildPosition]}
        />
        <Text style={[styles.blinker, styles.blinkerTypo]}>|</Text>
        <Image
          style={[styles.eyeIcon, styles.eyeIconLayout]}
          contentFit="cover"
          source={require("../assets/property-1eye.png")}
        />
      </View>
      <View style={[styles.fieldWithIconfilled, styles.fieldLayout]}>
        <View style={styles.fieldWithIcondefaultChild} />
        <Text style={[styles.blinker1, styles.blinkerTypo]}>Filled text</Text>
        <Image
          style={[styles.eyeIcon, styles.eyeIconLayout]}
          contentFit="cover"
          source={require("../assets/property-1eye.png")}
        />
      </View>
      <View style={styles.fieldWithIconwithError}>
        <View
          style={[
            styles.fieldWithIconwithErrorChild,
            styles.fieldChildPosition,
          ]}
        />
        <Text style={[styles.blinker2, styles.blinkerTypo]}>
          Filled text containing errors
        </Text>
        <Text style={[styles.blinker3, styles.passwordTypo]}>
          Helper text goes here
        </Text>
        <Image
          style={[styles.eyeIcon3, styles.eyeIconLayout]}
          contentFit="cover"
          source={require("../assets/property-1eye.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fieldLayout: {
    height: 52,
    width: 343,
    left: 20,
    position: "absolute",
  },
  passwordTypo: {
    textAlign: "left",
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    position: "absolute",
  },
  eyeIconLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  fieldChildPosition: {
    borderStyle: "solid",
    backgroundColor: Color.colorGray_400,
    borderRadius: Border.br_5xs,
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
    borderWidth: 1,
  },
  blinkerTypo: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    position: "absolute",
  },
  fieldWithIcondefaultChild: {
    backgroundColor: Color.colorGray_400,
    borderRadius: Border.br_5xs,
    right: "0%",
    top: "0%",
    width: "100%",
    left: "0%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
  },
  password: {
    color: Color.primary0,
    left: 16,
    top: "50%",
    marginTop: -12,
  },
  eyeIcon: {
    height: "46.15%",
    width: "7%",
    right: "4.66%",
    bottom: "26.92%",
    left: "88.34%",
    maxWidth: "100%",
    top: "26.92%",
    overflow: "hidden",
  },
  fieldWithIcondefault: {
    top: 20,
  },
  fieldWithIcontypingChild: {
    borderColor: Color.primary30,
    bottom: "0%",
    height: "100%",
    borderStyle: "solid",
  },
  blinker: {
    width: "1.17%",
    left: "4.66%",
    top: "26.92%",
  },
  fieldWithIcontyping: {
    top: 96,
  },
  blinker1: {
    left: 16,
    top: "50%",
    marginTop: -12,
  },
  fieldWithIconfilled: {
    top: 172,
  },
  fieldWithIconwithErrorChild: {
    height: "61.9%",
    bottom: "38.1%",
    borderColor: Color.colorMaroon,
  },
  blinker2: {
    marginTop: -28,
    left: 16,
    top: "50%",
  },
  blinker3: {
    width: "41.78%",
    top: "71.43%",
    color: Color.errorDefault,
    left: "0%",
    textAlign: "left",
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  eyeIcon3: {
    height: "28.57%",
    top: "16.67%",
    right: 16,
    bottom: "54.76%",
    width: 24,
  },
  fieldWithIconwithError: {
    top: 248,
    height: 84,
    width: 343,
    left: 20,
    position: "absolute",
  },
  inputField: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    width: 383,
    height: 352,
    overflow: "hidden",
    borderWidth: 1,
  },
});

export default InputField;
