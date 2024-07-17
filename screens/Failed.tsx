import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Failed = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.failed}>
      <View style={styles.transactionError1Parent}>
        <Image
          style={styles.transactionError1Icon}
          contentFit="cover"
          source={require("../assets/transactionerror-1.png")}
        />
        <View>
          <View style={styles.subscriptionFailedParent}>
            <Text style={styles.subscriptionFailed}>Subscription Failed</Text>
            <Text style={styles.wereSorryBut}>
              We’re sorry, but there was an issue processing your subscription.
              Please check your payment details and try again.
            </Text>
          </View>
          <View style={styles.buttonParent}>
            <Pressable
              style={[styles.button, styles.buttonFlexBox]}
              onPress={() => navigation.navigate("SuccessfulpaidPlans")}
            >
              <Text style={[styles.retryPayment, styles.goBackTypo]}>
                Retry payment
              </Text>
            </Pressable>
            <Pressable
              style={[styles.button1, styles.buttonFlexBox]}
              onPress={() => navigation.goBack()}
            >
              <Text style={[styles.goBack, styles.goBackTypo]}>Go back</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_99xl,
    flexDirection: "row",
    borderRadius: Border.br_81xl,
    width: 335,
    justifyContent: "center",
    alignItems: "center",
  },
  goBackTypo: {
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
  },
  transactionError1Icon: {
    width: 200,
    height: 200,
  },
  subscriptionFailed: {
    fontSize: FontSize.mobileH2HeadingDefault_size,
    letterSpacing: -1,
    lineHeight: 34,
    fontWeight: "700",
    fontFamily: FontFamily.mobileH1HeadingDisplay,
    textAlign: "center",
    color: Color.white,
  },
  wereSorryBut: {
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.primary0,
    display: "flex",
    marginTop: 12,
    width: 335,
    justifyContent: "center",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
    alignItems: "center",
  },
  subscriptionFailedParent: {
    alignItems: "center",
  },
  retryPayment: {
    color: Color.primary,
  },
  button: {
    backgroundColor: Color.white,
  },
  goBack: {
    color: Color.white,
    fontWeight: "600",
  },
  button1: {
    borderStyle: "solid",
    borderColor: Color.white,
    borderWidth: 1,
    marginTop: 16,
  },
  buttonParent: {
    marginTop: 24,
  },
  transactionError1Parent: {
    position: "absolute",
    marginTop: -231,
    marginLeft: -167.5,
    top: "50%",
    left: "50%",
    alignItems: "center",
  },
  failed: {
    backgroundColor: Color.primary,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Failed;
