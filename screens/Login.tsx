import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.login}>
      <View style={[styles.newToBlaqkStereoParent, styles.parentPosition]}>
        <Text style={[styles.newToBlaqk, styles.newToBlaqkTypo]}>
          New to Blaqk Stereo?
        </Text>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("CreateAccount")}
        >
          <Text style={[styles.createAccount, styles.signInClr]}>
            Create an account
          </Text>
        </Pressable>
      </View>
      <View style={[styles.frameParent, styles.parentPosition]}>
        <View style={styles.signInParent}>
          <Text style={[styles.signIn, styles.signInClr]}>Welcome back!</Text>
          <Text style={[styles.diveBackIn, styles.passwordTypo]}>
            Dive back in, let's create something amazing together!
          </Text>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.signInParent}>
            <View>
              <Pressable
                style={styles.inputLayout}
                onPress={() => navigation.navigate("LoginActiveState")}
              >
                <View style={styles.inputFieldChild} />
                <Text style={[styles.password, styles.passwordTypo]}>
                  Enter your email address
                </Text>
                <Image
                  style={[styles.eyeIcon, styles.eyeIconPosition]}
                  contentFit="cover"
                  source={require("../assets/property-1eye.png")}
                />
              </Pressable>
              <View style={[styles.inputField1, styles.inputLayout]}>
                <View style={styles.inputFieldChild} />
                <Text style={[styles.password, styles.passwordTypo]}>
                  Enter your password
                </Text>
                <Image
                  style={styles.eyeIconPosition}
                  contentFit="cover"
                  source={require("../assets/property-1eye.png")}
                />
              </View>
            </View>
            <Pressable
              style={[styles.button1, styles.buttonFlexBox]}
              onPress={() => navigation.navigate("Discover")}
            >
              <Text style={[styles.logIn, styles.logInTypo]}>Log in</Text>
            </Pressable>
          </View>
          <Pressable
            style={styles.forgotYourLoginContainer}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={[styles.forgotYourPassword, styles.signInClr]}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    left: "50%",
    position: "absolute",
  },
  newToBlaqkTypo: {
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  buttonFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  signInClr: {
    color: Color.white,
    textAlign: "left",
  },
  passwordTypo: {
    color: Color.primary0,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  eyeIconPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "88.34%",
    bottom: "26.92%",
    right: "4.66%",
    top: "26.92%",
    width: "7%",
    height: "46.15%",
    position: "absolute",
    overflow: "hidden",
  },
  inputLayout: {
    height: 52,
    width: 343,
  },
  logInTypo: {
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  newToBlaqk: {
    color: Color.primary10,
    textAlign: "left",
  },
  createAccount: {
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  button: {
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
  signIn: {
    fontSize: FontSize.mobileH3HeadingPage_size,
    letterSpacing: -1,
    lineHeight: 34,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  diveBackIn: {
    textAlign: "center",
    width: 335,
  },
  signInParent: {
    alignItems: "center",
  },
  inputFieldChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGray_400,
    position: "absolute",
    width: "100%",
  },
  password: {
    marginTop: -12,
    top: "50%",
    left: 16,
    textAlign: "left",
    position: "absolute",
  },
  eyeIcon: {
    display: "none",
  },
  inputField1: {
    marginTop: 24,
  },
  logIn: {
    color: Color.primary,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    fontWeight: "600",
  },
  button1: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_99xl,
    paddingVertical: Padding.p_sm,
    marginTop: 24,
    width: 335,
  },
  forgotYourPassword: {
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
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
  login: {
    backgroundColor: Color.primary,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Login;
