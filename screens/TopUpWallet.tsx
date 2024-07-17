import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const TopUpWallet = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.topUpWallet}>
      <View style={styles.enterTheRecipientsWalletIParent}>
        <Text style={[styles.enterTheRecipients, styles.continueFlexBox]}>
          Enter the recipient's wallet id to initiate a withdrawal.
        </Text>
        <View style={styles.inputFieldParent}>
          <Pressable
            style={styles.inputField}
            onPress={() => navigation.navigate("TopUpWallet3")}
          >
            <View style={[styles.inputFieldChild, styles.iconLayout]} />
            <Text style={[styles.enterWalletId, styles.enterTypo]}>
              Enter wallet id
            </Text>
          </Pressable>
          <View style={styles.button}>
            <Text style={[styles.continue, styles.continueFlexBox]}>
              Continue
            </Text>
          </View>
        </View>
        <View style={styles.lineParent}>
          <View style={[styles.frameChild, styles.frameBorder]} />
          <Text style={[styles.or, styles.orClr]}>or</Text>
          <View style={[styles.frameItem, styles.frameBorder]} />
        </View>
        <View style={styles.inputFieldParent}>
          <Text style={[styles.enterTheRecipients, styles.continueFlexBox]}>
            Withdraw funds by scanning the recipient’s wallet QR code.
          </Text>
          <Pressable
            style={styles.ionscanOutline}
            onPress={() => navigation.navigate("TopUpWallet1")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/ionscanoutline1.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Pressable
          style={[styles.pressable, styles.depositPosition]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/241.png")}
          />
        </Pressable>
        <Text style={[styles.deposit, styles.depositPosition]}>Deposit</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  continueFlexBox: {
    textAlign: "center",
    lineHeight: 24,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  enterTypo: {
    color: Color.primary0,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    fontFamily: FontFamily.mobileBodyCopy,
  },
  frameBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
  },
  orClr: {
    color: Color.white,
    textAlign: "center",
    lineHeight: 24,
  },
  headerPosition: {
    height: 74,
    left: 0,
    top: 0,
    width: 375,
    position: "absolute",
  },
  depositPosition: {
    top: 40,
    position: "absolute",
  },
  enterTheRecipients: {
    width: 335,
    color: Color.primary0,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    fontFamily: FontFamily.mobileBodyCopy,
    textAlign: "center",
  },
  inputFieldChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGray_400,
    position: "absolute",
    height: "100%",
  },
  enterWalletId: {
    marginTop: -12,
    top: "50%",
    left: 16,
    textAlign: "left",
    lineHeight: 24,
    color: Color.primary0,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    position: "absolute",
  },
  inputField: {
    height: 52,
    width: 335,
  },
  continue: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    color: Color.primary,
    fontSize: FontSize.mobileH5HeadingComponent_size,
  },
  button: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    opacity: 0.5,
    marginTop: 24,
    flexDirection: "row",
    width: 335,
    alignItems: "center",
  },
  inputFieldParent: {
    marginTop: 12,
    alignItems: "center",
  },
  frameChild: {
    width: 159,
  },
  or: {
    fontSize: FontSize.btnSmallNormal_size,
    marginLeft: 4,
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.white,
  },
  frameItem: {
    width: 158,
    marginLeft: 4,
  },
  lineParent: {
    paddingTop: Padding.p_5xs,
    flexDirection: "row",
    marginTop: 12,
    alignItems: "center",
  },
  icon: {
    overflow: "hidden",
  },
  ionscanOutline: {
    height: 375,
    width: 375,
    marginTop: 24,
  },
  enterTheRecipientsWalletIParent: {
    marginLeft: -187.5,
    top: 98,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.primary,
    height: 74,
    left: 0,
    top: 0,
  },
  pressable: {
    left: 20,
    width: 24,
    height: 24,
  },
  deposit: {
    marginLeft: -29.5,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    color: Color.white,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    left: "50%",
    top: 40,
  },
  topUpWallet: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.primary,
  },
});

export default TopUpWallet;