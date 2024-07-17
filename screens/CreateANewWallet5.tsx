import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const CreateANewWallet5 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.createANewWallet6}>
      <View style={styles.success48740921Parent}>
        <Image
          style={styles.success48740921Icon}
          contentFit="cover"
          source={require("../assets/success4874092-1.png")}
        />
        <View style={styles.frameParent}>
          <View style={styles.walletConnectedParent}>
            <Text style={styles.walletConnected}>Wallet Connected!</Text>
            <Text style={styles.youCanNow}>
              You can now choose your preferred currency.
            </Text>
          </View>
          <View style={styles.prompt}>
            <View style={[styles.tabBar, styles.tabBarFlexBox]}>
              <Pressable
                style={[styles.celoDollarCusdParent, styles.parentShadowBox]}
                onPress={() => navigation.navigate("CreateANewWallet4")}
              >
                <Image
                  style={styles.celoDollarCusdIcon}
                  contentFit="cover"
                  source={require("../assets/celodollarcusd3.png")}
                />
                <Text style={styles.cusd}>(cUSD)</Text>
              </Pressable>
              <View style={[styles.nairaParent, styles.buttonFlexBox]}>
                <Image
                  style={styles.celoDollarCusdIcon}
                  contentFit="cover"
                  source={require("../assets/naira2.png")}
                />
                <Text style={[styles.naira, styles.nairaTypo]}>(Naira)</Text>
              </View>
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
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("WalletForNewUsers1")}
        >
          <Text style={styles.nairaTypo}>Let’s go!</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    borderRadius: Border.br_31xl,
    overflow: "hidden",
  },
  buttonFlexBox: {
    backgroundColor: Color.white,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  nairaTypo: {
    color: Color.primary,
    fontFamily: FontFamily.mobileH3HeadingPage,
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
    fontFamily: FontFamily.mobileH1HeadingDisplay,
    textAlign: "center",
    color: Color.white,
  },
  youCanNow: {
    display: "flex",
    marginTop: 8,
    width: 335,
    justifyContent: "center",
    color: Color.primary0,
    fontFamily: FontFamily.mobileBodyCopy,
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
    color: Color.primary20,
    marginLeft: 4,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
  },
  celoDollarCusdParent: {
    paddingHorizontal: Padding.p_33xl,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  naira: {
    marginLeft: 4,
  },
  nairaParent: {
    paddingHorizontal: Padding.p_34xl,
    marginLeft: 1,
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
    borderRadius: Border.br_31xl,
    overflow: "hidden",
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
    color: Color.white,
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
  button: {
    borderRadius: Border.br_81xl,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    width: 335,
    marginTop: 40,
  },
  success48740921Parent: {
    position: "absolute",
    marginTop: -352,
    top: "50%",
    left: 20,
    alignItems: "center",
  },
  createANewWallet6: {
    backgroundColor: Color.primary,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default CreateANewWallet5;