import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const StatsForNewUsers = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.statsForNewUsers}>
      <View style={styles.fileEmptyParent}>
        <Image
          style={styles.fileEmptyIcon}
          contentFit="cover"
          source={require("../assets/fileempty.png")}
        />
        <View style={styles.noDataAvailableParent}>
          <Text style={[styles.noDataAvailable, styles.allStoresClr]}>
            No Data Available
          </Text>
          <Text style={[styles.startUploadingYour, styles.buttonLayout1]}>
            Start uploading your music to song your performance and earnings!
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
          <Image
            style={[styles.chartSquareIcon, styles.moreLayout]}
            contentFit="cover"
            source={require("../assets/chartsquare1.png")}
          />
          <Pressable
            style={styles.moreLayout}
            onPress={() => navigation.navigate("DashboardForNewUsers")}
          >
            <Image
              style={[styles.icon2, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/musicplaylist1.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Text style={[styles.yourInsights, styles.yourInsightsPosition]}>
          Your Insights
        </Text>
        <Pressable
          style={[styles.notification, styles.yourInsightsPosition]}
          onPress={() => navigation.navigate("NotificationsForNewUsers")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/notification2.png")}
          />
        </Pressable>
        <View style={[styles.frameParent, styles.iconsPosition]}>
          <View style={styles.buttonFlexBox}>
            <Text style={[styles.allStores, styles.thisWeekTypo]}>
              All Stores
            </Text>
            <Image
              style={styles.arrowRightIcon}
              contentFit="cover"
              source={require("../assets/arrowright2.png")}
            />
          </View>
          <View style={styles.buttonFlexBox}>
            <Text style={[styles.thisWeek, styles.thisWeekTypo]}>
              This week
            </Text>
            <Image
              style={styles.arrowRightIcon}
              contentFit="cover"
              source={require("../assets/arrowright3.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  allStoresClr: {
    color: Color.white,
    textAlign: "left",
  },
  buttonLayout1: {
    width: 303,
    justifyContent: "center",
  },
  buttonFlexBox: {
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
  iconsPosition: {
    justifyContent: "space-between",
    width: 335,
    marginLeft: -167.5,
    left: "50%",
    flexDirection: "row",
    position: "absolute",
  },
  moreLayout: {
    height: 28,
    width: 28,
  },
  headerPosition: {
    height: 124,
    left: 0,
    top: 0,
    width: 375,
    position: "absolute",
  },
  yourInsightsPosition: {
    top: 48,
    position: "absolute",
  },
  thisWeekTypo: {
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
  },
  fileEmptyIcon: {
    width: 120,
    height: 120,
    overflow: "hidden",
  },
  noDataAvailable: {
    fontSize: FontSize.mobileH3HeadingPage_size,
    letterSpacing: -1,
    lineHeight: 34,
    textAlign: "left",
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  startUploadingYour: {
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.primary0,
    display: "flex",
    marginTop: 8,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    alignItems: "center",
  },
  noDataAvailableParent: {
    marginTop: 20,
    alignItems: "center",
  },
  uploadMusic: {
    color: Color.primary,
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  button: {
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_99xl,
    paddingVertical: Padding.p_xs,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    width: 303,
    justifyContent: "center",
    marginTop: 20,
  },
  fileEmptyParent: {
    marginTop: -149,
    top: "50%",
    left: 36,
    alignItems: "center",
    position: "absolute",
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
    color: Color.white,
    fontFamily: FontFamily.mobileH3HeadingPage,
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
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    backgroundColor: Color.primary,
  },
  chartSquareIcon: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  icon2: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  icons: {
    bottom: 19,
    alignItems: "flex-end",
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
  yourInsights: {
    left: 20,
    fontSize: FontSize.mobileH4HeadingSection_size,
    lineHeight: 24,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  notification: {
    left: 331,
    width: 24,
    height: 24,
  },
  allStores: {
    fontSize: FontSize.mobileH5HeadingComponent_size,
    lineHeight: 24,
    textAlign: "left",
    color: Color.white,
  },
  arrowRightIcon: {
    width: 16,
    height: 16,
    marginLeft: 4,
  },
  thisWeek: {
    fontSize: FontSize.btnSmallNormal_size,
    color: Color.colorGray_1100,
    textAlign: "center",
  },
  frameParent: {
    top: 92,
    alignItems: "center",
  },
  statsForNewUsers: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.primary,
  },
});

export default StatsForNewUsers;
