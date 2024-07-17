import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Success = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.success}>
      <View style={styles.frameParent}>
        <View style={styles.group2Parent}>
          <View style={styles.group2Parent}>
            <Text style={styles.yourNftIs}>Upload Successful!</Text>
            <Text style={[styles.oreYouMit, styles.oreYouMitSpaceBlock]}>
              Your music has been successfully uploaded and will be distributed
              to all major streaming platforms.
            </Text>
          </View>
          <View style={styles.card}>
            <View style={styles.group2Parent}>
              <Image
                style={styles.blaqkStereowhite300x1}
                contentFit="cover"
                source={require("../assets/blaqk-stereowhite300x-14.png")}
              />
              <Text
                style={[styles.nowOnBlaqkContainer, styles.oreYouMitSpaceBlock]}
              >
                <Text style={styles.now}>{`NOW
`}</Text>
                <Text style={styles.onBlaqkStereo}>ON BLAQK STEREO!</Text>
              </Text>
            </View>
            <Image
              style={styles.rectangle2Icon}
              contentFit="cover"
              source={require("../assets/rectangle2.png")}
            />
            <View style={styles.titleParent}>
              <Text style={styles.title}>Rodo</Text>
              <Text style={styles.title1}>
                Janey June Feat. Davido, Wizkid, Tiwa Savage, Adekunle Gold.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.frameGroup}>
          <View style={[styles.viewMusicWrapper, styles.buttonFlexBox]}>
            <Text style={[styles.viewMusic, styles.shareTypo]}>View music</Text>
          </View>
          <View style={[styles.button, styles.buttonFlexBox]}>
            <Text style={[styles.share, styles.shareTypo]}>Share</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.closeCircle}
        onPress={() => navigation.navigate("Discover")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/closecircle.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  oreYouMitSpaceBlock: {
    marginTop: 4,
    textAlign: "center",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_sm,
    flexDirection: "row",
    width: 335,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
  },
  shareTypo: {
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  yourNftIs: {
    letterSpacing: -1,
    lineHeight: 34,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.mobileH1HeadingDisplay,
    fontWeight: "700",
    fontSize: FontSize.mobileH2HeadingDefault_size,
  },
  oreYouMit: {
    color: Color.primary10,
    width: 314,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    marginTop: 4,
    textAlign: "center",
  },
  group2Parent: {
    alignItems: "center",
  },
  blaqkStereowhite300x1: {
    width: 41,
    height: 20,
    overflow: "hidden",
  },
  now: {
    fontSize: FontSize.mobileH1HeadingDisplay_size,
  },
  onBlaqkStereo: {
    fontSize: FontSize.mobileH2HeadingDefault_size,
  },
  nowOnBlaqkContainer: {
    color: Color.white,
    marginTop: 4,
    textAlign: "center",
    fontFamily: FontFamily.mobileH1HeadingDisplay,
    fontWeight: "700",
  },
  rectangle2Icon: {
    borderRadius: Border.br_mini,
    width: 311,
    height: 238,
    marginTop: 12,
  },
  title: {
    fontSize: FontSize.mobileH4HeadingSection_size,
    color: Color.colorTextPrimary,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    lineHeight: 24,
    textAlign: "left",
  },
  title1: {
    fontSize: FontSize.btnSmallNormal_size,
    lineHeight: 20,
    display: "flex",
    alignItems: "flex-end",
    width: 303,
    justifyContent: "center",
    color: Color.colorTextPrimary,
    marginTop: 4,
    textAlign: "center",
    fontFamily: FontFamily.mobileBodyCopy,
  },
  titleParent: {
    marginTop: 12,
    alignItems: "center",
  },
  card: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorGray_400,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_base,
    marginTop: 16,
    alignItems: "center",
  },
  viewMusic: {
    color: Color.primary,
  },
  viewMusicWrapper: {
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_81xl,
  },
  share: {
    color: Color.white,
  },
  button: {
    borderStyle: "solid",
    borderColor: Color.white,
    borderWidth: 1,
    paddingHorizontal: Padding.p_99xl,
    marginTop: 16,
  },
  frameGroup: {
    marginTop: 24,
    alignItems: "center",
  },
  frameParent: {
    marginTop: -358,
    marginLeft: -167.5,
    top: "50%",
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  closeCircle: {
    top: 24,
    right: 20,
    width: 40,
    height: 40,
    position: "absolute",
  },
  success: {
    backgroundColor: Color.primary,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Success;
