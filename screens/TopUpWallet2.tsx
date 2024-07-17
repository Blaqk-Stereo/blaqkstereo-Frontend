import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Padding, Border, Color, FontFamily } from "../GlobalStyles";

const TopUpWallet2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.topUpWallet}>
      <View style={styles.frameParent}>
        <View style={styles.buttonFlexBox}>
          <Pressable
            style={styles.modalSpaceBlock}
            onPress={() => navigation.navigate("EnterAmount")}
          >
            <View style={styles.inputBidParent}>
              <Image
                style={styles.inputBidIcon}
                contentFit="cover"
                source={require("../assets/input-bid.png")}
              />
              <Text
                style={[styles.enterYourPlaylist, styles.enterYourPlaylistTypo]}
              >
                Bank
              </Text>
            </View>
          </Pressable>
          <View style={[styles.modal1, styles.modalSpaceBlock]}>
            <View style={styles.inputBidParent}>
              <Image
                style={styles.inputBidIcon}
                contentFit="cover"
                source={require("../assets/input-bid1.png")}
              />
              <Text
                style={[styles.enterYourPlaylist, styles.enterYourPlaylistTypo]}
              >
                Card
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.lineParent, styles.parentFlexBox]}>
          <View style={[styles.frameChild, styles.frameBorder]} />
          <Text style={[styles.or, styles.orTypo]}>or</Text>
          <View style={[styles.frameItem, styles.frameBorder]} />
        </View>
        <View style={styles.depositFundsUsingYourWalleParent}>
          <Text
            style={[styles.depositFundsUsing, styles.enterYourPlaylistTypo]}
          >
            Deposit funds using your wallet id or by scanning your wallet QR
            code.
          </Text>
          <Image
            style={styles.qrCardIcon}
            contentFit="cover"
            source={require("../assets/qr-card.png")}
          />
          <View style={styles.modal2}>
            <View style={styles.inputBidParent}>
              <View style={styles.inputBid}>
                <View style={styles.rectanglePosition}>
                  <View style={[styles.rectangle, styles.rectanglePosition]} />
                  <View style={styles.rectangle1} />
                </View>
                <Text style={[styles.text, styles.textTypo]}>07012345678</Text>
                <View style={[styles.copyParent, styles.textPosition]}>
                  <Image
                    style={styles.copyIcon}
                    contentFit="cover"
                    source={require("../assets/copy.png")}
                  />
                  <Pressable
                    style={styles.enterYourPlaylistContainer}
                    onPress={() => navigation.navigate("TopUpWalletlinkCopied")}
                  >
                    <Text style={[styles.copy, styles.textTypo]}>Copy</Text>
                  </Pressable>
                </View>
              </View>
              <Text style={[styles.thisIdCan, styles.orTypo]}>
                This ID can only be used to receive Celo Dollars (cUSD) on Blaqk
                Stereo
              </Text>
            </View>
          </View>
          <View style={[styles.button, styles.buttonFlexBox]}>
            <Text style={[styles.shareAddress, styles.depositTypo]}>
              Share address
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Pressable
          style={[styles.pressable, styles.depositPosition]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/241.png")}
          />
        </Pressable>
        <Text style={[styles.deposit, styles.depositPosition]}>Deposit</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  enterYourPlaylistTypo: {
    textAlign: "center",
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    lineHeight: 24,
  },
  modalSpaceBlock: {
    padding: Padding.p_xs,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_300,
    alignItems: "center",
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
  },
  orTypo: {
    fontSize: FontSize.btnSmallNormal_size,
    fontFamily: FontFamily.mobileBodyCopy,
    textAlign: "center",
  },
  rectanglePosition: {
    left: 0,
    top: 0,
    width: 287,
    height: 64,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  textPosition: {
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  depositTypo: {
    fontSize: FontSize.mobileH5HeadingComponent_size,
    textAlign: "center",
    lineHeight: 24,
  },
  headerPosition: {
    height: 74,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  depositPosition: {
    top: 40,
    position: "absolute",
  },
  inputBidIcon: {
    width: 136,
    height: 64,
  },
  enterYourPlaylist: {
    marginTop: 8,
    color: Color.text0,
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
  },
  inputBidParent: {
    alignItems: "center",
  },
  modal1: {
    marginLeft: 16,
  },
  frameChild: {
    width: 159,
  },
  or: {
    marginLeft: 4,
    color: Color.gray0White,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.btnSmallNormal_size,
  },
  frameItem: {
    width: 158,
    marginLeft: 4,
  },
  lineParent: {
    paddingTop: Padding.p_5xs,
    marginTop: 12,
  },
  depositFundsUsing: {
    color: Color.primary0,
    width: 335,
    fontFamily: FontFamily.mobileBodyCopy,
  },
  qrCardIcon: {
    width: 199,
    height: 202,
    marginTop: 24,
    overflow: "hidden",
  },
  rectangle: {
    borderRadius: Border.br_18xl,
    backgroundColor: Color.primary,
  },
  rectangle1: {
    left: 1,
    borderRadius: Border.br_17xl_5,
    borderColor: Color.colorWhitesmoke_100,
    borderWidth: 1,
    top: 0,
    width: 287,
    borderStyle: "solid",
    height: 64,
    position: "absolute",
  },
  text: {
    left: "5.57%",
    top: "50%",
    marginTop: -12,
    position: "absolute",
    color: Color.gray0White,
    fontFamily: FontFamily.mobileBodyCopy,
  },
  copyIcon: {
    width: 20,
    height: 20,
  },
  copy: {
    color: Color.warningDefault,
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
  },
  enterYourPlaylistContainer: {
    marginLeft: 8,
  },
  copyParent: {
    right: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  inputBid: {
    width: 287,
    height: 64,
  },
  thisIdCan: {
    lineHeight: 16,
    width: 259,
    fontFamily: FontFamily.mobileBodyCopy,
    marginTop: 12,
    color: Color.text0,
  },
  modal2: {
    borderRadius: Border.br_5xl,
    padding: Padding.p_5xl,
    marginTop: 24,
    backgroundColor: Color.colorGray_300,
    alignItems: "center",
  },
  shareAddress: {
    color: Color.primary,
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
  },
  button: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.gray0White,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    marginTop: 24,
    width: 335,
    alignItems: "center",
  },
  depositFundsUsingYourWalleParent: {
    marginTop: 12,
    alignItems: "center",
  },
  frameParent: {
    top: 98,
    alignItems: "center",
    left: 20,
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.primary,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  pressable: {
    width: 24,
    height: 24,
    left: 20,
  },
  deposit: {
    marginLeft: -29.5,
    left: "50%",
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    textAlign: "center",
    lineHeight: 24,
    color: Color.gray0White,
  },
  topUpWallet: {
    flex: 1,
    height: 844,
    width: "100%",
    backgroundColor: Color.primary,
  },
});

export default TopUpWallet2;