import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const PreviewYourAlbumDetails = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.previewYourAlbumDetails, styles.icon5Layout]}>
      <View style={styles.cardParent}>
        <View style={styles.card}>
          <Image
            style={styles.rectangle2Icon}
            contentFit="cover"
            source={require("../assets/rectangle2111.png")}
          />
          <View style={styles.labels}>
            <Text style={[styles.title, styles.titleTypo]}>In Lagos</Text>
            <View style={[styles.albumInfo, styles.albumInfoFlexBox]}>
              <View style={styles.parentFlexBox}>
                <Text style={[styles.caption, styles.song1Typo]}>Album</Text>
                <Text style={[styles.caption, styles.song1Typo]} />
                <Text style={[styles.caption, styles.song1Typo]}>
                  Afrobeats
                </Text>
              </View>
              <Text style={[styles.caption, styles.song1Typo]}>24 Songs</Text>
            </View>
          </View>
        </View>
        <View style={styles.fileUploadStatus}>
          <View style={[styles.filenamepngParent, styles.albumInfoFlexBox]}>
            <Text style={[styles.filenamepng, styles.filenamepngTypo]}>
              Filename.mp3
            </Text>
            <View style={styles.iconShadowBox}>
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
          <View style={[styles.song1Parent, styles.parentFlexBox]}>
            <Text style={[styles.song1, styles.song1Typo]}>Song 1</Text>
            <Text style={[styles.uploadSuccessful, styles.uploadTypo]} />
            <Text style={[styles.uploadSuccessful1, styles.uploadFlexBox]}>
              2.15gb
            </Text>
            <Text style={[styles.uploadSuccessful, styles.uploadTypo]} />
            <Text style={[styles.uploadSuccessful, styles.uploadTypo]}>
              2hr 43 mins
            </Text>
          </View>
        </View>
        <View style={styles.fileUploadStatus}>
          <View style={[styles.filenamepngParent, styles.albumInfoFlexBox]}>
            <Text style={[styles.filenamepng, styles.filenamepngTypo]}>
              Filename.mp3
            </Text>
            <View style={styles.iconShadowBox}>
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
          <View style={[styles.song1Parent, styles.parentFlexBox]}>
            <Text style={[styles.song1, styles.song1Typo]}>Song 2</Text>
            <Text style={[styles.uploadSuccessful, styles.uploadTypo]} />
            <Text style={[styles.uploadSuccessful1, styles.uploadFlexBox]}>
              2.15gb
            </Text>
            <Text style={[styles.uploadSuccessful, styles.uploadTypo]} />
            <Text style={[styles.uploadSuccessful, styles.uploadTypo]}>
              2hr 43 mins
            </Text>
          </View>
        </View>
        <View style={styles.fileUploadStatus}>
          <View style={[styles.filenamepngParent, styles.albumInfoFlexBox]}>
            <Text style={[styles.filenamepng, styles.filenamepngTypo]}>
              Filename.mp3
            </Text>
            <View style={styles.iconShadowBox}>
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
          <View style={[styles.song1Parent, styles.parentFlexBox]}>
            <Text style={[styles.song1, styles.song1Typo]}>Song 3</Text>
            <Text style={[styles.uploadSuccessful, styles.uploadTypo]} />
            <Text style={[styles.uploadSuccessful1, styles.uploadFlexBox]}>
              2.15gb
            </Text>
            <Text style={[styles.uploadSuccessful, styles.uploadTypo]} />
            <Text style={[styles.uploadSuccessful, styles.uploadTypo]}>
              2hr 43 mins
            </Text>
          </View>
        </View>
        <View style={styles.fileUploadStatus}>
          <View style={[styles.filenamepngParent, styles.albumInfoFlexBox]}>
            <Text style={[styles.filenamepng, styles.filenamepngTypo]}>
              Filename.mp3
            </Text>
            <View style={styles.iconShadowBox}>
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
          <View style={[styles.song1Parent, styles.parentFlexBox]}>
            <Text style={[styles.song1, styles.song1Typo]}>Song 4</Text>
            <Text style={[styles.uploadSuccessful, styles.uploadTypo]} />
            <Text style={[styles.uploadSuccessful1, styles.uploadFlexBox]}>
              2.15gb
            </Text>
            <Text style={[styles.uploadSuccessful, styles.uploadTypo]} />
            <Text style={[styles.uploadSuccessful, styles.uploadTypo]}>
              2hr 43 mins
            </Text>
          </View>
        </View>
        <View style={styles.fileUploadStatus}>
          <View style={[styles.filenamepngParent, styles.albumInfoFlexBox]}>
            <Text style={[styles.filenamepng, styles.filenamepngTypo]}>
              Filename.mp3
            </Text>
            <View style={styles.iconShadowBox}>
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
          <View style={[styles.song1Parent, styles.parentFlexBox]}>
            <Text style={[styles.song1, styles.song1Typo]}>Song 5</Text>
            <Text style={[styles.uploadSuccessful, styles.uploadTypo]} />
            <Text style={[styles.uploadSuccessful1, styles.uploadFlexBox]}>
              2.15gb
            </Text>
            <Text style={[styles.uploadSuccessful, styles.uploadTypo]} />
            <Text style={[styles.uploadSuccessful, styles.uploadTypo]}>
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
              <Text style={[styles.title1, styles.title1Typo]}>Doji Snow</Text>
              <Text style={[styles.performer, styles.song1Typo]}>
                Song writer
              </Text>
            </View>
            <View style={[styles.titleGroup, styles.titleSpaceBlock]}>
              <Text style={[styles.title1, styles.title1Typo]}>Soji Akin</Text>
              <Text style={[styles.performer, styles.song1Typo]}>Producer</Text>
            </View>
            <View style={[styles.titleGroup, styles.titleSpaceBlock]}>
              <Text style={[styles.title1, styles.title1Typo]}>Annie King</Text>
              <Text style={[styles.performer, styles.song1Typo]}>Director</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.frameGroup}>
        <Pressable
          style={[styles.finishUploadWrapper, styles.wrapperFlexBox]}
          onPress={() => navigation.navigate("Finishing3")}
        >
          <Text style={[styles.finishUpload, styles.uploadFlexBox]}>
            Finish Upload
          </Text>
        </Pressable>
        <Pressable
          style={[styles.goBackEditWrapper, styles.wrapperFlexBox]}
          onPress={() => navigation.navigate("UploadMusicAlbum1")}
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
            style={[styles.icon5, styles.icon5Layout]}
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
  icon5Layout: {
    overflow: "hidden",
    width: "100%",
  },
  titleTypo: {
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    textAlign: "left",
    lineHeight: 24,
  },
  albumInfoFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  song1Typo: {
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
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  uploadTypo: {
    marginLeft: 4,
    color: Color.white,
    fontFamily: FontFamily.mobileBodyCopy,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  uploadFlexBox: {
    textAlign: "center",
    lineHeight: 24,
  },
  title1Typo: {
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    fontFamily: FontFamily.mobileH3HeadingPage,
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
    color: Color.colorTextPrimary,
    textAlign: "left",
  },
  caption: {
    color: Color.primary0,
    textAlign: "left",
  },
  albumInfo: {
    width: 303,
  },
  labels: {
    justifyContent: "flex-end",
    marginTop: 12,
  },
  card: {
    padding: Padding.p_base,
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_mini,
  },
  filenamepng: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.mobileH3HeadingPage,
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
  iconShadowBox: {
    padding: Padding.p_9xs,
    justifyContent: "center",
    shadowOpacity: 1,
    elevation: 3,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 0.25,
    },
    shadowColor: "rgba(0, 0, 0, 0.04)",
    alignItems: "center",
  },
  filenamepngParent: {
    alignSelf: "stretch",
  },
  lineIcon: {
    maxHeight: "100%",
    width: 311,
    marginTop: 12,
  },
  song1: {
    textAlign: "right",
    width: 78,
    color: Color.white,
  },
  uploadSuccessful: {
    textAlign: "left",
    lineHeight: 24,
  },
  uploadSuccessful1: {
    marginLeft: 4,
    color: Color.white,
    fontFamily: FontFamily.mobileBodyCopy,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  song1Parent: {
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
  title1: {
    color: Color.white,
    textAlign: "left",
    lineHeight: 24,
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
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  finishUploadWrapper: {
    backgroundColor: Color.white,
  },
  goBack: {
    color: Color.white,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    fontFamily: FontFamily.mobileH3HeadingPage,
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
  icon5: {
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
  previewYourAlbumDetails: {
    backgroundColor: Color.primary,
    flex: 1,
    height: 1376,
  },
});

export default PreviewYourAlbumDetails;