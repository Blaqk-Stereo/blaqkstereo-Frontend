import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const EditProfile = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.editProfile}>
      <View style={styles.customizeYourBlaqkStereoIdParent}>
        <Text style={styles.customizeYourBlaqk}>
          Customize Your Blaqk Stereo Identity
        </Text>
        <View style={styles.groupParent}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-1000000777.png")}
          />
          <View style={styles.passwordParent}>
            <Text style={[styles.password, styles.passwordTypo]}>
              Full name
            </Text>
            <View style={[styles.inputField, styles.inputSpaceBlock]}>
              <View style={[styles.inputFieldChild, styles.iconLayout]} />
              <Text style={[styles.blinker, styles.blinkerTypo]}>Jane Doe</Text>
              <Image
                style={styles.eyeIcon}
                contentFit="cover"
                source={require("../assets/eye.png")}
              />
            </View>
          </View>
          <View style={styles.passwordParent}>
            <Text style={[styles.password, styles.passwordTypo]}>
              Artist name
            </Text>
            <View style={[styles.inputField, styles.inputSpaceBlock]}>
              <View style={[styles.inputFieldChild, styles.iconLayout]} />
              <Text style={[styles.blinker, styles.blinkerTypo]}>
                Janey June
              </Text>
              <Image
                style={styles.eyeIcon}
                contentFit="cover"
                source={require("../assets/eye.png")}
              />
              <Image
                style={[
                  styles.iconsCheckmarkCircle,
                  styles.arrowRightIconLayout,
                ]}
                contentFit="cover"
                source={require("../assets/icons--checkmarkcircle2.png")}
              />
            </View>
          </View>
          <View style={styles.passwordParent}>
            <Text style={[styles.password, styles.passwordTypo]}>
              Phone number
            </Text>
            <View style={[styles.inputField, styles.inputSpaceBlock]}>
              <View style={[styles.inputFieldChild, styles.iconLayout]} />
              <View style={[styles.frameParent, styles.frameParentPosition]}>
                <View style={styles.blinkerParent}>
                  <Text style={styles.blinkerTypo}>+234</Text>
                  <Image
                    style={[styles.arrowRightIcon, styles.arrowRightIconLayout]}
                    contentFit="cover"
                    source={require("../assets/arrowright2.png")}
                  />
                  <Text style={[styles.blinker3, styles.passwordTypo]}>|</Text>
                </View>
                <Text style={[styles.blinker4, styles.blinkerTypo]}>
                  8102345679
                </Text>
              </View>
              <Image
                style={styles.eyeIcon}
                contentFit="cover"
                source={require("../assets/eye.png")}
              />
              <Image
                style={[
                  styles.iconsCheckmarkCircle,
                  styles.arrowRightIconLayout,
                ]}
                contentFit="cover"
                source={require("../assets/icons--checkmarkcircle2.png")}
              />
            </View>
          </View>
          <View style={styles.passwordParent}>
            <Text style={[styles.password, styles.passwordTypo]}>Bio</Text>
            <View style={[styles.inputField3, styles.inputSpaceBlock]}>
              <View style={[styles.inputFieldChild, styles.iconLayout]} />
              <Text
                style={[styles.tellUsSomblcing, styles.frameParentPosition]}
              >
                Tell us something about yourself
              </Text>
            </View>
          </View>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("PasswordChangeSuccessful1")}
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
          <Text style={styles.editProfile1}>Edit Profile</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordTypo: {
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  inputSpaceBlock: {
    marginTop: 10,
    width: 343,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  blinkerTypo: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  arrowRightIconLayout: {
    height: 16,
    width: 16,
  },
  frameParentPosition: {
    top: 14,
    left: 16,
    position: "absolute",
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
  customizeYourBlaqk: {
    width: 335,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    color: Color.primary0,
    fontFamily: FontFamily.mobileBodyCopy,
  },
  frameChild: {
    width: 120,
    height: 120,
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
    left: 16,
    color: Color.white,
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
    height: 52,
  },
  passwordParent: {
    marginTop: 24,
  },
  iconsCheckmarkCircle: {
    marginTop: -8,
    right: 12,
    borderRadius: Border.br_81xl,
    top: "50%",
    width: 16,
    position: "absolute",
    overflow: "hidden",
  },
  arrowRightIcon: {
    marginLeft: 4,
  },
  blinker3: {
    color: Color.primary10,
    marginLeft: 4,
    fontFamily: FontFamily.mobileBodyCopy,
    textAlign: "left",
  },
  blinkerParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  blinker4: {
    marginLeft: 12,
  },
  frameParent: {
    flexDirection: "row",
  },
  tellUsSomblcing: {
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    color: Color.primary0,
    fontFamily: FontFamily.mobileBodyCopy,
  },
  inputField3: {
    height: 138,
  },
  saveChanges: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH3HeadingPage,
    color: Color.primary,
  },
  button: {
    backgroundColor: Color.white,
    justifyContent: "center",
    paddingHorizontal: Padding.p_99xl,
    paddingVertical: Padding.p_sm,
    flexDirection: "row",
    borderRadius: Border.br_81xl,
    marginTop: 24,
    alignItems: "center",
    width: 335,
  },
  groupParent: {
    marginTop: 20,
    alignItems: "center",
  },
  customizeYourBlaqkStereoIdParent: {
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
  editProfile1: {
    left: 125,
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
    width: 210,
  },
  editProfile: {
    backgroundColor: Color.primary,
    flex: 1,
    height: 876,
    overflow: "hidden",
    width: "100%",
  },
});

export default EditProfile;