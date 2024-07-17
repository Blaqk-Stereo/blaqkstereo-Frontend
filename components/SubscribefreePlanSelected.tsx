import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

export type SubscribefreePlanSelectedType = {
  onClose?: () => void;
};

const SubscribefreePlanSelected = ({
  onClose,
}: SubscribefreePlanSelectedType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.subscribefreePlanSelected}>
      <View style={styles.modal}>
        <Text style={styles.youveSelectedThe}>
          You've Selected the Free Plan
        </Text>
        <Text style={styles.greatChoiceWith}>
          Great choice! With the Free Plan, we'll distribute your music to all
          major streaming platforms and you'll keep 90% of your royalties.
        </Text>
        <View style={styles.frameParent}>
          <Pressable
            style={[styles.confirmPlanWrapper, styles.wrapperFlexBox]}
            onPress={() => navigation.navigate("SuccessfulfreePlan")}
          >
            <Text style={styles.confirmPlan}>Confirm Plan</Text>
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
    left: 0,
    width: 225,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  youveSelectedThe: {
    fontSize: FontSize.mobileH5HeadingComponent_size,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    textAlign: "center",
    color: Color.white,
    lineHeight: 24,
  },
  greatChoiceWith: {
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
  confirmPlan: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH3HeadingPage,
    color: Color.primary,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
    lineHeight: 24,
  },
  confirmPlanWrapper: {
    top: 0,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    paddingVertical: Padding.p_5xs,
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
  subscribefreePlanSelected: {
    backgroundColor: Color.colorGray_1200,
    width: 375,
    height: 812,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default SubscribefreePlanSelected;
