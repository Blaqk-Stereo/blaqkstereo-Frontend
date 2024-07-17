import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const AccountValidated = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.accountValidated}>
      <View style={styles.pleaseEnsureAllInformationParent}>
        <Text style={styles.pleaseEnsureAll}>
          Please ensure all information is correct before submitting. Incorrect
          details may result in failed withdrawals.
        </Text>
        <View style={styles.frameParent}>
          <View>
            <View>
              <Text style={[styles.password, styles.passwordTypo]}>
                Bank name
              </Text>
              <View style={styles.inputField}>
                <View style={[styles.inputFieldChild, styles.iconLayout]} />
                <Text style={[styles.blinker, styles.blinkerTypo]}>
                  Access Bank
                </Text>
                <Image
                  style={styles.eyeIcon}
                  contentFit="cover"
                  source={require("../assets/eye4.png")}
                />
              </View>
            </View>
            <View style={styles.passwordGroup}>
              <Text style={[styles.password, styles.passwordTypo]}>
                Account Number:
              </Text>
              <View style={styles.inputField}>
                <View style={[styles.inputFieldChild, styles.iconLayout]} />
                <Text style={[styles.blinker, styles.blinkerTypo]}>
                  1230984567
                </Text>
                <Image
                  style={styles.eyeIcon}
                  contentFit="cover"
                  source={require("../assets/eye4.png")}
                />
              </View>
            </View>
            <View style={styles.passwordGroup}>
              <Text style={[styles.password, styles.passwordTypo]}>
                Account Holder's Name:
              </Text>
              <View style={styles.inputField}>
                <View style={[styles.inputFieldChild, styles.iconLayout]} />
                <Text style={[styles.blinker, styles.blinkerTypo]}>
                  Jane Doe
                </Text>
                <Image
                  style={styles.eyeIcon}
                  contentFit="cover"
                  source={require("../assets/eye4.png")}
                />
                <Image
                  style={[
                    styles.iconsCheckmarkCircle,
                    styles.iconsCheckmarkCircleLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/icons--checkmarkcircle.png")}
                />
              </View>
            </View>
            <View
              style={[styles.checkboxfselectedParent, styles.buttonFlexBox]}
            >
              <Image
                style={styles.iconsCheckmarkCircleLayout}
                contentFit="cover"
                source={require("../assets/checkboxfselected2.png")}
              />
              <Text style={[styles.setAsDefault, styles.blinkerTypo]}>
                Set as default account
              </Text>
            </View>
          </View>
          <Pressable
            style={[styles.button, styles.buttonFlexBox]}
            onPress={() => navigation.navigate("PasswordChangeSuccessful3")}
          >
            <Text style={[styles.saveBankAccount, styles.passwordTypo]}>
              Save Bank Account
            </Text>
          </Pressable>
        </View>
      </View>
      <Pressable
        style={styles.headerPosition}
        onPress={() => navigation.navigate("Languages")}
      >
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
          <Text style={styles.addNewBank}>Add New Bank</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordTypo: {
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  blinkerTypo: {
    color: Color.gray0White,
    textAlign: "left",
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  iconsCheckmarkCircleLayout: {
    height: 16,
    width: 16,
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
    fontFamily: FontFamily.mobileBodyCopy,
    textAlign: "left",
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
    left: 16,
    top: "50%",
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
  iconsCheckmarkCircle: {
    marginTop: -8,
    right: 12,
    borderRadius: Border.br_81xl,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  setAsDefault: {
    marginLeft: 4,
  },
  checkboxfselectedParent: {
    marginTop: 24,
  },
  saveBankAccount: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    color: Color.primary,
  },
  button: {
    backgroundColor: Color.gray0White,
    justifyContent: "center",
    paddingHorizontal: Padding.p_99xl,
    paddingVertical: Padding.p_sm,
    marginTop: 40,
    borderRadius: Border.br_81xl,
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
  addNewBank: {
    left: 112,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    top: 0,
    color: Color.gray0White,
    textAlign: "center",
    lineHeight: 24,
    position: "absolute",
  },
  parent: {
    top: 40,
    left: 20,
    width: 222,
  },
  accountValidated: {
    backgroundColor: Color.primary,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default AccountValidated;