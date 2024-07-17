import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Splash = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.splash}
      onPress={() => navigation.navigate("Welcome")}
    >
      <Image
        style={[styles.blaqkStereowhite300x1, styles.lineParentPosition]}
        contentFit="cover"
        source={require("../assets/blaqk-stereowhite300x-1.png")}
      />
      <View style={[styles.lineParent, styles.lineParentPosition]}>
        <View style={styles.frameLayout} />
        <Text style={styles.forArtists}>For Artists</Text>
        <View style={[styles.frameItem, styles.frameLayout]} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  lineParentPosition: {
    left: "50%",
    position: "absolute",
  },
  frameLayout: {
    opacity: 0.3,
    height: 1,
    width: 119,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: Color.secondaryDefault,
    borderStyle: "dashed",
  },
  blaqkStereowhite300x1: {
    marginTop: -47,
    marginLeft: -63.5,
    top: "50%",
    width: 128,
    height: 62,
    overflow: "hidden",
  },
  forArtists: {
    fontSize: FontSize.mobileH5HeadingComponent_size,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    color: Color.gray0White,
    textAlign: "center",
    width: 83,
    marginLeft: 8,
  },
  frameItem: {
    marginLeft: 8,
  },
  lineParent: {
    marginLeft: -167.5,
    top: 764,
    flexDirection: "row",
    alignItems: "center",
  },
  splash: {
    backgroundColor: Color.primary,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Splash;