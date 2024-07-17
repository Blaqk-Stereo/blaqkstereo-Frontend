import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Color, Padding } from "../GlobalStyles";

const ProfileAvatars = () => {
  return (
    <View style={styles.profileAvatars}>
      <View style={styles.ellipseParent}>
        <Image
          style={styles.frameLayout}
          contentFit="cover"
          source={require("../assets/ellipse-2101.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2102.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2104.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2106.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-21011.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2105.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2109.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2103.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2108.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 120,
    width: 120,
  },
  frameItem: {
    marginLeft: 76,
  },
  ellipseParent: {
    width: 316,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  profileAvatars: {
    backgroundColor: Color.primary,
    padding: Padding.p_xl,
  },
});

export default ProfileAvatars;
