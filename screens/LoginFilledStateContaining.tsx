import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const LoginFilledStateContaining = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.loginFilledStateContaining}>
      <View style={[styles.frameParent, styles.parentPosition]}>
        <View style={styles.signInParent}>
          <Text style={styles.signIn}>Welcome back!</Text>
          <Text style={[styles.diveBackIn, styles.diveBackInTypo]}>
            Dive back in, let's create something amazing together!
          </Text>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.signInParent}>
            <View>
              <View style={styles.inputField}>
                <View style={[styles.inputFieldChild, styles.inputPosition]} />
                <Text style={[styles.blinker, styles.blinkerPosition]}>
                  user@mail.com
                </Text>
                <Image
                  style={[styles.eyeIcon, styles.eyeIconLayout]}
                  contentFit="cover"
                  source={require("../assets/property-1eye.png")}
                />
              </View>
              <View style={styles.inputField1}>
                <View style={[styles.inputFieldItem, styles.inputPosition]} />
                <Text style={[styles.blinker1, styles.blinkerPosition]}>
                  **********
                </Text>
                <Text style={styles.blinker2}>Helper text goes here</Text>
                <Image
                  style={[styles.eyeIcon1, styles.eyeIconLayout]}
                  contentFit="cover"
                  source={require("../assets/property-1eye.png")}
                />
              </View>
            </View>
            <View style={[styles.button, styles.buttonFlexBox]}>
              <Text style={[styles.logIn, styles.logInTypo]}>Log in</Text>
            </View>
          </View>
          <Pressable
            style={styles.forgotYourLoginContainer}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={[styles.forgotYourPassword, styles.diveBackInTypo]}>
              Forgot your password?
            </Text>
          </Pressable>
        </View>
      </View>
      <Image
        style={[styles.blaqkStereoLogo, styles.parentPosition]}
        contentFit="cover"
        source={require("../assets/blaqk-stereo-logo.png")}
      />
      <View style={[styles.newToBlaqkStereoParent, styles.parentPosition]}>
        <Text style={[styles.newToBlaqk, styles.diveBackInTypo]}>
          New to Blaqk Stereo?
        </Text>
        <Pressable
          style={[styles.button1, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("CreateAccount")}
        >
          <Text style={[styles.createAccount, styles.logInTypo]}>
            Create an account
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    left: "50%",
    position: "absolute",
  },
  diveBackInTypo: {
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  inputPosition: {
    backgroundColor: Color.colorGray_400,
    borderRadius: Border.br_5xs,
    right: "0%",
    top: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  blinkerPosition: {
    left: 16,
    top: "50%",
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  eyeIconLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  logInTypo: {
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "left",
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  signIn: {
    fontSize: FontSize.mobileH3HeadingPage_size,
    letterSpacing: -1,
    lineHeight: 34,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  diveBackIn: {
    color: Color.primary0,
    textAlign: "center",
    width: 335,
  },
  signInParent: {
    alignItems: "center",
  },
  inputFieldChild: {
    height: "100%",
    bottom: "0%",
  },
  blinker: {
    marginTop: -12,
  },
  eyeIcon: {
    height: "46.15%",
    width: "7%",
    top: "26.92%",
    right: "4.66%",
    bottom: "26.92%",
    left: "88.34%",
    maxWidth: "100%",
    display: "none",
    overflow: "hidden",
  },
  inputField: {
    height: 52,
    width: 343,
  },
  inputFieldItem: {
    height: "61.9%",
    bottom: "38.1%",
    borderStyle: "solid",
    borderColor: Color.colorMaroon,
    borderWidth: 1,
  },
  blinker1: {
    marginTop: -28,
  },
  blinker2: {
    width: "41.78%",
    top: "71.43%",
    color: Color.errorDefault,
    left: "0%",
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "left",
    position: "absolute",
  },
  eyeIcon1: {
    height: "28.57%",
    top: "16.67%",
    right: 16,
    bottom: "54.76%",
    width: 24,
  },
  inputField1: {
    height: 84,
    marginTop: 24,
    width: 343,
  },
  logIn: {
    color: Color.primary,
  },
  button: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_99xl,
    paddingVertical: Padding.p_sm,
    marginTop: 24,
    width: 335,
  },
  forgotYourPassword: {
    textAlign: "left",
    color: Color.white,
  },
  forgotYourLoginContainer: {
    marginTop: 16,
  },
  frameGroup: {
    marginTop: 20,
    alignItems: "center",
  },
  frameParent: {
    marginLeft: -171.5,
    top: 166,
  },
  blaqkStereoLogo: {
    marginLeft: -42.5,
    top: 50,
    width: 85,
    height: 80,
  },
  newToBlaqk: {
    color: Color.primary10,
    textAlign: "left",
  },
  createAccount: {
    color: Color.white,
  },
  button1: {
    borderRadius: Border.br_smi_5,
    backgroundColor: Color.primary20,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_11xs,
    marginTop: 4,
    overflow: "hidden",
  },
  newToBlaqkStereoParent: {
    marginLeft: -77.5,
    top: 720,
    alignItems: "center",
  },
  loginFilledStateContaining: {
    backgroundColor: Color.primary,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default LoginFilledStateContaining;
