import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type FrameComponent4Type = {
  newRoyaltyPayments?: string;
  bitoggle2On?: ImageSourcePropType;
  getNotifiedWhenNewRoyalty?: string;

  /** Style props */
  getNotifiedWhenMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent4 = ({
  newRoyaltyPayments,
  bitoggle2On,
  getNotifiedWhenNewRoyalty,
  getNotifiedWhenMarginTop,
}: FrameComponent4Type) => {
  const frameView2Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", getNotifiedWhenMarginTop),
    };
  }, [getNotifiedWhenMarginTop]);

  return (
    <View>
      <View style={styles.newRoyaltyPaymentsParent}>
        <Text style={[styles.newRoyaltyPayments, styles.getNotifiedWhenTypo]}>
          {newRoyaltyPayments}
        </Text>
        <Image
          style={styles.bitoggle2OnIcon}
          contentFit="cover"
          source={bitoggle2On}
        />
      </View>
      <Text style={[styles.getNotifiedWhen, styles.getNotifiedWhenTypo]}>
        {getNotifiedWhenNewRoyalty}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  getNotifiedWhenTypo: {
    textAlign: "left",
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  newRoyaltyPayments: {
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    color: Color.white,
  },
  bitoggle2OnIcon: {
    width: 38,
    height: 24,
  },
  newRoyaltyPaymentsParent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 335,
  },
  getNotifiedWhen: {
    lineHeight: 24,
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.colorGray_1400,
    marginTop: 16,
    width: 335,
  },
});

export default FrameComponent4;
