import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Padding, Color, FontSize, Border } from "../GlobalStyles";

export type SubscribeyearlySelectedType = {
  onClose?: () => void;
};

const SubscribeyearlySelected = ({ onClose }: SubscribeyearlySelectedType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.subscribeyearlySelected}>
      <View style={styles.modal}>
        <Text style={styles.youveSelectedThe}>
          You've Selected the Yearly Subscription Plan
        </Text>
        <Text style={styles.fantasticChoiceWithContainer}>
          <Text style={styles.fantasticChoiceWithContainer1}>
            <Text
              style={styles.fantasticChoiceWith}
            >{`Fantastic choice! With the Yearly Subscription Plan, you can release any number of songs within a year and keep 100% of your royalties. The cost is `}</Text>
            <Text style={[styles.text, styles.textTypo]}>$99.99</Text>
            <Text style={styles.fantasticChoiceWith}> per year.</Text>
          </Text>
        </Text>
        <View style={styles.frameParent}>
          <Pressable
            style={[styles.proceedToPaymentWrapper, styles.wrapperFlexBox]}
            onPress={() => navigation.navigate("Failed")}
          >
            <Text style={[styles.proceedToPayment, styles.textTypo]}>
              Proceed to Payment
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
  textTypo: {
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
  fantasticChoiceWith: {
    color: Color.primary0,
    fontFamily: FontFamily.mobileBodyCopy,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  text: {
    color: Color.white,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  fantasticChoiceWithContainer1: {
    width: "100%",
  },
  fantasticChoiceWithContainer: {
    display: "flex",
    marginTop: 24,
    width: 287,
    textAlign: "center",
    lineHeight: 24,
    alignItems: "center",
  },
  proceedToPayment: {
    color: Color.primary,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
    lineHeight: 24,
  },
  proceedToPaymentWrapper: {
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
    marginTop: -168,
    marginLeft: -167.5,
    top: "50%",
    left: "50%",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorGray_300,
    padding: Padding.p_5xl,
    alignItems: "center",
    position: "absolute",
  },
  subscribeyearlySelected: {
    backgroundColor: Color.colorGray_1200,
    width: 375,
    height: 812,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default SubscribeyearlySelected;
