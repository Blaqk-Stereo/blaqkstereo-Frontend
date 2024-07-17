import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const ChangePassword = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.changePassword}>
      <View style={styles.keepYourAccountProtectedAnParent}>
        <Text style={[styles.keepYourAccount, styles.passwordClr]}>
          Keep your account protected and safeguard your musical journey with a
          new, secure password.
        </Text>
        <View style={styles.inputFieldParent}>
          <View style={styles.inputLayout}>
            <View style={[styles.inputFieldChild, styles.iconLayout]} />
            <Text style={[styles.password, styles.passwordTypo]}>
              Enter current password
            </Text>
            <Image
              style={styles.eyeIcon}
              contentFit="cover"
              source={require("../assets/eye3.png")}
            />
          </View>
          <View style={[styles.inputField1, styles.inputLayout]}>
            <View style={[styles.inputFieldChild, styles.iconLayout]} />
            <Text style={[styles.password, styles.passwordTypo]}>
              Enter new password
            </Text>
            <Image
              style={styles.eyeIcon}
              contentFit="cover"
              source={require("../assets/eye3.png")}
            />
          </View>
          <View style={[styles.inputField1, styles.inputLayout]}>
            <View style={[styles.inputFieldChild, styles.iconLayout]} />
            <Text style={[styles.password, styles.passwordTypo]}>
              Confirm new password
            </Text>
            <Image
              style={styles.eyeIcon}
              contentFit="cover"
              source={require("../assets/eye3.png")}
            />
          </View>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("PasswordChangeSuccessful2")}
          >
            <Text style={[styles.saveChanges, styles.passwordTypo]}>
              Save Changes
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <View style={[styles.parent, styles.parentLayout]}>
          <Pressable
            style={[styles.pressable, styles.parentLayout]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/241.png")}
            />
          </Pressable>
          <Text style={styles.changePassword1}>Change Password</Text>
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
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  passwordTypo: {
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  inputLayout: {
    height: 52,
    width: 343,
  },
  headerPosition: {
    height: 74,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  parentLayout: {
    height: 24,
    position: "absolute",
  },
  keepYourAccount: {
    textAlign: "center",
    width: 335,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    fontFamily: FontFamily.mobileBodyCopy,
  },
  inputFieldChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGray_400,
    position: "absolute",
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
    position: "absolute",
    overflow: "hidden",
  },
  inputField1: {
    marginTop: 24,
  },
  saveChanges: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH6HeadingSubHead,
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
  inputFieldParent: {
    marginTop: 20,
    alignItems: "center",
  },
  keepYourAccountProtectedAnParent: {
    marginLeft: -171.5,
    top: 86,
    left: "50%",
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.primary,
    height: 74,
    width: 375,
  },
  icon: {
    overflow: "hidden",
  },
  pressable: {
    width: 24,
    left: 0,
    height: 24,
    top: 0,
  },
  changePassword1: {
    left: 99,
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
    width: 237,
  },
  changePassword: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.primary,
  },
});

export default ChangePassword;