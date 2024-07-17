import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

const CreateANewWallet = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.createANewWallet1}>
      <View style={styles.content}>
        <View style={styles.connectYourPhoneNumberToMParent}>
          <Text style={styles.connectYourPhone}>
            Connect your phone number to MiniPay
          </Text>
          <Text style={styles.yourPhoneNumber}>
            Your phone number is used when others send you money.
          </Text>
        </View>
        <View style={styles.inputFieldParent}>
          <View style={styles.inputSpaceBlock}>
            <Image
              style={styles.emojioneV1flagForNigeriaIcon}
              contentFit="cover"
              source={require("../assets/emojionev1flagfornigeria.png")}
            />
            <Text style={[styles.blinker, styles.blinkerTypo]}>+234</Text>
            <Image
              style={styles.arrowRightIcon}
              contentFit="cover"
              source={require("../assets/arrowright5.png")}
            />
          </View>
          <Pressable
            style={[styles.inputField1, styles.inputSpaceBlock]}
            onPress={() => navigation.navigate("CreateANewWallet1")}
          >
            <Text style={[styles.blinker1, styles.blinkerTypo]}>
              Enter phone number
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.button}>
        <Text style={styles.continue}>Continue</Text>
      </View>
      <View style={styles.mbNavBarprocess}>
        <View style={styles.step1}>
          <View style={[styles.step1Child, styles.step1Layout]} />
          <View style={[styles.step1Item, styles.step1Layout]} />
          <View style={[styles.badgeBasic, styles.badgeLayout]}>
            <Text style={styles.text} />
          </View>
          <View style={[styles.badgeBasic1, styles.badgeLayout]}>
            <Text style={styles.text} />
          </View>
          <View style={[styles.badgeBasic2, styles.badgeLayout]}>
            <Text style={styles.text} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  blinkerTypo: {
    textAlign: "left",
    fontFamily: FontFamily.mobileBodyCopy,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    lineHeight: 24,
  },
  inputSpaceBlock: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.colorGray_400,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  step1Layout: {
    height: 4,
    borderRadius: Border.br_3xs,
    top: 10,
    position: "absolute",
  },
  badgeLayout: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
    height: 18,
    width: 18,
    top: 3,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  connectYourPhone: {
    fontSize: FontSize.mobileH4HeadingSection_size,
    width: 335,
    justifyContent: "center",
    display: "flex",
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
    textAlign: "center",
    color: Color.gray0White,
    lineHeight: 24,
    alignItems: "center",
  },
  yourPhoneNumber: {
    color: Color.primary0,
    marginTop: 8,
    fontFamily: FontFamily.mobileBodyCopy,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    width: 335,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 24,
    alignItems: "center",
  },
  connectYourPhoneNumberToMParent: {
    alignItems: "center",
  },
  emojioneV1flagForNigeriaIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  blinker: {
    marginLeft: 8,
    color: Color.gray0White,
    textAlign: "left",
  },
  arrowRightIcon: {
    width: 12,
    height: 12,
    marginLeft: 8,
  },
  blinker1: {
    color: "rgba(170, 170, 170, 0.67)",
  },
  inputField1: {
    width: 213,
    marginLeft: 4,
  },
  inputFieldParent: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  content: {
    top: 112,
    alignItems: "center",
    left: "50%",
    marginLeft: -167.5,
    position: "absolute",
  },
  continue: {
    color: Color.primary,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
    lineHeight: 24,
  },
  button: {
    bottom: 432,
    paddingHorizontal: 0,
    opacity: 0.5,
    backgroundColor: Color.gray0White,
    borderRadius: Border.br_81xl,
    paddingVertical: Padding.p_sm,
    flexDirection: "row",
    width: 335,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    marginLeft: -167.5,
    position: "absolute",
  },
  step1Child: {
    left: 6,
    width: 166,
    backgroundColor: Color.gray0White,
  },
  step1Item: {
    left: 172,
    width: 155,
    backgroundColor: Color.colorGray_300,
  },
  text: {
    fontSize: FontSize.btnSmallNormal_size,
    fontWeight: "700",
    fontFamily: FontFamily.btnSmallNormal,
    textAlign: "center",
    lineHeight: 24,
    color: Color.gray0White,
  },
  badgeBasic: {
    left: 0,
    backgroundColor: Color.gray0White,
  },
  badgeBasic1: {
    marginLeft: -8.5,
    backgroundColor: Color.gray0White,
    left: "50%",
  },
  badgeBasic2: {
    right: 0,
    backgroundColor: Color.colorGray_300,
  },
  step1: {
    top: 10,
    height: 24,
    width: 335,
    left: "50%",
    marginLeft: -167.5,
    position: "absolute",
  },
  mbNavBarprocess: {
    top: 44,
    backgroundColor: Color.colorGray_700,
    width: 375,
    height: 44,
    left: 0,
    position: "absolute",
  },
  createANewWallet1: {
    backgroundColor: Color.primary,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default CreateANewWallet;