import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, Border, FontFamily, Padding } from "../GlobalStyles";

const CreateAccountFillederror = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.createAccountFillederror}>
      <View style={[styles.newToBlaqkStereoParent, styles.parentPosition]}>
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
      <Image
        style={styles.blaqkStereowhite300x1}
        contentFit="cover"
        source={require("../assets/blaqk-stereowhite300x-12.png")}
      />
      <View style={[styles.frameParent, styles.parentPosition]}>
        <View style={styles.signInParent}>
          <Text style={[styles.signIn, styles.signInClr]}>
            Let the journey begin!
          </Text>
          <Text style={[styles.uploadYourMusic, styles.createAccountLayout]}>
            Upload your music, manage your royalties, and engage with the music
            community.
          </Text>
        </View>
        <View style={styles.frameGroup}>
          <View>
            <Pressable
              style={styles.inputField}
              onPress={() => navigation.navigate("CreateAccountFillederror")}
            >
              <View style={[styles.inputFieldChild, styles.inputPosition]} />
              <Text style={[styles.blinker, styles.blinkerPosition]}>
                Jane Doe
              </Text>
              <Image
                style={[styles.eyeIcon, styles.eyeIconLayout]}
                contentFit="cover"
                source={require("../assets/property-1eye.png")}
              />
            </Pressable>
            <View style={styles.inputField1}>
              <View style={[styles.inputFieldItem, styles.inputPosition]} />
              <Text style={[styles.blinker1, styles.blinkerPosition]}>
                user@mail.com
              </Text>
              <Text style={styles.blinker2}>Invalid email address</Text>
              <Image
                style={[styles.eyeIcon1, styles.eyeIconLayout]}
                contentFit="cover"
                source={require("../assets/property-1eye.png")}
              />
            </View>
            <View style={styles.inputFieldGroup}>
              <View style={styles.inputField}>
                <View style={[styles.inputFieldChild, styles.inputPosition]} />
                <Text style={[styles.blinker, styles.blinkerPosition]}>
                  *************
                </Text>
                <Image
                  style={styles.eyeIcon2}
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
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    left: "50%",
    position: "absolute",
    alignItems: "center",
  },
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
  createAccountLayout: {
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
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    position: "absolute",
  },
  eyeIconLayout: {
    display: "none",
    maxHeight: "100%",
    position: "absolute",
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
  },
  blaqkStereowhite300x1: {
    marginTop: -324,
    marginLeft: -49.5,
    width: 99,
    height: 48,
    top: "50%",
    left: "50%",
    position: "absolute",
    overflow: "hidden",
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
    bottom: "0%",
  },
  blinker: {
    marginTop: -12,
  },
  eyeIcon: {
    maxWidth: "100%",
    left: "88.34%",
    bottom: "26.92%",
    right: "4.66%",
    top: "26.92%",
    width: "7%",
    height: "46.15%",
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
    textAlign: "left",
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
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
  eyeIcon2: {
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
  },
  createAccountFillederror: {
    backgroundColor: Color.primary,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default CreateAccountFillederror;
