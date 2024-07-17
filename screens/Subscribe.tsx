import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SubscribefreePlanSelected from "../components/SubscribefreePlanSelected";
import SubscribepayPerReleaseSele from "../components/SubscribepayPerReleaseSele";
import SubscribeyearlySelected from "../components/SubscribeyearlySelected";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const Subscribe = () => {
  const [actionDefaultContainerVisible, setActionDefaultContainerVisible] =
    useState(false);
  const [actionDefaultContainer1Visible, setActionDefaultContainer1Visible] =
    useState(false);
  const [actionDefaultContainer2Visible, setActionDefaultContainer2Visible] =
    useState(false);

  const openActionDefaultContainer = useCallback(() => {
    setActionDefaultContainerVisible(true);
  }, []);

  const closeActionDefaultContainer = useCallback(() => {
    setActionDefaultContainerVisible(false);
  }, []);

  const openActionDefaultContainer1 = useCallback(() => {
    setActionDefaultContainer1Visible(true);
  }, []);

  const closeActionDefaultContainer1 = useCallback(() => {
    setActionDefaultContainer1Visible(false);
  }, []);

  const openActionDefaultContainer2 = useCallback(() => {
    setActionDefaultContainer2Visible(true);
  }, []);

  const closeActionDefaultContainer2 = useCallback(() => {
    setActionDefaultContainer2Visible(false);
  }, []);

  return (
    <>
      <View style={styles.subscribe}>
        <Image
          style={styles.subscribeChild}
          contentFit="cover"
          source={require("../assets/ellipse-95.png")}
        />
        <View style={styles.subscribeItem} />
        <Text
          style={[
            styles.toStartDistributing,
            styles.toStartDistributingFlexBox,
          ]}
        >{`To start distributing your music & earning royalties, please select your subscription plan`}</Text>
        <View style={styles.frameParent}>
          <View style={styles.frameParentBorder}>
            <View>
              <View>
                <View style={styles.freeParent}>
                  <Text style={styles.free}>Free</Text>
                  <Image
                    style={styles.wpfaudioWaveIcon}
                    contentFit="cover"
                    source={require("../assets/wpfaudiowave.png")}
                  />
                </View>
                <Text style={styles.commissionBased}>(Commission based)</Text>
              </View>
              <Text
                style={styles.weDistributeYour}
              >{`We distribute your music to all major streaming platforms.
You keep 90% of Royalties. 
We collect a 10% commission after returns.`}</Text>
            </View>
            <Pressable
              style={[styles.actiondefault, styles.actiondefaultSpaceBlock]}
              onPress={openActionDefaultContainer}
            >
              <Text style={[styles.addNewPlaylist, styles.bestValueTypo]}>
                Choose Free Plan
              </Text>
            </Pressable>
          </View>
          <View style={[styles.frameParent1, styles.frameParentBorder]}>
            <View>
              <View>
                <View style={styles.freeParent}>
                  <Text style={styles.free}>Premium</Text>
                  <Image
                    style={styles.wpfaudioWaveIcon}
                    contentFit="cover"
                    source={require("../assets/iconparkoutlinevipone.png")}
                  />
                </View>
                <Text style={styles.commissionBased}>(Pay-Per-Release)</Text>
              </View>
              <Text
                style={styles.weDistributeYour}
              >{`Pay for each release - You can release multiple songs or albums at once.
We distribute your music to all major streaming platforms.
You keep 100% of Royalties.
No commission on your earnings.`}</Text>
            </View>
            <Pressable
              style={[styles.actiondefault, styles.actiondefaultSpaceBlock]}
              onPress={openActionDefaultContainer1}
            >
              <Text style={[styles.addNewPlaylist, styles.bestValueTypo]}>
                Choose Premium Plan
              </Text>
            </Pressable>
          </View>
          <View style={[styles.frameParent4, styles.frameParentBorder]}>
            <View style={styles.frameParent5}>
              <View>
                <View style={styles.freeParent}>
                  <Text style={styles.free}>Plus</Text>
                  <Image
                    style={styles.wpfaudioWaveIcon}
                    contentFit="cover"
                    source={require("../assets/premium.png")}
                  />
                </View>
                <Text style={styles.commissionBased}>
                  (Yearly Subscription)
                </Text>
              </View>
              <Text
                style={styles.weDistributeYour}
              >{`You get unlimited releases within a year.
We distribute your music to all major streaming platforms.
You keep 100% of Royalties.
No commission on your earnings.
Best Value - Enjoy the freedom to release music as often as you like.`}</Text>
            </View>
            <Pressable
              style={[styles.actiondefault2, styles.actiondefaultSpaceBlock]}
              onPress={openActionDefaultContainer2}
            >
              <Text style={[styles.addNewPlaylist, styles.bestValueTypo]}>
                Choose Plus Plan
              </Text>
            </Pressable>
            <LinearGradient
              style={styles.bestValueWrapper}
              locations={[0, 0.47, 1]}
              colors={[
                "rgba(161, 26, 79, 0.64)",
                "rgba(161, 6, 68, 0.64)",
                "rgba(126, 19, 65, 0.64)",
              ]}
            >
              <Text style={[styles.bestValue, styles.bestValueTypo]}>
                Best Value
              </Text>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.headerPosition}>
          <View style={[styles.headerChild, styles.headerPosition]} />
          <Text
            style={[
              styles.chooseYourSubscription,
              styles.toStartDistributingFlexBox,
            ]}
          >
            Choose your subscription
          </Text>
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
          <SubscribefreePlanSelected onClose={closeActionDefaultContainer} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={actionDefaultContainer1Visible}
      >
        <View style={styles.actionDefaultContainer1Overlay}>
          <Pressable
            style={styles.actionDefaultContainer1Bg}
            onPress={closeActionDefaultContainer1}
          />
          <SubscribepayPerReleaseSele onClose={closeActionDefaultContainer1} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={actionDefaultContainer2Visible}
      >
        <View style={styles.actionDefaultContainer2Overlay}>
          <Pressable
            style={styles.actionDefaultContainer2Bg}
            onPress={closeActionDefaultContainer2}
          />
          <SubscribeyearlySelected onClose={closeActionDefaultContainer2} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  toStartDistributingFlexBox: {
    textAlign: "center",
    color: Color.white,
    lineHeight: 24,
    position: "absolute",
  },
  actiondefaultSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_31xl,
    backgroundColor: Color.white,
    marginTop: 24,
    justifyContent: "center",
    borderRadius: Border.br_81xl,
    alignItems: "center",
    flexDirection: "row",
    width: 303,
    overflow: "hidden",
  },
  bestValueTypo: {
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    textAlign: "left",
  },
  frameParentBorder: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_base,
    borderWidth: 1,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_1000,
    borderRadius: Border.br_xs,
  },
  headerPosition: {
    height: 74,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  subscribeChild: {
    top: -2,
    left: -4,
    width: 232,
    height: 232,
    position: "absolute",
  },
  subscribeItem: {
    backgroundColor: Color.colorGray_1700,
    height: 1053,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  toStartDistributing: {
    marginLeft: -167.5,
    top: 94,
    width: 335,
    fontFamily: FontFamily.mobileBodyCopy,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    left: "50%",
    textAlign: "center",
  },
  free: {
    fontSize: FontSize.mobileH1HeadingDisplay_size,
    letterSpacing: -1,
    lineHeight: 34,
    fontWeight: "700",
    fontFamily: FontFamily.mobileH1HeadingDisplay,
    textAlign: "left",
    color: Color.white,
  },
  wpfaudioWaveIcon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  freeParent: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 303,
  },
  commissionBased: {
    marginTop: 8,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.mobileBodyCopy,
  },
  weDistributeYour: {
    color: Color.primary0,
    marginTop: 12,
    textAlign: "left",
    width: 303,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
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
    color: Color.primary,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    lineHeight: 24,
    fontWeight: "600",
  },
  actiondefault: {
    marginTop: 24,
  },
  actionDefaultContainer1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  actionDefaultContainer1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameParent1: {
    marginTop: 24,
  },
  frameParent5: {
    zIndex: 0,
  },
  actionDefaultContainer2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  actionDefaultContainer2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  actiondefault2: {
    zIndex: 1,
    marginTop: 24,
  },
  bestValue: {
    fontSize: FontSize.btnSmallNormal_size,
    color: Color.white,
  },
  bestValueWrapper: {
    marginLeft: -46.5,
    top: -11,
    borderColor: Color.secondaryDefault,
    borderWidth: 0.2,
    paddingVertical: Padding.p_9xs,
    backgroundColor: "transparent",
    zIndex: 2,
    justifyContent: "center",
    borderRadius: Border.br_81xl,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  frameParent4: {
    marginTop: 24,
  },
  frameParent: {
    top: 159,
    left: 20,
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.colorGray_1600,
  },
  chooseYourSubscription: {
    top: 40,
    left: 89,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontSize: FontSize.mobileH5HeadingComponent_size,
  },
  subscribe: {
    backgroundColor: Color.primary,
    flex: 1,
    width: "100%",
    height: 1184,
    overflow: "hidden",
  },
});

export default Subscribe;
