import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

export type LogOutType = {
  onClose?: () => void;
};

const LogOut = ({ onClose }: LogOutType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.logOut}>
      <View style={styles.prompt}>
        <Text style={[styles.logOut1, styles.yesFlexBox]}>Log Out</Text>
        <Text style={[styles.areYouSure, styles.areYouSureSpaceBlock]}>
          Are you sure you want to log out?
        </Text>
        <View style={[styles.frameParent, styles.areYouSureSpaceBlock]}>
          <Pressable
            style={[styles.yesWrapper, styles.wrapperFlexBox]}
            onPress={() => navigation.navigate("Splash")}
          >
            <Text style={[styles.yes, styles.yesFlexBox]}>Yes</Text>
          </Pressable>
          <View style={[styles.cancelWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.cancel, styles.cancelTypo]}>Cancel</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  yesFlexBox: {
    textAlign: "center",
    lineHeight: 24,
  },
  areYouSureSpaceBlock: {
    marginTop: 20,
    width: 225,
  },
  wrapperFlexBox: {
    paddingHorizontal: Padding.p_81xl,
    justifyContent: "center",
    flexDirection: "row",
    left: 0,
    width: 225,
    alignItems: "center",
    position: "absolute",
  },
  cancelTypo: {
    fontFamily: FontFamily.mobileBodyCopy,
    textAlign: "center",
    lineHeight: 24,
  },
  logOut1: {
    fontSize: FontSize.mobileH5HeadingComponent_size,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    color: Color.white,
  },
  areYouSure: {
    color: Color.primary0,
    fontFamily: FontFamily.mobileBodyCopy,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  yes: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH3HeadingPage,
    color: Color.errorDefault,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  yesWrapper: {
    top: 0,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: Padding.p_5xs,
  },
  cancel: {
    fontSize: FontSize.btnSmallNormal_size,
    color: Color.white,
  },
  cancelWrapper: {
    top: 40,
    paddingTop: Padding.p_5xs,
  },
  frameParent: {
    height: 72,
  },
  prompt: {
    marginTop: -104,
    marginLeft: -136.5,
    top: "50%",
    left: "50%",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorGray_300,
    padding: Padding.p_5xl,
    alignItems: "center",
    position: "absolute",
  },
  logOut: {
    backgroundColor: Color.colorGray_1200,
    width: 375,
    height: 812,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default LogOut;