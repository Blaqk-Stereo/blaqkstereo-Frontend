import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Welcome = () => {
  return (
    <View style={styles.welcome}>
      <Image
        style={[styles.music2Icon, styles.music2IconPosition]}
        contentFit="cover"
        source={require("../assets/music-2.png")}
      />
      <View style={[styles.frameParent, styles.music2IconPosition]}>
        <View style={styles.unleashYourMusicToTheWorlParent}>
          <Text style={[styles.unleashYourMusic, styles.yourFlexBox]}>
            Unleash your music to the world!
          </Text>
          <Text style={[styles.startDistributingYour, styles.yourFlexBox]}>
            Start distributing your music, earn royalties, and grow your career
            with Blaqk Stereo.
          </Text>
        </View>
        <View style={styles.progressButton}>
          <View style={styles.buttonfullcircle}>
            <Image
              style={styles.arrowRight}
              contentFit="cover"
              source={require("../assets/arrow--right2.png")}
            />
          </View>
          <Image
            style={[styles.progressButtonChild, styles.progressPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-190.png")}
          />
          <Image
            style={[styles.progressButtonItem, styles.progressPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-191.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  music2IconPosition: {
    position: "absolute",
    left: "50%",
  },
  yourFlexBox: {
    width: 303,
    display: "flex",
    textAlign: "center",
    color: Color.white,
    justifyContent: "center",
    alignItems: "center",
  },
  progressPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  music2Icon: {
    marginLeft: -187.5,
    bottom: 380,
    width: 375,
    height: 375,
    left: "50%",
  },
  unleashYourMusic: {
    fontSize: FontSize.mobileH2HeadingDefault_size,
    letterSpacing: -1,
    lineHeight: 34,
    fontWeight: "700",
    fontFamily: FontFamily.mobileH1HeadingDisplay,
  },
  startDistributingYour: {
    fontSize: FontSize.mobileH3HeadingPage_size,
    lineHeight: 28,
    fontFamily: FontFamily.mobileBodyCopy,
    marginTop: 8,
  },
  unleashYourMusicToTheWorlParent: {
    alignItems: "center",
  },
  arrowRight: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  buttonfullcircle: {
    height: "65.96%",
    width: "65.96%",
    top: "17.02%",
    right: "17.02%",
    bottom: "17.02%",
    left: "17.02%",
    borderRadius: Border.br_65xl,
    backgroundColor: Color.white,
    flexDirection: "row",
    paddingHorizontal: Padding.p_122xl,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  progressButtonChild: {
    height: "100%",
    bottom: "0%",
    left: "0%",
    opacity: 0.08,
    width: "100%",
  },
  progressButtonItem: {
    height: "50%",
    width: "50%",
    bottom: "50%",
    left: "50%",
  },
  progressButton: {
    width: 94,
    height: 94,
    marginTop: 24,
  },
  frameParent: {
    marginLeft: -167.5,
    top: 438,
    borderRadius: 36,
    backgroundColor: "rgba(27, 27, 27, 0.64)",
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 1,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 36,
    alignItems: "center",
    left: "50%",
    overflow: "hidden",
  },
  welcome: {
    backgroundColor: Color.primary,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Welcome;
