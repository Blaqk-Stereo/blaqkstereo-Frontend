import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Padding, FontSize, Border } from "../GlobalStyles";

export type AddSocial1Type = {
  onClose?: () => void;
};

const AddSocial1 = ({ onClose }: AddSocial1Type) => {
  return (
    <View style={styles.addSocial}>
      <View style={styles.prompt}>
        <View style={styles.addYourSoundcloudParent}>
          <Text style={[styles.addYourSoundcloud, styles.saveFlexBox]}>
            Add your Soundcloud
          </Text>
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
            source={require("../assets/line3.png")}
          />
          <Text style={[styles.enterYourPlaylist, styles.blinkerTypo]}>
            eg. soundcloud.com/rihanna
          </Text>
          <Text style={[styles.blinker, styles.blinkerTypo]}>|</Text>
        </View>
        <View style={[styles.frameParent, styles.frameParentSpaceBlock]}>
          <View style={[styles.saveWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.save, styles.saveFlexBox]}>Save</Text>
          </View>
          <View style={[styles.cancelWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.cancel, styles.cancelTypo]}>Cancel</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  saveFlexBox: {
    textAlign: "center",
    lineHeight: 24,
  },
  cancelTypo: {
    fontFamily: FontFamily.mobileBodyCopy,
    textAlign: "center",
    color: Color.white,
    lineHeight: 24,
  },
  frameParentSpaceBlock: {
    marginTop: 20,
    width: 225,
  },
  blinkerTypo: {
    textAlign: "left",
    fontFamily: FontFamily.mobileBodyCopy,
    position: "absolute",
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
    color: Color.white,
  },
  pasteTheLink: {
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  addYourSoundcloudParent: {
    alignItems: "center",
  },
  lineIcon: {
    top: 25,
    left: 0,
    width: 225,
    position: "absolute",
    maxHeight: "100%",
  },
  enterYourPlaylist: {
    top: 7,
    left: 8,
    color: Color.primary20,
    fontSize: FontSize.btnSmallNormal_size,
  },
  blinker: {
    top: "0%",
    left: 4,
    width: 4,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    color: Color.white,
    lineHeight: 24,
    textAlign: "left",
  },
  textfieldsPlaceholder: {
    height: 25,
  },
  save: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    color: Color.primary,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  saveWrapper: {
    top: 0,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    paddingVertical: Padding.p_5xs,
    opacity: 0.5,
  },
  cancel: {
    fontSize: FontSize.btnSmallNormal_size,
  },
  cancelWrapper: {
    top: 40,
    paddingTop: Padding.p_5xs,
  },
  frameParent: {
    height: 72,
  },
  prompt: {
    marginTop: -116.2,
    marginLeft: -136.5,
    top: "50%",
    left: "50%",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorGray_300,
    padding: Padding.p_5xl,
    alignItems: "center",
    position: "absolute",
  },
  addSocial: {
    backgroundColor: Color.colorGray_1200,
    width: 375,
    height: 812,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default AddSocial1;