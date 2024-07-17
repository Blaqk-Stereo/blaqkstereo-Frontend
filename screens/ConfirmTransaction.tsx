import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const ConfirmTransaction = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.confirmTransaction, styles.iconLayout]}>
      <Text style={styles.networkFee0000001}>
        Transaction Fee: 0.000001 cUSD
      </Text>
      <View style={styles.footer}>
        <Text style={styles.labelContent}>You are about to withdraw</Text>
        <Text style={[styles.blc, styles.blcFlexBox]}>2,000 NGN</Text>
        <View style={[styles.arrowSwapParent, styles.buttonFlexBox]}>
          <Image
            style={styles.arrowSwapIcon}
            contentFit="cover"
            source={require("../assets/arrowswap.png")}
          />
          <Text style={[styles.enterYourPlaylist, styles.blcFlexBox]}>
            $220.72
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.button, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("ConfirmTransaction1")}
      >
        <Text style={[styles.confirm, styles.confirmTypo]}>Confirm</Text>
      </Pressable>
      <Image
        style={styles.sendSign54384111Icon}
        contentFit="cover"
        source={require("../assets/sendsign5438411-1.png")}
      />
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Pressable
          style={[styles.pressable, styles.pressablePosition]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/241.png")}
          />
        </Pressable>
        <Text style={[styles.transactionSummary, styles.pressablePosition]}>
          Transaction summary
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  blcFlexBox: {
    textAlign: "left",
    lineHeight: 24,
  },
  buttonFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  confirmTypo: {
    fontSize: FontSize.mobileH5HeadingComponent_size,
    lineHeight: 24,
    textAlign: "center",
  },
  headerPosition: {
    height: 74,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  pressablePosition: {
    top: 40,
    position: "absolute",
  },
  networkFee0000001: {
    marginLeft: -91.5,
    top: 692,
    fontSize: FontSize.btnSmallNormal_size,
    lineHeight: 16,
    textAlign: "center",
    color: Color.warningDefault,
    fontFamily: FontFamily.mobileBodyCopy,
    left: "50%",
    position: "absolute",
  },
  labelContent: {
    alignSelf: "stretch",
    color: Color.gray0White,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
    fontFamily: FontFamily.mobileBodyCopy,
  },
  blc: {
    fontSize: FontSize.mobileH4HeadingSection_size,
    marginTop: 16,
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
    color: Color.gray0White,
  },
  arrowSwapIcon: {
    width: 16,
    height: 16,
  },
  enterYourPlaylist: {
    marginLeft: 8,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "left",
    color: Color.warningDefault,
    fontFamily: FontFamily.mobileBodyCopy,
  },
  arrowSwapParent: {
    marginTop: 16,
  },
  footer: {
    top: 409,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_300,
    padding: Padding.p_base,
    alignItems: "center",
    width: 335,
    marginLeft: -167.5,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  confirm: {
    color: Color.primary,
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
  },
  button: {
    bottom: 40,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.gray0White,
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    width: 335,
    marginLeft: -167.5,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  sendSign54384111Icon: {
    marginLeft: -149.5,
    top: 94,
    width: 300,
    height: 300,
    left: "50%",
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.primary,
  },
  icon: {
    height: "100%",
  },
  pressable: {
    left: 20,
    width: 24,
    height: 24,
  },
  transactionSummary: {
    marginLeft: -83.5,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    lineHeight: 24,
    textAlign: "center",
    color: Color.gray0White,
    left: "50%",
  },
  confirmTransaction: {
    flex: 1,
    height: 812,
    backgroundColor: Color.primary,
  },
});

export default ConfirmTransaction;