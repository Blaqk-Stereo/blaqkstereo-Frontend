import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const VerifyEmail = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.verifyEmail2}>
      <Text style={[styles.weSentYou, styles.buttonFlexBox]}>
        We sent you an activation email. Please enter the OTP in the mail to
        verify it’s you.
      </Text>
      <Pressable
        style={[styles.button, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("Loader")}
      >
        <Text style={styles.continue}>Continue</Text>
      </Pressable>
      <Pressable
        style={styles.forgotYourLoginContainer}
        onPress={() => navigation.navigate("VerifyEmailResendOtp")}
      >
        <Text style={[styles.resendOtp, styles.textClr]}>Resend OTP</Text>
      </Pressable>
      <View style={[styles.groupParent, styles.textPosition]}>
        <View style={styles.groupLayout}>
          <View style={[styles.groupChild, styles.iconPosition]} />
          <Text style={[styles.text, styles.textPosition]}>5</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.iconPosition]} />
          <Text style={[styles.text, styles.textPosition]}>4</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.iconPosition]} />
          <Text style={[styles.text, styles.textPosition]}>9</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.iconPosition]} />
          <Text style={[styles.text, styles.textPosition]}>1</Text>
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
          <Text style={styles.almostThere}>Almost there</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  textClr: {
    color: Color.white,
    textAlign: "center",
  },
  textPosition: {
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    left: 0,
    top: 0,
  },
  groupLayout: {
    height: 73,
    width: 73,
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
  weSentYou: {
    top: 86,
    left: 16,
    color: Color.primary0,
    display: "flex",
    width: 343,
    textAlign: "center",
    alignItems: "center",
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  continue: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH3HeadingPage,
    color: Color.primary,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  button: {
    top: 251,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    width: 335,
    paddingHorizontal: Padding.p_99xl,
    paddingVertical: Padding.p_sm,
    flexDirection: "row",
    left: 20,
  },
  resendOtp: {
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.white,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  forgotYourLoginContainer: {
    left: 148,
    top: 319,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGray_400,
    borderStyle: "solid",
    borderColor: Color.primary30,
    borderWidth: 1,
    height: 73,
    width: 73,
    position: "absolute",
  },
  text: {
    marginTop: -16.5,
    marginLeft: -7.5,
    top: "50%",
    fontSize: FontSize.mobileH2HeadingDefault_size,
    letterSpacing: -1,
    lineHeight: 34,
    fontWeight: "700",
    fontFamily: FontFamily.mobileH1HeadingDisplay,
    color: Color.white,
    textAlign: "center",
  },
  rectangleGroup: {
    marginLeft: 14,
  },
  groupParent: {
    marginLeft: -166.5,
    top: 154,
    borderRadius: Border.br_8xs,
    flexDirection: "row",
  },
  headerChild: {
    backgroundColor: Color.primary,
  },
  icon: {
    width: 24,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  almostThere: {
    left: 117,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    top: 0,
    color: Color.white,
    textAlign: "center",
    lineHeight: 24,
    position: "absolute",
  },
  parent: {
    top: 40,
    width: 217,
    left: 20,
  },
  verifyEmail2: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.primary,
  },
});

export default VerifyEmail;
