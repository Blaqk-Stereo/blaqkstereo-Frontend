import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

export type WalletInfoType = {
  onClose?: () => void;
};

const WalletInfo = ({ onClose }: WalletInfoType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.walletInfo}>
      <View style={styles.prompt}>
        <View style={styles.switchCurrencyParent}>
          <Text style={styles.switchCurrency}>Switch currency</Text>
          <View style={styles.tabBar}>
            <View style={[styles.celoDollarCusdParent, styles.parentShadowBox]}>
              <Image
                style={styles.celoDollarCusdIcon}
                contentFit="cover"
                source={require("../assets/celodollarcusd1.png")}
              />
              <Text style={[styles.cusd, styles.cusdTypo]}>(cUSD)</Text>
            </View>
            <Pressable
              style={[styles.nairaParent, styles.parentShadowBox]}
              onPress={() => navigation.navigate("WalletinNGN")}
            >
              <Image
                style={styles.celoDollarCusdIcon}
                contentFit="cover"
                source={require("../assets/naira.png")}
              />
              <Text style={[styles.naira, styles.cusdTypo]}>(Naira)</Text>
            </Pressable>
          </View>
        </View>
        <Text style={[styles.yourBlaqkStereo, styles.closeWrapperSpaceBlock]}>
          Your Blaqk Stereo balance is always kept in Celo Dollars (cUSD), a US
          dollar stable coin. If you prefer, you can display this balance in
          your local currency.
        </Text>
        <Text style={[styles.localCurrencyAmounts, styles.closeTypo]}>
          *Local currency amounts are approximates.
        </Text>
        <View style={[styles.closeWrapper, styles.closeWrapperSpaceBlock]}>
          <Text style={[styles.close, styles.closeTypo]}>Close</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: Border.br_31xl,
    alignItems: "center",
    overflow: "hidden",
  },
  cusdTypo: {
    marginLeft: 4,
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
    lineHeight: 24,
  },
  closeWrapperSpaceBlock: {
    marginTop: 16,
    width: 295,
  },
  closeTypo: {
    fontSize: FontSize.btnSmallNormal_size,
    fontFamily: FontFamily.mobileBodyCopy,
    textAlign: "center",
  },
  switchCurrency: {
    fontSize: FontSize.mobileH5HeadingComponent_size,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    textAlign: "center",
    color: Color.gray0White,
    lineHeight: 24,
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
    backgroundColor: Color.gray0White,
    paddingHorizontal: Padding.p_33xl,
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
    marginTop: 12,
    flexDirection: "row",
    borderRadius: Border.br_31xl,
    alignItems: "center",
    overflow: "hidden",
  },
  switchCurrencyParent: {
    alignItems: "center",
  },
  yourBlaqkStereo: {
    fontFamily: FontFamily.mobileBodyCopy,
    width: 295,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
    color: Color.gray0White,
    lineHeight: 24,
  },
  localCurrencyAmounts: {
    color: Color.primary0,
    marginTop: 16,
    width: 295,
  },
  close: {
    color: Color.gray0White,
    lineHeight: 24,
    fontSize: FontSize.btnSmallNormal_size,
  },
  closeWrapper: {
    paddingHorizontal: Padding.p_81xl,
    paddingTop: Padding.p_5xs,
    justifyContent: "center",
    width: 295,
    flexDirection: "row",
    alignItems: "center",
  },
  prompt: {
    position: "absolute",
    marginTop: -165,
    marginLeft: -163.5,
    top: "50%",
    left: "50%",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorGray_300,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xl,
    alignItems: "center",
  },
  walletInfo: {
    backgroundColor: Color.colorGray_1200,
    width: 375,
    height: 812,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
});

export default WalletInfo;