import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const AddNewBank = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.addNewBank}>
      <View style={styles.pleaseEnsureAllInformationParent}>
        <Text style={styles.pleaseEnsureAll}>
          Please ensure all information is correct before submitting. Incorrect
          details may result in failed withdrawals.
        </Text>
        <View style={styles.frameParent}>
          <View>
            <Pressable onPress={() => navigation.navigate("AccountValidated")}>
              <Text style={[styles.password, styles.blinkerTypo]}>
                Bank name
              </Text>
              <View style={styles.inputField}>
                <View style={[styles.inputFieldChild, styles.iconLayout]} />
                <Text style={[styles.blinker, styles.blinkerTypo]}>
                  Select bank
                </Text>
                <Image
                  style={styles.eyeIcon}
                  contentFit="cover"
                  source={require("../assets/eye3.png")}
                />
              </View>
            </Pressable>
            <View style={styles.passwordGroup}>
              <Text style={[styles.password, styles.blinkerTypo]}>
                Account Number:
              </Text>
              <View style={styles.inputField}>
                <View style={[styles.inputFieldChild, styles.iconLayout]} />
                <Text style={[styles.blinker, styles.blinkerTypo]}>
                  Enter your 10-digit account number.
                </Text>
                <Image
                  style={styles.eyeIcon}
                  contentFit="cover"
                  source={require("../assets/eye3.png")}
                />
              </View>
            </View>
            <View style={styles.passwordGroup}>
              <Text style={[styles.password, styles.blinkerTypo]}>
                Account Holder's Name:
              </Text>
              <View style={styles.inputField}>
                <View style={[styles.inputFieldChild, styles.iconLayout]} />
                <Text style={[styles.blinker, styles.blinkerTypo]}>
                  The name on your bank account.
                </Text>
                <Image
                  style={styles.eyeIcon}
                  contentFit="cover"
                  source={require("../assets/eye3.png")}
                />
              </View>
            </View>
            <View
              style={[styles.checkboxfselectedParent, styles.buttonFlexBox]}
            >
              <Image
                style={styles.checkboxfselectedIcon}
                contentFit="cover"
                source={require("../assets/checkboxfselected1.png")}
              />
              <Text style={styles.setAsDefault}>Set as default account</Text>
            </View>
          </View>
          <View style={[styles.button, styles.buttonFlexBox]}>
            <Text style={[styles.saveBankAccount, styles.blinkerTypo]}>
              Save Bank Account
            </Text>
          </View>
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
          <Text style={styles.addNewBank1}>Add New Bank</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  blinkerTypo: {
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  buttonFlexBox: {
    flexDirection: "row",
    alignItems: "center",
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
  pleaseEnsureAll: {
    width: 335,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    color: Color.primary0,
    fontFamily: FontFamily.mobileBodyCopy,
  },
  password: {
    color: Color.primary0,
    textAlign: "left",
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
  blinker: {
    marginTop: -12,
    top: "50%",
    left: 16,
    color: Color.primary20,
    fontFamily: FontFamily.mobileBodyCopy,
    textAlign: "left",
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
    marginTop: 10,
  },
  passwordGroup: {
    marginTop: 24,
  },
  checkboxfselectedIcon: {
    width: 16,
    height: 16,
  },
  setAsDefault: {
    marginLeft: 4,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  checkboxfselectedParent: {
    marginTop: 24,
  },
  saveBankAccount: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH3HeadingPage,
    color: Color.primary,
  },
  button: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    justifyContent: "center",
    paddingHorizontal: Padding.p_99xl,
    paddingVertical: Padding.p_sm,
    opacity: 0.5,
    marginTop: 40,
    width: 335,
  },
  frameParent: {
    marginTop: 20,
    alignItems: "center",
  },
  pleaseEnsureAllInformationParent: {
    marginLeft: -171.5,
    top: 86,
    left: "50%",
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.colorGray_1300,
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
  addNewBank1: {
    left: 112,
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
    left: 20,
    width: 222,
  },
  addNewBank: {
    backgroundColor: Color.primary,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default AddNewBank;