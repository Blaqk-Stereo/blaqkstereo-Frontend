import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

export type ComponentType = {
  carCount?: string;

  /** Style props */
  propLeft?: number | string;
  propTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component = ({ carCount, propLeft, propTop }: ComponentType) => {
  const viewStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
      ...getStyleValue("top", propTop),
    };
  }, [propLeft, propTop]);

  return (
    <View style={[styles.view, styles.viewLayout, viewStyle]}>
      <View style={[styles.child, styles.viewLayout]} />
      <View style={[styles.view1, styles.textPosition]}>
        <Text style={[styles.text, styles.textPosition]}>{carCount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewLayout: {
    height: 65,
    width: 102,
    position: "absolute",
  },
  textPosition: {
    width: 15,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  child: {
    top: 0,
    left: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_300,
  },
  text: {
    marginTop: -19,
    marginLeft: -7.5,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.white,
    textAlign: "center",
  },
  view1: {
    marginTop: -18.5,
    marginLeft: -7,
    height: 38,
  },
  view: {
    top: 154,
    left: 249,
  },
});

export default Component;