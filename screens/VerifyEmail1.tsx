import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const VerifyEmail1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.verifyEmail}>
      <View style={styles.rectangleParent}>
        <Pressable
          style={styles.frameLayout}
          onPress={() => navigation.navigate("VerifyEmail")}
        />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
      </View>
      <Text style={[styles.weSentYou, styles.buttonFlexBox]}>
        We sent you an activation email. Please enter the OTP in the mail to
        verify it’s you.
      </Text>
      <View style={[styles.button, styles.buttonFlexBox]}>
        <Text style={styles.continue}>Continue</Text>
      </View>
      <Text style={styles.forgotYourLogin}>Resend OTP</Text>
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
  frameLayout: {
    height: 73,
    width: 73,
    backgroundColor: Color.colorGray_400,
    borderRadius: Border.br_5xs,
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
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
  frameItem: {
    marginLeft: 14,
  },
  rectangleParent: {
    marginLeft: -166.5,
    top: 154,
    left: "50%",
    borderRadius: Border.br_8xs,
    flexDirection: "row",
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
    alignItems: "center",
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
    left: 20,
    flexDirection: "row",
  },
  forgotYourLogin: {
    top: 319,
    left: 148,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.primary,
    height: 74,
    width: 375,
  },
  icon: {
    width: 24,
    left: 0,
    height: 24,
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
  verifyEmail: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.primary,
  },
});

export default VerifyEmail1;
