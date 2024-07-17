import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

export type CancelPlanType = {
  onClose?: () => void;
};

const CancelPlan = ({ onClose }: CancelPlanType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.cancelPlan}>
      <View style={styles.overlay} />
      <View style={styles.modal}>
        <Text style={styles.planCancellation}>Plan Cancellation</Text>
        <Text style={styles.wereSorryTo}>
          We're sorry to see you go, but we respect your decision to cancel your
          subscription. Your current subscription will remain active until the
          end of the current billing cycle.
        </Text>
        <View style={styles.frameParent}>
          <Pressable
            style={[styles.proceedWrapper, styles.wrapperFlexBox]}
            onPress={() => navigation.navigate("PlanCancelled")}
          >
            <Text style={styles.proceed}>Proceed</Text>
          </Pressable>
          <View style={[styles.cancelWrapper, styles.wrapperFlexBox]}>
            <Text style={styles.cancel}>Cancel</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    paddingHorizontal: Padding.p_81xl,
    flexDirection: "row",
    width: 225,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  overlay: {
    backgroundColor: Color.colorGray_1200,
    left: 0,
    position: "absolute",
    top: 0,
    height: 812,
    width: 375,
  },
  planCancellation: {
    fontSize: FontSize.mobileH5HeadingComponent_size,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    textAlign: "center",
    color: Color.white,
    lineHeight: 24,
  },
  wereSorryTo: {
    color: Color.primary0,
    display: "flex",
    width: 287,
    marginTop: 24,
    justifyContent: "center",
    fontFamily: FontFamily.mobileBodyCopy,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
    lineHeight: 24,
    alignItems: "center",
  },
  proceed: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH3HeadingPage,
    color: Color.primary,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
    lineHeight: 24,
  },
  proceedWrapper: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    paddingVertical: Padding.p_5xs,
    top: 0,
    flexDirection: "row",
  },
  cancel: {
    fontSize: FontSize.btnSmallNormal_size,
    fontFamily: FontFamily.mobileBodyCopy,
    textAlign: "center",
    color: Color.white,
    lineHeight: 24,
  },
  cancelWrapper: {
    top: 40,
    paddingTop: Padding.p_5xs,
  },
  frameParent: {
    height: 72,
    width: 225,
    marginTop: 24,
  },
  modal: {
    marginTop: -144,
    marginLeft: -167.5,
    top: "50%",
    left: "50%",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorGray_300,
    padding: Padding.p_5xl,
    alignItems: "center",
    position: "absolute",
  },
  cancelPlan: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: 812,
    width: 375,
  },
});

export default CancelPlan;