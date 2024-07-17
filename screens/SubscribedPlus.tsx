import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import FrameComponent3 from "../components/FrameComponent3";
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
        <FrameComponent3
          pREMIUMPLAN="PLUS PLAN!"
          blaqkStereowhite300x1={require("../assets/blaqk-stereowhite300x-17.png")}
        />
        <View style={[styles.frameParent, styles.frameParentLayout]}>
          <View style={[styles.vectorParent, styles.frameChildLayout]}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-191.png")}
            />
            <Image
              style={styles.titleTextIcon}
              contentFit="cover"
              source={require("../assets/titletext1.png")}
            />
          </View>
          <View style={styles.groupChild} />
          <Image
            style={[styles.maskGroupIcon, styles.frameParentLayout]}
            contentFit="cover"
            source={require("../assets/mask-group.png")}
          />
        </View>
        <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
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
              source={require("../assets/assetallocation1.png")}
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
            style={[styles.actiondefault, styles.frameGroupFlexBox]}
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
  frameGroupFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  payYearlyTypo: {
    marginTop: 9,
    color: Color.white,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.mobileBodyCopy,
  },
  parentSpaceBlock: {
    marginLeft: 8,
    paddingVertical: Padding.p_xs,
    backgroundColor: Color.colorGray_400,
    alignItems: "center",
    borderRadius: Border.br_xs,
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
    backgroundColor: Color.colorGray_1700,
    height: 812,
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
    alignItems: "center",
    borderRadius: Border.br_xs,
  },
  unlimitedParent: {
    paddingHorizontal: Padding.p_sm,
    marginLeft: 8,
  },
  zeroCommission: {
    width: 56,
  },
  commissionParent: {
    paddingHorizontal: Padding.p_2xs,
  },
  frameGroup: {
    top: 468,
    borderRadius: Border.br_xs,
    left: "50%",
    marginLeft: -167.5,
    justifyContent: "center",
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
    flexDirection: "row",
    borderRadius: Border.br_xs,
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
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    textAlign: "left",
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    lineHeight: 24,
  },
  actiondefault: {
    borderRadius: Border.br_81xl,
    borderStyle: "solid",
    borderColor: Color.white,
    borderWidth: 1,
    width: 304,
    paddingHorizontal: Padding.p_31xl,
    paddingVertical: Padding.p_base,
    marginTop: 30,
    overflow: "hidden",
  },
  ownerParent: {
    top: 589,
    alignItems: "center",
    left: "50%",
    marginLeft: -167.5,
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