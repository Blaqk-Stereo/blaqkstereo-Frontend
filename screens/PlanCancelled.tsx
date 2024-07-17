import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const PlanCancelled = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.planCancelled}>
      <View style={styles.success48740921Parent}>
        <Image
          style={styles.success48740921Icon}
          contentFit="cover"
          source={require("../assets/success4874092-1.png")}
        />
        <View>
          <View style={styles.planCancelledParent}>
            <Text style={styles.planCancelled1}>Plan Cancelled</Text>
            <Text style={[styles.thankYouFor, styles.buttonFlexBox]}>
              Thank you for being a part of the Blaqk Stereo community. If you
              ever decide to re-subscribe, we'll be here to welcome you with
              open arms.
            </Text>
          </View>
          <Pressable
            style={[styles.button, styles.buttonFlexBox]}
            onPress={() => navigation.navigate("Discover")}
          >
            <Text style={[styles.great, styles.greatTypo]}>Great</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    width: 335,
    justifyContent: "center",
    alignItems: "center",
  },
  greatTypo: {
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
  },
  success48740921Icon: {
    width: 240,
    height: 240,
  },
  planCancelled1: {
    fontSize: FontSize.mobileH2HeadingDefault_size,
    letterSpacing: -1,
    lineHeight: 34,
    fontWeight: "700",
    fontFamily: FontFamily.mobileH1HeadingDisplay,
    color: Color.white,
    textAlign: "center",
  },
  thankYouFor: {
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.primary0,
    display: "flex",
    marginTop: 12,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
  },
  planCancelledParent: {
    alignItems: "center",
  },
  great: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH3HeadingPage,
    color: Color.primary,
  },
  button: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    flexDirection: "row",
    paddingHorizontal: Padding.p_99xl,
    paddingVertical: Padding.p_sm,
    marginTop: 24,
  },
  success48740921Parent: {
    position: "absolute",
    marginTop: -217,
    marginLeft: -167.5,
    top: "50%",
    left: "50%",
    alignItems: "center",
  },
  planCancelled: {
    backgroundColor: Color.primary,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default PlanCancelled;
