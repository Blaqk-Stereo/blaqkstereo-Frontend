import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

export type InputField2Type = {
  blinker?: string;
  eye?: ImageSourcePropType;

  /** Style props */
  blinkerMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const InputField2 = ({ blinker, eye, blinkerMarginTop }: InputField2Type) => {
  const inputField1Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", blinkerMarginTop),
    };
  }, [blinkerMarginTop]);

  return (
    <View style={[styles.inputField, inputField1Style]}>
      <View style={styles.inputFieldChild} />
      <Text style={styles.blinker}>{blinker}</Text>
      <Image style={styles.eyeIcon} contentFit="cover" source={eye} />
    </View>
  );
};

const styles = StyleSheet.create({
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
    marginTop: -12,
    top: "50%",
    left: 16,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    lineHeight: 24,
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.primary0,
    textAlign: "left",
    position: "absolute",
  },
  eyeIcon: {
    height: "46.15%",
    width: "6.99%",
    top: "26.92%",
    right: "4.69%",
    bottom: "26.92%",
    left: "88.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
    position: "absolute",
  },
  inputField: {
    width: 335,
    height: 52,
  },
});

export default InputField2;
