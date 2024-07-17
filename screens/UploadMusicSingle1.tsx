import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const UploadMusicSingle1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.uploadMusicsingle, styles.iconLayout]}>
      <Pressable
        style={[styles.button, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("UploadMusicSingle3")}
      >
        <Text style={styles.next}>Next</Text>
      </Pressable>
      <View style={[styles.fileUploadStatus, styles.fileUploadStatusPosition]}>
        <View style={styles.iconContainerParent}>
          <View style={[styles.iconContainer, styles.buttonFlexBox]}>
            <Image
              style={styles.filearrowupIcon}
              contentFit="cover"
              source={require("../assets/filearrowup.png")}
            />
          </View>
          <View style={styles.frame}>
            <View style={[styles.frame1, styles.frameFlexBox]}>
              <Text style={[styles.filenamepng, styles.gbFlexBox]}>
                Filename.mp3
              </Text>
              <Image
                style={styles.filearrowupIcon}
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
          <Text style={styles.text}>52%</Text>
        </View>
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Pressable style={styles.pressable} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/241.png")}
          />
        </Pressable>
        <Text style={styles.uploadYourSingle}>Upload Your Single</Text>
        <Text style={[styles.followTheseSteps, styles.gbTypo]}>
          Follow these steps to upload your single.
        </Text>
        <View style={[styles.stepGroupHorizontal, styles.frameFlexBox]}>
          <View
            style={[styles.stepGroupHorizontalChild, styles.stepGroupPosition]}
          />
          <View
            style={[styles.stepGroupHorizontalItem, styles.stepGroupPosition]}
          />
          <View style={styles.inProgress}>
            <View style={styles.buttonFlexBox}>
              <View style={[styles.stepbaseitem, styles.stepbaseitemBorder]}>
                <View style={[styles.dot, styles.dotLayout]} />
              </View>
            </View>
            <Text style={[styles.stepTitle, styles.stepTypo]}>Add Song</Text>
          </View>
          <View style={styles.default}>
            <View style={styles.buttonFlexBox}>
              <View style={[styles.stepbaseitem1, styles.stepbaseitemBorder]}>
                <View style={[styles.dot1, styles.dotLayout]} />
              </View>
            </View>
            <Text style={[styles.stepTitle1, styles.stepTypo]}>Basic Info</Text>
          </View>
          <View style={styles.default1}>
            <View style={styles.buttonFlexBox}>
              <View style={[styles.stepbaseitem1, styles.stepbaseitemBorder]}>
                <View style={[styles.dot1, styles.dotLayout]} />
              </View>
            </View>
            <Text style={[styles.stepTitle1, styles.stepTypo]}>Credits</Text>
          </View>
          <View style={styles.default2}>
            <View style={styles.buttonFlexBox}>
              <View style={[styles.stepbaseitem1, styles.stepbaseitemBorder]}>
                <View style={[styles.dot1, styles.dotLayout]} />
              </View>
            </View>
            <Text style={[styles.stepTitle1, styles.stepTypo]}>Release</Text>
          </View>
        </View>
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
  fileUploadStatusPosition: {
    padding: Padding.p_base,
    backgroundColor: Color.colorGray_400,
    borderRadius: Border.br_mini,
    width: 335,
    left: "50%",
    marginLeft: -167.5,
    position: "absolute",
  },
  frameFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  gbFlexBox: {
    textAlign: "left",
    color: Color.white,
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
  gbTypo: {
    fontFamily: FontFamily.mobileBodyCopy,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    lineHeight: 24,
  },
  headerPosition: {
    height: 210,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  stepGroupPosition: {
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    top: 24,
    marginLeft: -125,
    left: "50%",
    position: "absolute",
  },
  stepbaseitemBorder: {
    padding: Padding.p_9xs,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_1215xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  dotLayout: {
    width: 8,
    borderRadius: Border.br_1215xl,
    height: 8,
    overflow: "hidden",
  },
  stepTypo: {
    marginTop: 12,
    width: 60,
    fontSize: FontSize.btnSmallNormal_size,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    textAlign: "center",
  },
  next: {
    color: Color.primary,
    textAlign: "center",
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.mobileH5HeadingComponent_size,
  },
  button: {
    bottom: 24,
    borderRadius: Border.br_81xl,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    width: 335,
    left: "50%",
    marginLeft: -167.5,
    justifyContent: "center",
    backgroundColor: Color.white,
    position: "absolute",
  },
  filearrowupIcon: {
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
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "left",
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    lineHeight: 24,
  },
  frame1: {
    alignSelf: "stretch",
    alignItems: "center",
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
    textAlign: "left",
    color: Color.white,
  },
  text: {
    color: Color.white,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    lineHeight: 24,
  },
  frame2: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  fileUploadStatus: {
    top: 218,
    overflow: "hidden",
  },
  headerChild: {
    backgroundColor: Color.colorGray_1300,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  pressable: {
    left: 20,
    top: 40,
    height: 24,
    width: 24,
    position: "absolute",
  },
  uploadYourSingle: {
    marginLeft: -71.5,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    top: 40,
    color: Color.white,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    left: "50%",
    position: "absolute",
  },
  followTheseSteps: {
    top: 80,
    left: 56,
    color: Color.primary0,
    textAlign: "center",
    position: "absolute",
    fontFamily: FontFamily.mobileBodyCopy,
  },
  stepGroupHorizontalChild: {
    borderColor: Color.primary30,
    width: 251,
    zIndex: 0,
  },
  stepGroupHorizontalItem: {
    borderColor: Color.white,
    width: 45,
    zIndex: 1,
  },
  dot: {
    backgroundColor: Color.primary30,
  },
  stepbaseitem: {
    shadowColor: "rgba(255, 255, 255, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    borderColor: Color.primary0,
    backgroundColor: Color.white,
    padding: Padding.p_9xs,
    borderWidth: 1,
  },
  stepTitle: {
    color: Color.primary0,
  },
  inProgress: {
    zIndex: 2,
    alignItems: "center",
  },
  dot1: {
    backgroundColor: Color.primary10,
  },
  stepbaseitem1: {
    backgroundColor: Color.primary0,
    borderColor: Color.primary10,
  },
  stepTitle1: {
    color: Color.primary20,
  },
  default: {
    zIndex: 3,
    alignItems: "center",
  },
  default1: {
    zIndex: 4,
    alignItems: "center",
  },
  default2: {
    zIndex: 5,
    alignItems: "center",
  },
  stepGroupHorizontal: {
    top: 120,
    padding: Padding.p_base,
    backgroundColor: Color.colorGray_400,
    borderRadius: Border.br_mini,
    width: 335,
    left: "50%",
    marginLeft: -167.5,
    position: "absolute",
  },
  uploadMusicsingle: {
    backgroundColor: Color.primary,
    height: 812,
    overflow: "hidden",
    flex: 1,
  },
});

export default UploadMusicSingle1;
