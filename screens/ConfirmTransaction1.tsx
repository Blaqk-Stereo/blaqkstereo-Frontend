import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const ConfirmTransaction1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.confirmTransaction}>
      <Text style={[styles.pleaseEnterYour, styles.buttonLayout]}>
        Please enter your Blaqk Stereo password to confirm this withdrawal
      </Text>
      <View style={styles.inputField}>
        <View style={[styles.inputFieldChild, styles.iconLayout]} />
        <Text style={styles.password}>Enter password</Text>
        <Image
          style={styles.eyeIcon}
          contentFit="cover"
          source={require("../assets/eye4.png")}
        />
      </View>
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("WithdrawalDone")}
      >
        <Text style={[styles.confirm, styles.confirmTypo]}>Confirm</Text>
      </Pressable>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Pressable
          style={[styles.pressable, styles.pressablePosition]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/241.png")}
          />
        </Pressable>
        <Text style={[styles.confirmWithdrawal, styles.pressablePosition]}>
          Confirm withdrawal
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    width: 335,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  confirmTypo: {
    fontSize: FontSize.mobileH5HeadingComponent_size,
    textAlign: "center",
    lineHeight: 24,
  },
  headerPosition: {
    height: 74,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  pressablePosition: {
    top: 40,
    position: "absolute",
  },
  pleaseEnterYour: {
    top: 86,
    textAlign: "center",
    width: 335,
    color: Color.primary0,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    left: 20,
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
    textAlign: "left",
    color: Color.primary0,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
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
  inputField: {
    marginLeft: -168.5,
    top: 154,
    width: 343,
    height: 52,
    left: "50%",
    position: "absolute",
  },
  confirm: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH3HeadingPage,
    color: Color.primary,
  },
  button: {
    marginLeft: -167.5,
    bottom: 40,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    left: "50%",
  },
  headerChild: {
    backgroundColor: Color.primary,
    height: 74,
    width: 375,
    left: 0,
    top: 0,
  },
  icon: {
    overflow: "hidden",
  },
  pressable: {
    width: 24,
    height: 24,
    left: 20,
    top: 40,
  },
  confirmWithdrawal: {
    marginLeft: -75.5,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    color: Color.white,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    textAlign: "center",
    lineHeight: 24,
    left: "50%",
  },
  confirmTransaction: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.primary,
  },
});

export default ConfirmTransaction1;