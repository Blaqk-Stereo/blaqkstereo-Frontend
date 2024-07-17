import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Withdraw1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.withdraw, styles.iconLayout]}>
      <Text style={styles.specifyTheAmount}>
        Specify the amount you wish to withdraw from your wallet.
      </Text>
      <View style={styles.modalParent}>
        <View style={styles.modal}>
          <Pressable
            style={styles.rectangleLayout}
            onPress={() => navigation.navigate("Withdraw2")}
          >
            <View style={[styles.rectangle2975, styles.rectanglePosition]}>
              <View style={[styles.rectangle, styles.rectanglePosition]} />
              <View style={[styles.rectangle1, styles.lineBorder]} />
            </View>
            <Text style={[styles.blc, styles.blcFlexBox]}>NGN</Text>
            <View style={[styles.blinkingCursor, styles.blcPosition]}>
              <View style={[styles.rectangle2, styles.rectanglePosition]} />
              <View style={[styles.line, styles.lineBorder]} />
            </View>
          </Pressable>
          <View style={styles.arrowSwapParentFlexBox}>
            <Image
              style={styles.arrowSwapIcon}
              contentFit="cover"
              source={require("../assets/arrowswap.png")}
            />
            <Text style={styles.enterYourPlaylist}>-</Text>
          </View>
          <View
            style={[styles.availableBalance, styles.arrowSwapParentFlexBox]}
          >
            <Text style={[styles.yourBalance012345, styles.useMaxTypo]}>
              Your balance: 2,500.15 cUSD
            </Text>
            <View style={[styles.label, styles.labelFlexBox]}>
              <Text style={[styles.useMax, styles.useMaxTypo]}>Use Max</Text>
            </View>
          </View>
        </View>
        <View style={[styles.button, styles.labelFlexBox]}>
          <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
        </View>
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
        <Text style={[styles.makeAWithdrawal, styles.pressablePosition]}>
          Make a withdrawal
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
  rectanglePosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  lineBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  blcFlexBox: {
    textAlign: "right",
    color: Color.white,
  },
  blcPosition: {
    top: "50%",
    position: "absolute",
  },
  arrowSwapParentFlexBox: {
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  useMaxTypo: {
    fontSize: FontSize.btnSmallNormal_size,
    fontFamily: FontFamily.mobileBodyCopy,
  },
  labelFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  continueTypo: {
    fontSize: FontSize.mobileH5HeadingComponent_size,
    textAlign: "center",
    lineHeight: 24,
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
  specifyTheAmount: {
    top: 86,
    width: 335,
    textAlign: "center",
    color: Color.primary0,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    left: 20,
    position: "absolute",
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
    borderColor: Color.colorWhitesmoke_100,
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
    top: "50%",
    position: "absolute",
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
  rectangleLayout: {
    height: 64,
    width: 295,
  },
  arrowSwapIcon: {
    width: 16,
    height: 16,
  },
  enterYourPlaylist: {
    color: Color.warningDefault,
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  yourBalance012345: {
    textAlign: "left",
    color: Color.primary0,
    fontSize: FontSize.btnSmallNormal_size,
  },
  useMax: {
    lineHeight: 16,
    textAlign: "right",
    color: Color.white,
  },
  label: {
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_9xs,
    backgroundColor: Color.primary,
  },
  availableBalance: {
    width: 287,
    justifyContent: "space-between",
  },
  modal: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorGray_300,
    padding: Padding.p_5xl,
    alignItems: "center",
  },
  continue: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    color: Color.primary,
  },
  button: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    opacity: 0.5,
    marginTop: 40,
    width: 335,
  },
  modalParent: {
    top: 154,
    left: 20,
    position: "absolute",
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
  makeAWithdrawal: {
    marginLeft: -70.5,
    left: "50%",
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    textAlign: "center",
    lineHeight: 24,
    color: Color.white,
    top: 40,
  },
  withdraw: {
    flex: 1,
    height: 812,
    backgroundColor: Color.primary,
  },
});

export default Withdraw1;