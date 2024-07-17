import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

export type DropDownType = {
  onClose?: () => void;
};

const DropDown = ({ onClose }: DropDownType) => {
  return (
    <View style={styles.dropDown}>
      <Text style={styles.last7DaysTypo}>Last 7 days</Text>
      <Text style={[styles.thisMonth, styles.last7DaysTypo]}>This month</Text>
      <Text style={[styles.thisMonth, styles.last7DaysTypo]}>This year</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  last7DaysTypo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  thisMonth: {
    marginTop: 20,
  },
  dropDown: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_300,
    padding: Padding.p_base,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default DropDown;
