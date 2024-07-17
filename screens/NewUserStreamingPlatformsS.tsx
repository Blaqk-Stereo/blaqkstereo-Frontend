import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const NewUserStreamingPlatformsS = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.newUserstreamingPlatformsS, styles.iconLayout]}>
      <View style={[styles.frameParent, styles.pressablePosition]}>
        <View>
          <Text style={[styles.selectDistributionChannels, styles.textFlexBox]}>
            Select Distribution Channels
          </Text>
          <Text style={[styles.blaqkStereoMusic, styles.musicSpaceBlock]}>
            Blaqk Stereo Music App is included by default. You can go to
            ‘Settings’ to manage your selections at any time.
          </Text>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.groupParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-359239.png")}
            />
            <Text style={[styles.amazonMusic, styles.musicSpaceBlock]}>
              Amazon Music
            </Text>
          </View>
          <Pressable
            style={styles.groupParent}
            onPress={() => navigation.navigate("StreamingPlatformsSelection")}
          >
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-3592310.png")}
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
              source={require("../assets/group-3592311.png")}
            />
            <Text style={[styles.amazonMusic, styles.musicSpaceBlock]}>
              Spotify
            </Text>
          </View>
          <View style={styles.groupParent1}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-3592312.png")}
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
              source={require("../assets/group-359237.png")}
            />
            <Text style={[styles.amazonMusic, styles.musicSpaceBlock]}>
              Tidal
            </Text>
          </View>
          <View style={styles.groupParent1}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-3592313.png")}
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
        <Pressable
          style={[styles.button, styles.buttonPosition]}
          onPress={() => navigation.navigate("PasswordChangeSuccessful")}
        >
          <Text style={styles.save}>Save</Text>
        </Pressable>
        <View style={[styles.groupParent7, styles.buttonPosition]}>
          <Image
            style={styles.frameChildLayout}
            contentFit="cover"
            source={require("../assets/group-35924.png")}
          />
          <Image
            style={[styles.frameChild7, styles.frameChildLayout]}
            contentFit="cover"
            source={require("../assets/group-359241.png")}
          />
          <Image
            style={[styles.frameChild7, styles.frameChildLayout]}
            contentFit="cover"
            source={require("../assets/group-359242.png")}
          />
          <View style={[styles.frameChild7, styles.frameChildLayout]}>
            <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("../assets/ellipse-2089.png")}
            />
            <Image
              style={[styles.simpleIconsapplemusic, styles.textPosition]}
              contentFit="cover"
              source={require("../assets/simpleiconsapplemusic.png")}
            />
            <Image
              style={[styles.groupInner, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-2095.png")}
            />
            <Text style={[styles.text, styles.textPosition]}>+2</Text>
          </View>
        </View>
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Pressable
          style={[styles.pressable, styles.pressablePosition]}
          onPress={() => navigation.navigate("DashboardForNewUsers")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/241.png")}
          />
        </Pressable>
        <View style={[styles.dontAskMeAgainParent, styles.textPosition]}>
          <Text style={styles.dontAskMe}>Don’t ask me again</Text>
          <Image
            style={styles.checkboxfselectedIcon}
            contentFit="cover"
            source={require("../assets/checkboxfselected2.png")}
          />
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
  pressablePosition: {
    left: 20,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.white,
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
    position: "absolute",
    flexDirection: "row",
  },
  frameChildLayout: {
    height: 28,
    width: 28,
  },
  textPosition: {
    top: "50%",
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
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    textAlign: "left",
  },
  blaqkStereoMusic: {
    color: Color.primary0,
    width: 335,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    marginTop: 4,
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
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  button: {
    bottom: 44,
    left: 281,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_8xs,
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild7: {
    marginLeft: -14,
  },
  groupItem: {
    top: 0,
    height: 28,
    width: 28,
    left: 0,
    position: "absolute",
  },
  simpleIconsapplemusic: {
    marginTop: -5.6,
    marginLeft: -5.5,
    borderRadius: Border.br_3xs,
    width: 11,
    height: 11,
    left: "50%",
    overflow: "hidden",
  },
  groupInner: {
    left: 0,
    bottom: 0,
    width: 28,
    position: "absolute",
  },
  text: {
    marginTop: -6,
    marginLeft: -6,
    fontSize: FontSize.size_3xs,
    fontWeight: "700",
    fontFamily: FontFamily.mobileH1HeadingDisplay,
    left: "50%",
    textAlign: "left",
    color: Color.white,
  },
  groupParent7: {
    marginLeft: -34.5,
    top: 19,
    left: "50%",
    flexDirection: "row",
  },
  headerChild: {
    backgroundColor: Color.colorGray_1600,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
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
    right: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  newUserstreamingPlatformsS: {
    backgroundColor: Color.colorGray_500,
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default NewUserStreamingPlatformsS;