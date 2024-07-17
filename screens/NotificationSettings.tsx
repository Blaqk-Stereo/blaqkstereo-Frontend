import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

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
          <View>
            <View style={styles.newRoyaltyPaymentsParent}>
              <Text
                style={[styles.newRoyaltyPayments, styles.getNotifiedWhenTypo]}
              >
                New Royalty Payments:
              </Text>
              <Image
                style={styles.bitoggle2OnIcon}
                contentFit="cover"
                source={require("../assets/bitoggle2on.png")}
              />
            </View>
            <Text style={[styles.getNotifiedWhen, styles.getNotifiedWhenTypo]}>
              Get notified when new royalty payments are processed.
            </Text>
          </View>
          <View style={styles.frameChild} />
          <View style={styles.frameContainer}>
            <View style={styles.newRoyaltyPaymentsParent}>
              <Text
                style={[styles.newRoyaltyPayments, styles.getNotifiedWhenTypo]}
              >
                Uploads and Approvals
              </Text>
              <Image
                style={styles.bitoggle2OnIcon}
                contentFit="cover"
                source={require("../assets/bitoggle2off.png")}
              />
            </View>
            <Text style={[styles.getNotifiedWhen, styles.getNotifiedWhenTypo]}>
              Get notified when your uploads are approved or rejected.
            </Text>
          </View>
          <View style={styles.frameChild} />
          <View style={styles.frameContainer}>
            <View style={styles.newRoyaltyPaymentsParent}>
              <Text
                style={[styles.newRoyaltyPayments, styles.getNotifiedWhenTypo]}
              >
                Subscription Updates
              </Text>
              <Image
                style={styles.bitoggle2OnIcon}
                contentFit="cover"
                source={require("../assets/bitoggle2on.png")}
              />
            </View>
            <Text style={[styles.getNotifiedWhen, styles.getNotifiedWhenTypo]}>
              Stay informed about upcoming subscription renewals.
            </Text>
          </View>
          <View style={styles.frameChild} />
          <View style={styles.frameContainer}>
            <View style={styles.newRoyaltyPaymentsParent}>
              <Text
                style={[styles.newRoyaltyPayments, styles.getNotifiedWhenTypo]}
              >
                Grants and Loans
              </Text>
              <Image
                style={styles.bitoggle2OnIcon}
                contentFit="cover"
                source={require("../assets/bitoggle2off.png")}
              />
            </View>
            <Text style={[styles.getNotifiedWhen, styles.getNotifiedWhenTypo]}>
              Get notifications about your grant application status and when
              loans are disbursed to your account.
            </Text>
          </View>
          <View style={styles.frameChild} />
          <View style={styles.frameContainer}>
            <View style={styles.newRoyaltyPaymentsParent}>
              <Text
                style={[styles.newRoyaltyPayments, styles.getNotifiedWhenTypo]}
              >
                Community
              </Text>
              <Image
                style={styles.bitoggle2OnIcon}
                contentFit="cover"
                source={require("../assets/bitoggle2off.png")}
              />
            </View>
            <Text style={[styles.getNotifiedWhen, styles.getNotifiedWhenTypo]}>
              Receive messages about community events and webinars.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <View style={styles.parent}>
          <Pressable
            style={styles.pressable}
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
  getNotifiedWhenTypo: {
    textAlign: "left",
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  headerPosition: {
    height: 74,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  customizeYourNotification: {
    color: Color.primary0,
    width: 335,
    textAlign: "center",
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
  },
  newRoyaltyPayments: {
    color: Color.white,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    textAlign: "left",
  },
  bitoggle2OnIcon: {
    width: 38,
    height: 24,
  },
  newRoyaltyPaymentsParent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 335,
  },
  getNotifiedWhen: {
    color: Color.colorGray_1400,
    marginTop: 16,
    width: 335,
    textAlign: "left",
    fontFamily: FontFamily.mobileBodyCopy,
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
  frameContainer: {
    marginTop: 24,
  },
  frameParent: {
    marginTop: 20,
    alignItems: "center",
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
    top: 0,
    height: 24,
    position: "absolute",
  },
  notifications: {
    left: 119,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    top: 0,
    color: Color.white,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 24,
    position: "absolute",
  },
  parent: {
    top: 40,
    left: 20,
    width: 218,
    height: 24,
    position: "absolute",
  },
  notificationSettings: {
    backgroundColor: Color.primary,
    flex: 1,
    height: 886,
  },
});

export default NotificationSettings;
