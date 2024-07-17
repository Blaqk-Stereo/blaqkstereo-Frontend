import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

export type CompleteYourPaymentToFinalType = {
  onClose?: () => void;
};

const CompleteYourPaymentToFinal = ({
  onClose,
}: CompleteYourPaymentToFinalType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.completeYourPaymentToFinal}>
      <View style={styles.modal}>
        <Text style={[styles.completeYourPayment, styles.cancelFlexBox]}>
          Complete your payment to finalize your release.
        </Text>
        <Text
          style={[styles.toDistributeYourContainer, styles.makePaymentTypo]}
        >
          <Text style={styles.toDistributeYourContainer1}>
            <Text
              style={styles.toDistributeYour}
            >{`To distribute your content, a one-time fee of
`}</Text>
            <Text style={[styles.cusd, styles.cusdTypo]}>{`19.99 cUSD
`}</Text>
            <Text style={styles.toDistributeYour}>
              will be deducted from your wallet balance.
            </Text>
          </Text>
        </Text>
        <Text style={[styles.yourBalance012345, styles.cancelTypo]}>
          Your balance: 0.123 cUSD
        </Text>
        <View style={styles.frameParent}>
          <Pressable
            style={[styles.makePaymentWrapper, styles.wrapperFlexBox]}
            onPress={() => navigation.navigate("Finishing1")}
          >
            <Text style={[styles.makePayment, styles.cusdTypo]}>
              Make Payment
            </Text>
          </Pressable>
          <View style={[styles.cancelWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.cancel, styles.cancelTypo]}>Cancel</Text>
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
  makePaymentTypo: {
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
    lineHeight: 24,
  },
  cusdTypo: {
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  cancelTypo: {
    fontSize: FontSize.btnSmallNormal_size,
    fontFamily: FontFamily.mobileBodyCopy,
  },
  wrapperFlexBox: {
    paddingHorizontal: Padding.p_81xl,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  completeYourPayment: {
    fontSize: FontSize.mobileH5HeadingComponent_size,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    width: 295,
  },
  toDistributeYour: {
    color: Color.primary0,
    fontFamily: FontFamily.mobileBodyCopy,
  },
  cusd: {
    color: Color.white,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  toDistributeYourContainer1: {
    width: "100%",
  },
  toDistributeYourContainer: {
    display: "flex",
    marginTop: 16,
    width: 295,
    alignItems: "center",
  },
  yourBalance012345: {
    color: Color.warningDefault,
    textAlign: "left",
    marginTop: 16,
  },
  makePayment: {
    color: Color.primary,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
    lineHeight: 24,
  },
  makePaymentWrapper: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    paddingVertical: Padding.p_3xs,
    width: 295,
  },
  cancel: {
    textAlign: "center",
    lineHeight: 24,
    color: Color.white,
  },
  cancelWrapper: {
    width: 225,
    paddingTop: Padding.p_5xs,
  },
  frameParent: {
    marginTop: 16,
    alignItems: "center",
  },
  modal: {
    position: "absolute",
    marginTop: -153,
    marginLeft: -171.5,
    top: "50%",
    left: "50%",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorGray_300,
    padding: Padding.p_5xl,
    alignItems: "center",
  },
  completeYourPaymentToFinal: {
    backgroundColor: Color.colorGray_1200,
    width: 375,
    height: 812,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default CompleteYourPaymentToFinal;
