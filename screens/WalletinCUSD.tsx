import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Withdraw from "../components/Withdraw";
import DropDown from "../components/DropDown";
import TransactionDetailsIN from "../components/TransactionDetailsIN";
import TransactionDetailsIN1 from "../components/TransactionDetailsIN1";
import WalletInfo from "../components/WalletInfo";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const WalletinCUSD = () => {
  const [cardContainer2Visible, setCardContainer2Visible] = useState(false);
  const [frameContainer2Visible, setFrameContainer2Visible] = useState(false);
  const [cardContainer3Visible, setCardContainer3Visible] = useState(false);
  const [cardContainer5Visible, setCardContainer5Visible] = useState(false);
  const [infoCircleIconVisible, setInfoCircleIconVisible] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const openCardContainer2 = useCallback(() => {
    setCardContainer2Visible(true);
  }, []);

  const closeCardContainer2 = useCallback(() => {
    setCardContainer2Visible(false);
  }, []);

  const openFrameContainer2 = useCallback(() => {
    setFrameContainer2Visible(true);
  }, []);

  const closeFrameContainer2 = useCallback(() => {
    setFrameContainer2Visible(false);
  }, []);

  const openCardContainer3 = useCallback(() => {
    setCardContainer3Visible(true);
  }, []);

  const closeCardContainer3 = useCallback(() => {
    setCardContainer3Visible(false);
  }, []);

  const openCardContainer5 = useCallback(() => {
    setCardContainer5Visible(true);
  }, []);

  const closeCardContainer5 = useCallback(() => {
    setCardContainer5Visible(false);
  }, []);

  const openInfoCircleIcon = useCallback(() => {
    setInfoCircleIconVisible(true);
  }, []);

  const closeInfoCircleIcon = useCallback(() => {
    setInfoCircleIconVisible(false);
  }, []);

  return (
    <>
      <View style={styles.walletinCusd}>
        <View style={[styles.card, styles.cardPosition]}>
          <View style={styles.image}>
            <View style={styles.mask} />
            <View style={styles.mask} />
          </View>
          <View style={[styles.textCurrentWallet, styles.group1052Position]}>
            <View style={styles.celoDollarCusdParent}>
              <Image
                style={[styles.celoDollarCusdIcon, styles.chevronDownLayout]}
                contentFit="cover"
                source={require("../assets/celodollarcusd.png")}
              />
              <Text style={[styles.currentBalance, styles.text1Typo]}>
                Available Balance
              </Text>
            </View>
            <Text style={[styles.blc, styles.blcTypo]}>200.06 cUSD</Text>
            <View style={styles.group1137}>
              <Image
                style={styles.polygon1Icon}
                contentFit="cover"
                source={require("../assets/polygon-11.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>0.0295 (1.34%)</Text>
            </View>
          </View>
          <Image
            style={styles.nftWallet36640551Icon}
            contentFit="cover"
            source={require("../assets/nftwallet3664055-12.png")}
          />
        </View>
        <View style={styles.cardParent}>
          <Pressable
            style={styles.cardLayout1}
            onPress={() => navigation.navigate("TopUpWallet2")}
          >
            <View style={styles.image}>
              <View style={[styles.mask1, styles.mask1Position]} />
              <LinearGradient
                style={[styles.rectangle1, styles.mask1Position]}
                locations={[0, 1]}
                colors={["#000", "rgba(0, 0, 0, 0)"]}
              />
            </View>
            <View style={[styles.group11371, styles.groupPosition]}>
              <Image
                style={styles.topUpIcon}
                contentFit="cover"
                source={require("../assets/topup1.png")}
              />
              <Text style={[styles.text1, styles.blcTypo]}>Deposit</Text>
            </View>
          </Pressable>
          <Pressable
            style={[styles.card2, styles.cardLayout1]}
            onPress={openCardContainer2}
          >
            <View style={styles.image}>
              <View style={[styles.mask1, styles.mask1Position]} />
              <LinearGradient
                style={[styles.rectangle1, styles.mask1Position]}
                locations={[0, 1]}
                colors={["#000", "rgba(0, 0, 0, 0)"]}
              />
            </View>
            <View style={[styles.group11372, styles.groupPosition]}>
              <Image
                style={styles.topUpIcon}
                contentFit="cover"
                source={require("../assets/wallet.png")}
              />
              <Text style={[styles.text1, styles.blcTypo]}>Withdraw</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.frameParent}>
          <View style={[styles.activityParent, styles.iconsFlexBox]}>
            <Text style={[styles.activity, styles.activityTypo]}>Activity</Text>
            <Pressable
              style={styles.celoDollarCusdParent}
              onPress={openFrameContainer2}
            >
              <Text style={[styles.last7Days, styles.activityTypo]}>
                Last 7 days
              </Text>
              <Image
                style={[styles.chevronDown, styles.chevronDownLayout]}
                contentFit="cover"
                source={require("../assets/chevron-down.png")}
              />
            </Pressable>
          </View>
          <View style={styles.cardGroup}>
            <Pressable style={styles.cardLayout} onPress={openCardContainer3}>
              <View style={styles.rectangle6048} />
              <View style={[styles.group1052, styles.iconsFlexBox]}>
                <View style={styles.celoDollarCusdParent}>
                  <Image
                    style={styles.group11335Icon}
                    contentFit="cover"
                    source={require("../assets/group-11335.png")}
                  />
                  <View style={styles.topupParent}>
                    <Text style={[styles.topup, styles.blcTypo]}>
                      Commission
                    </Text>
                    <Text style={styles.minutesAgo}>29 May 2024, 9:12 pm</Text>
                  </View>
                </View>
                <Text style={styles.blc1}>-$0.08</Text>
              </View>
            </Pressable>
            <View style={[styles.card4, styles.cardLayout]}>
              <View style={styles.rectangle6048} />
              <View style={[styles.group1052, styles.iconsFlexBox]}>
                <View style={styles.celoDollarCusdParent}>
                  <Image
                    style={styles.group11335Icon}
                    contentFit="cover"
                    source={require("../assets/group-11335.png")}
                  />
                  <View style={styles.topupParent}>
                    <Text style={[styles.topup, styles.blcTypo]}>
                      Song Promotion
                    </Text>
                    <Text style={styles.minutesAgo}>12 Aug 2023, 9:12pm</Text>
                  </View>
                </View>
                <Text style={styles.blc1}>-$0.08</Text>
              </View>
            </View>
            <Pressable
              style={[styles.card4, styles.cardLayout]}
              onPress={openCardContainer5}
            >
              <View style={styles.rectangle6048} />
              <View style={[styles.group1052, styles.iconsFlexBox]}>
                <View style={styles.celoDollarCusdParent}>
                  <Image
                    style={styles.group11335Icon}
                    contentFit="cover"
                    source={require("../assets/group-11332.png")}
                  />
                  <View style={styles.topupParent}>
                    <Text style={[styles.topup, styles.blcTypo]}>Refund</Text>
                    <Text style={styles.minutesAgo}>26 May 2024, 9:12 pm</Text>
                  </View>
                </View>
                <Text style={styles.textTypo}>+$1.98</Text>
              </View>
            </Pressable>
            <View style={[styles.card4, styles.cardLayout]}>
              <View style={styles.rectangle6048} />
              <View style={[styles.group1052, styles.iconsFlexBox]}>
                <View style={styles.celoDollarCusdParent}>
                  <Image
                    style={styles.group11335Icon}
                    contentFit="cover"
                    source={require("../assets/group-11335.png")}
                  />
                  <View style={styles.topupParent}>
                    <Text style={[styles.topup, styles.blcTypo]}>
                      Premium Subscript...
                    </Text>
                    <Text style={styles.minutesAgo}>26 May 2024, 9:12 pm</Text>
                  </View>
                </View>
                <Text style={styles.blc1}>-$0.08</Text>
              </View>
            </View>
            <View style={[styles.card4, styles.cardLayout]}>
              <View style={styles.rectangle6048} />
              <View style={[styles.group1052, styles.iconsFlexBox]}>
                <View style={styles.celoDollarCusdParent}>
                  <Image
                    style={styles.group11335Icon}
                    contentFit="cover"
                    source={require("../assets/group-11335.png")}
                  />
                  <View style={styles.topupParent}>
                    <Text style={[styles.topup, styles.blcTypo]}>
                      Withdrawal
                    </Text>
                    <Text style={styles.minutesAgo}>Today, 11:49 am</Text>
                  </View>
                </View>
                <Text style={styles.blc1}>-$0.84</Text>
              </View>
            </View>
            <View style={[styles.card4, styles.cardLayout]}>
              <View style={styles.rectangle6048} />
              <View style={[styles.group1052, styles.iconsFlexBox]}>
                <View style={styles.celoDollarCusdParent}>
                  <Image
                    style={styles.group11335Icon}
                    contentFit="cover"
                    source={require("../assets/group-11332.png")}
                  />
                  <View style={styles.topupParent}>
                    <Text style={[styles.topup, styles.blcTypo]}>
                      Royalty Earning
                    </Text>
                    <Text style={styles.minutesAgo}>2 minutes ago</Text>
                  </View>
                </View>
                <Text style={styles.textTypo}>$0.84</Text>
              </View>
            </View>
            <View style={[styles.card4, styles.cardLayout]}>
              <View style={styles.rectangle6048} />
              <View style={[styles.group1052, styles.iconsFlexBox]}>
                <View style={styles.celoDollarCusdParent}>
                  <Image
                    style={styles.group11335Icon}
                    contentFit="cover"
                    source={require("../assets/group-11335.png")}
                  />
                  <View style={styles.topupParent}>
                    <Text style={[styles.topup, styles.blcTypo]}>
                      Withdrawal
                    </Text>
                    <Text style={styles.minutesAgo}>12 Aug 2023, 9:12pm</Text>
                  </View>
                </View>
                <Text style={styles.blc1}>-$0.84</Text>
              </View>
            </View>
            <View style={[styles.card4, styles.cardLayout]}>
              <View style={styles.rectangle6048} />
              <View style={[styles.group1052, styles.iconsFlexBox]}>
                <View style={styles.celoDollarCusdParent}>
                  <Image
                    style={styles.group11335Icon}
                    contentFit="cover"
                    source={require("../assets/group-11335.png")}
                  />
                  <View style={styles.topupParent}>
                    <Text style={[styles.topup, styles.blcTypo]}>
                      Withdrawal
                    </Text>
                    <Text style={styles.minutesAgo}>2 minutes ago</Text>
                  </View>
                </View>
                <Text style={styles.blc1}>-$0.08</Text>
              </View>
            </View>
            <View style={[styles.card4, styles.cardLayout]}>
              <View style={styles.rectangle6048} />
              <View style={[styles.group1052, styles.iconsFlexBox]}>
                <View style={styles.celoDollarCusdParent}>
                  <Image
                    style={styles.group11335Icon}
                    contentFit="cover"
                    source={require("../assets/group-11335.png")}
                  />
                  <View style={styles.topupParent}>
                    <Text style={[styles.topup, styles.blcTypo]}>
                      Withdrawal
                    </Text>
                    <Text style={styles.minutesAgo}>2 minutes ago</Text>
                  </View>
                </View>
                <Text style={styles.blc1}>-$0.84</Text>
              </View>
            </View>
            <View style={[styles.card4, styles.cardLayout]}>
              <View style={styles.rectangle6048} />
              <View style={[styles.group1052, styles.iconsFlexBox]}>
                <View style={styles.celoDollarCusdParent}>
                  <Image
                    style={styles.group11335Icon}
                    contentFit="cover"
                    source={require("../assets/group-11332.png")}
                  />
                  <View style={styles.topupParent}>
                    <Text style={[styles.topup, styles.blcTypo]}>
                      Loan granted
                    </Text>
                    <Text style={styles.minutesAgo}>2 minutes ago</Text>
                  </View>
                </View>
                <Text style={styles.textTypo}>+$0.84</Text>
              </View>
            </View>
            <View style={[styles.card4, styles.cardLayout]}>
              <View style={styles.rectangle6048} />
              <View style={[styles.group1052, styles.iconsFlexBox]}>
                <View style={styles.celoDollarCusdParent}>
                  <Image
                    style={styles.group11335Icon}
                    contentFit="cover"
                    source={require("../assets/group-11332.png")}
                  />
                  <View style={styles.topupParent}>
                    <Text style={[styles.topup, styles.blcTypo]}>
                      Wallet Top Up
                    </Text>
                    <Text style={styles.minutesAgo}>20 minutes ago</Text>
                  </View>
                </View>
                <Text style={styles.textTypo}>+$0.84</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.nav}>
          <View style={[styles.navChild, styles.iconLayout]} />
          <View style={[styles.icons, styles.iconsFlexBox]}>
            <Pressable
              style={styles.more}
              onPress={() => navigation.navigate("Others")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/more.png")}
              />
            </Pressable>
            <Pressable
              style={styles.more}
              onPress={() => navigation.navigate("WalletinCUSD")}
            >
              <Image
                style={[styles.icon1, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vuesaxboldemptywallet1.png")}
              />
            </Pressable>
            <Pressable
              style={styles.musicSquareAdd}
              onPress={() => navigation.navigate("UploadYourContent")}
            >
              <Text style={[styles.topup, styles.blcTypo]}>Upload Music</Text>
            </Pressable>
            <Pressable
              style={styles.more}
              onPress={() => navigation.navigate("Insights")}
            >
              <Image
                style={[styles.icon2, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/chartsquare.png")}
              />
            </Pressable>
            <Pressable
              style={styles.more}
              onPress={() => navigation.navigate("Discover")}
            >
              <Image
                style={[styles.icon3, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/musicplaylist1.png")}
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.headerPosition}>
          <View style={[styles.headerChild, styles.headerPosition]} />
          <View style={[styles.infoCircleParent, styles.yourWalletPosition]}>
            <Pressable
              style={styles.infoCircleLayout}
              onPress={openInfoCircleIcon}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/infocircle1.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.notification, styles.infoCircleLayout]}
              onPress={() => navigation.navigate("Notifications")}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/frame-1000000795.png")}
              />
            </Pressable>
          </View>
          <Text style={[styles.yourWallet, styles.yourWalletPosition]}>
            Your Wallet
          </Text>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={cardContainer2Visible}>
        <View style={styles.cardContainer2Overlay}>
          <Pressable
            style={styles.cardContainer2Bg}
            onPress={closeCardContainer2}
          />
          <Withdraw onClose={closeCardContainer2} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer2Visible}>
        <View style={styles.frameContainer2Overlay}>
          <Pressable
            style={styles.frameContainer2Bg}
            onPress={closeFrameContainer2}
          />
          <DropDown onClose={closeFrameContainer2} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={cardContainer3Visible}>
        <View style={styles.cardContainer3Overlay}>
          <Pressable
            style={styles.cardContainer3Bg}
            onPress={closeCardContainer3}
          />
          <TransactionDetailsIN onClose={closeCardContainer3} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={cardContainer5Visible}>
        <View style={styles.cardContainer5Overlay}>
          <Pressable
            style={styles.cardContainer5Bg}
            onPress={closeCardContainer5}
          />
          <TransactionDetailsIN1 onClose={closeCardContainer5} />
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
  cardPosition: {
    left: "50%",
    marginLeft: -167.5,
    width: 335,
    position: "absolute",
  },
  group1052Position: {
    left: 16,
    top: "50%",
    position: "absolute",
  },
  chevronDownLayout: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  text1Typo: {
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    lineHeight: 24,
  },
  blcTypo: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
  },
  textTypo: {
    color: Color.colorMediumseagreen,
    textAlign: "left",
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  mask1Position: {
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
    marginTop: -12,
    alignItems: "center",
    flexDirection: "row",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  cardLayout1: {
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
  cardLayout: {
    height: 70,
    width: 335,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  headerPosition: {
    height: 80,
    width: 375,
    left: 0,
    top: 0,
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
  image: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  celoDollarCusdIcon: {
    borderRadius: Border.br_81xl,
    width: 16,
  },
  currentBalance: {
    color: Color.primary0,
    textAlign: "center",
    marginLeft: 4,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
  },
  celoDollarCusdParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  blc: {
    fontSize: FontSize.mobileH3HeadingPage_size,
    letterSpacing: -1,
    lineHeight: 34,
    marginTop: 4,
    textAlign: "left",
  },
  polygon1Icon: {
    width: 9,
    height: 9,
  },
  text: {
    marginLeft: 8,
  },
  group1137: {
    marginTop: 4,
    alignItems: "center",
    flexDirection: "row",
  },
  textCurrentWallet: {
    marginTop: -45,
  },
  nftWallet36640551Icon: {
    marginTop: -70,
    right: -6,
    width: 140,
    height: 140,
    top: "50%",
    position: "absolute",
  },
  card: {
    top: 96,
    height: 150,
    width: 335,
    overflow: "hidden",
  },
  mask1: {
    backgroundColor: Color.colorGray_300,
    borderWidth: 1,
    borderColor: Color.primary20,
  },
  rectangle1: {
    backgroundColor: "transparent",
  },
  topUpIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  text1: {
    marginLeft: 8,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  group11371: {
    marginLeft: -40.75,
  },
  cardContainer2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  cardContainer2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  group11372: {
    marginLeft: -46.25,
  },
  card2: {
    marginLeft: 20,
  },
  cardParent: {
    top: 262,
    left: 20,
    flexDirection: "row",
    position: "absolute",
  },
  activity: {
    fontSize: FontSize.mobileH5HeadingComponent_size,
    textAlign: "left",
    lineHeight: 24,
  },
  frameContainer2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  last7Days: {
    textAlign: "right",
    opacity: 0.8,
    fontSize: FontSize.btnSmallNormal_size,
  },
  chevronDown: {
    marginLeft: 4,
  },
  activityParent: {
    alignItems: "center",
    width: 335,
  },
  cardContainer3Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  cardContainer3Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  rectangle6048: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    height: 70,
    backgroundColor: Color.colorGray_300,
    width: 335,
    position: "absolute",
  },
  group11335Icon: {
    width: 40,
    height: 40,
  },
  topup: {
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  minutesAgo: {
    lineHeight: 16,
    color: Color.primary10,
    marginTop: 2,
    fontSize: FontSize.btnSmallNormal_size,
    textAlign: "left",
    fontFamily: FontFamily.mobileBodyCopy,
  },
  topupParent: {
    marginLeft: 8,
  },
  blc1: {
    color: Color.warningDefault,
    textAlign: "left",
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  group1052: {
    marginTop: -21,
    width: 303,
    alignItems: "center",
    left: 16,
    top: "50%",
    position: "absolute",
  },
  card4: {
    marginTop: 16,
  },
  cardContainer5Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  cardContainer5Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  cardGroup: {
    height: 527,
    marginTop: 16,
  },
  frameParent: {
    top: 346,
    left: 20,
    position: "absolute",
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
  more: {
    width: 28,
    height: 28,
  },
  icon1: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
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
    borderColor: Color.primary30,
    borderWidth: 2,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderStyle: "solid",
    borderRadius: Border.br_81xl,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.primary,
  },
  icon2: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  icon3: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  icons: {
    bottom: 19,
    alignItems: "flex-end",
    width: 335,
    left: "50%",
    marginLeft: -167.5,
    position: "absolute",
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
    height: 60,
    left: "50%",
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.colorGray_1600,
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
  yourWallet: {
    fontSize: FontSize.mobileH4HeadingSection_size,
    left: 20,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
    lineHeight: 24,
  },
  walletinCusd: {
    flex: 1,
    height: 856,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.primary,
  },
});

export default WalletinCUSD;