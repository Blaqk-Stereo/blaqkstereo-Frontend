import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Padding, Color, FontSize, Border } from "../GlobalStyles";

export type SubscribepayPerReleaseSeleType = {
  onClose?: () => void;
};

const SubscribepayPerReleaseSele = ({
  onClose,
}: SubscribepayPerReleaseSeleType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.subscribepayPerReleaseSele}>
      <View style={styles.modal}>
        <Text style={styles.youveSelectedThe}>
          You've Selected the Pay-Per-Release Plan
        </Text>
        <Text style={styles.excellentChoiceWithContainer}>
          <Text style={styles.excellentChoiceWithContainer1}>
            <Text
              style={styles.excellentChoiceWith}
            >{`Excellent choice! With the Pay-Per-Release Plan, you can release multiple songs or albums and keep 100% of your royalties. The cost is `}</Text>
            <Text style={styles.text}>
              <Text style={[styles.text1, styles.text1Typo]}>$19.99</Text>
            </Text>
            <Text style={styles.perRelease}>
              <Text style={styles.text}>{` `}</Text>
              <Text style={styles.perRelease1}>per release.</Text>
            </Text>
          </Text>
        </Text>
        <View style={styles.frameParent}>
          <Pressable
            style={[styles.confirmPlanWrapper, styles.wrapperFlexBox]}
            onPress={() => navigation.navigate("SuccessfulpaidPlans")}
          >
            <Text style={[styles.confirmPlan, styles.text1Typo]}>
              Confirm Plan
            </Text>
          </Pressable>
          <View style={[styles.cancelWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.cancel, styles.cancelFlexBox]}>Cancel</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text1Typo: {
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  wrapperFlexBox: {
    paddingHorizontal: Padding.p_81xl,
    justifyContent: "center",
    flexDirection: "row",
    left: 0,
    width: 225,
    alignItems: "center",
    position: "absolute",
  },
  cancelFlexBox: {
    textAlign: "center",
    lineHeight: 24,
  },
  youveSelectedThe: {
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    width: 287,
    textAlign: "center",
    color: Color.white,
    lineHeight: 24,
    fontSize: FontSize.mobileH5HeadingComponent_size,
  },
  excellentChoiceWith: {
    color: Color.primary0,
    fontFamily: FontFamily.mobileBodyCopy,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  text1: {
    fontSize: FontSize.mobileH5HeadingComponent_size,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  text: {
    color: Color.white,
  },
  perRelease1: {
    color: Color.primary0,
  },
  perRelease: {
    fontFamily: FontFamily.mobileBodyCopy,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  excellentChoiceWithContainer1: {
    width: "100%",
  },
  excellentChoiceWithContainer: {
    display: "flex",
    marginTop: 24,
    width: 287,
    textAlign: "center",
    lineHeight: 24,
    alignItems: "center",
  },
  confirmPlan: {
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
    color: Color.white,
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
    marginTop: -156,
    marginLeft: -167.5,
    top: "50%",
    left: "50%",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorGray_300,
    padding: Padding.p_5xl,
    alignItems: "center",
    position: "absolute",
  },
  subscribepayPerReleaseSele: {
    backgroundColor: Color.colorGray_1200,
    width: 375,
    height: 812,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default SubscribepayPerReleaseSele;
