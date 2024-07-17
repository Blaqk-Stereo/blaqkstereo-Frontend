import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import LogOut from "../components/LogOut";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const Others = () => {
  const [logOutTextVisible, setLogOutTextVisible] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const openLogOutText = useCallback(() => {
    setLogOutTextVisible(true);
  }, []);

  const closeLogOutText = useCallback(() => {
    setLogOutTextVisible(false);
  }, []);

  return (
    <>
      <View style={styles.others}>
        <View style={styles.frameParent}>
          <Pressable
            style={styles.frameGroup}
            onPress={() => navigation.navigate("Profile")}
          >
            <View
              style={[styles.vuesaxbulkuserEditParent, styles.parentPosition]}
            >
              <Image
                style={[styles.vuesaxbulkuserEditIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/vuesaxbulkuseredit.png")}
              />
              <Text style={[styles.yourProfile, styles.v10FlexBox]}>
                Your Profile
              </Text>
            </View>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/arrowright.png")}
            />
          </Pressable>
          <Pressable
            style={styles.frameContainer}
            onPress={() => navigation.navigate("Languages")}
          >
            <View
              style={[styles.vuesaxbulkuserEditParent, styles.parentPosition]}
            >
              <Image
                style={[styles.vuesaxbulkuserEditIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/bank.png")}
              />
              <Text style={[styles.yourProfile, styles.v10FlexBox]}>
                Withdrawal Account
              </Text>
            </View>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/arrowright.png")}
            />
          </Pressable>
          <Pressable
            style={styles.frameContainer}
            onPress={() => navigation.navigate("SubscribedPlus")}
          >
            <View
              style={[styles.vuesaxbulkuserEditParent, styles.parentPosition]}
            >
              <Image
                style={[styles.fluentpremium28FilledIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/fluentpremium28filled.png")}
              />
              <Text style={[styles.yourProfile, styles.v10FlexBox]}>
                Subscription
              </Text>
            </View>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/arrowright.png")}
            />
          </Pressable>
          <Pressable
            style={styles.frameContainer}
            onPress={() => navigation.navigate("NewUserStreamingPlatformsS")}
          >
            <View
              style={[styles.vuesaxbulkuserEditParent, styles.parentPosition]}
            >
              <Image
                style={[styles.vuesaxbulkuserEditIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/share.png")}
              />
              <Text style={[styles.yourProfile, styles.v10FlexBox]}>
                Distribution Channels
              </Text>
            </View>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/arrowright.png")}
            />
          </Pressable>
          <Pressable
            style={styles.frameParent2}
            onPress={() => navigation.navigate("ChangePassword")}
          >
            <View
              style={[styles.vuesaxbulkuserEditParent, styles.parentPosition]}
            >
              <Image
                style={[styles.vuesaxbulkuserEditIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/lockcircle.png")}
              />
              <Text style={[styles.yourProfile, styles.v10FlexBox]}>
                Change Password
              </Text>
            </View>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/arrowright.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.frameParent3, styles.iconsFlexBox]}
            onPress={() => navigation.navigate("NotificationSettings")}
          >
            <View
              style={[styles.vuesaxbulkuserEditParent, styles.parentPosition]}
            >
              <Image
                style={[styles.vuesaxbulkuserEditIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/notification.png")}
              />
              <Text style={[styles.yourProfile, styles.v10FlexBox]}>
                Notification Settings
              </Text>
            </View>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/arrowright.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.frameParent3, styles.iconsFlexBox]}
            onPress={() => navigation.navigate("PrivacyPolicy")}
          >
            <View
              style={[styles.vuesaxbulkuserEditParent, styles.parentPosition]}
            >
              <Image
                style={[styles.vuesaxbulkuserEditIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/documenttext.png")}
              />
              <Text style={[styles.yourProfile, styles.v10FlexBox]}>
                Privacy Policy
              </Text>
            </View>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/arrowright.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.frameParent3, styles.iconsFlexBox]}
            onPress={() => navigation.navigate("FAQs")}
          >
            <View style={styles.parentPosition}>
              <Image
                style={[styles.vuesaxbulkuserEditIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/messagequestion.png")}
              />
              <Text style={[styles.yourProfile, styles.v10FlexBox]}>FAQs</Text>
            </View>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/arrowright.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.frameParent3, styles.iconsFlexBox]}
            onPress={() => navigation.navigate("AboutApp")}
          >
            <View
              style={[styles.vuesaxbulkuserEditParent, styles.parentPosition]}
            >
              <Image
                style={[styles.vuesaxbulkuserEditIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/devices.png")}
              />
              <Text style={[styles.yourProfile, styles.v10FlexBox]}>
                About app
              </Text>
            </View>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/arrowright.png")}
            />
          </Pressable>
          <Pressable style={styles.logOut} onPress={openLogOutText}>
            <Text style={[styles.logOut1, styles.v10FlexBox]}>Log out</Text>
          </Pressable>
        </View>
        <View style={styles.blaqkStereowhite300x1Parent}>
          <Image
            style={styles.blaqkStereowhite300x1}
            contentFit="cover"
            source={require("../assets/blaqk-stereowhite300x-13.png")}
          />
          <Text style={[styles.v10, styles.v10FlexBox]}>v1.0</Text>
        </View>
        <View style={[styles.othersChild, styles.navLayout]} />
        <Image
          style={[styles.othersItem, styles.accountPosition]}
          contentFit="cover"
          source={require("../assets/frame-1000000795.png")}
        />
        <Text style={[styles.account, styles.accountTypo]}>Account</Text>
        <View style={[styles.nav, styles.navLayout]}>
          <View style={[styles.navChild, styles.iconLayout]} />
          <View style={[styles.icons, styles.iconsFlexBox]}>
            <Pressable
              style={styles.more}
              onPress={() => navigation.navigate("Others")}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/more1.png")}
              />
            </Pressable>
            <Pressable
              style={styles.more}
              onPress={() => navigation.navigate("WalletinCUSD")}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/vuesaxboldemptywallet.png")}
              />
            </Pressable>
            <Pressable
              style={styles.musicSquareAdd}
              onPress={() => navigation.navigate("UploadYourContent")}
            >
              <Text style={[styles.uploadMusic, styles.accountTypo]}>
                Upload Music
              </Text>
            </Pressable>
            <Pressable
              style={styles.more}
              onPress={() => navigation.navigate("Insights")}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/chartsquare.png")}
              />
            </Pressable>
            <Pressable
              style={styles.more}
              onPress={() => navigation.navigate("Discover")}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/musicplaylist1.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={logOutTextVisible}>
        <View style={styles.logOutTextOverlay}>
          <Pressable style={styles.logOutTextBg} onPress={closeLogOutText} />
          <LogOut onClose={closeLogOutText} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    zIndex: 0,
    flexDirection: "row",
  },
  iconLayout1: {
    width: 24,
    height: 24,
  },
  v10FlexBox: {
    textAlign: "left",
    lineHeight: 24,
  },
  iconsFlexBox: {
    justifyContent: "space-between",
    width: 335,
  },
  navLayout: {
    width: 375,
    position: "absolute",
  },
  accountPosition: {
    top: 48,
    position: "absolute",
  },
  accountTypo: {
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    textAlign: "left",
    color: Color.white,
    lineHeight: 24,
  },
  iconLayout: {
    height: "100%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: "100%",
  },
  vuesaxbulkuserEditIcon: {
    height: 24,
  },
  yourProfile: {
    marginLeft: 16,
    color: Color.white,
    textAlign: "left",
    lineHeight: 24,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    fontSize: FontSize.mobileH5HeadingComponent_size,
  },
  vuesaxbulkuserEditParent: {
    alignItems: "center",
  },
  arrowRightIcon: {
    right: 0,
    zIndex: 1,
    top: 0,
    height: 24,
    position: "absolute",
  },
  frameGroup: {
    width: 335,
  },
  frameContainer: {
    marginTop: 54,
    flexDirection: "row",
    width: 335,
    alignItems: "center",
  },
  fluentpremium28FilledIcon: {
    height: 24,
    overflow: "hidden",
  },
  frameParent2: {
    marginTop: 54,
    width: 335,
  },
  frameParent3: {
    marginTop: 54,
    height: 24,
  },
  logOutTextOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  logOutTextBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  logOut1: {
    color: Color.errorDefault,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    fontSize: FontSize.mobileH5HeadingComponent_size,
    textAlign: "left",
    lineHeight: 24,
  },
  logOut: {
    marginTop: 54,
  },
  frameParent: {
    top: 120,
    alignItems: "center",
    left: 20,
    position: "absolute",
  },
  blaqkStereowhite300x1: {
    width: 66,
    height: 32,
    overflow: "hidden",
  },
  v10: {
    fontFamily: FontFamily.mobileBodyCopy,
    marginTop: 4,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    color: Color.white,
    textAlign: "left",
    lineHeight: 24,
  },
  blaqkStereowhite300x1Parent: {
    marginLeft: -33.3,
    bottom: 96,
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  othersChild: {
    left: 0,
    backgroundColor: Color.colorGray_1300,
    height: 74,
    top: 0,
  },
  othersItem: {
    right: 20,
    height: 24,
    width: 24,
  },
  account: {
    fontSize: FontSize.mobileH4HeadingSection_size,
    top: 48,
    position: "absolute",
    left: 20,
  },
  navChild: {
    top: "100%",
    right: "-100%",
    bottom: "-100%",
    left: "100%",
    backgroundColor: Color.colorGray_1500,
    position: "absolute",
  },
  more: {
    width: 28,
    height: 28,
  },
  uploadMusic: {
    fontSize: FontSize.mobileH6HeadingSubHead_size,
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
    transform: [
      {
        rotate: "180deg",
      },
    ],
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.primary,
  },
  icons: {
    marginLeft: -167.5,
    bottom: 19,
    alignItems: "flex-end",
    left: "50%",
    flexDirection: "row",
    position: "absolute",
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
    left: "50%",
  },
  others: {
    flex: 1,
    height: 1042,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.primary,
  },
});

export default Others;
