import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const SuccessfulpaidPlans = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.successfulpaidPlans}>
      <View style={styles.success48740921Parent}>
        <Image
          style={styles.success48740921Icon}
          contentFit="cover"
          source={require("../assets/success4874092-1.png")}
        />
        <View>
          <View style={styles.congratulationsParent}>
            <Text style={styles.congratulations}>Congratulations!</Text>
            <Text style={[styles.yourSubscriptionIs, styles.buttonFlexBox]}>
              Your subscription is now active. Start distributing your music and
              keep 100% of your royalties. We're excited to have you on board!
            </Text>
          </View>
          <Pressable
            style={[styles.button, styles.buttonFlexBox]}
            onPress={() => navigation.navigate("TurnOnNotificcations")}
          >
            <Text style={[styles.goToDashboard, styles.goToDashboardTypo]}>
              Go to dashboard
            </Text>
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
  goToDashboardTypo: {
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
  },
  success48740921Icon: {
    width: 240,
    height: 240,
  },
  congratulations: {
    fontSize: FontSize.mobileH2HeadingDefault_size,
    letterSpacing: -1,
    lineHeight: 34,
    fontWeight: "700",
    fontFamily: FontFamily.mobileH1HeadingDisplay,
    color: Color.white,
    textAlign: "center",
  },
  yourSubscriptionIs: {
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.primary0,
    display: "flex",
    marginTop: 12,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
  },
  congratulationsParent: {
    alignItems: "center",
  },
  goToDashboard: {
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
  success48740921Parent: {
    position: "absolute",
    marginTop: -217,
    marginLeft: -167.5,
    top: "50%",
    left: "50%",
    alignItems: "center",
  },
  successfulpaidPlans: {
    backgroundColor: Color.primary,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SuccessfulpaidPlans;
