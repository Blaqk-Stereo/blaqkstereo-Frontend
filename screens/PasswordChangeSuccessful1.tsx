import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const PasswordChangeSuccessful1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.passwordChangeSuccessful}>
      <View style={styles.profileParent}>
        <Image
          style={styles.profileIcon}
          contentFit="cover"
          source={require("../assets/profile.png")}
        />
        <View style={styles.successParent}>
          <Text style={styles.success}>Success!</Text>
          <Text style={[styles.yourProfileHas, styles.buttonFlexBox]}>
            Your profile has been updated successfully.
          </Text>
        </View>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={[styles.close, styles.closeLayout]}>Close</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    width: 335,
    justifyContent: "center",
    alignItems: "center",
  },
  closeLayout: {
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  profileIcon: {
    width: 100,
    height: 100,
    overflow: "hidden",
  },
  success: {
    fontSize: FontSize.mobileH2HeadingDefault_size,
    letterSpacing: -1,
    lineHeight: 34,
    fontWeight: "700",
    fontFamily: FontFamily.mobileH1HeadingDisplay,
    color: Color.white,
    textAlign: "left",
  },
  yourProfileHas: {
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.primary0,
    textAlign: "center",
    display: "flex",
    marginTop: 12,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  successParent: {
    marginTop: 24,
    alignItems: "center",
  },
  close: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH3HeadingPage,
    color: Color.primary,
    textAlign: "left",
  },
  button: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    flexDirection: "row",
    paddingHorizontal: Padding.p_99xl,
    paddingVertical: Padding.p_sm,
    marginTop: 24,
  },
  profileParent: {
    position: "absolute",
    marginTop: -135,
    marginLeft: -167.5,
    top: "50%",
    left: "50%",
    alignItems: "center",
  },
  passwordChangeSuccessful: {
    backgroundColor: Color.primary,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default PasswordChangeSuccessful1;
