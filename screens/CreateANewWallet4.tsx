import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const CreateANewWallet4 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.createANewWallet4}>
      <View style={styles.success48740921Parent}>
        <Image
          style={styles.success48740921Icon}
          contentFit="cover"
          source={require("../assets/success4874092-1.png")}
        />
        <View style={styles.frameParent}>
          <View style={styles.walletConnectedParent}>
            <Text style={styles.walletConnected}>Wallet Connected!</Text>
            <Text style={[styles.youCanNow, styles.buttonLayout]}>
              You can now choose your preferred currency.
            </Text>
          </View>
          <View style={styles.prompt}>
            <View style={[styles.tabBar, styles.tabBarFlexBox]}>
              <View
                style={[styles.celoDollarCusdParent, styles.parentShadowBox]}
              >
                <Image
                  style={styles.celoDollarCusdIcon}
                  contentFit="cover"
                  source={require("../assets/celodollarcusd1.png")}
                />
                <Text style={[styles.cusd, styles.cusdTypo]}>(cUSD)</Text>
              </View>
              <Pressable
                style={[styles.nairaParent, styles.parentShadowBox]}
                onPress={() => navigation.navigate("CreateANewWallet5")}
              >
                <Image
                  style={styles.celoDollarCusdIcon}
                  contentFit="cover"
                  source={require("../assets/naira.png")}
                />
                <Text style={[styles.naira, styles.cusdTypo]}>(Naira)</Text>
              </Pressable>
            </View>
            <Text style={[styles.yourBlaqkStereo, styles.yourBlaqkStereoTypo]}>
              Your Blaqk Stereo balance is always kept in Celo Dollars (cUSD), a
              US dollar stable coin. If you prefer, you can display this balance
              in your local currency.
            </Text>
            <Text
              style={[styles.localCurrencyAmounts, styles.yourBlaqkStereoTypo]}
            >
              *Local currency amounts are approximates.
            </Text>
          </View>
        </View>
        <Pressable
          style={[styles.button, styles.tabBarFlexBox]}
          onPress={() => navigation.navigate("WalletForNewUsers1")}
        >
          <Text style={styles.letsGo}>Let’s go!</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    width: 335,
    justifyContent: "center",
  },
  tabBarFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  parentShadowBox: {
    paddingVertical: Padding.p_5xs,
    width: 139,
    shadowOpacity: 1,
    elevation: 40,
    shadowRadius: 40,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(167, 169, 183, 0.15)",
    flexDirection: "row",
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  cusdTypo: {
    marginLeft: 4,
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
  },
  yourBlaqkStereoTypo: {
    marginTop: 16,
    width: 295,
    fontFamily: FontFamily.mobileBodyCopy,
    textAlign: "center",
  },
  success48740921Icon: {
    width: 240,
    height: 240,
  },
  walletConnected: {
    fontSize: FontSize.mobileH2HeadingDefault_size,
    letterSpacing: -1,
    lineHeight: 34,
    fontWeight: "700",
    fontFamily: FontFamily.mobileH2HeadingDefault,
    textAlign: "center",
    color: Color.gray0White,
  },
  youCanNow: {
    display: "flex",
    marginTop: 8,
    color: Color.primary0,
    fontFamily: FontFamily.mobileBodyCopy,
    justifyContent: "center",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
    alignItems: "center",
  },
  walletConnectedParent: {
    alignItems: "center",
  },
  celoDollarCusdIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  cusd: {
    color: Color.primary,
  },
  celoDollarCusdParent: {
    paddingHorizontal: Padding.p_33xl,
    backgroundColor: Color.gray0White,
  },
  naira: {
    color: Color.primary20,
  },
  nairaParent: {
    paddingHorizontal: Padding.p_34xl,
    marginLeft: 1,
  },
  tabBar: {
    backgroundColor: Color.colorGray_100,
    borderStyle: "solid",
    borderColor: Color.primary20,
    borderWidth: 1,
    padding: Padding.p_5xs,
    borderRadius: Border.br_31xl,
    flexDirection: "row",
    overflow: "hidden",
  },
  yourBlaqkStereo: {
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    marginTop: 16,
    width: 295,
    color: Color.gray0White,
  },
  localCurrencyAmounts: {
    fontSize: FontSize.btnSmallNormal_size,
    color: Color.primary0,
  },
  prompt: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorGray_300,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xl,
    marginTop: 20,
    alignItems: "center",
  },
  frameParent: {
    marginTop: 40,
    alignItems: "center",
  },
  letsGo: {
    color: Color.primary,
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
  },
  button: {
    borderRadius: Border.br_81xl,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.gray0White,
    width: 335,
    justifyContent: "center",
    marginTop: 40,
  },
  success48740921Parent: {
    position: "absolute",
    marginTop: -352,
    top: "50%",
    left: 20,
    alignItems: "center",
  },
  createANewWallet4: {
    backgroundColor: Color.primary,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default CreateANewWallet4;