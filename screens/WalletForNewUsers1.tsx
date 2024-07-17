import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import DropDown from "../components/DropDown";
import WalletInfo from "../components/WalletInfo";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const WalletForNewUsers1 = () => {
  const [frameContainer1Visible, setFrameContainer1Visible] = useState(false);
  const [infoCircleIconVisible, setInfoCircleIconVisible] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const openFrameContainer1 = useCallback(() => {
    setFrameContainer1Visible(true);
  }, []);

  const closeFrameContainer1 = useCallback(() => {
    setFrameContainer1Visible(false);
  }, []);

  const openInfoCircleIcon = useCallback(() => {
    setInfoCircleIconVisible(true);
  }, []);

  const closeInfoCircleIcon = useCallback(() => {
    setInfoCircleIconVisible(false);
  }, []);

  return (
    <>
      <View style={styles.walletForNewUsers}>
        <View style={styles.cardParent}>
          <Pressable
            style={styles.cardLayout}
            onPress={() => navigation.navigate("TopUpWallet2")}
          >
            <View style={styles.image}>
              <View style={[styles.mask, styles.maskPosition]} />
              <LinearGradient
                style={[styles.rectangle, styles.maskPosition]}
                locations={[0, 1]}
                colors={["#000", "rgba(0, 0, 0, 0)"]}
              />
            </View>
            <View style={[styles.group1137, styles.groupPosition]}>
              <Image
                style={styles.topUpIcon}
                contentFit="cover"
                source={require("../assets/topup.png")}
              />
              <Text style={[styles.text, styles.textFlexBox]}>Deposit</Text>
            </View>
          </Pressable>
          <View style={[styles.card1, styles.cardLayout]}>
            <View style={styles.image}>
              <View style={[styles.mask, styles.maskPosition]} />
              <LinearGradient
                style={[styles.rectangle, styles.maskPosition]}
                locations={[0, 1]}
                colors={["#000", "rgba(0, 0, 0, 0)"]}
              />
            </View>
            <View style={[styles.group11371, styles.groupPosition]}>
              <Image
                style={styles.topUpIcon}
                contentFit="cover"
                source={require("../assets/wallet.png")}
              />
              <Text style={[styles.text, styles.textFlexBox]}>Withdraw</Text>
            </View>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={[styles.activityParent, styles.iconsFlexBox]}>
            <Text style={[styles.activity, styles.activityTypo]}>Activity</Text>
            <Pressable
              style={styles.last7DaysParent}
              onPress={openFrameContainer1}
            >
              <Text style={[styles.last7Days, styles.activityTypo]}>
                Last 7 days
              </Text>
              <Image
                style={[styles.chevronDown, styles.nairaIconLayout]}
                contentFit="cover"
                source={require("../assets/chevron-down.png")}
              />
            </Pressable>
          </View>
          <View style={styles.noTransactionsRecordedParent}>
            <Text style={styles.yourWalletTypo}>No Transactions Recorded</Text>
            <Text style={[styles.yourWalletIs, styles.yourWalletIsTypo]}>
              Your wallet is looking a bit empty! Keep track of your earnings
              and transactions here.
            </Text>
          </View>
        </View>
        <View style={[styles.card2, styles.card2Position]}>
          <View style={styles.image}>
            <View style={styles.mask2} />
            <View style={styles.mask2} />
          </View>
          <View
            style={[styles.textCurrentWallet, styles.textCurrentWalletPosition]}
          >
            <View style={styles.last7DaysParent}>
              <Image
                style={[styles.nairaIcon, styles.nairaIconLayout]}
                contentFit="cover"
                source={require("../assets/naira1.png")}
              />
              <Text style={[styles.currentBalance, styles.yourWalletIsTypo]}>
                Available Balance
              </Text>
            </View>
            <Text style={[styles.blc, styles.blcTypo]}>0.00 cUSD</Text>
            <Text style={[styles.text2, styles.blcTypo]}>-</Text>
          </View>
          <Image
            style={[
              styles.nftWallet36640551Icon,
              styles.textCurrentWalletPosition,
            ]}
            contentFit="cover"
            source={require("../assets/nftwallet3664055-1.png")}
          />
        </View>
        <View style={styles.nav}>
          <View style={[styles.navChild, styles.iconLayout]} />
          <View style={[styles.icons, styles.card2Position]}>
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
            <Image
              style={[styles.vuesaxboldemptyWalletIcon, styles.moreLayout]}
              contentFit="cover"
              source={require("../assets/vuesaxboldemptywallet3.png")}
            />
            <Pressable
              style={styles.musicSquareAdd}
              onPress={() => navigation.navigate("StreamingPlatformsSelection")}
            >
              <Text style={[styles.uploadMusic, styles.textFlexBox]}>
                Upload Music
              </Text>
            </Pressable>
            <Pressable
              style={styles.moreLayout}
              onPress={() => navigation.navigate("StatsForNewUsers")}
            >
              <Image
                style={[styles.icon1, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/chartsquare.png")}
              />
            </Pressable>
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
          <Text style={[styles.yourWallet, styles.yourWalletPosition]}>
            Your Wallet
          </Text>
          <View style={[styles.infoCircleParent, styles.yourWalletPosition]}>
            <Pressable
              style={styles.infoCircleLayout}
              onPress={openInfoCircleIcon}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/infocircle.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.notification, styles.infoCircleLayout]}
              onPress={() => navigation.navigate("NotificationsForNewUsers")}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/notification3.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer1Visible}>
        <View style={styles.frameContainer1Overlay}>
          <Pressable
            style={styles.frameContainer1Bg}
            onPress={closeFrameContainer1}
          />
          <DropDown onClose={closeFrameContainer1} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={infoCircleIconVisible}>
        <View style={styles.infoCircleIconOverlay}>
          <Pressable
            style={styles.infoCircleIconBg}
            onPress={closeInfoCircleIcon}
          />
          <WalletInfo onClose={closeInfoCircleIcon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  maskPosition: {
    borderWidth: 1,
    borderColor: Color.primary20,
    borderStyle: "solid",
    borderRadius: Border.br_sm,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  groupPosition: {
    left: "50%",
    marginTop: -12,
    alignItems: "center",
    top: "50%",
    flexDirection: "row",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    lineHeight: 24,
  },
  cardLayout: {
    height: 60,
    width: 158,
    overflow: "hidden",
  },
  iconsFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  activityTypo: {
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    color: Color.white,
  },
  nairaIconLayout: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  yourWalletIsTypo: {
    textAlign: "center",
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.primary0,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  card2Position: {
    marginLeft: -167.5,
    width: 335,
    left: "50%",
    position: "absolute",
  },
  textCurrentWalletPosition: {
    top: "50%",
    position: "absolute",
  },
  blcTypo: {
    marginTop: 4,
    textAlign: "left",
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
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
  yourWalletPosition: {
    top: 48,
    position: "absolute",
  },
  infoCircleLayout: {
    height: 24,
    width: 24,
  },
  mask: {
    backgroundColor: Color.colorGray_300,
  },
  rectangle: {
    backgroundColor: "transparent",
  },
  image: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  topUpIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  text: {
    marginLeft: 8,
    color: Color.white,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "left",
    lineHeight: 24,
  },
  group1137: {
    marginLeft: -40.75,
    alignItems: "center",
  },
  group11371: {
    marginLeft: -46.25,
    alignItems: "center",
  },
  card1: {
    marginLeft: 20,
  },
  cardParent: {
    top: 262,
    flexDirection: "row",
    left: 20,
    position: "absolute",
  },
  activity: {
    fontSize: FontSize.mobileH5HeadingComponent_size,
    textAlign: "left",
    lineHeight: 24,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
  },
  frameContainer1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  last7Days: {
    fontSize: FontSize.btnSmallNormal_size,
    textAlign: "right",
    opacity: 0.8,
  },
  chevronDown: {
    marginLeft: 4,
  },
  last7DaysParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  activityParent: {
    width: 335,
    justifyContent: "space-between",
    alignItems: "center",
  },
  yourWalletTypo: {
    fontSize: FontSize.mobileH4HeadingSection_size,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    lineHeight: 24,
  },
  yourWalletIs: {
    display: "flex",
    justifyContent: "center",
    width: 303,
    marginTop: 8,
    alignItems: "center",
  },
  noTransactionsRecordedParent: {
    marginTop: 141,
    alignItems: "center",
  },
  frameParent: {
    top: 346,
    alignItems: "center",
    left: 20,
    position: "absolute",
  },
  mask2: {
    backgroundColor: Color.colorGray_1000,
    borderRadius: Border.br_sm,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  nairaIcon: {
    borderRadius: Border.br_101xl,
  },
  currentBalance: {
    marginLeft: 4,
  },
  blc: {
    fontSize: FontSize.mobileH3HeadingPage_size,
    letterSpacing: -1,
    lineHeight: 34,
    color: Color.white,
  },
  text2: {
    color: Color.primary0,
    marginTop: 4,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  textCurrentWallet: {
    marginTop: -45,
    left: 16,
  },
  nftWallet36640551Icon: {
    marginTop: -70,
    right: -6,
    width: 140,
    height: 140,
  },
  card2: {
    top: 96,
    height: 150,
    overflow: "hidden",
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
  vuesaxboldemptyWalletIcon: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  uploadMusic: {
    color: Color.white,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "left",
    lineHeight: 24,
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
    borderColor: Color.primary30,
    borderWidth: 2,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    alignItems: "center",
    borderStyle: "solid",
    flexDirection: "row",
    backgroundColor: Color.primary,
  },
  icon1: {
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
    justifyContent: "space-between",
    flexDirection: "row",
  },
  nav: {
    marginLeft: 187.5,
    bottom: 0,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: 375,
    left: "50%",
    height: 60,
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.colorGray_1600,
  },
  yourWallet: {
    fontSize: FontSize.mobileH4HeadingSection_size,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    lineHeight: 24,
    left: 20,
  },
  infoCircleIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  infoCircleIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  notification: {
    marginLeft: 24,
  },
  infoCircleParent: {
    right: 20,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  walletForNewUsers: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.primary,
  },
});

export default WalletForNewUsers1;