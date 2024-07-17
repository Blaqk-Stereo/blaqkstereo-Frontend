import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

export type WithdrawType = {
  onClose?: () => void;
};

const Withdraw = ({ onClose }: WithdrawType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.withdraw}>
      <View style={styles.overlay} />
      <View style={styles.modal}>
        <Text style={[styles.howWouldYou, styles.cancelFlexBox]}>
          How would you like to proceed?
        </Text>
        <Pressable
          style={[styles.withdrawToBankWrapper, styles.frameParentSpaceBlock]}
          onPress={() => navigation.navigate("Withdraw1")}
        >
          <Text style={[styles.withdrawToBank, styles.withdrawTypo]}>
            Withdraw to bank
          </Text>
        </Pressable>
        <View style={[styles.frameParent, styles.frameParentSpaceBlock]}>
          <Pressable
            style={[
              styles.withdrawToMinipayWalletWrapper,
              styles.withdrawWrapperFlexBox,
            ]}
            onPress={() => navigation.navigate("TopUpWallet")}
          >
            <Text style={[styles.withdrawToMinipay, styles.withdrawTypo]}>
              Withdraw to MiniPay wallet
            </Text>
          </Pressable>
          <View style={styles.cancelWrapper}>
            <Text style={[styles.cancel, styles.cancelFlexBox]}>Cancel</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cancelFlexBox: {
    textAlign: "center",
    lineHeight: 24,
    color: Color.white,
  },
  frameParentSpaceBlock: {
    marginTop: 24,
    width: 287,
  },
  withdrawTypo: {
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
    lineHeight: 24,
  },
  withdrawWrapperFlexBox: {
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_81xl,
    paddingHorizontal: Padding.p_81xl,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: Color.colorGray_1200,
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
    width: 375,
  },
  howWouldYou: {
    fontSize: FontSize.mobileH5HeadingComponent_size,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
  },
  withdrawToBank: {
    color: Color.primary,
  },
  withdrawToBankWrapper: {
    backgroundColor: Color.white,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_81xl,
    paddingHorizontal: Padding.p_81xl,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
  },
  withdrawToMinipay: {
    color: Color.white,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  withdrawToMinipayWalletWrapper: {
    backgroundColor: Color.primary20,
    width: 287,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_81xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  cancel: {
    fontSize: FontSize.btnSmallNormal_size,
    fontFamily: FontFamily.mobileBodyCopy,
  },
  cancelWrapper: {
    top: 40,
    left: 31,
    width: 225,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_81xl,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  frameParent: {
    height: 72,
  },
  modal: {
    marginTop: -116,
    marginLeft: -167.5,
    top: "50%",
    left: "50%",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorGray_300,
    padding: Padding.p_5xl,
    alignItems: "center",
    position: "absolute",
  },
  withdraw: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: 812,
    width: 375,
  },
});

export default Withdraw;