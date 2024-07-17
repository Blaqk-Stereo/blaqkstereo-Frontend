import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const VerifyEmail2Error = () => {
  return (
    <View style={styles.verifyEmail2Error}>
      <Text style={[styles.weSentYou, styles.buttonFlexBox]}>
        We sent you an activation email. Please enter the OTP in the mail to
        verify it’s you.
      </Text>
      <View style={[styles.frameParent, styles.textPosition]}>
        <View style={styles.frameGroup}>
          <View style={styles.groupParent}>
            <View style={styles.groupLayout}>
              <View style={[styles.groupChild, styles.iconPosition]} />
              <Text style={[styles.text, styles.textPosition]}>5</Text>
            </View>
            <View style={[styles.rectangleGroup, styles.groupLayout]}>
              <View style={[styles.groupChild, styles.iconPosition]} />
              <Text style={[styles.text, styles.textPosition]}>5</Text>
            </View>
            <View style={[styles.rectangleGroup, styles.groupLayout]}>
              <View style={[styles.groupChild, styles.iconPosition]} />
              <Text style={[styles.text, styles.textPosition]}>5</Text>
            </View>
            <View style={[styles.rectangleGroup, styles.groupLayout]}>
              <View style={[styles.groupChild, styles.iconPosition]} />
              <Text style={[styles.text, styles.textPosition]}>5</Text>
            </View>
          </View>
          <Text style={[styles.invalidPhoneNumber, styles.weSentYouTypo]}>
            Invalid verification code. Please try again!
          </Text>
        </View>
        <View style={styles.buttonParent}>
          <View style={[styles.button, styles.buttonFlexBox]}>
            <Text style={styles.continue}>Continue</Text>
          </View>
          <Text style={[styles.forgotYourLogin, styles.weSentYouTypo]}>
            Resend OTP
          </Text>
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
  weSentYouTypo: {
    textAlign: "center",
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
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
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGray_400,
    borderStyle: "solid",
    borderColor: Color.colorSalmon,
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
    textAlign: "left",
    color: Color.white,
  },
  rectangleGroup: {
    marginLeft: 14,
  },
  groupParent: {
    borderRadius: Border.br_8xs,
    flexDirection: "row",
  },
  invalidPhoneNumber: {
    fontSize: FontSize.btnSmallNormal_size,
    color: Color.errorDefault,
    marginTop: 8,
  },
  frameGroup: {
    alignItems: "center",
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
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    width: 335,
    paddingHorizontal: Padding.p_99xl,
    paddingVertical: Padding.p_sm,
    flexDirection: "row",
  },
  forgotYourLogin: {
    marginTop: 16,
    color: Color.white,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    fontFamily: FontFamily.mobileBodyCopy,
  },
  buttonParent: {
    marginTop: 24,
    alignItems: "center",
  },
  frameParent: {
    marginLeft: -167.5,
    top: 154,
    alignItems: "center",
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
    color: Color.white,
    top: 0,
    textAlign: "center",
    lineHeight: 24,
    position: "absolute",
  },
  parent: {
    top: 40,
    left: 20,
    width: 217,
  },
  verifyEmail2Error: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.primary,
  },
});

export default VerifyEmail2Error;
