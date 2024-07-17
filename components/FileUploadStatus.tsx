import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, Border, FontFamily, Padding, Color } from "../GlobalStyles";

const FileUploadStatus = () => {
  return (
    <View style={styles.fileUploadStatus}>
      <View style={styles.typesuccessLayout}>
        <View style={styles.iconContainerParent}>
          <View style={[styles.iconContainer, styles.iconContainerFlexBox]}>
            <Image
              style={styles.filearrowupIcon}
              contentFit="cover"
              source={require("../assets/filearrowup3.png")}
            />
          </View>
          <View style={styles.frame}>
            <View style={[styles.frame1, styles.frameFlexBox]}>
              <Text style={[styles.filenamepng, styles.gbTypo]}>
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
                <View style={[styles.progressBarBg, styles.progressPosition]} />
                <View
                  style={[
                    styles.progressbaratom,
                    styles.progressbaratomPosition,
                  ]}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frame2, styles.frame2SpaceBlock]}>
          <Text style={[styles.gb, styles.gbTypo]}>2.15gb</Text>
          <Text style={[styles.text, styles.textTypo]}>52%</Text>
        </View>
      </View>
      <View style={[styles.typesuccess, styles.typesuccessLayout]}>
        <View style={styles.iconContainerParent}>
          <View style={[styles.iconContainer1, styles.iconContainerFlexBox]}>
            <Image
              style={styles.filearrowupIcon}
              contentFit="cover"
              source={require("../assets/filearrowup4.png")}
            />
          </View>
          <View style={styles.frame}>
            <View style={[styles.frame1, styles.frameFlexBox]}>
              <Text style={[styles.filenamepng, styles.gbTypo]}>
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
        <View style={[styles.frame2, styles.frame2SpaceBlock]}>
          <View style={styles.uploadSuccessfulParent}>
            <Text style={[styles.gb, styles.gbTypo]}>Upload Successful!</Text>
            <Text style={[styles.gb, styles.gbTypo]} />
            <Text style={[styles.gb, styles.gbTypo]}>2.15gb</Text>
          </View>
          <Text style={[styles.text, styles.textTypo]}>100%</Text>
        </View>
      </View>
      <View style={[styles.typesuccess, styles.typesuccessLayout]}>
        <View style={styles.iconContainerParent}>
          <View style={[styles.iconContainer2, styles.iconContainerFlexBox]}>
            <Image
              style={styles.filearrowupIcon}
              contentFit="cover"
              source={require("../assets/filearrowup5.png")}
            />
          </View>
          <View style={styles.frame}>
            <View style={[styles.frame1, styles.frameFlexBox]}>
              <Text style={[styles.filenamepng, styles.gbTypo]}>
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
        <View style={[styles.frame2, styles.frame2SpaceBlock]}>
          <Text style={[styles.gb, styles.gbTypo]}>Upload failed!</Text>
          <View style={[styles.button, styles.iconContainerFlexBox]}>
            <Text style={[styles.text2, styles.gbTypo]}>Try Again</Text>
            <Image
              style={styles.arrowsclockwiseIcon}
              contentFit="cover"
              source={require("../assets/arrowsclockwise.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  gbTypo: {
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  frame2SpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  progressPosition: {
    borderRadius: Border.br_1215xl,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
    height: 8,
  },
  progressbaratomPosition: {
    left: "0%",
    top: 8,
    borderRadius: Border.br_1215xl,
    position: "absolute",
    height: 8,
  },
  textTypo: {
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
  },
  typesuccessLayout: {
    padding: Padding.p_base,
    width: 335,
    backgroundColor: Color.colorGray_400,
    borderRadius: Border.br_mini,
    overflow: "hidden",
  },
  filearrowupIcon: {
    width: 24,
    height: 24,
  },
  iconContainer: {
    backgroundColor: Color.colorOrange_100,
    height: 48,
    width: 48,
    borderRadius: Border.br_104xl,
    justifyContent: "center",
  },
  filenamepng: {
    color: Color.white,
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
  },
  frame1: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  progressBarBg: {
    backgroundColor: Color.colorGray_800,
  },
  progressbaratom: {
    backgroundColor: Color.warningDefault,
    right: "34.06%",
    width: "65.94%",
    left: "0%",
    top: 8,
  },
  progressBarContainer: {
    height: 8,
    alignSelf: "stretch",
  },
  progressBar: {
    borderRadius: Border.br_5xs,
  },
  frame: {
    flex: 1,
    marginLeft: 16,
  },
  iconContainerParent: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  gb: {
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.white,
  },
  text: {
    textAlign: "center",
    color: Color.white,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    fontWeight: "600",
  },
  frame2: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  iconContainer1: {
    backgroundColor: Color.colorMediumspringgreen_100,
    height: 48,
    width: 48,
    borderRadius: Border.br_104xl,
    justifyContent: "center",
  },
  progressBarBg1: {
    backgroundColor: Color.text0,
  },
  progressbaratom1: {
    width: "100%",
    right: "0%",
    backgroundColor: Color.success50,
    left: "0%",
    top: 8,
  },
  uploadSuccessfulParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  typesuccess: {
    marginTop: 24,
  },
  iconContainer2: {
    backgroundColor: Color.colorTomato_100,
    height: 48,
    width: 48,
    borderRadius: Border.br_104xl,
    justifyContent: "center",
  },
  progressBarBg2: {
    backgroundColor: Color.colorSnow,
  },
  progressbaratom2: {
    backgroundColor: Color.errorDefault,
    right: "34.06%",
    width: "65.94%",
    left: "0%",
    top: 8,
  },
  text2: {
    color: Color.warningDefault,
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
  },
  arrowsclockwiseIcon: {
    width: 16,
    height: 16,
    marginLeft: 8,
  },
  button: {
    overflow: "hidden",
  },
  fileUploadStatus: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.primary,
    borderStyle: "dashed",
    borderColor: Color.brand60,
    borderWidth: 1,
    padding: Padding.p_5xl,
    overflow: "hidden",
  },
});

export default FileUploadStatus;
