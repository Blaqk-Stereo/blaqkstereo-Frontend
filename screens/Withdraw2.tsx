import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Component from "../components/Component";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Withdraw2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.withdraw}>
      <Text style={[styles.specifyTheAmount, styles.specifyTheAmountTypo]}>
        Specify the amount you wish to withdraw from your wallet.
      </Text>
      <View style={styles.modalParent}>
        <View style={styles.modal}>
          <View style={styles.rectangleLayout}>
            <View style={[styles.rectangle2975, styles.rectangleLayout]}>
              <View style={[styles.rectangle, styles.rectangleLayout]} />
              <View style={[styles.rectangle1, styles.rectangleLayout]} />
            </View>
            <Text style={[styles.blc, styles.blcFlexBox]}>NGN</Text>
            <Text style={[styles.blc1, styles.blcTypo]}>2,000</Text>
          </View>
          <View style={styles.arrowSwapParentFlexBox}>
            <Image
              style={styles.arrowSwapIcon}
              contentFit="cover"
              source={require("../assets/arrowswap.png")}
            />
            <Text
              style={[styles.enterYourPlaylist, styles.specifyTheAmountTypo]}
            >
              $220.72
            </Text>
          </View>
          <View
            style={[styles.availableBalance, styles.arrowSwapParentFlexBox]}
          >
            <Text style={[styles.yourBalance012345, styles.useMaxTypo]}>
              Your balance: 2,500.15 cUSD
            </Text>
            <View style={[styles.label, styles.labelFlexBox]}>
              <Text style={[styles.useMax, styles.useMaxTypo]}>Use Max</Text>
            </View>
          </View>
        </View>
        <Pressable
          style={[styles.button, styles.labelFlexBox]}
          onPress={() => navigation.navigate("ConfirmTransaction")}
        >
          <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
        </Pressable>
      </View>
      <View style={[styles.keyboard, styles.keyboardPosition]}>
        <View style={[styles.background, styles.iconLayout]} />
        <Image
          style={[styles.backIcon, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/back.png")}
        />
        <View style={styles.view}>
          <View style={[styles.child, styles.childLayout]} />
          <Text style={[styles.text, styles.textTypo]}>.</Text>
        </View>
        <View style={[styles.view1, styles.itemLayout]}>
          <View style={[styles.item, styles.itemLayout]} />
          <Text style={[styles.text1, styles.text1Position]}>0</Text>
        </View>
        <Component carCount="9" propLeft={249} propTop={154} />
        <Component carCount="8" propLeft={137} propTop={154} />
        <Component carCount="7" propLeft={24} propTop={154} />
        <Component carCount="6" propLeft={249} propTop={83} />
        <Component carCount="5" propLeft={137} propTop={83} />
        <Component carCount="4" propLeft={24} propTop={83} />
        <Component carCount="3" propLeft={249} propTop={12} />
        <Component carCount="2" propLeft={137} propTop={12} />
        <Component carCount="1" propLeft={24} propTop={12} />
      </View>
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
        <Text style={[styles.makeAWithdrawal, styles.pressablePosition]}>
          Make a withdrawal
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  specifyTheAmountTypo: {
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  rectangleLayout: {
    height: 64,
    width: 295,
  },
  blcFlexBox: {
    textAlign: "right",
    color: Color.white,
  },
  blcTypo: {
    fontFamily: FontFamily.mobileH1HeadingDisplay,
    fontWeight: "700",
    lineHeight: 34,
    letterSpacing: -1,
    fontSize: FontSize.mobileH2HeadingDefault_size,
    marginTop: -16.7,
    top: "50%",
    position: "absolute",
  },
  arrowSwapParentFlexBox: {
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  useMaxTypo: {
    fontSize: FontSize.btnSmallNormal_size,
    fontFamily: FontFamily.mobileBodyCopy,
  },
  labelFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  continueTypo: {
    fontSize: FontSize.mobileH5HeadingComponent_size,
    lineHeight: 24,
  },
  keyboardPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  childLayout: {
    height: 20,
    width: 26,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.mobileBodyCopy,
    position: "absolute",
  },
  itemLayout: {
    height: 65,
    width: 102,
    position: "absolute",
  },
  text1Position: {
    left: "50%",
    color: Color.white,
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
  specifyTheAmount: {
    top: 86,
    width: 335,
    textAlign: "center",
    color: Color.primary0,
    left: 20,
    position: "absolute",
  },
  rectangle: {
    borderRadius: Border.br_18xl,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.primary,
  },
  rectangle1: {
    left: 1,
    borderRadius: Border.br_17xl_5,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_100,
    borderWidth: 1,
    top: 0,
    position: "absolute",
  },
  rectangle2975: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  blc: {
    right: 16,
    fontFamily: FontFamily.mobileH1HeadingDisplay,
    fontWeight: "700",
    lineHeight: 34,
    letterSpacing: -1,
    fontSize: FontSize.mobileH2HeadingDefault_size,
    marginTop: -16.7,
    top: "50%",
    position: "absolute",
  },
  blc1: {
    left: 16,
    textAlign: "left",
    color: Color.white,
  },
  arrowSwapIcon: {
    width: 16,
    height: 16,
  },
  enterYourPlaylist: {
    color: Color.warningDefault,
    marginLeft: 8,
    textAlign: "left",
  },
  yourBalance012345: {
    textAlign: "left",
    color: Color.primary0,
  },
  useMax: {
    lineHeight: 16,
    textAlign: "right",
    color: Color.white,
  },
  label: {
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_9xs,
    backgroundColor: Color.primary,
  },
  availableBalance: {
    width: 287,
    justifyContent: "space-between",
  },
  modal: {
    borderRadius: Border.br_5xl,
    padding: Padding.p_5xl,
    alignItems: "center",
    backgroundColor: Color.colorGray_300,
  },
  continue: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH3HeadingPage,
    color: Color.primary,
    textAlign: "center",
  },
  button: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    marginTop: 40,
    width: 335,
  },
  modalParent: {
    top: 154,
    left: 20,
    position: "absolute",
  },
  background: {
    top: "0%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  backIcon: {
    top: 245,
    left: 287,
  },
  child: {
    top: 17,
    borderRadius: Border.br_9xs,
    left: 0,
  },
  text: {
    left: 9,
    color: Color.white,
    top: 0,
    textAlign: "center",
  },
  view: {
    top: 228,
    left: 63,
    height: 38,
    width: 26,
    position: "absolute",
  },
  item: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorGray_300,
    width: 102,
  },
  text1: {
    marginTop: -18.5,
    marginLeft: -11,
    width: 22,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.mobileBodyCopy,
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  view1: {
    top: 225,
    left: 137,
  },
  keyboard: {
    height: "37.68%",
    top: "62.32%",
    width: "100%",
  },
  headerChild: {
    backgroundColor: Color.primary,
  },
  icon: {
    overflow: "hidden",
  },
  pressable: {
    width: 24,
    height: 24,
    left: 20,
  },
  makeAWithdrawal: {
    marginLeft: -70.5,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    left: "50%",
    color: Color.white,
    textAlign: "center",
    fontSize: FontSize.mobileH5HeadingComponent_size,
    lineHeight: 24,
  },
  withdraw: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.primary,
  },
});

export default Withdraw2;