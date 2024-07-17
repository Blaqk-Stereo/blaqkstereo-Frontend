import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const DateTimeField = () => {
  return (
    <View style={styles.dateTimeField}>
      <View style={styles.dateTimeFieldChild} />
      <Text style={[styles.blinker, styles.blinkerPosition]}>
        21 May, 2024 at 4:50 pm
      </Text>
      <Image
        style={[styles.calendarIcon, styles.blinkerPosition]}
        contentFit="cover"
        source={require("../assets/calendar.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  blinkerPosition: {
    top: "50%",
    position: "absolute",
  },
  dateTimeFieldChild: {
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
    left: 16,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    lineHeight: 24,
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.white,
    textAlign: "left",
  },
  calendarIcon: {
    marginTop: -10,
    right: 16,
    width: 20,
    height: 20,
  },
  dateTimeField: {
    width: 335,
    height: 52,
  },
});

export default DateTimeField;
