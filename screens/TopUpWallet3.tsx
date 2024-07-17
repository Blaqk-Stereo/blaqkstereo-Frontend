import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const TopUpWallet3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.topUpWallet}>
      <View style={styles.enterTheRecipientsWalletIParent}>
        <Text style={[styles.enterTheRecipients, styles.orTypo]}>
          Enter the recipient's wallet id to initiate a withdrawal.
        </Text>
        <View style={styles.inputFieldParent}>
          <View style={styles.inputField}>
            <View style={[styles.inputFieldChild, styles.iconLayout]} />
            <Text style={[styles.text, styles.textPosition]}>07012345678</Text>
            <Image
              style={styles.eyeIcon}
              contentFit="cover"
              source={require("../assets/eye2.png")}
            />
            <Image
              style={[styles.epcircleCloseFilledIcon, styles.textPosition]}
              contentFit="cover"
              source={require("../assets/epcircleclosefilled.png")}
            />
          </View>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("Withdraw1")}
          >
            <Text style={[styles.continue, styles.depositTypo]}>Continue</Text>
          </Pressable>
        </View>
        <View style={styles.lineParent}>
          <View style={[styles.frameChild, styles.frameBorder]} />
          <Text style={[styles.or, styles.orTypo]}>or</Text>
          <View style={[styles.frameItem, styles.frameBorder]} />
        </View>
        <View style={styles.inputFieldParent}>
          <Text style={[styles.enterTheRecipients, styles.orTypo]}>
            Withdraw funds by scanning the recipient’s wallet QR code.
          </Text>
          <Pressable
            style={styles.ionscanOutline}
            onPress={() => navigation.navigate("TopUpWallet1")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/ionscanoutline.png")}
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
  orTypo: {
    textAlign: "center",
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  textPosition: {
    top: "50%",
    position: "absolute",
  },
  depositTypo: {
    fontSize: FontSize.mobileH5HeadingComponent_size,
    textAlign: "center",
    lineHeight: 24,
  },
  frameBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
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
    color: Color.primary0,
    width: 335,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
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
  },
  text: {
    marginTop: -12,
    left: 16,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    top: "50%",
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  eyeIcon: {
    height: "46.15%",
    width: "6.99%",
    top: "26.92%",
    right: "4.69%",
    bottom: "26.92%",
    left: "88.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    display: "none",
    overflow: "hidden",
    position: "absolute",
  },
  epcircleCloseFilledIcon: {
    marginTop: -10,
    left: 305,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  inputField: {
    height: 52,
    width: 335,
  },
  continue: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH3HeadingPage,
    color: Color.primary,
  },
  button: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
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
    fontSize: FontSize.mobileH5HeadingComponent_size,
    textAlign: "center",
    lineHeight: 24,
    color: Color.white,
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

export default TopUpWallet3;
