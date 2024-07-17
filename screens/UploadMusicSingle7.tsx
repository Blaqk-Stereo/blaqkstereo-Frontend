import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import InputField2 from "../components/InputField2";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const UploadMusicSingle7 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.uploadMusicsingle}>
      <Pressable
        style={styles.inputFieldParent}
        onPress={() => navigation.navigate("UploadMusicSingle10")}
      >
        <InputField2
          blinker="Enter the title of this song"
          eye={require("../assets/eye4.png")}
          blinkerMarginTop="unset"
        />
        <View style={styles.upload}>
          <View style={styles.rectangle4} />
          <View style={[styles.galleryAddParent, styles.noPosition]}>
            <Image
              style={styles.galleryAddIcon}
              contentFit="cover"
              source={require("../assets/galleryadd.png")}
            />
            <View style={styles.uploadYourImageFileHereParent}>
              <Text style={[styles.uploadYourImage, styles.sizeShouldBeTypo]}>
                Upload cover artwork
              </Text>
              <Text style={[styles.sizeShouldBe, styles.sizeShouldBeTypo]}>
                Size should be at least 3000x3000px
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.inputField}>
          <View style={[styles.inputFieldChild, styles.vectorIconPosition]} />
          <Text style={styles.blinker}>Add featured artists</Text>
          <Text style={[styles.blinker1, styles.blinkerTypo]}>
            (Use a comma to add new artist)
          </Text>
        </View>
        <View style={styles.inputField}>
          <View style={[styles.inputFieldChild, styles.vectorIconPosition]} />
          <Text style={styles.blinker}>Enter IRSC Code</Text>
          <Text style={[styles.blinker3, styles.blinkerTypo]}>
            (If available)
          </Text>
        </View>
        <View
          style={[styles.containsExplicitContentParent, styles.buttonFlexBox]}
        >
          <Text style={styles.containsExplicitContent}>
            Contains explicit content?
          </Text>
          <View style={styles.toggle}>
            <Image
              style={[styles.vectorIcon, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
            <Image
              style={[styles.vectorIcon1, styles.pressableLayout]}
              contentFit="cover"
              source={require("../assets/vector2.png")}
            />
            <Text style={[styles.no, styles.noTypo]}>No</Text>
          </View>
        </View>
      </Pressable>
      <View style={[styles.button, styles.buttonFlexBox]}>
        <Text style={[styles.next, styles.nextTypo]}>Next</Text>
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Pressable
          style={[styles.pressable, styles.addSongPosition]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
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
  noPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  sizeShouldBeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.mobileBodyCopy,
  },
  vectorIconPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  blinkerTypo: {
    fontSize: FontSize.size_3xs,
    marginTop: -5,
    textAlign: "left",
    color: Color.primary0,
    fontFamily: FontFamily.mobileBodyCopy,
    top: "50%",
    position: "absolute",
  },
  buttonFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    width: 335,
  },
  pressableLayout: {
    height: 24,
    width: 24,
  },
  noTypo: {
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
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
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGray_400,
    left: 0,
    top: 0,
    height: 264,
    width: 335,
    position: "absolute",
  },
  galleryAddIcon: {
    width: 32,
    height: 32,
  },
  uploadYourImage: {
    color: Color.white,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
  },
  sizeShouldBe: {
    lineHeight: 16,
    color: Color.primary10,
    marginTop: 4,
    fontSize: FontSize.btnSmallNormal_size,
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
  },
  upload: {
    marginTop: 16,
    height: 264,
    width: 335,
  },
  inputFieldChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGray_400,
  },
  blinker: {
    left: 16,
    textAlign: "left",
    color: Color.primary0,
    marginTop: -12,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    top: "50%",
    position: "absolute",
  },
  blinker1: {
    right: 34,
  },
  inputField: {
    height: 52,
    marginTop: 16,
    width: 335,
  },
  blinker3: {
    right: 152,
  },
  containsExplicitContent: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  vectorIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vectorIcon1: {
    left: 4,
    marginTop: -12,
    width: 24,
    top: "50%",
    position: "absolute",
  },
  no: {
    marginTop: -7,
    marginLeft: 3,
    textAlign: "left",
    fontSize: FontSize.btnSmallNormal_size,
    color: Color.white,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  toggle: {
    width: 70,
    height: 30,
  },
  containsExplicitContentParent: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_300,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    marginTop: 16,
  },
  inputFieldParent: {
    top: 98,
    left: 20,
    position: "absolute",
  },
  next: {
    color: Color.primary,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  button: {
    marginLeft: -167.5,
    bottom: 24,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    opacity: 0.5,
    left: "50%",
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.colorGray_1600,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  pressable: {
    height: 24,
    width: 24,
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
    width: "100%",
  },
});

export default UploadMusicSingle7;