import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const ForgotPassword = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.forgotPassword}>
      <View style={styles.losingYourPasswordShouldntParent}>
        <Text style={[styles.losingYourPassword, styles.passwordClr]}>
          Losing your password shouldn't stop the music. Provide your registered
          email address, and we'll guide you through the steps to regain access
          to your account.
        </Text>
        <View style={styles.frameWrapper}>
          <View style={styles.frameParent}>
            <View>
              <View style={styles.inputField}>
                <View style={styles.inputFieldChild} />
                <Text style={[styles.password, styles.passwordTypo]}>
                  Enter your email address
                </Text>
                <Image
                  style={styles.eyeIcon}
                  contentFit="cover"
                  source={require("../assets/property-1eye.png")}
                />
              </View>
            </View>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("PasswordResetSuccessful")}
            >
              <Text style={[styles.resetPassword, styles.passwordTypo]}>
                Reset Password
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <View style={[styles.parent, styles.iconLayout]}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/241.png")}
          />
          <Text style={styles.forgotPassword1}>Forgot Password</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordClr: {
    color: Color.primary0,
    fontFamily: FontFamily.mobileBodyCopy,
  },
  passwordTypo: {
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  headerPosition: {
    height: 74,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    position: "absolute",
  },
  losingYourPassword: {
    textAlign: "center",
    width: 335,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    fontFamily: FontFamily.mobileBodyCopy,
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
    color: Color.primary0,
    fontFamily: FontFamily.mobileBodyCopy,
    position: "absolute",
  },
  eyeIcon: {
    height: "46.15%",
    width: "7%",
    top: "26.92%",
    right: "4.66%",
    bottom: "26.92%",
    left: "88.34%",
    maxWidth: "100%",
    maxHeight: "100%",
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  inputField: {
    width: 343,
    height: 52,
  },
  resetPassword: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH3HeadingPage,
    color: Color.primary,
  },
  button: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_99xl,
    paddingVertical: Padding.p_sm,
    marginTop: 24,
    alignItems: "center",
    width: 335,
  },
  frameParent: {
    alignItems: "center",
  },
  frameWrapper: {
    marginTop: 20,
    alignItems: "center",
  },
  losingYourPasswordShouldntParent: {
    marginLeft: -171.5,
    top: 86,
    left: "50%",
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.primary,
  },
  icon: {
    width: 24,
    left: 0,
    height: 24,
    top: 0,
    overflow: "hidden",
  },
  forgotPassword1: {
    left: 102,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    color: Color.white,
    top: 0,
    textAlign: "left",
    lineHeight: 24,
    position: "absolute",
  },
  parent: {
    top: 40,
    left: 20,
    width: 233,
  },
  forgotPassword: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.primary,
  },
});

export default ForgotPassword;
