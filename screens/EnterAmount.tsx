import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const EnterAmount = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.enterAmount, styles.iconLayout]}>
      <View style={[styles.button, styles.modalFlexBox]}>
        <Text style={styles.proceed}>Proceed</Text>
      </View>
      <View style={[styles.modal, styles.modalFlexBox]}>
        <Text style={styles.howMuchWould}>
          How much would you like to fund your wallet with?
        </Text>
        <Pressable
          style={[styles.inputBid, styles.rectangleLayout]}
          onPress={() => navigation.navigate("EnterAmount1")}
        >
          <View style={[styles.rectangle2975, styles.rectanglePosition]}>
            <View style={[styles.rectangle, styles.rectanglePosition]} />
            <View style={[styles.rectangle1, styles.lineBorder]} />
          </View>
          <Text style={[styles.blc, styles.blcPosition]}>NGN</Text>
          <View style={[styles.blinkingCursor, styles.blcPosition]}>
            <View style={[styles.rectangle2, styles.rectanglePosition]} />
            <View style={[styles.line, styles.lineBorder]} />
          </View>
        </Pressable>
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Pressable
          style={[styles.pressable, styles.pressablePosition]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/241.png")}
          />
        </Pressable>
        <Text style={[styles.enterAmount1, styles.pressablePosition]}>
          Enter Amount
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  modalFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  rectangleLayout: {
    height: 64,
    width: 295,
  },
  rectanglePosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  lineBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  blcPosition: {
    top: "50%",
    position: "absolute",
  },
  headerPosition: {
    height: 74,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  pressablePosition: {
    top: 40,
    position: "absolute",
  },
  proceed: {
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    fontWeight: "600",
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    color: Color.primary,
    textAlign: "left",
    lineHeight: 24,
  },
  button: {
    top: 316,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    width: 335,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_99xl,
    paddingVertical: Padding.p_sm,
    opacity: 0.5,
    left: 20,
  },
  howMuchWould: {
    width: 295,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    fontSize: FontSize.mobileH5HeadingComponent_size,
    lineHeight: 24,
  },
  rectangle: {
    borderRadius: Border.br_18xl,
    height: 64,
    width: 295,
    backgroundColor: Color.primary,
  },
  rectangle1: {
    left: 1,
    borderRadius: Border.br_17xl_5,
    borderColor: Color.primary10,
    borderWidth: 1,
    top: 0,
    borderStyle: "solid",
    height: 64,
    width: 295,
  },
  rectangle2975: {
    height: 64,
    width: 295,
  },
  blc: {
    marginTop: -16.7,
    right: 16,
    fontSize: FontSize.mobileH2HeadingDefault_size,
    letterSpacing: -1,
    lineHeight: 34,
    fontWeight: "700",
    fontFamily: FontFamily.mobileH1HeadingDisplay,
    textAlign: "right",
    color: Color.white,
    top: "50%",
  },
  rectangle2: {
    width: 10,
    height: 21,
  },
  line: {
    height: "78.75%",
    width: "5.26%",
    top: "8.25%",
    right: "47.37%",
    bottom: "13%",
    left: "47.37%",
    borderColor: Color.white,
    borderRightWidth: 1,
  },
  blinkingCursor: {
    marginTop: -20,
    left: 7,
    width: 19,
    height: 40,
  },
  inputBid: {
    marginTop: 24,
  },
  modal: {
    top: 90,
    left: 16,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorGray_300,
    padding: Padding.p_5xl,
  },
  headerChild: {
    backgroundColor: Color.primary,
  },
  icon: {
    height: "100%",
  },
  pressable: {
    width: 24,
    height: 24,
    left: 20,
  },
  enterAmount1: {
    marginLeft: -53.5,
    left: "50%",
    textAlign: "center",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    fontSize: FontSize.mobileH5HeadingComponent_size,
    top: 40,
    color: Color.white,
    lineHeight: 24,
  },
  enterAmount: {
    flex: 1,
    height: 812,
    backgroundColor: Color.primary,
  },
});

export default EnterAmount;