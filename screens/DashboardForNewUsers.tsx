import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color, Padding } from "../GlobalStyles";

const DashboardForNewUsers = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.dashboardForNewUsers}>
      <View style={[styles.musicLibraryParent, styles.iconsPosition]}>
        <Image
          style={styles.musicLibraryIcon}
          contentFit="cover"
          source={require("../assets/musiclibrary.png")}
        />
        <View style={styles.noSongsUploadedParent}>
          <Text style={[styles.noSongsUploaded, styles.uploadTypo1]}>
            No Songs Uploaded
          </Text>
          <Text style={[styles.yourMusicLibrary, styles.buttonLayout]}>
            Your music library is empty. Start sharing your talent with the
            world by uploading your songs now.
          </Text>
        </View>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("StreamingPlatformsSelection")}
        >
          <Text style={[styles.uploadMusic, styles.uploadTypo]}>
            Upload Music
          </Text>
        </Pressable>
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
            onPress={() => navigation.navigate("WalletForNewUsers")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vuesaxboldemptywallet2.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.musicSquareAdd, styles.buttonFlexBox]}
            onPress={() => navigation.navigate("StreamingPlatformsSelection")}
          >
            <Text style={[styles.uploadMusic1, styles.uploadTypo]}>
              Upload Music
            </Text>
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
            source={require("../assets/musicplaylist.png")}
          />
        </View>
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Text style={[styles.yourUploads, styles.yourUploadsPosition]}>
          Your Uploads
        </Text>
        <Pressable
          style={[styles.notification, styles.yourUploadsPosition]}
          onPress={() => navigation.navigate("NotificationsForNewUsers")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/notification2.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconsPosition: {
    left: "50%",
    position: "absolute",
  },
  uploadTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
  },
  buttonLayout: {
    width: 303,
    justifyContent: "center",
  },
  buttonFlexBox: {
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    alignItems: "center",
  },
  uploadTypo: {
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    lineHeight: 24,
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
    height: 80,
    left: 0,
    top: 0,
    width: 375,
    position: "absolute",
  },
  yourUploadsPosition: {
    top: 48,
    position: "absolute",
  },
  musicLibraryIcon: {
    width: 120,
    height: 120,
    overflow: "hidden",
  },
  noSongsUploaded: {
    fontSize: FontSize.mobileH3HeadingPage_size,
    letterSpacing: -1,
    lineHeight: 34,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
  },
  yourMusicLibrary: {
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.primary0,
    textAlign: "center",
    display: "flex",
    marginTop: 8,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    alignItems: "center",
  },
  noSongsUploadedParent: {
    marginTop: 20,
    alignItems: "center",
  },
  uploadMusic: {
    color: Color.primary,
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  button: {
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_99xl,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    width: 303,
    justifyContent: "center",
    marginTop: 20,
  },
  musicLibraryParent: {
    marginTop: -161,
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
  uploadMusic1: {
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
    color: Color.white,
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
    borderStyle: "solid",
    borderColor: Color.primary30,
    borderWidth: 2,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    flexDirection: "row",
    backgroundColor: Color.primary,
    borderRadius: Border.br_81xl,
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
    backgroundColor: Color.colorGray_1600,
  },
  yourUploads: {
    left: 20,
    fontSize: FontSize.mobileH4HeadingSection_size,
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
    color: Color.white,
  },
  notification: {
    left: 331,
    width: 24,
    height: 24,
  },
  dashboardForNewUsers: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.primary,
  },
});

export default DashboardForNewUsers;