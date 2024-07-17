import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const CreateANewWallet2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.createANewWallet2}>
      <View style={styles.title}>
        <Text style={[styles.verificationCode, styles.textFlexBox]}>
          Verification Code
        </Text>
        <Text style={styles.enterThe6Digit}>
          Enter the 6-digit code sent to +2347012345678
        </Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.connect}>Connect</Text>
      </View>
      <View style={styles.mbNavBarprocess}>
        <View style={[styles.step1, styles.step1Position]}>
          <View style={[styles.step1Child, styles.step1Position]} />
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
      <Pressable
        style={[styles.inputField, styles.step1SpaceBlock]}
        onPress={() => navigation.navigate("CreateANewWallet3")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "center",
    color: Color.white,
    lineHeight: 24,
  },
  step1Position: {
    top: 10,
    left: "50%",
    position: "absolute",
  },
  badgeLayout: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
    height: 18,
    width: 18,
    top: 3,
    backgroundColor: Color.white,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  step1SpaceBlock: {
    marginLeft: -167.5,
    width: 335,
  },
  verificationCode: {
    fontSize: FontSize.mobileH4HeadingSection_size,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    color: Color.white,
    lineHeight: 24,
  },
  enterThe6Digit: {
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.primary0,
    display: "flex",
    marginTop: 8,
    width: 335,
    justifyContent: "center",
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
    lineHeight: 24,
    alignItems: "center",
  },
  title: {
    top: 112,
    left: 20,
    alignItems: "center",
    position: "absolute",
  },
  connect: {
    color: Color.primary,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    lineHeight: 24,
  },
  button: {
    bottom: 474,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    opacity: 0.5,
    backgroundColor: Color.white,
    borderRadius: Border.br_81xl,
    left: "50%",
    marginLeft: -167.5,
    width: 335,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  step1Child: {
    marginLeft: -163.5,
    borderRadius: Border.br_3xs,
    width: 327,
    height: 4,
    backgroundColor: Color.white,
  },
  text: {
    fontSize: FontSize.btnSmallNormal_size,
    fontWeight: "700",
    fontFamily: FontFamily.btnSmallNormal,
    color: Color.white,
    lineHeight: 24,
  },
  badgeBasic: {
    left: 0,
  },
  badgeBasic1: {
    marginLeft: -8.5,
    left: "50%",
  },
  badgeBasic2: {
    right: 0,
  },
  step1: {
    height: 24,
    marginLeft: -167.5,
    width: 335,
  },
  mbNavBarprocess: {
    top: 44,
    backgroundColor: Color.colorGray_700,
    width: 375,
    height: 44,
    left: 0,
    position: "absolute",
  },
  inputField: {
    top: 188,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGray_400,
    height: 58,
    left: "50%",
    justifyContent: "center",
    marginLeft: -167.5,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  createANewWallet2: {
    backgroundColor: Color.primary,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default CreateANewWallet2;