import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const SetUpProfile = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.setUpProfile}>
      <View style={[styles.frameParent, styles.passwordPosition]}>
        <View style={styles.frameGroup}>
          <View>
            <Text style={styles.welcomeJane}>Welcome, Jane!</Text>
            <Text style={[styles.whatArtistName, styles.passwordTypo]}>
              What artist name would you like to use for your music uploads?
            </Text>
          </View>
          <View style={styles.inputFieldParent}>
            <Pressable
              style={styles.inputField}
              onPress={() => navigation.navigate("SetUpProfileApproved")}
            >
              <View style={styles.inputFieldChild} />
              <Text style={[styles.password, styles.passwordTypo]}>
                Enter your artist name
              </Text>
              <Image
                style={styles.eyeIcon}
                contentFit="cover"
                source={require("../assets/property-1eye.png")}
              />
            </Pressable>
            <Text
              style={styles.ifYouveReleased}
            >{`If you’ve released music before, please use the same artist name for consistency.
If this is your first release, choose a unique and easily searchable name.
Avoid using names that are already taken by other artists. (We’ll verify this for you.)
Your artist name is permanent, so choose thoughtfully.
Please refrain from using emojis in your artist name.`}</Text>
          </View>
        </View>
        <View style={styles.button}>
          <Text style={styles.continue}>Continue</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordPosition: {
    left: 16,
    position: "absolute",
  },
  passwordTypo: {
    color: Color.primary0,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "left",
  },
  welcomeJane: {
    fontSize: FontSize.mobileH3HeadingPage_size,
    letterSpacing: -1,
    lineHeight: 34,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  whatArtistName: {
    width: 343,
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
  password: {
    marginTop: -12,
    top: "50%",
    left: 16,
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
    width: 343,
  },
  ifYouveReleased: {
    fontSize: FontSize.btnSmallNormal_size,
    marginTop: 16,
    width: 343,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    textAlign: "left",
    color: Color.white,
  },
  inputFieldParent: {
    marginTop: 20,
  },
  frameGroup: {
    alignItems: "center",
  },
  continue: {
    color: Color.primary,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "left",
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  button: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    width: 335,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_99xl,
    paddingVertical: Padding.p_sm,
    opacity: 0.5,
    marginTop: 24,
    alignItems: "center",
  },
  frameParent: {
    top: 68,
    alignItems: "center",
  },
  setUpProfile: {
    backgroundColor: Color.colorGray_500,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SetUpProfile;
