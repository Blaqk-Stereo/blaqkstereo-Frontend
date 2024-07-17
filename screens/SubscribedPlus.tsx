import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import CancelPlan from "../components/CancelPlan";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const SubscribedPlus = () => {
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
      <View style={[styles.subscribedplus, styles.iconLayout]}>
        <Image
          style={styles.subscribedplusChild}
          contentFit="cover"
          source={require("../assets/ellipse-95.png")}
        />
        <View style={[styles.subscribedplusItem, styles.headerPosition]} />
        <View style={styles.groupParent}>
          <View style={styles.titleTextParent}>
            <View style={[styles.titleText, styles.titleTextPosition]}>
              <Text
                style={[
                  styles.youreOnPlusContainer,
                  styles.shareYourMusicPosition,
                ]}
              >
                <Text style={styles.youreOn}>{`You’re on 
`}</Text>
                <Text style={styles.plusPlan}>PLUS PLAN!</Text>
              </Text>
            </View>
            <View
              style={[
                styles.blaqkStereowhite300x1Wrapper,
                styles.descriptionFlexBox,
              ]}
            >
              <Image
                style={styles.blaqkStereowhite300x1}
                contentFit="cover"
                source={require("../assets/blaqk-stereowhite300x-14.png")}
              />
            </View>
          </View>
          <View style={styles.titleText1}>
            <Text
              style={[styles.shareYourMusic, styles.shareYourMusicPosition]}
            >
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
        <View style={styles.frameGroup}>
          <View style={styles.annualParent}>
            <Image
              style={styles.annualIcon}
              contentFit="cover"
              source={require("../assets/annual.png")}
            />
            <Text style={[styles.payYearly, styles.payYearlyTypo]}>{`Pay
Yearly`}</Text>
          </View>
          <View style={[styles.unlimitedParent, styles.parentSpaceBlock]}>
            <Image
              style={styles.annualIcon}
              contentFit="cover"
              source={require("../assets/unlimited.png")}
            />
            <Text style={[styles.payYearly, styles.payYearlyTypo]}>
              Unlimited releases
            </Text>
          </View>
          <View style={[styles.unlimitedParent, styles.parentSpaceBlock]}>
            <Image
              style={styles.annualIcon}
              contentFit="cover"
              source={require("../assets/assetallocation.png")}
            />
            <Text style={[styles.payYearly, styles.payYearlyTypo]}>
              Keep 100% royalties
            </Text>
          </View>
          <View style={[styles.commissionParent, styles.parentSpaceBlock]}>
            <Image
              style={styles.annualIcon}
              contentFit="cover"
              source={require("../assets/commission.png")}
            />
            <Text style={[styles.zeroCommission, styles.payYearlyTypo]}>
              Zero commission
            </Text>
          </View>
        </View>
        <View style={styles.ownerParent}>
          <View style={styles.owner}>
            <View>
              <Text style={[styles.description, styles.descriptionLayout]}>
                Your plan will automatically renew on 12 May, 2025. You will be
                charged $199.99
              </Text>
            </View>
          </View>
          <Pressable
            style={[styles.actiondefault, styles.descriptionFlexBox]}
            onPress={openActionDefaultContainer}
          >
            <Text style={[styles.addNewPlaylist, styles.descriptionLayout]}>
              Cancel plan
            </Text>
          </Pressable>
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
            <Text style={[styles.subscriptionPlan, styles.descriptionLayout]}>
              Subscription Plan
            </Text>
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
  shareYourMusicPosition: {
    color: Color.white,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  descriptionFlexBox: {
    justifyContent: "center",
    alignItems: "center",
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
  payYearlyTypo: {
    marginTop: 9,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.white,
  },
  parentSpaceBlock: {
    marginLeft: 8,
    paddingVertical: Padding.p_xs,
    backgroundColor: Color.colorGray_400,
    borderRadius: Border.br_xs,
    alignItems: "center",
  },
  descriptionLayout: {
    lineHeight: 24,
    color: Color.white,
  },
  parentLayout: {
    height: 24,
    position: "absolute",
  },
  subscribedplusChild: {
    top: -2,
    left: -4,
    width: 232,
    height: 232,
    position: "absolute",
  },
  subscribedplusItem: {
    backgroundColor: "rgba(21, 19, 18, 0.7)",
    height: 812,
  },
  youreOn: {
    fontSize: FontSize.mobileH1HeadingDisplay_size,
  },
  plusPlan: {
    fontSize: FontSize.mobileH2HeadingDefault_size,
  },
  youreOnPlusContainer: {
    letterSpacing: -1,
    lineHeight: 34,
    fontWeight: "700",
    fontFamily: FontFamily.mobileH1HeadingDisplay,
    textAlign: "left",
  },
  titleText: {
    width: 135,
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
    borderRadius: 16,
    backgroundColor: Color.primary30,
    paddingHorizontal: Padding.p_5xs,
    paddingTop: Padding.p_11xs,
    paddingBottom: Padding.p_9xs,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  titleTextParent: {
    width: 169,
    height: 69,
  },
  shareYourMusic: {
    fontSize: 18,
    lineHeight: 31,
    fontFamily: FontFamily.mobileBodyCopy,
    width: 128,
    textAlign: "left",
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
  annualIcon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  payYearly: {
    width: 50,
  },
  annualParent: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_sm,
    backgroundColor: Color.colorGray_400,
    borderRadius: Border.br_xs,
    alignItems: "center",
  },
  unlimitedParent: {
    paddingHorizontal: Padding.p_sm,
    marginLeft: 8,
  },
  zeroCommission: {
    width: 56,
  },
  commissionParent: {
    paddingHorizontal: 11,
  },
  frameGroup: {
    top: 468,
    borderRadius: Border.br_xs,
    left: "50%",
    marginLeft: -167.5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  description: {
    display: "flex",
    width: 303,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    lineHeight: 24,
    textAlign: "center",
    fontFamily: FontFamily.mobileBodyCopy,
    justifyContent: "center",
    alignItems: "center",
  },
  owner: {
    width: 335,
    justifyContent: "space-between",
    padding: Padding.p_base,
    backgroundColor: Color.colorGray_400,
    borderRadius: Border.br_xs,
    flexDirection: "row",
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
    fontWeight: "600",
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    lineHeight: 24,
    textAlign: "left",
  },
  actiondefault: {
    borderRadius: Border.br_81xl,
    borderStyle: "solid",
    borderColor: Color.white,
    borderWidth: 1,
    width: 304,
    paddingHorizontal: 50,
    paddingVertical: Padding.p_base,
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  ownerParent: {
    top: 589,
    left: "50%",
    marginLeft: -167.5,
    alignItems: "center",
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
    top: 0,
    position: "absolute",
  },
  parent: {
    top: 40,
    left: 20,
    width: 236,
  },
  subscribedplus: {
    backgroundColor: Color.primary,
    flex: 1,
    overflow: "hidden",
    height: 812,
  },
});

export default SubscribedPlus;
