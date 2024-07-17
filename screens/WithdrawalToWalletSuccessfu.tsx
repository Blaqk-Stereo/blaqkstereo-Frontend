import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const WithdrawalToWalletSuccessfu = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.withdrawalToWalletSuccessfu, styles.lineIconLayout]}>
      <View style={styles.successfulPayment1Parent}>
        <Image
          style={styles.successfulPayment1Icon}
          contentFit="cover"
          source={require("../assets/successfulpayment-1.png")}
        />
        <View style={styles.frameParent}>
          <View style={styles.withdrawalSuccessfulParent}>
            <Text style={styles.withdrawalSuccessful}>
              Withdrawal Successful!
            </Text>
            <Text style={[styles.yourFundsHave, styles.ownerLayout]}>
              Your funds have been successfully withdrawn from your wallet.
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
                  <Text style={styles.blc}>ABC123YCV</Text>
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
                  <Text style={styles.blc}>28 Aug 2024</Text>
                </View>
                <View style={styles.author}>
                  <Text style={[styles.amount, styles.amountTypo]}>
                    Recipient
                  </Text>
                  <Text style={styles.blc}>07012345678</Text>
                </View>
              </View>
            </View>
          </View>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("WalletinCUSD")}
          >
            <Text style={styles.done}>Done</Text>
          </Pressable>
        </View>
      </View>
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
  successfulPayment1Icon: {
    width: 200,
    height: 200,
  },
  withdrawalSuccessful: {
    fontSize: FontSize.mobileH2HeadingDefault_size,
    letterSpacing: -1,
    lineHeight: 34,
    fontWeight: "700",
    fontFamily: FontFamily.mobileH2HeadingDefault,
    textAlign: "center",
    color: Color.gray0White,
  },
  yourFundsHave: {
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
    color: Color.gray0White,
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
  withdrawalSuccessfulParent: {
    alignItems: "center",
  },
  done: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    color: Color.primary,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
  },
  button: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.gray0White,
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
  successfulPayment1Parent: {
    position: "absolute",
    marginTop: -295,
    marginLeft: -167.5,
    top: "50%",
    left: "50%",
    alignItems: "center",
  },
  withdrawalToWalletSuccessfu: {
    backgroundColor: Color.primary,
    flex: 1,
    height: 812,
  },
});

export default WithdrawalToWalletSuccessfu;
