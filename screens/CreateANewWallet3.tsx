import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const CreateANewWallet3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.createANewWallet3}>
      <View style={styles.mbNavBarprocess}>
        <View style={styles.step1}>
          <View style={styles.step1Child} />
          <View style={[styles.badgeBasic, styles.badgeLayout]}>
            <Text style={[styles.text, styles.textFlexBox]} />
          </View>
          <View style={[styles.badgeBasic1, styles.badgeLayout]}>
            <Text style={[styles.text, styles.textFlexBox]} />
          </View>
          <View style={[styles.badgeBasic2, styles.badgeLayout]}>
            <Text style={[styles.text, styles.textFlexBox]} />
          </View>
        </View>
      </View>
      <View style={styles.title}>
        <Text style={[styles.verificationCode, styles.blinkerTypo]}>
          Verification Code
        </Text>
        <Text style={[styles.enterThe6Digit, styles.connectTypo]}>
          Enter the 6-digit code sent to +2347012345678
        </Text>
      </View>
      <View style={[styles.inputField, styles.buttonFlexBox]}>
        <Text style={[styles.blinker, styles.blinkerTypo]}>701234</Text>
      </View>
      <Pressable
        style={[styles.button, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("CreateANewWallet4")}
      >
        <Text style={[styles.connect, styles.connectTypo]}>Connect</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeLayout: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
    height: 18,
    width: 18,
    top: 3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    lineHeight: 24,
    color: Color.white,
  },
  blinkerTypo: {
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
  },
  connectTypo: {
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
    lineHeight: 24,
  },
  buttonFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 335,
    left: "50%",
    marginLeft: -167.5,
    position: "absolute",
  },
  step1Child: {
    marginLeft: -163.5,
    borderRadius: Border.br_3xs,
    width: 327,
    height: 4,
    backgroundColor: Color.white,
    left: "50%",
    top: 10,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.btnSmallNormal_size,
    fontWeight: "700",
    fontFamily: FontFamily.btnSmallNormal,
  },
  badgeBasic: {
    left: 0,
  },
  badgeBasic1: {
    marginLeft: -8.5,
    left: "50%",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
    height: 18,
    width: 18,
    top: 3,
  },
  badgeBasic2: {
    right: 0,
  },
  step1: {
    height: 24,
    width: 335,
    top: 10,
    marginLeft: -167.5,
    left: "50%",
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
  verificationCode: {
    fontSize: FontSize.mobileH4HeadingSection_size,
    textAlign: "center",
    lineHeight: 24,
    color: Color.white,
  },
  enterThe6Digit: {
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.primary0,
    display: "flex",
    marginTop: 8,
    justifyContent: "center",
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    alignItems: "center",
    width: 335,
  },
  title: {
    top: 112,
    left: 20,
    alignItems: "center",
    position: "absolute",
  },
  blinker: {
    fontSize: FontSize.mobileH3HeadingPage_size,
    letterSpacing: -1,
    lineHeight: 34,
    textAlign: "left",
    color: Color.white,
    fontWeight: "600",
  },
  inputField: {
    top: 188,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGray_400,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    overflow: "hidden",
  },
  connect: {
    color: Color.primary,
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
  },
  button: {
    bottom: 474,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  createANewWallet3: {
    backgroundColor: Color.primary,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default CreateANewWallet3;