import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Finishing2 = () => {
  return (
    <View style={styles.finishing}>
      <Image
        style={[styles.pulse2Icon, styles.pulse2IconPosition]}
        contentFit="cover"
        source={require("../assets/pulse2.png")}
      />
      <Image
        style={[styles.pulse2Icon, styles.pulse2IconPosition]}
        contentFit="cover"
        source={require("../assets/pulse2.png")}
      />
      <Image
        style={[styles.pulse2Icon, styles.pulse2IconPosition]}
        contentFit="cover"
        source={require("../assets/pulse2.png")}
      />
      <Image
        style={[styles.blaqkStereowhite300x1, styles.pulse2IconPosition]}
        contentFit="cover"
        source={require("../assets/blaqk-stereowhite300x-1111.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pulse2IconPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  pulse2Icon: {
    marginTop: -117,
    marginLeft: -99.5,
    width: 200,
    height: 200,
  },
  blaqkStereowhite300x1: {
    marginTop: -33,
    marginLeft: -33.5,
    width: 66,
    height: 32,
  },
  finishing: {
    backgroundColor: Color.colorGray_500,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Finishing2;
