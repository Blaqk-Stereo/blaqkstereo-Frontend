import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const WalletForNewUsers = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.walletForNewUsers}>
      <View style={[styles.nftWallet36640551Parent, styles.iconsPosition]}>
        <Image
          style={styles.nftWallet36640551Icon}
          contentFit="cover"
          source={require("../assets/nftwallet3664055-11.png")}
        />
        <View style={styles.toGetStartedYoullNeedToParent}>
          <Text style={styles.toGetStarted}>
            To get started, you’ll need to set up your MiniPay wallet
          </Text>
          <Pressable
            style={[styles.button, styles.iconsLayout]}
            onPress={() => navigation.navigate("CreateANewWallet")}
          >
            <Text style={styles.proceedToSetup}>Proceed to setup</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.nav}>
        <View style={[styles.navChild, styles.iconLayout]} />
        <View style={[styles.icons, styles.iconsLayout]}>
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
            style={[styles.musicSquareAdd, styles.buttonLayout]}
            onPress={() => navigation.navigate("StreamingPlatformsSelection")}
          >
            <Text style={[styles.uploadMusic, styles.yourWalletTypo]}>
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
        <Pressable
          style={[styles.notification, styles.yourWalletPosition]}
          onPress={() => navigation.navigate("NotificationsForNewUsers")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/notification2.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconsPosition: {
    left: "50%",
    position: "absolute",
  },
  iconsLayout: {
    width: 335,
    flexDirection: "row",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  moreLayout: {
    height: 28,
    width: 28,
  },
  buttonLayout: {
    borderRadius: Border.br_81xl,
    alignItems: "center",
  },
  yourWalletTypo: {
    textAlign: "left",
    lineHeight: 24,
    color: Color.white,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
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
  nftWallet36640551Icon: {
    width: 300,
    height: 248,
  },
  toGetStarted: {
    fontSize: FontSize.mobileH3HeadingPage_size,
    letterSpacing: -1,
    lineHeight: 34,
    display: "flex",
    width: 343,
    justifyContent: "center",
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    alignItems: "center",
  },
  proceedToSetup: {
    color: Color.primary,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  button: {
    backgroundColor: Color.white,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    marginTop: 24,
    flexDirection: "row",
    borderRadius: Border.br_81xl,
    alignItems: "center",
    justifyContent: "center",
  },
  toGetStartedYoullNeedToParent: {
    marginTop: 12,
    alignItems: "center",
  },
  nftWallet36640551Parent: {
    marginTop: -202,
    marginLeft: -171.5,
    top: "50%",
    alignItems: "center",
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
    height: "100%",
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
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "left",
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
    flexDirection: "row",
    backgroundColor: Color.primary,
    borderRadius: Border.br_81xl,
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
    marginLeft: -167.5,
    bottom: 19,
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
    left: "50%",
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
    width: 375,
    left: "50%",
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.colorGray_1600,
  },
  yourWallet: {
    left: 20,
    fontSize: FontSize.mobileH4HeadingSection_size,
    textAlign: "left",
    lineHeight: 24,
    color: Color.white,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  notification: {
    left: 331,
    width: 24,
    height: 24,
  },
  walletForNewUsers: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.primary,
  },
});

export default WalletForNewUsers;