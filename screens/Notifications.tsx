import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Padding, Color, Border } from "../GlobalStyles";

const Notifications = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.notifications, styles.iconLayout]}>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View>
            <View style={styles.directNotificationParent}>
              <Image
                style={[styles.directNotificationIcon, styles.pressableLayout]}
                contentFit="cover"
                source={require("../assets/directnotification.png")}
              />
              <Text style={[styles.newSongAlert, styles.olderTypo]}>
                New Royalty Payment
              </Text>
            </View>
            <Text style={[styles.youveReceivedA, styles.weveCuratedATypo]}>
              You’ve received a new royalty payment of $0.05 for your track
              'Echoes'.
            </Text>
          </View>
          <View style={styles.frameChild} />
          <View style={styles.frameView}>
            <View style={styles.directNotificationParent}>
              <Image
                style={[styles.directNotificationIcon, styles.pressableLayout]}
                contentFit="cover"
                source={require("../assets/directnotification.png")}
              />
              <Text style={[styles.newSongAlert, styles.olderTypo]}>
                Upload Approved
              </Text>
            </View>
            <Text style={[styles.youveReceivedA, styles.weveCuratedATypo]}>
              Your new single 'Sunrise' has been successfully approved and
              distributed to all selected platforms.
            </Text>
          </View>
          <View style={styles.frameChild} />
          <View style={styles.frameView}>
            <View style={styles.directNotificationParent}>
              <Image
                style={[styles.directNotificationIcon, styles.pressableLayout]}
                contentFit="cover"
                source={require("../assets/directnotification.png")}
              />
              <Text style={[styles.newSongAlert, styles.olderTypo]}>
                Subscription Renewal
              </Text>
            </View>
            <Text style={[styles.youveReceivedA, styles.weveCuratedATypo]}>
              Your annual subscription has been successfully renewed. Enjoy
              unlimited uploads for another year!
            </Text>
          </View>
          <View style={styles.frameChild} />
        </View>
        <View style={styles.groupView}>
          <View style={[styles.olderWrapper, styles.wrapperSpaceBlock]}>
            <Text style={[styles.older, styles.olderLayout]}>Older</Text>
          </View>
          <View style={styles.frameParent2}>
            <View>
              <View style={styles.directNotificationParent}>
                <Image
                  style={[
                    styles.directNotificationIcon,
                    styles.pressableLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/directnotification1.png")}
                />
                <Text style={[styles.newSongAlert, styles.olderTypo]}>
                  New Royalty Payment
                </Text>
              </View>
              <Text style={[styles.weveCuratedA, styles.weveCuratedATypo]}>
                You received $0.1 in royalties for 'Autumn Breeze'.
              </Text>
            </View>
            <View style={styles.frameChild} />
            <View style={styles.frameView}>
              <View style={styles.directNotificationParent}>
                <Image
                  style={[
                    styles.directNotificationIcon,
                    styles.pressableLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/directnotification1.png")}
                />
                <Text style={[styles.newSongAlert, styles.olderTypo]}>
                  Platform Update
                </Text>
              </View>
              <Text style={[styles.weveCuratedA, styles.weveCuratedATypo]}>
                We’ve added new distribution channels! Your music can now reach
                even more listeners.
              </Text>
            </View>
            <View style={styles.frameChild} />
            <View style={styles.frameView}>
              <View style={styles.directNotificationParent}>
                <Image
                  style={[
                    styles.directNotificationIcon,
                    styles.pressableLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/directnotification1.png")}
                />
                <Text style={[styles.newSongAlert, styles.olderTypo]}>
                  Royalty Payment Processed
                </Text>
              </View>
              <Text style={[styles.weveCuratedA, styles.weveCuratedATypo]}>
                Your royalty payment of 0.05 ETH for 'Eclipse' has been
                processed. Check your wallet for details.
              </Text>
            </View>
            <View style={styles.frameChild} />
            <View style={styles.frameView}>
              <View style={styles.directNotificationParent}>
                <Image
                  style={[
                    styles.directNotificationIcon,
                    styles.pressableLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/directnotification1.png")}
                />
                <Text style={[styles.newSongAlert, styles.olderTypo]}>
                  Pending Royalty Payment
                </Text>
              </View>
              <Text style={[styles.weveCuratedA, styles.weveCuratedATypo]}>
                Your royalty payment for 'Starlight' is pending and will be
                processed shortly.
              </Text>
            </View>
            <View style={styles.frameChild} />
            <View style={styles.frameView}>
              <View style={styles.directNotificationParent}>
                <Image
                  style={[
                    styles.directNotificationIcon,
                    styles.pressableLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/directnotification1.png")}
                />
                <Text style={[styles.newSongAlert, styles.olderTypo]}>
                  Upload Rejected
                </Text>
              </View>
              <Text style={[styles.weveCuratedA, styles.weveCuratedATypo]}>
                Your upload 'Sunset Boulevard' was rejected due to an incorrect
                ISRC code. Please correct and re-submit.
              </Text>
            </View>
            <View style={styles.frameChild} />
            <View style={styles.frameView}>
              <View style={styles.directNotificationParent}>
                <Image
                  style={[
                    styles.directNotificationIcon,
                    styles.pressableLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/directnotification1.png")}
                />
                <Text style={[styles.newSongAlert, styles.olderTypo]}>
                  Grant Application Approved
                </Text>
              </View>
              <Text style={[styles.weveCuratedA, styles.weveCuratedATypo]}>
                Congratulations! Your grant application for 'Project Echo' has
                been approved. Check your wallet for the funds.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.newWrapper, styles.wrapperSpaceBlock]}>
        <Text style={[styles.older, styles.olderLayout]}>New</Text>
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <View style={styles.parent}>
          <Pressable
            style={[styles.pressable, styles.pressableLayout]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/241.png")}
            />
          </Pressable>
          <Text style={[styles.notifications1, styles.olderLayout]}>
            Notifications
          </Text>
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
  pressableLayout: {
    width: 24,
    height: 24,
  },
  olderTypo: {
    textAlign: "left",
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  weveCuratedATypo: {
    marginTop: 16,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    textAlign: "left",
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    width: 335,
  },
  wrapperSpaceBlock: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_9xs,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_9xs,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  olderLayout: {
    lineHeight: 24,
    color: Color.gray0White,
  },
  headerPosition: {
    height: 74,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  directNotificationIcon: {
    height: 24,
  },
  newSongAlert: {
    width: 301,
    marginLeft: 8,
    color: Color.gray0White,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
  },
  directNotificationParent: {
    flexDirection: "row",
    width: 335,
    alignItems: "center",
  },
  youveReceivedA: {
    color: Color.gray0White,
  },
  frameChild: {
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderTopWidth: 1,
    width: 336,
    height: 1,
    marginTop: 24,
  },
  frameView: {
    marginTop: 24,
  },
  frameGroup: {
    alignItems: "center",
  },
  older: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    textAlign: "left",
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  olderWrapper: {
    left: 0,
    top: 0,
  },
  weveCuratedA: {
    color: Color.colorGray_1400,
  },
  frameParent2: {
    top: 52,
    left: 0,
    alignItems: "center",
    position: "absolute",
  },
  groupView: {
    height: 844,
    marginTop: 24,
    width: 335,
  },
  frameParent: {
    top: 146,
    left: 20,
    position: "absolute",
  },
  newWrapper: {
    top: 94,
    left: 20,
  },
  headerChild: {
    backgroundColor: Color.primary,
  },
  icon: {
    height: "100%",
  },
  pressable: {
    left: 0,
    top: 0,
    height: 24,
    position: "absolute",
  },
  notifications1: {
    left: 119,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    textAlign: "center",
    top: 0,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    position: "absolute",
  },
  parent: {
    top: 40,
    width: 218,
    height: 24,
    left: 20,
    position: "absolute",
  },
  notifications: {
    flex: 1,
    height: 1538,
    backgroundColor: Color.primary,
  },
});

export default Notifications;