import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const PreviewYourContentDetails = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.previewYourContentDetails, styles.icon1Layout]}>
      <View style={styles.cardParent}>
        <View style={styles.card}>
          <Image
            style={styles.rectangle2Icon}
            contentFit="cover"
            source={require("../assets/rectangle2.png")}
          />
          <View style={styles.labels}>
            <Text style={[styles.title, styles.titleClr]}>Rodo</Text>
            <View style={[styles.captionParent, styles.parentFlexBox]}>
              <Text style={[styles.caption, styles.uploadTypo]}>Single</Text>
              <Text style={[styles.caption, styles.uploadTypo]} />
              <Text style={[styles.caption, styles.uploadTypo]}>Hip-Hop</Text>
            </View>
            <Text style={[styles.title1, styles.uploadTypo]}>
              Feat. Davido, Wizkid, Tiwa Savage, Adekunle Gold.
            </Text>
          </View>
        </View>
        <View style={styles.fileUploadStatus}>
          <View style={[styles.filenamepngParent, styles.parentFlexBox]}>
            <Text style={[styles.filenamepng, styles.filenamepngTypo]}>
              Filename.mp3
            </Text>
            <View style={styles.iconButton1}>
              <View style={styles.surface} />
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/icon1.png")}
              />
            </View>
          </View>
          <Image
            style={styles.lineIcon}
            contentFit="cover"
            source={require("../assets/line2.png")}
          />
          <View style={[styles.uploadSuccessfulParent, styles.parentFlexBox]}>
            <Text style={[styles.uploadSuccessful, styles.uploadTypo]}>
              2.15gb
            </Text>
            <Text style={[styles.uploadSuccessful1, styles.uploadTypo]} />
            <Text style={[styles.uploadSuccessful1, styles.uploadTypo]}>
              2hr 43 mins
            </Text>
          </View>
        </View>
        <View style={styles.artists}>
          <Text style={[styles.filenamepng, styles.filenamepngTypo]}>
            Credits
          </Text>
          <View style={styles.frameParent}>
            <View style={styles.titleSpaceBlock}>
              <Text style={[styles.title2, styles.title2Typo]}>Soji Akin</Text>
              <Text style={[styles.performer, styles.uploadTypo]}>
                Producer
              </Text>
            </View>
            <View style={[styles.titleGroup, styles.titleSpaceBlock]}>
              <Text style={[styles.title2, styles.title2Typo]}>Drey</Text>
              <Text style={[styles.performer, styles.uploadTypo]}>
                Director
              </Text>
            </View>
            <View style={[styles.titleGroup, styles.titleSpaceBlock]}>
              <Text style={[styles.title2, styles.title2Typo]}>Annie King</Text>
              <Text style={[styles.performer, styles.uploadTypo]}>
                Director
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.frameGroup}>
        <Pressable
          style={[styles.finishUploadWrapper, styles.wrapperFlexBox]}
          onPress={() => navigation.navigate("Finishing1")}
        >
          <Text style={[styles.finishUpload, styles.uploadFlexBox]}>
            Finish Upload
          </Text>
        </Pressable>
        <Pressable
          style={[styles.goBackEditWrapper, styles.wrapperFlexBox]}
          onPress={() => navigation.navigate("UploadMusicSingle4")}
        >
          <Text
            style={[styles.goBack, styles.uploadFlexBox]}
          >{`Go back & Edit`}</Text>
        </Pressable>
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Pressable
          style={[styles.pressable, styles.pressablePosition]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[styles.icon1, styles.icon1Layout]}
            contentFit="cover"
            source={require("../assets/241.png")}
          />
        </Pressable>
        <Text style={[styles.previewYourUpload, styles.pressablePosition]}>
          Preview Your Upload
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon1Layout: {
    overflow: "hidden",
    width: "100%",
  },
  titleClr: {
    color: Color.colorTextPrimary,
    textAlign: "left",
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  uploadTypo: {
    fontFamily: FontFamily.mobileBodyCopy,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    lineHeight: 24,
  },
  filenamepngTypo: {
    fontSize: FontSize.mobileH5HeadingComponent_size,
    color: Color.white,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  title2Typo: {
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
  },
  titleSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_5xl,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_300,
    alignItems: "center",
  },
  wrapperFlexBox: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_81xl,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    width: 335,
    flexDirection: "row",
    alignItems: "center",
  },
  uploadFlexBox: {
    textAlign: "center",
    lineHeight: 24,
  },
  headerPosition: {
    height: 74,
    top: 0,
    width: 375,
    left: 0,
    position: "absolute",
  },
  pressablePosition: {
    top: 40,
    position: "absolute",
  },
  rectangle2Icon: {
    height: 238,
    width: 303,
    borderRadius: Border.br_mini,
  },
  title: {
    fontSize: FontSize.mobileH4HeadingSection_size,
    textAlign: "left",
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
    lineHeight: 24,
  },
  caption: {
    color: Color.primary0,
    textAlign: "left",
  },
  captionParent: {
    marginTop: 4,
  },
  title1: {
    display: "flex",
    alignItems: "flex-end",
    marginTop: 4,
    textAlign: "left",
    color: Color.colorTextPrimary,
    width: 303,
  },
  labels: {
    justifyContent: "flex-end",
    marginTop: 16,
  },
  card: {
    padding: Padding.p_base,
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_mini,
  },
  filenamepng: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
    lineHeight: 24,
  },
  surface: {
    marginTop: -16,
    marginLeft: -16,
    top: "50%",
    backgroundColor: Color.primary10,
    width: 32,
    height: 32,
    zIndex: 0,
    borderRadius: Border.br_81xl,
    left: "50%",
    position: "absolute",
  },
  icon: {
    zIndex: 1,
  },
  iconButton1: {
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 0.25,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    padding: Padding.p_9xs,
    justifyContent: "center",
    alignItems: "center",
  },
  filenamepngParent: {
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  lineIcon: {
    maxHeight: "100%",
    width: 311,
    marginTop: 12,
  },
  uploadSuccessful: {
    textAlign: "right",
    width: 78,
    color: Color.white,
  },
  uploadSuccessful1: {
    marginLeft: 4,
    color: Color.white,
    textAlign: "left",
  },
  uploadSuccessfulParent: {
    marginTop: 12,
  },
  fileUploadStatus: {
    marginTop: 20,
    width: 335,
    padding: Padding.p_base,
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_mini,
    alignItems: "center",
    overflow: "hidden",
  },
  title2: {
    color: Color.white,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  performer: {
    color: Color.colorGray_600,
    marginTop: -4,
    textAlign: "left",
  },
  titleGroup: {
    marginLeft: 16,
  },
  frameParent: {
    marginTop: 8,
    width: 335,
    flexDirection: "row",
  },
  artists: {
    paddingLeft: Padding.p_xl,
    paddingRight: Padding.p_base,
    width: 375,
    marginTop: 20,
    alignItems: "center",
    overflow: "hidden",
  },
  cardParent: {
    top: 90,
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  finishUpload: {
    color: Color.primary,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
  },
  finishUploadWrapper: {
    backgroundColor: Color.white,
  },
  goBack: {
    color: Color.white,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
  },
  goBackEditWrapper: {
    borderStyle: "solid",
    borderColor: Color.white,
    borderWidth: 1,
    marginTop: 16,
  },
  frameGroup: {
    marginLeft: -167,
    bottom: 24,
    left: "50%",
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.colorGray_1300,
  },
  icon1: {
    height: "100%",
  },
  pressable: {
    left: 20,
    height: 24,
    width: 24,
  },
  previewYourUpload: {
    marginLeft: -77.5,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    textAlign: "center",
    lineHeight: 24,
    left: "50%",
    color: Color.white,
    fontSize: FontSize.mobileH5HeadingComponent_size,
  },
  previewYourContentDetails: {
    backgroundColor: Color.primary,
    flex: 1,
    height: 908,
  },
});

export default PreviewYourContentDetails;