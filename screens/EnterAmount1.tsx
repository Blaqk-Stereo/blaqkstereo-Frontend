import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Component from "../components/Component";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const EnterAmount1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.enterAmount}>
      <Pressable
        style={[styles.button, styles.modalFlexBox]}
        onPress={() => navigation.navigate("SelectOffer")}
      >
        <Text style={styles.proceed}>Proceed</Text>
      </Pressable>
      <View style={[styles.modal, styles.modalFlexBox]}>
        <Text style={styles.howMuchWould}>
          How much would you like to fund your wallet with?
        </Text>
        <View style={[styles.inputBid, styles.rectangleLayout]}>
          <View style={[styles.rectangle2975, styles.rectangleLayout]}>
            <View style={[styles.rectangle, styles.rectangleLayout]} />
            <View style={[styles.rectangle1, styles.rectangleLayout]} />
          </View>
          <Text style={[styles.blc, styles.blcTypo]}>2,000</Text>
          <Text style={[styles.blc1, styles.blcTypo]}>NGN</Text>
        </View>
      </View>
      <View style={[styles.keyboard, styles.keyboardPosition]}>
        <View style={[styles.background, styles.iconLayout]} />
        <Image
          style={[styles.backIcon, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/back.png")}
        />
        <View style={styles.view}>
          <View style={[styles.child, styles.childLayout]} />
          <Text style={[styles.text, styles.textTypo]}>.</Text>
        </View>
        <View style={[styles.view1, styles.itemLayout]}>
          <View style={[styles.item, styles.itemLayout]} />
          <Text style={[styles.text1, styles.text1Position]}>0</Text>
        </View>
        <Component carCount="9" />
        <Component carCount="8" propLeft={137} propTop={154} />
        <Component carCount="7" propLeft={24} propTop={154} />
        <Component carCount="6" propLeft={249} propTop={83} />
        <Component carCount="5" propLeft={137} propTop={83} />
        <Component carCount="4" propLeft={24} propTop={83} />
        <Component carCount="3" propLeft={249} propTop={12} />
        <Component carCount="2" propLeft={137} propTop={12} />
        <Component carCount="1" propLeft={24} propTop={12} />
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
  modalFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  rectangleLayout: {
    height: 64,
    width: 295,
  },
  blcTypo: {
    fontFamily: FontFamily.mobileH1HeadingDisplay,
    fontWeight: "700",
    lineHeight: 34,
    letterSpacing: -1,
    fontSize: FontSize.mobileH2HeadingDefault_size,
    marginTop: -16.7,
    top: "50%",
    color: Color.white,
    position: "absolute",
  },
  keyboardPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  childLayout: {
    height: 20,
    width: 26,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.mobileBodyCopy,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  itemLayout: {
    height: 65,
    width: 102,
    position: "absolute",
  },
  text1Position: {
    left: "50%",
    textAlign: "center",
    color: Color.white,
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
    left: 0,
    top: 0,
    position: "absolute",
    height: 64,
    backgroundColor: Color.primary,
  },
  rectangle1: {
    left: 1,
    borderRadius: Border.br_17xl_5,
    borderStyle: "solid",
    borderColor: Color.primary10,
    borderWidth: 1,
    top: 0,
    position: "absolute",
    height: 64,
  },
  rectangle2975: {
    left: 0,
    top: 0,
    position: "absolute",
    height: 64,
  },
  blc: {
    left: 16,
    textAlign: "left",
  },
  blc1: {
    right: 16,
    textAlign: "right",
  },
  inputBid: {
    marginTop: 24,
  },
  modal: {
    top: 90,
    borderRadius: Border.br_5xl,
    padding: Padding.p_5xl,
    backgroundColor: Color.colorGray_300,
    left: 16,
  },
  background: {
    top: "0%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  backIcon: {
    top: 245,
    left: 287,
  },
  child: {
    top: 17,
    borderRadius: Border.br_9xs,
    left: 0,
  },
  text: {
    left: 9,
    top: 0,
    fontFamily: FontFamily.mobileBodyCopy,
    fontSize: FontSize.size_13xl,
    textAlign: "center",
    color: Color.white,
  },
  view: {
    top: 228,
    left: 63,
    height: 38,
    width: 26,
    position: "absolute",
  },
  item: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorGray_300,
  },
  text1: {
    marginTop: -18.5,
    marginLeft: -11,
    width: 22,
    fontFamily: FontFamily.mobileBodyCopy,
    fontSize: FontSize.size_13xl,
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  view1: {
    top: 225,
    left: 137,
  },
  keyboard: {
    height: "37.68%",
    top: "62.32%",
    width: "100%",
  },
  headerChild: {
    backgroundColor: Color.primary,
  },
  icon: {
    overflow: "hidden",
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
    color: Color.white,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    fontSize: FontSize.mobileH5HeadingComponent_size,
    top: 40,
    lineHeight: 24,
  },
  enterAmount: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.primary,
  },
});

export default EnterAmount1;