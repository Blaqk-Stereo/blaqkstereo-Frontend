import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

export type DeleteLinkedBankAccountType = {
  onClose?: () => void;
};

const DeleteLinkedBankAccount = ({ onClose }: DeleteLinkedBankAccountType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.deleteLinkedBankAccount}>
      <View style={styles.prompt}>
        <Text style={styles.removeBankAccount}>Remove Bank Account</Text>
        <Text style={styles.areYouSure}>
          Are you sure you want to delete your linked bank account? This action
          cannot be undone and may affect your ability to withdraw funds.
        </Text>
        <View style={styles.frameParent}>
          <Pressable
            style={[styles.yesDeleteWrapper, styles.wrapperFlexBox]}
            onPress={() => navigation.navigate("Languages")}
          >
            <Text style={styles.yesDelete}>Yes, Delete</Text>
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
    justifyContent: "center",
    flexDirection: "row",
    left: 0,
    width: 225,
    alignItems: "center",
    position: "absolute",
  },
  removeBankAccount: {
    fontSize: FontSize.mobileH5HeadingComponent_size,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    textAlign: "center",
    color: Color.gray0White,
    lineHeight: 24,
  },
  areYouSure: {
    color: Color.primary0,
    width: 295,
    marginTop: 20,
    fontFamily: FontFamily.mobileBodyCopy,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
    lineHeight: 24,
  },
  yesDelete: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    color: Color.errorDefault,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
    lineHeight: 24,
  },
  yesDeleteWrapper: {
    top: 0,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: Padding.p_5xs,
  },
  cancel: {
    fontSize: FontSize.btnSmallNormal_size,
    fontFamily: FontFamily.mobileBodyCopy,
    textAlign: "center",
    color: Color.gray0White,
    lineHeight: 24,
  },
  cancelWrapper: {
    top: 40,
    paddingTop: Padding.p_5xs,
  },
  frameParent: {
    height: 72,
    width: 225,
    marginTop: 20,
  },
  prompt: {
    marginTop: -140,
    marginLeft: -163.5,
    top: "50%",
    left: "50%",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorGray_300,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xl,
    alignItems: "center",
    position: "absolute",
  },
  deleteLinkedBankAccount: {
    backgroundColor: Color.colorGray_1200,
    width: 375,
    height: 812,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default DeleteLinkedBankAccount;