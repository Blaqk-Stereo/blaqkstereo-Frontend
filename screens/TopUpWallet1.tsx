import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const TopUpWallet1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.topUpWallet}>
      <View style={styles.enterTheRecipientsWalletIParent}>
        <Text style={styles.enterTheRecipients}>
          Enter the recipient's wallet id to initiate a withdrawal.
        </Text>
        <View style={styles.inputFieldParent}>
          <View style={styles.inputField}>
            <View style={[styles.inputFieldChild, styles.iconLayout]} />
            <Text style={[styles.enterWalletId, styles.qrCardIconPosition]}>
              Enter wallet id
            </Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.continue}>Continue</Text>
          </View>
        </View>
        <View style={styles.lineParent}>
          <View style={[styles.frameChild, styles.frameBorder]} />
          <Text style={styles.or}>or</Text>
          <View style={[styles.frameItem, styles.frameBorder]} />
        </View>
        <View style={styles.inputFieldParent}>
          <Text style={styles.enterTheRecipients}>
            Withdraw funds by scanning the recipient’s wallet QR code.
          </Text>
          <View style={styles.ionscanOutline}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
            <Image
              style={[styles.qrCardIcon, styles.qrCardIconPosition]}
              contentFit="cover"
              source={require("../assets/qr-card.png")}
            />
            <Text style={[styles.scanning, styles.depositTypo]}>
              Scanning...
            </Text>
          </View>
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
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  qrCardIconPosition: {
    top: "50%",
    position: "absolute",
  },
  frameBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
  },
  depositTypo: {
    fontWeight: "500",
    color: Color.white,
    fontSize: FontSize.mobileH5HeadingComponent_size,
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
    textAlign: "center",
    color: Color.primary0,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
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
  enterWalletId: {
    marginTop: -12,
    left: 16,
    textAlign: "left",
    color: Color.primary0,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    top: "50%",
  },
  inputField: {
    height: 52,
    width: 335,
  },
  continue: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH3HeadingPage,
    color: Color.primary,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    textAlign: "center",
    lineHeight: 24,
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
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
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
  vectorIcon: {
    height: "75.01%",
    width: "75.01%",
    top: "12.51%",
    right: "12.48%",
    bottom: "12.48%",
    left: "12.51%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  qrCardIcon: {
    marginTop: -100.5,
    marginLeft: -99.5,
    width: 199,
    height: 202,
    overflow: "hidden",
    left: "50%",
  },
  scanning: {
    bottom: 0,
    left: 145,
    fontStyle: "italic",
    fontFamily: FontFamily.rubikMediumItalic,
    position: "absolute",
  },
  ionscanOutline: {
    height: 375,
    overflow: "hidden",
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
  icon: {
    overflow: "hidden",
  },
  pressable: {
    left: 20,
    width: 24,
    height: 24,
  },
  deposit: {
    marginLeft: -29.5,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    color: Color.white,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    textAlign: "center",
    lineHeight: 24,
    left: "50%",
  },
  topUpWallet: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.primary,
  },
});

export default TopUpWallet1;
