import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const UploadMusicOther = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.uploadMusicother, styles.iconLayout]}>
      <Pressable
        style={styles.upload}
        onPress={() => navigation.navigate("UploadMusicOther1")}
      >
        <View style={[styles.rectangle4, styles.rectangleBorder]} />
        <View style={[styles.rectangle41, styles.rectangle41Position]} />
        <View style={[styles.uploadDocumentParent, styles.rectangle41Position]}>
          <Image
            style={styles.uploadDocumentIcon}
            contentFit="cover"
            source={require("../assets/uploaddocument.png")}
          />
          <View style={styles.uploadYourImageFileHereParent}>
            <Text style={[styles.uploadYourImage, styles.uploadYourImageTypo]}>
              Upload your audio file here
            </Text>
            <Text style={styles.supportedFormatsMp3}>
              Supported formats: MP3, WAV, etc
            </Text>
          </View>
        </View>
      </Pressable>
      <View style={[styles.button, styles.frameFlexBox]}>
        <Text style={styles.next}>Next</Text>
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
        <Text style={styles.uploadYourContent}>Upload Your Content</Text>
        <Text style={[styles.followTheseSteps, styles.uploadYourImageTypo]}>
          Follow these steps to upload your content.
        </Text>
        <View style={styles.stepGroupHorizontal}>
          <View
            style={[styles.stepGroupHorizontalChild, styles.stepGroupPosition]}
          />
          <View
            style={[styles.stepGroupHorizontalItem, styles.stepGroupPosition]}
          />
          <View style={styles.inProgress}>
            <View style={styles.frameFlexBox}>
              <View style={[styles.stepbaseitem, styles.stepbaseitemBorder]}>
                <View style={[styles.dot, styles.dotLayout]} />
              </View>
            </View>
            <Text style={[styles.stepTitle, styles.stepTypo]}>Add Item</Text>
          </View>
          <View style={styles.default}>
            <View style={styles.frameFlexBox}>
              <View style={[styles.stepbaseitem1, styles.stepbaseitemBorder]}>
                <View style={[styles.dot1, styles.dotLayout]} />
              </View>
            </View>
            <Text style={[styles.stepTitle1, styles.stepTypo]}>Basic Info</Text>
          </View>
          <View style={styles.default1}>
            <View style={styles.frameFlexBox}>
              <View style={[styles.stepbaseitem1, styles.stepbaseitemBorder]}>
                <View style={[styles.dot1, styles.dotLayout]} />
              </View>
            </View>
            <Text style={[styles.stepTitle1, styles.stepTypo]}>Credits</Text>
          </View>
          <View style={styles.default2}>
            <View style={styles.frameFlexBox}>
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
  rectangleBorder: {
    borderWidth: 1,
    backgroundColor: Color.colorGray_400,
    borderRadius: Border.br_mini,
    borderColor: Color.primary30,
  },
  rectangle41Position: {
    left: "50%",
    position: "absolute",
  },
  uploadYourImageTypo: {
    textAlign: "center",
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  frameFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
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
  stepbaseitemBorder: {
    padding: Padding.p_9xs,
    borderRadius: Border.br_1215xl,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
  },
  dotLayout: {
    height: 8,
    width: 8,
    borderRadius: Border.br_1215xl,
    overflow: "hidden",
  },
  stepTypo: {
    marginTop: 12,
    width: 60,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    fontSize: FontSize.btnSmallNormal_size,
    textAlign: "center",
  },
  rectangle4: {
    width: 336,
    height: 265,
    borderStyle: "solid",
    left: 0,
    top: 0,
    borderWidth: 1,
    backgroundColor: Color.colorGray_400,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  rectangle41: {
    marginLeft: -152,
    bottom: 16,
    borderStyle: "dashed",
    width: 304,
    height: 233,
    borderWidth: 1,
    backgroundColor: Color.colorGray_400,
    borderRadius: Border.br_mini,
    borderColor: Color.primary30,
    left: "50%",
  },
  uploadDocumentIcon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  uploadYourImage: {
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  supportedFormatsMp3: {
    lineHeight: 16,
    color: Color.primary10,
    marginTop: 4,
    fontSize: FontSize.btnSmallNormal_size,
    textAlign: "center",
    fontFamily: FontFamily.mobileBodyCopy,
  },
  uploadYourImageFileHereParent: {
    marginTop: 16,
    alignItems: "center",
  },
  uploadDocumentParent: {
    marginTop: -46,
    marginLeft: -94.5,
    top: "50%",
    alignItems: "center",
  },
  upload: {
    top: 218,
    height: 264,
    width: 335,
    left: 20,
    position: "absolute",
  },
  next: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH3HeadingPage,
    color: Color.primary,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    textAlign: "center",
    lineHeight: 24,
  },
  button: {
    bottom: 24,
    borderRadius: Border.br_81xl,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    opacity: 0.5,
    backgroundColor: Color.white,
    marginLeft: -167.5,
    justifyContent: "center",
    left: "50%",
    width: 335,
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.colorGray_1300,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  pressable: {
    width: 24,
    height: 24,
    top: 40,
    left: 20,
    position: "absolute",
  },
  uploadYourContent: {
    marginLeft: -78.5,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    top: 40,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    textAlign: "center",
    color: Color.white,
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  followTheseSteps: {
    top: 80,
    left: 49,
    color: Color.primary0,
    textAlign: "center",
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    position: "absolute",
  },
  stepGroupHorizontalChild: {
    width: 251,
    zIndex: 0,
    borderColor: Color.primary30,
    borderTopWidth: 1,
    top: 24,
    marginLeft: -125,
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
    justifyContent: "space-between",
    padding: Padding.p_base,
    flexDirection: "row",
    marginLeft: -167.5,
    left: "50%",
    backgroundColor: Color.colorGray_400,
    borderRadius: Border.br_mini,
    width: 335,
    position: "absolute",
  },
  uploadMusicother: {
    backgroundColor: Color.primary,
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default UploadMusicOther;
