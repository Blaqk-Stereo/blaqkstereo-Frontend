import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, Border, FontFamily, Padding } from "../GlobalStyles";

const UploadMusicSingle5 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.uploadMusicsingle, styles.iconLayout]}>
      <Pressable
        style={[styles.button, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("UploadMusicSingle7")}
      >
        <Text style={styles.next}>Next</Text>
      </Pressable>
      <View style={[styles.fileUploadStatus, styles.buttonPosition]}>
        <View style={styles.iconContainerParent}>
          <View style={[styles.iconContainer, styles.buttonFlexBox]}>
            <Image
              style={styles.pressableLayout}
              contentFit="cover"
              source={require("../assets/filearrowup.png")}
            />
          </View>
          <View style={styles.frame}>
            <View style={[styles.frame1, styles.frameFlexBox]}>
              <Text style={[styles.filenamepng, styles.gbTypo]}>
                Filename.mp3
              </Text>
              <Image
                style={styles.pressableLayout}
                contentFit="cover"
                source={require("../assets/trash2.png")}
              />
            </View>
            <View style={[styles.progressBar, styles.frame2SpaceBlock]}>
              <View style={styles.progressBarContainer}>
                <View
                  style={[styles.progressBarBg, styles.progressBarBgLayout]}
                />
                <View
                  style={[styles.progressbaratom, styles.progressBarBgLayout]}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frame2, styles.frame2SpaceBlock]}>
          <Text style={[styles.gb, styles.gbTypo]}>2.15gb</Text>
          <Text style={[styles.text, styles.textClr]}>52%</Text>
        </View>
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Pressable
          style={[styles.pressable, styles.addSongPosition]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/241.png")}
          />
        </Pressable>
        <Text style={[styles.addSong, styles.addSongPosition]}>Add Song</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonPosition: {
    width: 335,
    left: "50%",
    marginLeft: -167.5,
    position: "absolute",
  },
  frameFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  gbTypo: {
    textAlign: "left",
    color: Color.white,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    lineHeight: 24,
  },
  frame2SpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  progressBarBgLayout: {
    borderRadius: Border.br_1215xl,
    height: 8,
    position: "absolute",
  },
  textClr: {
    color: Color.white,
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
  addSongPosition: {
    top: 40,
    position: "absolute",
  },
  next: {
    color: Color.primary,
    textAlign: "center",
    lineHeight: 24,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    fontSize: FontSize.mobileH5HeadingComponent_size,
  },
  button: {
    bottom: 24,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    width: 335,
    left: "50%",
    marginLeft: -167.5,
    position: "absolute",
  },
  pressableLayout: {
    height: 24,
    width: 24,
  },
  iconContainer: {
    borderRadius: Border.br_104xl,
    backgroundColor: Color.colorOrange_100,
    width: 48,
    height: 48,
  },
  filenamepng: {
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    textAlign: "left",
  },
  frame1: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "space-between",
  },
  progressBarBg: {
    right: 0,
    backgroundColor: Color.colorGray_800,
    left: 0,
    top: 0,
    borderRadius: Border.br_1215xl,
  },
  progressbaratom: {
    width: "65.94%",
    top: 8,
    right: "34.06%",
    left: "0%",
    backgroundColor: Color.warningDefault,
  },
  progressBarContainer: {
    height: 8,
    alignSelf: "stretch",
  },
  progressBar: {
    borderRadius: Border.br_5xs,
  },
  frame: {
    marginLeft: 16,
    flex: 1,
  },
  iconContainerParent: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  gb: {
    fontFamily: FontFamily.mobileBodyCopy,
  },
  text: {
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    color: Color.white,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  frame2: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  fileUploadStatus: {
    top: 98,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGray_400,
    padding: Padding.p_base,
    overflow: "hidden",
  },
  headerChild: {
    backgroundColor: Color.colorGray_1600,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  pressable: {
    left: 20,
    height: 24,
    width: 24,
  },
  addSong: {
    marginLeft: -36.5,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    color: Color.white,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    top: 40,
    left: "50%",
  },
  uploadMusicsingle: {
    backgroundColor: Color.primary,
    height: 812,
    overflow: "hidden",
    flex: 1,
  },
});

export default UploadMusicSingle5;