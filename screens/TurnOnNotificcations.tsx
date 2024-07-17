import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const TurnOnNotificcations = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.turnOnNotificcations}>
      <View style={[styles.groupParent, styles.newToBlaqkPosition]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/group-35940.png")}
        />
        <View style={styles.stayInTheLoopParent}>
          <Text style={styles.stayInThe}>Stay in the loop</Text>
          <Text style={[styles.wouldYouLike, styles.notNow1Typo]}>
            Would you like to turn on notifications to receive important updates
            about your music, earnings, and more?
          </Text>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("DashboardForNewUsers")}
        >
          <Text style={[styles.turnOnNotifications, styles.notNow1Typo]}>
            Turn on notifications
          </Text>
        </Pressable>
        <Pressable
          style={styles.notNow}
          onPress={() => navigation.navigate("DashboardForNewUsers")}
        >
          <Text style={[styles.notNow1, styles.notNow1Typo]}>Not now</Text>
        </Pressable>
      </View>
      <Text style={[styles.newToBlaqk, styles.notNow1Typo]}>
        You can go to ‘Settings’ to manage your notifications at any time.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  newToBlaqkPosition: {
    left: "50%",
    position: "absolute",
  },
  notNow1Typo: {
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  frameChild: {
    width: 283,
    height: 80,
  },
  stayInThe: {
    fontSize: FontSize.mobileH3HeadingPage_size,
    letterSpacing: -1,
    lineHeight: 34,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  wouldYouLike: {
    width: 335,
    fontFamily: FontFamily.mobileBodyCopy,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    color: Color.white,
  },
  stayInTheLoopParent: {
    marginTop: 24,
    alignItems: "center",
  },
  turnOnNotifications: {
    color: Color.primary,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  button: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_99xl,
    paddingVertical: Padding.p_sm,
    width: 335,
    marginTop: 24,
    alignItems: "center",
  },
  notNow1: {
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    color: Color.white,
  },
  notNow: {
    marginTop: 24,
  },
  groupParent: {
    marginTop: -166.5,
    marginLeft: -167.5,
    top: "50%",
    alignItems: "center",
  },
  newToBlaqk: {
    marginLeft: -163.5,
    bottom: 40,
    color: Color.primary10,
    width: 327,
    fontFamily: FontFamily.mobileBodyCopy,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    left: "50%",
    position: "absolute",
  },
  turnOnNotificcations: {
    backgroundColor: Color.colorGray_500,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default TurnOnNotificcations;
