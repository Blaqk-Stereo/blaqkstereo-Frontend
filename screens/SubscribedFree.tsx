import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import CancelPlan from "../components/CancelPlan";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SubscribedFree = () => {
  const [actionDefaultContainerVisible, setActionDefaultContainerVisible] =
    useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const openActionDefaultContainer = useCallback(() => {
    setActionDefaultContainerVisible(true);
  }, []);

  const closeActionDefaultContainer = useCallback(() => {
    setActionDefaultContainerVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.subscribedfree, styles.iconLayout]}>
        <Image
          style={styles.subscribedfreeChild}
          contentFit="cover"
          source={require("../assets/ellipse-95.png")}
        />
        <View style={[styles.subscribedfreeItem, styles.headerPosition]} />
        <View style={styles.groupParent}>
          <View style={styles.titleTextParent}>
            <View style={[styles.titleText, styles.titleTextPosition]}>
              <Text style={styles.youreOnFreeContainer}>
                <Text style={styles.youreOn}>{`You’re on 
`}</Text>
                <Text style={styles.freePlan}>FREE PLAN!</Text>
              </Text>
            </View>
            <View
              style={[
                styles.blaqkStereowhite300x1Wrapper,
                styles.actiondefaultFlexBox,
              ]}
            >
              <Image
                style={styles.blaqkStereowhite300x1}
                contentFit="cover"
                source={require("../assets/blaqk-stereowhite300x-12.png")}
              />
            </View>
          </View>
          <View style={styles.titleText1}>
            <Text style={styles.shareYourMusic}>
              Share your music to the world with Blaqk Stereo
            </Text>
          </View>
        </View>
        <View style={[styles.frameParent, styles.frameParentLayout]}>
          <View style={[styles.vectorParent, styles.frameChildLayout]}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-19.png")}
            />
            <Image
              style={styles.titleTextIcon}
              contentFit="cover"
              source={require("../assets/titletext.png")}
            />
          </View>
          <View style={styles.groupChild} />
          <Image
            style={[styles.maskGroupIcon, styles.frameParentLayout]}
            contentFit="cover"
            source={require("../assets/mask-group.png")}
          />
        </View>
        <View style={styles.actiondefaultWrapper}>
          <Pressable
            style={[styles.actiondefault, styles.actiondefaultFlexBox]}
            onPress={openActionDefaultContainer}
          >
            <Text style={styles.addNewPlaylist}>Cancel plan</Text>
          </Pressable>
        </View>
        <View style={styles.frameGroup}>
          <View style={[styles.freeParent, styles.parentLayout1]}>
            <Image
              style={styles.freeIcon}
              contentFit="cover"
              source={require("../assets/free.png")}
            />
            <Text style={[styles.commissionBased, styles.commissionTypo]}>
              Commission based
            </Text>
          </View>
          <View style={[styles.freeParent, styles.parentLayout1]}>
            <Image
              style={styles.freeIcon}
              contentFit="cover"
              source={require("../assets/assetallocation.png")}
            />
            <Text style={[styles.keep90Royalties, styles.commissionTypo]}>{`Keep
90% royalties`}</Text>
          </View>
          <View style={[styles.commissionParent, styles.parentLayout1]}>
            <Image
              style={styles.freeIcon}
              contentFit="cover"
              source={require("../assets/commission.png")}
            />
            <Text style={[styles.commission, styles.commissionTypo]}>
              10% commission
            </Text>
          </View>
        </View>
        <View style={[styles.header, styles.headerPosition]}>
          <View style={[styles.header, styles.headerPosition]} />
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
            <Text style={styles.subscriptionPlan}>Subscription Plan</Text>
          </View>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={actionDefaultContainerVisible}
      >
        <View style={styles.actionDefaultContainerOverlay}>
          <Pressable
            style={styles.actionDefaultContainerBg}
            onPress={closeActionDefaultContainer}
          />
          <CancelPlan onClose={closeActionDefaultContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  headerPosition: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  titleTextPosition: {
    left: 0,
    top: 0,
  },
  actiondefaultFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameParentLayout: {
    width: 281,
    position: "absolute",
  },
  frameChildLayout: {
    height: 302,
    width: 274,
    left: 0,
    position: "absolute",
  },
  parentLayout1: {
    paddingVertical: Padding.p_xs,
    width: 106,
    backgroundColor: Color.colorGray_400,
    borderRadius: Border.br_xs,
    alignItems: "center",
  },
  commissionTypo: {
    marginTop: 9,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.white,
  },
  parentLayout: {
    height: 24,
    position: "absolute",
  },
  subscribedfreeChild: {
    top: -2,
    left: -4,
    width: 232,
    height: 232,
    position: "absolute",
  },
  subscribedfreeItem: {
    backgroundColor: Color.colorGray_1700,
    height: 812,
  },
  youreOn: {
    fontSize: FontSize.mobileH1HeadingDisplay_size,
  },
  freePlan: {
    fontSize: FontSize.mobileH2HeadingDefault_size,
  },
  youreOnFreeContainer: {
    letterSpacing: -1,
    lineHeight: 34,
    fontWeight: "700",
    fontFamily: FontFamily.mobileH1HeadingDisplay,
    textAlign: "left",
    color: Color.white,
    left: 0,
    top: 0,
    position: "absolute",
  },
  titleText: {
    width: 133,
    height: 69,
    position: "absolute",
  },
  blaqkStereowhite300x1: {
    width: 25,
    height: 12,
    overflow: "hidden",
  },
  blaqkStereowhite300x1Wrapper: {
    top: 8,
    left: 128,
    borderRadius: Border.br_base,
    backgroundColor: Color.primary30,
    paddingHorizontal: Padding.p_5xs,
    paddingTop: Padding.p_11xs,
    paddingBottom: Padding.p_9xs,
    position: "absolute",
  },
  titleTextParent: {
    width: 169,
    height: 69,
  },
  shareYourMusic: {
    fontSize: FontSize.size_lg_1,
    lineHeight: 31,
    fontFamily: FontFamily.mobileBodyCopy,
    width: 128,
    textAlign: "left",
    color: Color.white,
    left: 0,
    top: 0,
    position: "absolute",
  },
  titleText1: {
    height: 124,
    marginTop: 8,
    width: 128,
  },
  groupParent: {
    top: 106,
    left: 24,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_xl,
    top: 0,
    width: 274,
  },
  titleTextIcon: {
    top: 23,
    left: 9,
    width: 191,
    height: 296,
    opacity: 0.5,
    position: "absolute",
  },
  vectorParent: {
    top: 48,
    overflow: "hidden",
  },
  groupChild: {
    top: 90,
    left: 29,
    width: 199,
    height: 264,
    position: "absolute",
  },
  maskGroupIcon: {
    height: 350,
    left: 0,
    top: 0,
  },
  frameParent: {
    top: 82,
    left: 121,
    height: 354,
  },
  actionDefaultContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  actionDefaultContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  addNewPlaylist: {
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    fontWeight: "600",
    fontFamily: FontFamily.mobileH3HeadingPage,
    lineHeight: 24,
    textAlign: "left",
    color: Color.white,
  },
  actiondefault: {
    borderRadius: Border.br_81xl,
    borderStyle: "solid",
    borderColor: Color.white,
    borderWidth: 1,
    width: 304,
    paddingHorizontal: Padding.p_31xl,
    paddingVertical: Padding.p_base,
    overflow: "hidden",
  },
  actiondefaultWrapper: {
    marginLeft: -151.5,
    top: 589,
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  freeIcon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  commissionBased: {
    width: 63,
  },
  freeParent: {
    paddingHorizontal: Padding.p_sm,
  },
  keep90Royalties: {
    width: 69,
  },
  commission: {
    width: 56,
  },
  commissionParent: {
    paddingHorizontal: Padding.p_2xs,
  },
  frameGroup: {
    marginLeft: -167.5,
    top: 468,
    width: 335,
    justifyContent: "space-between",
    borderRadius: Border.br_xs,
    left: "50%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  header: {
    height: 74,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  pressable: {
    width: 24,
    left: 0,
    top: 0,
  },
  subscriptionPlan: {
    left: 99,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    textAlign: "center",
    lineHeight: 24,
    color: Color.white,
    top: 0,
    position: "absolute",
  },
  parent: {
    top: 40,
    left: 20,
    width: 236,
  },
  subscribedfree: {
    backgroundColor: Color.primary,
    flex: 1,
    overflow: "hidden",
    height: 812,
  },
});

export default SubscribedFree;
