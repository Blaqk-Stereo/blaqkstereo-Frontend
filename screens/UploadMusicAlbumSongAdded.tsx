import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import InputField2 from "../components/InputField2";
import { FontSize, Padding, Border, Color, FontFamily } from "../GlobalStyles";

const UploadMusicAlbumSongAdded = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.uploadMusicalbumsongAdded}>
      <View style={styles.addMoreParent}>
        <Pressable
          style={[styles.addMore, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("UploadMusicSingle2")}
        >
          <Image
            style={styles.addCircleIcon}
            contentFit="cover"
            source={require("../assets/addcircle1.png")}
          />
          <Text style={[styles.blc, styles.blcTypo]}>Add more songs</Text>
        </Pressable>
        <View style={styles.song1Parent}>
          <Text style={[styles.song1, styles.song1Typo]}>Song 1</Text>
          <InputField2
            blinker="Miller"
            eye={require("../assets/eye.png")}
            blinkerMarginTop={16}
          />
          <View
            style={[styles.fileUploadStatus, styles.fileUploadStatusSpaceBlock]}
          >
            <View style={styles.iconContainerParent}>
              <View style={[styles.iconContainer, styles.iconContainerLayout]}>
                <Image
                  style={styles.addCircleIcon}
                  contentFit="cover"
                  source={require("../assets/filearrowup4.png")}
                />
              </View>
              <View style={styles.frame}>
                <View style={styles.frame1}>
                  <Text style={[styles.filenamepng, styles.song1Typo]}>
                    Filename.mp3
                  </Text>
                  <Image
                    style={styles.addCircleIcon}
                    contentFit="cover"
                    source={require("../assets/trash2.png")}
                  />
                </View>
                <View style={styles.progressBar}>
                  <View style={styles.progressBarContainer}>
                    <View
                      style={[styles.progressBarBg, styles.progressPosition]}
                    />
                    <View
                      style={[
                        styles.progressbaratom,
                        styles.progressbaratomPosition1,
                      ]}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.frame2}>
              <View style={styles.uploadSuccessfulParent}>
                <Text style={[styles.song1, styles.song1Typo]}>
                  Upload Successful!
                </Text>
                <Text style={[styles.song1, styles.song1Typo]} />
                <Text style={[styles.song1, styles.song1Typo]}>2.15gb</Text>
              </View>
              <Text style={[styles.text, styles.blcTypo]}>100%</Text>
            </View>
          </View>
        </View>
        <View style={styles.song1Parent}>
          <Text style={[styles.song1, styles.song1Typo]}>Song 2</Text>
          <View style={[styles.inputField, styles.inputFieldLayout]}>
            <View style={[styles.inputFieldChild, styles.iconLayout]} />
            <Text style={[styles.blinker, styles.song1Typo]}>Shoko</Text>
            <Image
              style={styles.eyeIcon}
              contentFit="cover"
              source={require("../assets/eye.png")}
            />
          </View>
          <View
            style={[styles.fileUploadStatus, styles.fileUploadStatusSpaceBlock]}
          >
            <View style={styles.iconContainerParent}>
              <View style={[styles.iconContainer1, styles.iconContainerLayout]}>
                <Image
                  style={styles.addCircleIcon}
                  contentFit="cover"
                  source={require("../assets/filearrowup3.png")}
                />
              </View>
              <View style={styles.frame}>
                <View style={styles.frame1}>
                  <Text style={[styles.filenamepng, styles.song1Typo]}>
                    Filename.mp3
                  </Text>
                  <Image
                    style={styles.addCircleIcon}
                    contentFit="cover"
                    source={require("../assets/trash2.png")}
                  />
                </View>
                <View style={styles.progressBar}>
                  <View style={styles.progressBarContainer}>
                    <View
                      style={[styles.progressBarBg1, styles.progressPosition]}
                    />
                    <View
                      style={[
                        styles.progressbaratom1,
                        styles.progressbaratomPosition,
                      ]}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.frame2}>
              <Text style={[styles.song1, styles.song1Typo]}>2.15gb</Text>
              <Text style={[styles.text, styles.blcTypo]}>52%</Text>
            </View>
          </View>
        </View>
        <View style={styles.song1Parent}>
          <Text style={[styles.song1, styles.song1Typo]}>Song 3</Text>
          <InputField2
            blinker="Skelewu"
            eye={require("../assets/eye.png")}
            blinkerMarginTop={16}
          />
          <View
            style={[styles.fileUploadStatus, styles.fileUploadStatusSpaceBlock]}
          >
            <View style={styles.iconContainerParent}>
              <View style={[styles.iconContainer2, styles.iconContainerLayout]}>
                <Image
                  style={styles.addCircleIcon}
                  contentFit="cover"
                  source={require("../assets/filearrowup5.png")}
                />
              </View>
              <View style={styles.frame}>
                <View style={styles.frame1}>
                  <Text style={[styles.filenamepng, styles.song1Typo]}>
                    Filename.mp3
                  </Text>
                  <Image
                    style={styles.addCircleIcon}
                    contentFit="cover"
                    source={require("../assets/trash2.png")}
                  />
                </View>
                <View style={styles.progressBar}>
                  <View style={styles.progressBarContainer}>
                    <View
                      style={[styles.progressBarBg2, styles.progressPosition]}
                    />
                    <View
                      style={[
                        styles.progressbaratom2,
                        styles.progressbaratomPosition,
                      ]}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.frame2}>
              <Text style={[styles.song1, styles.song1Typo]}>
                Upload failed!
              </Text>
              <View style={[styles.button, styles.buttonFlexBox]}>
                <Text style={[styles.text2, styles.song1Typo]}>Try Again</Text>
                <Image
                  style={styles.arrowsclockwiseIcon}
                  contentFit="cover"
                  source={require("../assets/arrowsclockwise.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.song1Parent}>
          <Text style={[styles.song1, styles.song1Typo]}>Song 4</Text>
          <View style={[styles.inputField, styles.inputFieldLayout]}>
            <View style={[styles.inputFieldChild, styles.iconLayout]} />
            <Text style={[styles.blinker, styles.song1Typo]}>Run</Text>
            <Image
              style={styles.eyeIcon}
              contentFit="cover"
              source={require("../assets/eye.png")}
            />
          </View>
          <View
            style={[styles.fileUploadStatus, styles.fileUploadStatusSpaceBlock]}
          >
            <View style={styles.iconContainerParent}>
              <View style={[styles.iconContainer1, styles.iconContainerLayout]}>
                <Image
                  style={styles.addCircleIcon}
                  contentFit="cover"
                  source={require("../assets/filearrowup3.png")}
                />
              </View>
              <View style={styles.frame}>
                <View style={styles.frame1}>
                  <Text style={[styles.filenamepng, styles.song1Typo]}>
                    Filename.mp3
                  </Text>
                  <Image
                    style={styles.addCircleIcon}
                    contentFit="cover"
                    source={require("../assets/trash2.png")}
                  />
                </View>
                <View style={styles.progressBar}>
                  <View style={styles.progressBarContainer}>
                    <View
                      style={[styles.progressBarBg1, styles.progressPosition]}
                    />
                    <View
                      style={[
                        styles.progressbaratom1,
                        styles.progressbaratomPosition,
                      ]}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.frame2}>
              <Text style={[styles.song1, styles.song1Typo]}>2.15gb</Text>
              <Text style={[styles.text, styles.blcTypo]}>52%</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.uploadMusicalbumsongAddedChild} />
      <Pressable
        style={[styles.button1, styles.button1Position]}
        onPress={() => navigation.navigate("UploadMusicAlbum3")}
      >
        <Text style={styles.saveSongs}>Proceed</Text>
      </Pressable>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Pressable style={styles.pressable} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/241.png")}
          />
        </Pressable>
        <Text style={styles.uploadYourAlbum}>Upload Your Album</Text>
        <Text style={[styles.followTheseSteps, styles.blcTypo]}>
          Follow these steps to complete your upload.
        </Text>
        <View style={[styles.stepGroupHorizontal, styles.button1Position]}>
          <View
            style={[styles.stepGroupHorizontalChild, styles.stepGroupPosition]}
          />
          <View
            style={[styles.stepGroupHorizontalItem, styles.stepGroupPosition]}
          />
          <View style={styles.complete}>
            <View style={[styles.frame12, styles.buttonFlexBox]}>
              <View style={styles.stepbaseitem}>
                <View style={[styles.dot, styles.dotLayout]} />
              </View>
            </View>
            <Text style={[styles.stepTitle, styles.stepTypo]}>Basic Info</Text>
          </View>
          <View style={styles.inProgress}>
            <View style={[styles.frame12, styles.buttonFlexBox]}>
              <View style={[styles.stepbaseitem1, styles.stepbaseitemBorder]}>
                <View style={[styles.dot, styles.dotLayout]} />
              </View>
            </View>
            <Text style={[styles.stepTitle1, styles.stepTypo]}>Add Song</Text>
          </View>
          <View style={styles.default}>
            <View style={[styles.frame12, styles.buttonFlexBox]}>
              <View style={[styles.stepbaseitem2, styles.stepbaseitemBorder]}>
                <View style={[styles.dot2, styles.dotLayout]} />
              </View>
            </View>
            <Text style={[styles.stepTitle2, styles.stepTypo]}>Credits</Text>
          </View>
          <View style={styles.default1}>
            <View style={[styles.frame12, styles.buttonFlexBox]}>
              <View style={[styles.stepbaseitem2, styles.stepbaseitemBorder]}>
                <View style={[styles.dot2, styles.dotLayout]} />
              </View>
            </View>
            <Text style={[styles.stepTitle2, styles.stepTypo]}>Release</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  blcTypo: {
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  song1Typo: {
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  fileUploadStatusSpaceBlock: {
    padding: Padding.p_base,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGray_400,
  },
  iconContainerLayout: {
    height: 48,
    width: 48,
    borderRadius: Border.br_104xl,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  progressPosition: {
    borderRadius: Border.br_1215xl,
    left: 0,
    right: 0,
    top: 0,
    height: 8,
    position: "absolute",
  },
  progressbaratomPosition1: {
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  inputFieldLayout: {
    width: 335,
    marginTop: 16,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  progressbaratomPosition: {
    right: "34.06%",
    width: "65.94%",
    left: "0%",
    top: 8,
    borderRadius: Border.br_1215xl,
    height: 8,
    position: "absolute",
  },
  button1Position: {
    marginLeft: -167.5,
    left: "50%",
    width: 335,
    flexDirection: "row",
    position: "absolute",
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
    top: 24,
    marginLeft: -125,
    left: "50%",
    borderStyle: "solid",
    position: "absolute",
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
  stepbaseitemBorder: {
    borderWidth: 1,
    padding: Padding.p_9xs,
    borderRadius: Border.br_1215xl,
    justifyContent: "center",
    flexDirection: "row",
    borderStyle: "solid",
    alignItems: "center",
    overflow: "hidden",
  },
  addCircleIcon: {
    height: 24,
    width: 24,
  },
  blc: {
    marginLeft: 8,
    color: Color.white,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  addMore: {
    borderWidth: 2,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    borderColor: Color.primary30,
    borderStyle: "solid",
    justifyContent: "center",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.primary,
  },
  song1: {
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.white,
  },
  iconContainer: {
    backgroundColor: Color.colorMediumspringgreen_100,
  },
  filenamepng: {
    color: Color.white,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  frame1: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  progressBarBg: {
    backgroundColor: Color.text0,
  },
  progressbaratom: {
    backgroundColor: Color.success50,
    top: 8,
    left: "0%",
    right: "0%",
    borderRadius: Border.br_1215xl,
    height: 8,
    width: "100%",
  },
  progressBarContainer: {
    height: 8,
    alignSelf: "stretch",
  },
  progressBar: {
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    marginTop: 16,
  },
  frame: {
    marginLeft: 16,
    flex: 1,
  },
  iconContainerParent: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  uploadSuccessfulParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: Color.white,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  frame2: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    marginTop: 16,
    flexDirection: "row",
  },
  fileUploadStatus: {
    marginTop: 16,
    width: 335,
    overflow: "hidden",
  },
  song1Parent: {
    marginTop: 32,
  },
  inputFieldChild: {
    top: "0%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGray_400,
    height: "100%",
  },
  blinker: {
    marginTop: -12,
    top: "50%",
    left: 16,
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.white,
    position: "absolute",
  },
  eyeIcon: {
    height: "46.15%",
    width: "6.99%",
    top: "26.92%",
    right: "4.69%",
    bottom: "26.92%",
    left: "88.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  inputField: {
    height: 52,
    marginTop: 16,
  },
  iconContainer1: {
    backgroundColor: Color.colorOrange_100,
  },
  progressBarBg1: {
    backgroundColor: Color.colorGray_800,
  },
  progressbaratom1: {
    backgroundColor: Color.warningDefault,
  },
  iconContainer2: {
    backgroundColor: Color.colorTomato_100,
  },
  progressBarBg2: {
    backgroundColor: Color.colorSnow,
  },
  progressbaratom2: {
    backgroundColor: Color.errorDefault,
  },
  text2: {
    color: Color.warningDefault,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  arrowsclockwiseIcon: {
    width: 16,
    height: 16,
    marginLeft: 8,
  },
  button: {
    flexDirection: "row",
    overflow: "hidden",
  },
  addMoreParent: {
    top: 226,
    alignItems: "center",
    left: 20,
    position: "absolute",
  },
  uploadMusicalbumsongAddedChild: {
    marginLeft: -187.5,
    bottom: 0,
    height: 88,
    width: 375,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.primary,
  },
  saveSongs: {
    color: Color.primary,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    textAlign: "center",
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    lineHeight: 24,
  },
  button1: {
    bottom: 24,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_81xl,
    marginLeft: -167.5,
  },
  headerChild: {
    backgroundColor: Color.colorGray_1300,
  },
  icon: {
    overflow: "hidden",
  },
  pressable: {
    top: 40,
    height: 24,
    width: 24,
    left: 20,
    position: "absolute",
  },
  uploadYourAlbum: {
    marginLeft: -71.5,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    top: 40,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    left: "50%",
    textAlign: "center",
    color: Color.white,
    lineHeight: 24,
    position: "absolute",
  },
  followTheseSteps: {
    top: 80,
    left: 44,
    color: Color.primary0,
    fontFamily: FontFamily.mobileBodyCopy,
    position: "absolute",
  },
  stepGroupHorizontalChild: {
    width: 251,
    zIndex: 0,
    borderColor: Color.primary30,
  },
  stepGroupHorizontalItem: {
    borderColor: Color.white,
    width: 126,
    zIndex: 1,
  },
  dot: {
    backgroundColor: Color.primary30,
  },
  stepbaseitem: {
    padding: Padding.p_9xs,
    backgroundColor: Color.white,
    borderRadius: Border.br_1215xl,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  frame12: {
    flexDirection: "row",
  },
  stepTitle: {
    color: Color.white,
  },
  complete: {
    zIndex: 2,
    alignItems: "center",
  },
  stepbaseitem1: {
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
  },
  stepTitle1: {
    color: Color.primary0,
  },
  inProgress: {
    zIndex: 3,
    alignItems: "center",
  },
  dot2: {
    backgroundColor: Color.primary10,
  },
  stepbaseitem2: {
    backgroundColor: Color.primary0,
    borderColor: Color.primary10,
  },
  stepTitle2: {
    color: Color.primary20,
  },
  default: {
    zIndex: 4,
    alignItems: "center",
  },
  default1: {
    zIndex: 5,
    alignItems: "center",
  },
  stepGroupHorizontal: {
    top: 120,
    justifyContent: "space-between",
    padding: Padding.p_base,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGray_400,
  },
  uploadMusicalbumsongAdded: {
    height: 1435,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.primary,
    flex: 1,
  },
});

export default UploadMusicAlbumSongAdded;