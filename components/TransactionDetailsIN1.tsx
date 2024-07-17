import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

export type TransactionDetailsIN1Type = {
  onClose?: () => void;
};

const TransactionDetailsIN1 = ({ onClose }: TransactionDetailsIN1Type) => {
  return (
    <View style={[styles.transactionDetailsin, styles.lineIconLayout]}>
      <View style={[styles.overlay, styles.overlayPosition]} />
      <View style={[styles.receipt, styles.receiptLayout]}>
        <Image
          style={styles.receiptLayout}
          contentFit="cover"
          source={require("../assets/subtract.png")}
        />
        <View style={[styles.receiptCard, styles.overlayPosition]}>
          <View style={styles.amount}>
            <Text style={[styles.text, styles.textLayout]}>+$120.009</Text>
            <Text style={[styles.availBal46080, styles.closeTypo]}>
              Avail. bal: $460.80
            </Text>
          </View>
          <Image
            style={styles.successIcon}
            contentFit="cover"
            source={require("../assets/success-icon.png")}
          />
          <View style={styles.owner}>
            <View style={styles.authorParent}>
              <View>
                <Text style={[styles.description, styles.typeTypo]}>Date</Text>
                <Text style={[styles.aug2024, styles.aug2024Typo]}>
                  28 Aug 2024
                </Text>
              </View>
              <View style={styles.author1}>
                <Text style={[styles.description, styles.typeTypo]}>
                  Transaction ID
                </Text>
                <Text style={[styles.aug2024, styles.aug2024Typo]}>
                  ABC123YCV
                </Text>
              </View>
            </View>
            <Image
              style={[styles.lineIcon, styles.lineIconLayout]}
              contentFit="cover"
              source={require("../assets/line1.png")}
            />
            <View style={styles.currentBidParent}>
              <View>
                <Text style={[styles.type, styles.typeTypo]}>Type</Text>
                <Text style={[styles.aug2024, styles.aug2024Typo]}>Refund</Text>
              </View>
              <View style={styles.author1}>
                <Text style={[styles.description, styles.typeTypo]}>
                  Status
                </Text>
                <View style={styles.status}>
                  <Text style={[styles.success, styles.aug2024Typo]}>
                    Success
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.buttonParent}>
            <View style={[styles.button, styles.buttonFlexBox]}>
              <Image
                style={styles.vuesaxlinearimportIcon}
                contentFit="cover"
                source={require("../assets/vuesaxlinearimport.png")}
              />
              <Text style={styles.downloadReceipt}>Download receipt</Text>
            </View>
            <View style={[styles.helpCenterCard, styles.buttonFlexBox]}>
              <View style={styles.questionParent}>
                <Image
                  style={styles.questionIcon}
                  contentFit="cover"
                  source={require("../assets/question.png")}
                />
                <Text style={[styles.troubleWithThis, styles.closeTypo]}>
                  Trouble with this payment?
                </Text>
              </View>
            </View>
            <Text style={[styles.close, styles.closeTypo]}>Close</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lineIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  overlayPosition: {
    left: "50%",
    position: "absolute",
  },
  receiptLayout: {
    height: 508,
    width: 335,
  },
  textLayout: {
    width: 297,
    textAlign: "center",
  },
  closeTypo: {
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  typeTypo: {
    color: Color.primary10,
    fontSize: FontSize.btnSmallNormal_size,
    lineHeight: 16,
    fontFamily: FontFamily.mobileBodyCopy,
  },
  aug2024Typo: {
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_xs,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    alignItems: "center",
  },
  overlay: {
    marginTop: -406,
    marginLeft: -187.5,
    top: "50%",
    backgroundColor: Color.colorGray_1200,
    height: 812,
    width: 375,
  },
  text: {
    fontSize: FontSize.mobileH2HeadingDefault_size,
    letterSpacing: -1,
    lineHeight: 34,
    fontWeight: "700",
    fontFamily: FontFamily.mobileH1HeadingDisplay,
    color: Color.white,
  },
  availBal46080: {
    color: Color.primary0,
    marginTop: 2,
    width: 297,
    textAlign: "center",
  },
  amount: {
    zIndex: 0,
  },
  successIcon: {
    top: -28,
    left: 139,
    width: 56,
    height: 56,
    zIndex: 1,
    position: "absolute",
  },
  description: {
    textAlign: "right",
  },
  aug2024: {
    fontSize: FontSize.mobileH5HeadingComponent_size,
    marginTop: 8,
    textAlign: "left",
    lineHeight: 24,
    color: Color.white,
  },
  author1: {
    alignItems: "flex-end",
  },
  authorParent: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: 303,
    alignItems: "center",
  },
  lineIcon: {
    width: "100%",
    marginTop: 20,
    alignSelf: "stretch",
  },
  type: {
    textAlign: "left",
  },
  success: {
    fontSize: FontSize.size_3xs,
    color: Color.colorMediumseagreen,
    lineHeight: 16,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    textAlign: "center",
  },
  status: {
    borderRadius: Border.br_4xl,
    backgroundColor: Color.colorMediumaquamarine,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_9xs,
    marginTop: 8,
    flexDirection: "row",
  },
  currentBidParent: {
    marginTop: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    width: 303,
  },
  owner: {
    backgroundColor: Color.colorGray_300,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    zIndex: 2,
    marginTop: 24,
    borderRadius: Border.br_xs,
  },
  vuesaxlinearimportIcon: {
    width: 24,
    height: 24,
  },
  downloadReceipt: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH3HeadingPage,
    color: Color.primary,
    marginLeft: 10,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
  },
  button: {
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_99xl,
    width: 303,
    justifyContent: "center",
  },
  questionIcon: {
    top: 4,
    left: 0,
    width: 16,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  troubleWithThis: {
    top: 0,
    left: 28,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  questionParent: {
    width: 205,
    height: 24,
  },
  helpCenterCard: {
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 24,
    elevation: 24,
    shadowOpacity: 1,
    backgroundColor: Color.colorGray_100,
    marginTop: 16,
    alignSelf: "stretch",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
  },
  close: {
    marginTop: 16,
    textAlign: "center",
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.white,
  },
  buttonParent: {
    zIndex: 3,
    alignSelf: "stretch",
    marginTop: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  receiptCard: {
    marginLeft: -167.5,
    bottom: 0,
    paddingTop: Padding.p_29xl,
    paddingBottom: Padding.p_13xl,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_xs,
  },
  receipt: {
    top: 280,
    left: 20,
    position: "absolute",
  },
  transactionDetailsin: {
    height: 812,
    width: 375,
  },
});

export default TransactionDetailsIN1;