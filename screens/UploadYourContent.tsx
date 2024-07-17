import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const UploadYourContent = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.uploadYourContent, styles.iconLayout]}>
      <Text style={styles.selectTheType}>
        Select the type of content you want to upload
      </Text>
      <View style={styles.frameParent}>
        <Pressable
          style={[styles.frameGroup, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("UploadYourContent1")}
        >
          <View style={styles.buttonFlexBox}>
            <Image
              style={styles.songIcon}
              contentFit="cover"
              source={require("../assets/song.png")}
            />
            <Text style={[styles.single, styles.singleTypo]}>Single</Text>
          </View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-15.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.frameGroup, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("UploadYourMusic")}
        >
          <View style={styles.buttonFlexBox}>
            <Image
              style={styles.songIcon}
              contentFit="cover"
              source={require("../assets/musicalbum.png")}
            />
            <Text style={[styles.single, styles.singleTypo]}>Album</Text>
          </View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-15.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.frameGroup, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("UploadYourMusic1")}
        >
          <View style={styles.buttonFlexBox}>
            <Image
              style={styles.songIcon}
              contentFit="cover"
              source={require("../assets/newfile.png")}
            />
            <Text style={[styles.single, styles.singleTypo]}>Other</Text>
          </View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-15.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.button, styles.buttonFlexBox]}>
        <Text style={[styles.continue, styles.singleTypo]}>Continue</Text>
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Pressable
          style={[styles.pressable, styles.pressablePosition]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/241.png")}
          />
        </Pressable>
        <Text style={[styles.uploadYourContent1, styles.pressablePosition]}>
          Upload Your Content
        </Text>
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
    flexDirection: "row",
    alignItems: "center",
  },
  singleTypo: {
    textAlign: "left",
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    lineHeight: 24,
  },
  headerPosition: {
    height: 74,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  pressablePosition: {
    top: 40,
    position: "absolute",
  },
  selectTheType: {
    top: 98,
    left: 39,
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.primary0,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    position: "absolute",
  },
  songIcon: {
    width: 48,
    height: 48,
    overflow: "hidden",
  },
  single: {
    marginLeft: 16,
    color: Color.white,
    fontSize: FontSize.mobileH5HeadingComponent_size,
  },
  frameChild: {
    width: 19,
    height: 19,
  },
  frameGroup: {
    borderRadius: Border.br_xs,
    justifyContent: "space-between",
    padding: Padding.p_base,
    width: 335,
    flexDirection: "row",
  },
  frameParent: {
    marginLeft: -167.5,
    top: 146,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  continue: {
    color: Color.primary,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "left",
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  button: {
    top: 736,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    justifyContent: "center",
    paddingHorizontal: Padding.p_99xl,
    paddingVertical: Padding.p_sm,
    opacity: 0.5,
    left: 20,
    width: 335,
    flexDirection: "row",
    position: "absolute",
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
  uploadYourContent1: {
    marginLeft: -78.5,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    color: Color.white,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    left: "50%",
    top: 40,
    textAlign: "center",
    lineHeight: 24,
  },
  uploadYourContent: {
    backgroundColor: Color.primary,
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default UploadYourContent;