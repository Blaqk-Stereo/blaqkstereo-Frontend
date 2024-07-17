import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const UploadMusicSingle2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.uploadMusicsingle, styles.iconLayout]}>
      <Pressable
        style={[styles.upload, styles.uploadLayout]}
        onPress={() => navigation.navigate("UploadMusicSingle5")}
      >
        <View style={[styles.rectangle4, styles.rectangleBorder]} />
        <View style={[styles.rectangle41, styles.rectangleBorder]} />
        <View style={styles.uploadDocumentParent}>
          <Image
            style={styles.uploadDocumentIcon}
            contentFit="cover"
            source={require("../assets/uploaddocument.png")}
          />
          <View style={styles.uploadYourImageFileHereParent}>
            <Text style={[styles.uploadYourImage, styles.uploadYourImageTypo]}>
              Upload your audio file here
            </Text>
            <Text
              style={[styles.supportedFormatsMp3, styles.uploadYourImageTypo]}
            >
              Supported formats: MP3, WAV, etc
            </Text>
          </View>
        </View>
      </Pressable>
      <View style={[styles.button, styles.uploadLayout]}>
        <Text style={[styles.next, styles.nextTypo]}>Next</Text>
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
  uploadLayout: {
    width: 335,
    position: "absolute",
  },
  rectangleBorder: {
    borderWidth: 1,
    borderColor: Color.primary30,
    backgroundColor: Color.colorGray_400,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  uploadYourImageTypo: {
    textAlign: "center",
    fontFamily: FontFamily.mobileBodyCopy,
  },
  nextTypo: {
    fontSize: FontSize.mobileH5HeadingComponent_size,
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
  rectangle4: {
    borderStyle: "solid",
    width: 336,
    height: 265,
    left: 0,
    top: 0,
    borderWidth: 1,
    borderColor: Color.primary30,
    backgroundColor: Color.colorGray_400,
    borderRadius: Border.br_mini,
  },
  rectangle41: {
    marginLeft: -152,
    bottom: 16,
    borderStyle: "dashed",
    width: 304,
    height: 233,
    left: "50%",
  },
  uploadDocumentIcon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  uploadYourImage: {
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    color: Color.white,
    lineHeight: 24,
    textAlign: "center",
    fontFamily: FontFamily.mobileBodyCopy,
  },
  supportedFormatsMp3: {
    fontSize: FontSize.btnSmallNormal_size,
    lineHeight: 16,
    color: Color.primary10,
    marginTop: 4,
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
    left: "50%",
    position: "absolute",
  },
  upload: {
    top: 98,
    height: 264,
    left: 20,
  },
  next: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH3HeadingPage,
    color: Color.primary,
  },
  button: {
    marginLeft: -167.5,
    bottom: 24,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    opacity: 0.5,
    alignItems: "center",
    left: "50%",
  },
  headerChild: {
    backgroundColor: Color.colorGray_1600,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  pressable: {
    width: 24,
    height: 24,
    left: 20,
  },
  addSong: {
    marginLeft: -36.5,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    textAlign: "center",
    lineHeight: 24,
    color: Color.white,
    left: "50%",
  },
  uploadMusicsingle: {
    backgroundColor: Color.primary,
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default UploadMusicSingle2;
