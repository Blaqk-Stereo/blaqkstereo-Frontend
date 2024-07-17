import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const SetUpProfileError = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.setUpProfileError}>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View>
            <Text style={styles.welcomeJane}>Welcome, Jane!</Text>
            <Text style={[styles.whatArtistName, styles.blinkerTypo]}>
              What artist name would you like to use for your music uploads?
            </Text>
          </View>
          <View style={styles.inputFieldParent}>
            <View style={styles.inputField}>
              <View style={styles.inputFieldChild} />
              <Text style={[styles.blinker, styles.blinkerPosition]}>
                Janey June 😇
              </Text>
              <Image
                style={styles.eyeIcon}
                contentFit="cover"
                source={require("../assets/eye.png")}
              />
              <Image
                style={[styles.iconsCheckmarkCircle, styles.blinkerPosition]}
                contentFit="cover"
                source={require("../assets/icons--checkmarkcircle1.png")}
              />
            </View>
            <Text
              style={[styles.ifYouveReleased, styles.blinkerTypo]}
            >{`If you’ve released music before, please use the same artist name for consistency.
If this is your first release, choose a unique and easily searchable name.
Avoid using names that are already taken by other artists. (We’ll verify this for you.)
Your artist name is permanent, so choose thoughtfully.
Please refrain from using emojis in your artist name.`}</Text>
          </View>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("SettingUpProfile")}
        >
          <Text style={styles.continue}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  blinkerTypo: {
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    textAlign: "left",
  },
  blinkerPosition: {
    top: "50%",
    position: "absolute",
  },
  welcomeJane: {
    fontSize: FontSize.mobileH3HeadingPage_size,
    letterSpacing: -1,
    lineHeight: 34,
    textAlign: "left",
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    color: Color.white,
  },
  whatArtistName: {
    color: Color.primary0,
    width: 343,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    fontFamily: FontFamily.mobileBodyCopy,
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
  blinker: {
    marginTop: -12,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    textAlign: "left",
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    color: Color.white,
    left: 16,
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
  iconsCheckmarkCircle: {
    marginTop: -8,
    right: 12,
    width: 16,
    height: 16,
    borderRadius: Border.br_81xl,
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
    backgroundColor: Color.white,
    width: 335,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_99xl,
    paddingVertical: Padding.p_sm,
    marginTop: 24,
    borderRadius: Border.br_81xl,
    alignItems: "center",
  },
  frameParent: {
    top: 68,
    alignItems: "center",
    left: 16,
    position: "absolute",
  },
  setUpProfileError: {
    backgroundColor: Color.colorGray_500,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SetUpProfileError;
