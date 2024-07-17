import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const WalletTopUpFailed = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.walletTopUpFailed, styles.lineIconLayout]}>
      <View style={styles.paymentFailed21Parent}>
        <Image
          style={styles.paymentFailed21}
          contentFit="cover"
          source={require("../assets/paymentfailed-2-1.png")}
        />
        <View style={styles.frameParent}>
          <View style={styles.topUpFailedParent}>
            <Text style={styles.topUpFailed}>Top Up Failed</Text>
            <Text style={[styles.thereWasAn, styles.ownerLayout]}>
              There was an issue processing your top-up request. Please check
              your payment details and try again
            </Text>
            <View style={[styles.owner, styles.ownerLayout]}>
              <View style={[styles.currentBidParent, styles.parentFlexBox]}>
                <View>
                  <Text style={[styles.amount, styles.amountTypo]}>Amount</Text>
                  <Text style={styles.blc}>$0.75</Text>
                </View>
                <View style={styles.author}>
                  <Text style={[styles.description, styles.amountTypo]}>
                    Transaction ID
                  </Text>
                  <Text style={styles.blc}>-</Text>
                </View>
              </View>
              <Image
                style={[styles.lineIcon, styles.lineIconLayout]}
                contentFit="cover"
                source={require("../assets/line1.png")}
              />
              <View style={[styles.authorParent, styles.parentFlexBox]}>
                <View>
                  <Text style={[styles.description, styles.amountTypo]}>
                    Date
                  </Text>
                  <Text style={styles.blc}>28 May 2024</Text>
                </View>
                <View style={styles.author}>
                  <Text style={[styles.amount, styles.amountTypo]}>
                    Method used
                  </Text>
                  <Text style={styles.blc}>Bank</Text>
                </View>
              </View>
            </View>
          </View>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("TopUpWallet2")}
          >
            <Text style={styles.tryAgain}>Try Again</Text>
          </Pressable>
        </View>
      </View>
      <Pressable
        style={styles.closeCircle}
        onPress={() => navigation.navigate("WalletinCUSD")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/closecircle2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  lineIconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  ownerLayout: {
    width: 335,
    marginTop: 16,
  },
  parentFlexBox: {
    justifyContent: "space-between",
    width: 303,
    flexDirection: "row",
  },
  amountTypo: {
    color: Color.primary10,
    lineHeight: 16,
    fontSize: FontSize.btnSmallNormal_size,
    fontFamily: FontFamily.mobileBodyCopy,
  },
  paymentFailed21: {
    width: 200,
    height: 200,
  },
  topUpFailed: {
    fontSize: FontSize.mobileH2HeadingDefault_size,
    letterSpacing: -1,
    lineHeight: 34,
    fontWeight: "700",
    fontFamily: FontFamily.mobileH2HeadingDefault,
    textAlign: "center",
    color: Color.white,
  },
  thereWasAn: {
    color: Color.primary0,
    display: "flex",
    justifyContent: "center",
    fontFamily: FontFamily.mobileBodyCopy,
    width: 335,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
    alignItems: "center",
  },
  amount: {
    textAlign: "left",
  },
  blc: {
    fontSize: FontSize.mobileH5HeadingComponent_size,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    marginTop: 8,
    textAlign: "left",
    lineHeight: 24,
    color: Color.white,
  },
  description: {
    textAlign: "right",
  },
  author: {
    alignItems: "flex-end",
  },
  currentBidParent: {
    alignItems: "center",
  },
  lineIcon: {
    alignSelf: "stretch",
    maxWidth: "100%",
    maxHeight: "100%",
    marginTop: 20,
  },
  authorParent: {
    marginTop: 20,
  },
  owner: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_300,
    padding: Padding.p_base,
  },
  topUpFailedParent: {
    alignItems: "center",
  },
  tryAgain: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    color: Color.primary,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
  },
  button: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_99xl,
    paddingVertical: Padding.p_sm,
    marginTop: 40,
    flexDirection: "row",
    width: 335,
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    marginTop: 16,
  },
  paymentFailed21Parent: {
    marginTop: -307,
    marginLeft: -167.5,
    top: "50%",
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  closeCircle: {
    top: 24,
    right: 20,
    width: 40,
    height: 40,
    position: "absolute",
  },
  walletTopUpFailed: {
    backgroundColor: Color.primary,
    flex: 1,
    height: 812,
  },
});

export default WalletTopUpFailed;
