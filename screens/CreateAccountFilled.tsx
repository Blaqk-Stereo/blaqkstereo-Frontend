import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const CreateAccountFilled = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.createAccountFilled}>
      <View style={styles.newToBlaqkStereoParent}>
        <Text style={[styles.newToBlaqk, styles.continueTypo]}>
          Already on Blaqk Stereo?
        </Text>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={[styles.createAccount, styles.signInClr]}>Login</Text>
        </Pressable>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.signInParent}>
          <Text style={[styles.signIn, styles.signInClr]}>
            Let the journey begin!
          </Text>
          <Text style={[styles.uploadYourMusic, styles.blinkerLayout]}>
            Upload your music, manage your royalties, and engage with the music
            community.
          </Text>
        </View>
        <View style={styles.frameGroup}>
          <View>
            <Pressable
              style={styles.inputLayout}
              onPress={() => navigation.navigate("CreateAccountFillederror")}
            >
              <View style={styles.inputFieldChild} />
              <Text style={[styles.blinker, styles.blinkerPosition]}>
                Jane Doe
              </Text>
              <Image
                style={[styles.eyeIcon, styles.eyeIconPosition]}
                contentFit="cover"
                source={require("../assets/property-1eye.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.inputField1, styles.inputLayout]}
              onPress={() => navigation.navigate("CreateAccountFillederror")}
            >
              <View style={styles.inputFieldChild} />
              <Text style={[styles.blinker, styles.blinkerPosition]}>
                user@mail.com
              </Text>
              <Image
                style={[styles.eyeIcon, styles.eyeIconPosition]}
                contentFit="cover"
                source={require("../assets/property-1eye.png")}
              />
            </Pressable>
            <View style={styles.inputFieldGroup}>
              <View style={styles.inputLayout}>
                <View style={styles.inputFieldChild} />
                <Text style={[styles.blinker, styles.blinkerPosition]}>
                  *************
                </Text>
                <Image
                  style={styles.eyeIconPosition}
                  contentFit="cover"
                  source={require("../assets/property-1eye.png")}
                />
              </View>
              <View style={styles.checkboxfselectedParent}>
                <Image
                  style={styles.checkboxfselectedIcon}
                  contentFit="cover"
                  source={require("../assets/checkboxfselected.png")}
                />
                <Text style={[styles.iAgreeToContainer, styles.signInClr]}>
                  {`I agree to the `}
                  <Text style={styles.termsOfUse}>Terms of use</Text>
                  {` and `}
                  <Text style={styles.termsOfUse}>Privacy policy</Text>
                </Text>
              </View>
            </View>
          </View>
          <Pressable
            style={[styles.button1, styles.buttonFlexBox]}
            onPress={() => navigation.navigate("VerifyEmail1")}
          >
            <Text style={[styles.continue, styles.signInTypo]}>Continue</Text>
          </Pressable>
        </View>
      </View>
      <Image
        style={[styles.blaqkStereowhite300x1, styles.blinkerPosition]}
        contentFit="cover"
        source={require("../assets/blaqk-stereowhite300x-12.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  continueTypo: {
    textAlign: "left",
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
  blinkerLayout: {
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  blinkerPosition: {
    top: "50%",
    position: "absolute",
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
  signInTypo: {
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  newToBlaqk: {
    color: Color.primary10,
    fontFamily: FontFamily.mobileBodyCopy,
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
    marginLeft: -81.5,
    top: 720,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  signIn: {
    fontSize: FontSize.mobileH3HeadingPage_size,
    letterSpacing: -1,
    lineHeight: 34,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  uploadYourMusic: {
    color: Color.primary0,
    textAlign: "center",
    width: 335,
    fontFamily: FontFamily.mobileBodyCopy,
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
  blinker: {
    marginTop: -12,
    left: 16,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  eyeIcon: {
    display: "none",
  },
  inputField1: {
    marginTop: 24,
  },
  checkboxfselectedIcon: {
    width: 16,
    height: 16,
  },
  termsOfUse: {
    textDecoration: "underline",
  },
  iAgreeToContainer: {
    marginLeft: 4,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  checkboxfselectedParent: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  inputFieldGroup: {
    marginTop: 24,
  },
  continue: {
    color: Color.primary,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  button1: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_99xl,
    paddingVertical: Padding.p_sm,
    marginTop: 24,
    width: 335,
  },
  frameGroup: {
    marginTop: 20,
    alignItems: "center",
  },
  frameParent: {
    marginLeft: -171.5,
    top: 166,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  blaqkStereowhite300x1: {
    marginTop: -324,
    marginLeft: -49.5,
    width: 99,
    height: 48,
    left: "50%",
    overflow: "hidden",
  },
  createAccountFilled: {
    backgroundColor: Color.primary,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default CreateAccountFilled;
