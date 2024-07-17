import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const StreamingPlatformsSelection = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.streamingPlatformsSelection, styles.iconLayout]}>
      <View style={[styles.frameParent, styles.pressablePosition]}>
        <View>
          <Text style={styles.selectDistributionChannels}>
            Select Distribution Channels
          </Text>
          <Text style={[styles.blaqkStereoMusic, styles.musicSpaceBlock]}>
            Blaqk Stereo Music App is included by default. You can go to
            ‘Settings’ to manage your selections at any time.
          </Text>
        </View>
        <View style={styles.frameGroup}>
          <Pressable
            style={styles.groupParent}
            onPress={() => navigation.navigate("NewUserStreamingPlatformsS1")}
          >
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-35923.png")}
            />
            <Text style={[styles.amazonMusic, styles.musicSpaceBlock]}>
              Amazon Music
            </Text>
          </Pressable>
          <Pressable
            style={styles.groupParent}
            onPress={() => navigation.navigate("NewUserStreamingPlatformsS1")}
          >
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-359231.png")}
            />
            <Text style={[styles.amazonMusic, styles.musicSpaceBlock]}>
              Apple Music
            </Text>
          </Pressable>
          <View style={styles.groupParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-359232.png")}
            />
            <Text style={[styles.amazonMusic, styles.musicSpaceBlock]}>
              Audiomack
            </Text>
          </View>
          <View style={styles.groupParent1}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-359233.png")}
            />
            <Text style={[styles.amazonMusic, styles.musicSpaceBlock]}>
              Deezer
            </Text>
          </View>
          <View style={styles.groupParent1}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-359234.png")}
            />
            <Text style={[styles.amazonMusic, styles.musicSpaceBlock]}>
              {" "}
              Pandora
            </Text>
          </View>
          <View style={styles.groupParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-3592315.png")}
            />
            <Text style={[styles.amazonMusic, styles.musicSpaceBlock]}>
              Spotify
            </Text>
          </View>
          <View style={styles.groupParent1}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-3592316.png")}
            />
            <Text style={[styles.amazonMusic, styles.musicSpaceBlock]}>
              {" "}
              SoundCloud
            </Text>
          </View>
          <View style={styles.groupParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-359235.png")}
            />
            <Text style={[styles.amazonMusic, styles.musicSpaceBlock]}>
              Tidal
            </Text>
          </View>
          <View style={styles.groupParent1}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-3592317.png")}
            />
            <Text style={[styles.amazonMusic, styles.musicSpaceBlock]}>
              {" "}
              YouTube Music
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View style={[styles.button, styles.buttonPosition]}>
          <Text style={styles.save}>Save</Text>
        </View>
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
        <View style={[styles.dontAskMeAgainParent, styles.buttonPosition]}>
          <Text style={styles.dontAskMe}>Don’t ask me again</Text>
          <Image
            style={styles.checkboxfselectedIcon}
            contentFit="cover"
            source={require("../assets/checkboxfselected1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  pressablePosition: {
    left: 20,
    position: "absolute",
  },
  musicSpaceBlock: {
    marginTop: 4,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
  },
  groupChildPosition: {
    height: 94,
    width: 375,
    left: 0,
    bottom: 0,
    position: "absolute",
  },
  buttonPosition: {
    right: 20,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  headerPosition: {
    height: 74,
    top: 0,
    width: 375,
    left: 0,
    position: "absolute",
  },
  selectDistributionChannels: {
    fontSize: FontSize.mobileH3HeadingPage_size,
    letterSpacing: -1,
    lineHeight: 34,
    textAlign: "left",
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
    color: Color.white,
  },
  blaqkStereoMusic: {
    color: Color.primary0,
    width: 335,
    marginTop: 4,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "left",
  },
  frameChild: {
    width: 100,
    height: 100,
  },
  amazonMusic: {
    fontSize: FontSize.btnSmallNormal_size,
    textAlign: "center",
    marginTop: 4,
    color: Color.white,
  },
  groupParent: {
    alignItems: "center",
  },
  groupParent1: {
    height: 128,
    alignItems: "center",
  },
  frameGroup: {
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 32,
    flexDirection: "row",
    width: 335,
  },
  frameParent: {
    top: 78,
  },
  groupChild: {
    backgroundColor: Color.primary,
  },
  save: {
    color: Color.primary,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "left",
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
  },
  button: {
    bottom: 44,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_8xs,
    opacity: 0.5,
  },
  headerChild: {
    backgroundColor: Color.colorGray_1600,
  },
  icon: {
    height: "100%",
  },
  pressable: {
    top: 40,
    width: 24,
    height: 24,
  },
  dontAskMe: {
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "left",
    color: Color.white,
  },
  checkboxfselectedIcon: {
    width: 16,
    height: 16,
    marginLeft: 4,
  },
  dontAskMeAgainParent: {
    marginTop: 3,
    top: "50%",
  },
  streamingPlatformsSelection: {
    backgroundColor: Color.colorGray_500,
    flex: 1,
    height: 812,
  },
});

export default StreamingPlatformsSelection;