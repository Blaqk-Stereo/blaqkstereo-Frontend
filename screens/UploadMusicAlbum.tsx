import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import InputField2 from "../components/InputField2";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";

const UploadMusicAlbum = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.uploadMusicalbum}>
      <Pressable
        style={styles.inputFieldParent}
        onPress={() => navigation.navigate("UploadMusicAlbum1")}
      >
        <InputField2
          blinker="Enter the title of your album"
          eye={require("../assets/eye4.png")}
        />
        <View style={[styles.inputField, styles.uploadLayout]}>
          <View style={styles.inputFieldChild} />
          <Text style={styles.blinker}>Select the genre</Text>
          <Image
            style={styles.arrowRightIcon}
            contentFit="cover"
            source={require("../assets/arrowright4.png")}
          />
        </View>
        <View style={[styles.upload, styles.uploadLayout]}>
          <View style={styles.rectangle4} />
          <View style={styles.galleryAddParent}>
            <Image
              style={styles.galleryAddIcon}
              contentFit="cover"
              source={require("../assets/galleryadd.png")}
            />
            <View style={styles.uploadYourImageFileHereParent}>
              <Text
                style={[styles.uploadYourImage, styles.uploadYourImageTypo]}
              >
                Upload cover artwork
              </Text>
              <Text style={styles.sizeShouldBe}>
                Size should be at least 3000x3000px
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
      <View style={[styles.button, styles.frameFlexBox]}>
        <Text style={styles.continue}>Continue</Text>
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Pressable style={styles.pressable} onPress={() => navigation.goBack()}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/241.png")}
          />
        </Pressable>
        <Text style={styles.uploadYourAlbum}>Upload Your Album</Text>
        <Text style={[styles.followTheseSteps, styles.uploadYourImageTypo]}>
          Follow these steps to upload your album.
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
            <Text style={[styles.stepTitle, styles.stepTypo]}>Basic Info</Text>
          </View>
          <View style={styles.default}>
            <View style={styles.frameFlexBox}>
              <View style={[styles.stepbaseitem1, styles.stepbaseitemBorder]}>
                <View style={[styles.dot1, styles.dotLayout]} />
              </View>
            </View>
            <Text style={[styles.stepTitle1, styles.stepTypo]}>Add Song</Text>
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
  uploadLayout: {
    width: 335,
    marginTop: 16,
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
    borderStyle: "solid",
    top: 24,
    marginLeft: -125,
    left: "50%",
    position: "absolute",
  },
  stepbaseitemBorder: {
    padding: Padding.p_9xs,
    borderRadius: Border.br_1215xl,
    borderStyle: "solid",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
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
  inputFieldChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGray_400,
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  blinker: {
    left: 16,
    textAlign: "left",
    color: Color.primary0,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  arrowRightIcon: {
    right: 16,
    height: 24,
    width: 24,
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  inputField: {
    height: 52,
    marginTop: 16,
  },
  rectangle4: {
    backgroundColor: Color.colorGray_300,
    borderStyle: "dashed",
    width: 336,
    height: 265,
    borderWidth: 1,
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
    borderColor: Color.primary30,
    position: "absolute",
  },
  galleryAddIcon: {
    width: 32,
    height: 32,
  },
  uploadYourImage: {
    color: Color.white,
    textAlign: "center",
  },
  sizeShouldBe: {
    lineHeight: 16,
    color: Color.primary10,
    marginTop: 4,
    fontSize: FontSize.btnSmallNormal_size,
    textAlign: "center",
    fontFamily: FontFamily.mobileBodyCopy,
  },
  uploadYourImageFileHereParent: {
    alignItems: "center",
    marginTop: 16,
  },
  galleryAddParent: {
    marginTop: -46,
    marginLeft: -103.5,
    alignItems: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  upload: {
    height: 264,
    marginTop: 16,
  },
  inputFieldParent: {
    top: 218,
    left: 20,
    position: "absolute",
  },
  continue: {
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
    width: "100%",
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
    textAlign: "center",
    color: Color.white,
    left: "50%",
    lineHeight: 24,
    position: "absolute",
  },
  followTheseSteps: {
    top: 80,
    left: 55,
    color: Color.primary0,
    textAlign: "center",
    position: "absolute",
  },
  stepGroupHorizontalChild: {
    width: 251,
    zIndex: 0,
    borderColor: Color.primary30,
    borderTopWidth: 1,
    borderStyle: "solid",
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
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGray_400,
    width: 335,
    position: "absolute",
  },
  uploadMusicalbum: {
    backgroundColor: Color.primary,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default UploadMusicAlbum;
