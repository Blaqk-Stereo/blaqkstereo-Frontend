import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, Padding, FontSize, Border } from "../GlobalStyles";

const AddSocial = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.addSocial}>
      <View style={[styles.prompt, styles.promptPosition]}>
        <View style={styles.addYourSoundcloudParent}>
          <Text style={styles.addYourSoundcloud}>Add your Soundcloud</Text>
          <Text style={[styles.pasteTheLink, styles.cancelTypo]}>
            Paste the link to your artist profile
          </Text>
        </View>
        <View
          style={[styles.textfieldsPlaceholder, styles.frameParentSpaceBlock]}
        >
          <Image
            style={styles.lineIcon}
            contentFit="cover"
            source={require("../assets/line.png")}
          />
          <Text style={[styles.enterYourPlaylist, styles.cancelTypo]}>
            soundcloud.com/janeyjune
          </Text>
        </View>
        <View style={[styles.frameParent, styles.frameParentSpaceBlock]}>
          <Pressable
            style={[styles.saveWrapper, styles.wrapperFlexBox]}
            onPress={() => navigation.navigate("PasswordChangeSuccessful1")}
          >
            <Text style={styles.save}>Save</Text>
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
  promptPosition: {
    top: "50%",
    position: "absolute",
  },
  cancelTypo: {
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.white,
    lineHeight: 24,
  },
  frameParentSpaceBlock: {
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
  addYourSoundcloud: {
    fontSize: FontSize.mobileH5HeadingComponent_size,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    textAlign: "center",
    color: Color.white,
    lineHeight: 24,
  },
  pasteTheLink: {
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
  },
  addYourSoundcloudParent: {
    alignItems: "center",
  },
  lineIcon: {
    top: 24,
    maxHeight: "100%",
    left: 0,
    width: 225,
    position: "absolute",
  },
  enterYourPlaylist: {
    marginTop: -12.15,
    left: 4,
    textAlign: "left",
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    top: "50%",
    position: "absolute",
  },
  textfieldsPlaceholder: {
    height: 24,
  },
  save: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    color: Color.primary,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
    lineHeight: 24,
  },
  saveWrapper: {
    top: 0,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    paddingVertical: Padding.p_5xs,
  },
  cancel: {
    fontSize: FontSize.btnSmallNormal_size,
    textAlign: "center",
  },
  cancelWrapper: {
    top: 40,
    paddingTop: Padding.p_5xs,
  },
  frameParent: {
    height: 72,
  },
  prompt: {
    marginTop: -116.1,
    marginLeft: -136.5,
    left: "50%",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorGray_300,
    padding: Padding.p_5xl,
    alignItems: "center",
  },
  addSocial: {
    backgroundColor: Color.colorGray_1200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default AddSocial;
