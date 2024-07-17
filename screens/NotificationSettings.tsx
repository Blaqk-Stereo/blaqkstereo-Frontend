import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import FrameComponent4 from "../components/FrameComponent4";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const NotificationSettings = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.notificationSettings, styles.iconLayout]}>
      <View style={styles.customizeYourNotificationPrParent}>
        <Text style={styles.customizeYourNotification}>
          Customize your notification preferences to stay in the loop with Blaqk
          Stereo
        </Text>
        <View style={styles.frameParent}>
          <FrameComponent4
            newRoyaltyPayments="New Royalty Payments:"
            bitoggle2On={require("../assets/bitoggle2on.png")}
            getNotifiedWhenNewRoyalty="Get notified when new royalty payments are processed."
          />
          <View style={styles.frameChild} />
          <FrameComponent4
            newRoyaltyPayments="Uploads and Approvals"
            bitoggle2On={require("../assets/bitoggle2off.png")}
            getNotifiedWhenNewRoyalty="Get notified when your uploads are approved or rejected."
            getNotifiedWhenMarginTop={24}
          />
          <View style={styles.frameChild} />
          <FrameComponent4
            newRoyaltyPayments="Subscription Updates"
            bitoggle2On={require("../assets/bitoggle2on.png")}
            getNotifiedWhenNewRoyalty="Stay informed about upcoming subscription renewals."
            getNotifiedWhenMarginTop={24}
          />
          <View style={styles.frameChild} />
          <FrameComponent4
            newRoyaltyPayments="Grants and Loans"
            bitoggle2On={require("../assets/bitoggle2off.png")}
            getNotifiedWhenNewRoyalty="Get notifications about your grant application status and when loans are disbursed to your account."
            getNotifiedWhenMarginTop={24}
          />
          <View style={styles.frameChild} />
          <FrameComponent4
            newRoyaltyPayments="Community"
            bitoggle2On={require("../assets/bitoggle2off.png")}
            getNotifiedWhenNewRoyalty="Receive messages about community events and webinars."
            getNotifiedWhenMarginTop={24}
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
              style={[styles.icon, styles.iconLayout]}
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
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  headerPosition: {
    height: 74,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  parentLayout: {
    height: 24,
    position: "absolute",
  },
  customizeYourNotification: {
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.primary0,
    width: 335,
    textAlign: "center",
    lineHeight: 24,
  },
  frameChild: {
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderTopWidth: 1,
    width: 336,
    height: 1,
    marginTop: 24,
  },
  frameParent: {
    alignItems: "center",
    marginTop: 20,
  },
  customizeYourNotificationPrParent: {
    marginLeft: -167.5,
    top: 86,
    left: "50%",
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.colorGray_1300,
  },
  icon: {
    height: "100%",
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
    color: Color.white,
    top: 0,
    textAlign: "center",
    lineHeight: 24,
    position: "absolute",
  },
  parent: {
    top: 40,
    left: 20,
    width: 218,
  },
  notificationSettings: {
    backgroundColor: Color.primary,
    flex: 1,
    height: 886,
  },
});

export default NotificationSettings;