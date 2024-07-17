import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const NotificationsForNewUsers = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.notificationsForNewUsers}>
      <View style={[styles.noBellParent, styles.iconsPosition]}>
        <Image
          style={styles.noBellIcon}
          contentFit="cover"
          source={require("../assets/nobell.png")}
        />
        <View style={styles.noUpdatesYetParent}>
          <Text style={styles.noUpdatesYet}>No Updates Yet</Text>
          <Text style={styles.asSoonAs}>
            As soon as there’s an update for you, we will be sure to notify you.
          </Text>
        </View>
      </View>
      <View style={styles.nav}>
        <View style={[styles.navChild, styles.iconLayout]} />
        <View style={[styles.icons, styles.iconsPosition]}>
          <Pressable
            style={styles.moreLayout}
            onPress={() => navigation.navigate("Others")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/more.png")}
            />
          </Pressable>
          <Pressable
            style={styles.moreLayout}
            onPress={() => navigation.navigate("WalletinCUSD")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vuesaxboldemptywallet2.png")}
            />
          </Pressable>
          <Pressable
            style={styles.musicSquareAdd}
            onPress={() => navigation.navigate("StreamingPlatformsSelection")}
          >
            <Text style={styles.uploadMusic}>Upload Music</Text>
          </Pressable>
          <Pressable
            style={styles.moreLayout}
            onPress={() => navigation.navigate("StatsForNewUsers")}
          >
            <Image
              style={[styles.icon2, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/chartsquare.png")}
            />
          </Pressable>
          <Image
            style={[styles.musicPlaylistIcon, styles.moreLayout]}
            contentFit="cover"
            source={require("../assets/musicplaylist1.png")}
          />
        </View>
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <View style={[styles.parent, styles.parentLayout]}>
          <Pressable
            style={[styles.pressable, styles.parentLayout]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={[styles.icon3, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/241.png")}
            />
          </Pressable>
          <Text style={styles.notifications}>Notifications</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconsPosition: {
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  moreLayout: {
    height: 28,
    width: 28,
  },
  headerPosition: {
    height: 74,
    left: 0,
    top: 0,
    width: 375,
    position: "absolute",
  },
  parentLayout: {
    height: 24,
    position: "absolute",
  },
  noBellIcon: {
    width: 120,
    height: 120,
    overflow: "hidden",
  },
  noUpdatesYet: {
    fontSize: FontSize.mobileH3HeadingPage_size,
    letterSpacing: -1,
    lineHeight: 34,
    textAlign: "left",
    color: Color.gray0White,
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
  },
  asSoonAs: {
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.primary0,
    display: "flex",
    justifyContent: "center",
    width: 303,
    marginTop: 8,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    alignItems: "center",
  },
  noUpdatesYetParent: {
    marginTop: 20,
    alignItems: "center",
  },
  noBellParent: {
    marginTop: -115,
    marginLeft: -151.5,
    top: "50%",
    alignItems: "center",
  },
  navChild: {
    top: "100%",
    right: "-100%",
    bottom: "-100%",
    left: "100%",
    backgroundColor: Color.colorGray_1500,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
    height: "100%",
  },
  icon: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  icon1: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  uploadMusic: {
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "left",
    color: Color.gray0White,
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
  },
  musicSquareAdd: {
    shadowColor: "rgba(255, 255, 255, 0.18)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 24,
    elevation: 24,
    shadowOpacity: 1,
    borderRadius: Border.br_81xl,
    borderStyle: "solid",
    borderColor: Color.primary30,
    borderWidth: 2,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    alignItems: "center",
    backgroundColor: Color.primary,
  },
  icon2: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  musicPlaylistIcon: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  icons: {
    marginLeft: -167.5,
    bottom: 19,
    width: 335,
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  nav: {
    marginLeft: 187.5,
    bottom: 0,
    height: 60,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: 375,
    left: "50%",
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.primary,
  },
  icon3: {
    overflow: "hidden",
  },
  pressable: {
    width: 24,
    left: 0,
    height: 24,
    top: 0,
  },
  notifications: {
    left: 119,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    top: 0,
    textAlign: "center",
    lineHeight: 24,
    color: Color.gray0White,
    position: "absolute",
  },
  parent: {
    top: 40,
    left: 20,
    width: 218,
  },
  notificationsForNewUsers: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.primary,
  },
});

export default NotificationsForNewUsers;