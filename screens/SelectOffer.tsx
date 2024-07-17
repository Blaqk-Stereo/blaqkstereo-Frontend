import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const SelectOffer = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.selectOffer, styles.iconLayout]}>
      <View style={styles.frameParent}>
        <View style={[styles.frameGroup, styles.frameBorder]}>
          <View style={styles.youllGetParent}>
            <Text style={styles.youllGet}>You’ll get</Text>
            <View style={styles.frameContainer}>
              <View style={styles.cusdParent}>
                <Text style={[styles.cusd, styles.cusdFlexBox]}>1.32 cUSD</Text>
                <Image
                  style={styles.clipPathGroup}
                  contentFit="cover"
                  source={require("../assets/clip-path-group.png")}
                />
              </View>
              <View style={[styles.cusd1515NgnWrapper, styles.buttonFlexBox]}>
                <Text style={[styles.cusd1515, styles.cusdFlexBox]}>
                  1 cUSD = 1,515 NGN
                </Text>
              </View>
            </View>
          </View>
          <LinearGradient
            style={styles.bestValueWrapper}
            locations={[0, 0.47, 1]}
            colors={[
              "rgba(161, 26, 79, 0.64)",
              "rgba(161, 6, 68, 0.64)",
              "rgba(126, 19, 65, 0.64)",
            ]}
          >
            <Text style={[styles.bestValue, styles.proceedTypo]}>
              Best Value
            </Text>
          </LinearGradient>
        </View>
        <View style={[styles.frameWrapper, styles.frameBorder]}>
          <View>
            <View>
              <View style={styles.cusdParent}>
                <Text style={[styles.cusd, styles.cusdFlexBox]}>1.32 cUSD</Text>
                <Image
                  style={styles.dc96b9c6c6740326beff60TransfiIcon}
                  contentFit="cover"
                  source={require("../assets/63dc96b9c6c6740326beff60-transfismalllogopng.png")}
                />
              </View>
              <View style={[styles.cusd1515NgnWrapper, styles.buttonFlexBox]}>
                <Text style={[styles.cusd1515, styles.cusdFlexBox]}>
                  1 cUSD = 1,524 NGN
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frameWrapper, styles.frameBorder]}>
          <View>
            <View>
              <View style={styles.cusdParent}>
                <Text style={[styles.cusd, styles.cusdFlexBox]}>1.32 cUSD</Text>
                <Image
                  style={styles.clipPathGroup}
                  contentFit="cover"
                  source={require("../assets/group.png")}
                />
              </View>
              <View style={[styles.cusd1515NgnWrapper, styles.buttonFlexBox]}>
                <Text style={[styles.cusd1515, styles.cusdFlexBox]}>
                  1 cUSD = 1,568 NGN
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text
        style={[styles.theseOffersAre, styles.buttonLayout]}
      >{`These offers are provided by third parties under their own terms & conditions.`}</Text>
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("Finishing")}
      >
        <Text style={[styles.proceed, styles.proceedTypo]}>Proceed</Text>
      </Pressable>
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
        <Text style={[styles.selectAnOffer, styles.pressablePosition]}>
          Select An Offer
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  frameBorder: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_xs,
    borderWidth: 1,
    borderStyle: "solid",
  },
  cusdFlexBox: {
    textAlign: "left",
    color: Color.white,
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_81xl,
    flexDirection: "row",
  },
  proceedTypo: {
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
    textAlign: "left",
  },
  buttonLayout: {
    width: 335,
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
  youllGet: {
    width: 303,
    textAlign: "left",
    color: Color.primary0,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  cusd: {
    fontSize: FontSize.mobileH1HeadingDisplay_size,
    letterSpacing: -1,
    lineHeight: 34,
    fontWeight: "700",
    fontFamily: FontFamily.mobileH1HeadingDisplay,
    color: Color.white,
  },
  clipPathGroup: {
    height: 15,
    width: 64,
  },
  cusdParent: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: 303,
  },
  cusd1515: {
    color: Color.white,
    fontFamily: FontFamily.mobileBodyCopy,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  cusd1515NgnWrapper: {
    borderColor: Color.primary,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_7xs,
    marginTop: 8,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.primary,
  },
  frameContainer: {
    marginTop: 12,
  },
  youllGetParent: {
    zIndex: 0,
  },
  bestValue: {
    fontSize: FontSize.btnSmallNormal_size,
    color: Color.white,
  },
  bestValueWrapper: {
    marginLeft: -46.5,
    top: -11,
    borderColor: Color.secondaryDefault,
    borderWidth: 0.2,
    paddingVertical: Padding.p_9xs,
    backgroundColor: "transparent",
    zIndex: 1,
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    borderStyle: "solid",
    position: "absolute",
  },
  frameGroup: {
    backgroundColor: Color.colorGray_300,
    borderColor: Color.white,
  },
  dc96b9c6c6740326beff60TransfiIcon: {
    height: 12,
    maxWidth: 185.5,
    width: 64,
    overflow: "hidden",
  },
  frameWrapper: {
    backgroundColor: Color.colorGray_1000,
    borderColor: Color.colorGray_100,
    marginTop: 24,
  },
  frameParent: {
    top: 162,
    left: 20,
    position: "absolute",
  },
  theseOffersAre: {
    marginLeft: -167.5,
    top: 90,
    textAlign: "center",
    left: "50%",
    lineHeight: 24,
    color: Color.primary0,
    width: 335,
    fontFamily: FontFamily.mobileBodyCopy,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  proceed: {
    color: Color.primary,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    fontWeight: "600",
  },
  button: {
    bottom: 24,
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_99xl,
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    left: 20,
  },
  headerChild: {
    backgroundColor: Color.primary,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  pressable: {
    width: 24,
    height: 24,
    left: 20,
  },
  selectAnOffer: {
    marginLeft: -57.5,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    textAlign: "center",
    left: "50%",
    lineHeight: 24,
    color: Color.white,
  },
  selectOffer: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.primary,
  },
});

export default SelectOffer;