import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
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
        <View style={[styles.view1, styles.viewLayout]}>
          <View style={[styles.item, styles.viewLayout]} />
          <Text style={[styles.text1, styles.text1Position]}>0</Text>
        </View>
        <View style={[styles.view2, styles.viewLayout]}>
          <View style={[styles.item, styles.viewLayout]} />
          <View style={[styles.view3, styles.view3Position]}>
            <Text style={[styles.text2, styles.view3Position]}>9</Text>
          </View>
        </View>
        <View style={[styles.view4, styles.viewLayout]}>
          <View style={[styles.item, styles.viewLayout]} />
          <View style={[styles.view3, styles.view3Position]}>
            <Text style={[styles.text2, styles.view3Position]}>8</Text>
          </View>
        </View>
        <View style={[styles.view6, styles.viewLayout]}>
          <View style={[styles.item, styles.viewLayout]} />
          <View style={[styles.view3, styles.view3Position]}>
            <Text style={[styles.text2, styles.view3Position]}>7</Text>
          </View>
        </View>
        <View style={[styles.view8, styles.viewPosition1]}>
          <View style={[styles.item, styles.viewLayout]} />
          <View style={[styles.view3, styles.view3Position]}>
            <Text style={[styles.text2, styles.view3Position]}>6</Text>
          </View>
        </View>
        <View style={[styles.view10, styles.viewPosition1]}>
          <View style={[styles.item, styles.viewLayout]} />
          <View style={[styles.view3, styles.view3Position]}>
            <Text style={[styles.text2, styles.view3Position]}>5</Text>
          </View>
        </View>
        <View style={[styles.view12, styles.viewPosition1]}>
          <View style={[styles.item, styles.viewLayout]} />
          <View style={[styles.view3, styles.view3Position]}>
            <Text style={[styles.text2, styles.view3Position]}>4</Text>
          </View>
        </View>
        <View style={[styles.view14, styles.viewPosition]}>
          <View style={[styles.item, styles.viewLayout]} />
          <View style={[styles.view3, styles.view3Position]}>
            <Text style={[styles.text2, styles.view3Position]}>3</Text>
          </View>
        </View>
        <View style={[styles.view16, styles.viewPosition]}>
          <View style={[styles.item, styles.viewLayout]} />
          <View style={[styles.view3, styles.view3Position]}>
            <Text style={[styles.text2, styles.view3Position]}>2</Text>
          </View>
        </View>
        <View style={[styles.view18, styles.viewPosition]}>
          <View style={[styles.item, styles.viewLayout]} />
          <View style={[styles.view3, styles.view3Position]}>
            <Text style={[styles.text2, styles.view3Position]}>1</Text>
          </View>
        </View>
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
  },
  viewLayout: {
    height: 65,
    width: 102,
    position: "absolute",
  },
  text1Position: {
    left: "50%",
    color: Color.white,
    textAlign: "center",
  },
  view3Position: {
    width: 15,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  viewPosition1: {
    top: 83,
    height: 65,
    width: 102,
    position: "absolute",
  },
  viewPosition: {
    top: 12,
    height: 65,
    width: 102,
    position: "absolute",
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
    position: "absolute",
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
    marginLeft: -11,
    width: 22,
    marginTop: -18.5,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.mobileBodyCopy,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  view1: {
    top: 225,
    left: 137,
  },
  text2: {
    marginTop: -19,
    marginLeft: -7.5,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.white,
    textAlign: "center",
  },
  view3: {
    marginLeft: -7,
    marginTop: -18.5,
    height: 38,
  },
  view2: {
    left: 249,
    top: 154,
  },
  view4: {
    left: 137,
    top: 154,
  },
  view6: {
    left: 24,
    top: 154,
  },
  view8: {
    left: 249,
  },
  view10: {
    left: 137,
  },
  view12: {
    left: 24,
  },
  view14: {
    left: 249,
  },
  view16: {
    left: 137,
  },
  view18: {
    left: 24,
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
