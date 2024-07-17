import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SearchActiveNotFound = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.searchActiveNotFound, styles.iconLayout]}>
      <View style={styles.notFoundParent}>
        <Image
          style={styles.notFoundIcon}
          contentFit="cover"
          source={require("../assets/notfound.png")}
        />
        <Text style={[styles.notFound, styles.aenerFlexBox]}>Not found</Text>
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Pressable
          style={[styles.pressable, styles.addSongsPosition]}
          onPress={() => navigation.navigate("Discover")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/241.png")}
          />
        </Pressable>
        <View style={[styles.rectangleParent, styles.icon1Transform]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Text style={[styles.aener, styles.aenerFlexBox]}>Aener</Text>
          <Image
            style={[styles.icon1, styles.icon1Transform]}
            contentFit="cover"
            source={require("../assets/7.png")}
          />
        </View>
        <Text style={[styles.addSongs, styles.addSongsPosition]}>
          Add Song(s)
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
  aenerFlexBox: {
    textAlign: "left",
    color: Color.white,
    lineHeight: 24,
  },
  headerPosition: {
    height: 140,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  addSongsPosition: {
    top: 40,
    position: "absolute",
  },
  icon1Transform: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  groupChildLayout: {
    height: 48,
    width: 335,
  },
  notFoundIcon: {
    width: 64,
    height: 64,
    overflow: "hidden",
  },
  notFound: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH3HeadingPage,
    marginTop: 24,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    textAlign: "left",
  },
  notFoundParent: {
    marginTop: -56,
    marginLeft: -38.5,
    top: "50%",
    alignItems: "center",
    left: "50%",
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
    left: 20,
    width: 24,
    height: 24,
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_1800,
    left: 0,
    top: 0,
    width: 335,
    position: "absolute",
  },
  aener: {
    top: 12,
    left: 44,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    fontFamily: FontFamily.mobileBodyCopy,
    textAlign: "left",
    position: "absolute",
  },
  icon1: {
    top: 14,
    left: 16,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  rectangleParent: {
    top: 80,
    left: 355,
    height: 48,
    width: 335,
  },
  addSongs: {
    marginLeft: -45.5,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    textAlign: "center",
    color: Color.white,
    lineHeight: 24,
    top: 40,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    left: "50%",
  },
  searchActiveNotFound: {
    backgroundColor: Color.primary,
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default SearchActiveNotFound;
