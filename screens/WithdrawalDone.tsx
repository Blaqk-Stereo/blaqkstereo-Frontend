import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const WithdrawalDone = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.withdrawalDone}>
      <View style={styles.transaction1Parent}>
        <Image
          style={styles.transaction1Icon}
          contentFit="cover"
          source={require("../assets/transaction-1.png")}
        />
        <View style={styles.frameParent}>
          <View style={styles.withdrawalInProgressParent}>
            <Text style={styles.withdrawalInProgress}>
              Withdrawal in Progress!
            </Text>
            <Text style={[styles.yourWithdrawalIs, styles.buttonFlexBox]}>
              Your withdrawal is in progress. Keep an eye on your transaction
              history for updates, and your fund will soon be on its way to its
              destination.
            </Text>
          </View>
          <Pressable
            style={[styles.button, styles.buttonFlexBox]}
            onPress={() => navigation.navigate("WalletinCUSD")}
          >
            <Text style={[styles.done, styles.doneTypo]}>Done</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    width: 335,
    justifyContent: "center",
    alignItems: "center",
  },
  doneTypo: {
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
  },
  transaction1Icon: {
    width: 200,
    height: 200,
  },
  withdrawalInProgress: {
    fontSize: FontSize.mobileH2HeadingDefault_size,
    letterSpacing: -1,
    lineHeight: 34,
    fontWeight: "700",
    fontFamily: FontFamily.mobileH1HeadingDisplay,
    color: Color.white,
    textAlign: "center",
  },
  yourWithdrawalIs: {
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.primary0,
    display: "flex",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
    marginTop: 16,
  },
  withdrawalInProgressParent: {
    alignItems: "center",
  },
  done: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH3HeadingPage,
    color: Color.primary,
  },
  button: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    flexDirection: "row",
    paddingHorizontal: Padding.p_99xl,
    paddingVertical: Padding.p_sm,
    marginTop: 24,
  },
  frameParent: {
    marginTop: 16,
  },
  transaction1Parent: {
    position: "absolute",
    marginTop: -207,
    marginLeft: -167.5,
    top: "50%",
    left: "50%",
    alignItems: "center",
  },
  withdrawalDone: {
    backgroundColor: Color.primary,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default WithdrawalDone;
