import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import DeleteLinkedBankAccount from "../components/DeleteLinkedBankAccount";
import { Padding, FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Languages = () => {
  const [trashIconVisible, setTrashIconVisible] = useState(false);
  const [trashIcon1Visible, setTrashIcon1Visible] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const openTrashIcon = useCallback(() => {
    setTrashIconVisible(true);
  }, []);

  const closeTrashIcon = useCallback(() => {
    setTrashIconVisible(false);
  }, []);

  const openTrashIcon1 = useCallback(() => {
    setTrashIcon1Visible(true);
  }, []);

  const closeTrashIcon1 = useCallback(() => {
    setTrashIcon1Visible(false);
  }, []);

  return (
    <>
      <View style={styles.languages}>
        <View style={[styles.addCreditsParent, styles.parentPosition]}>
          <Pressable
            style={[styles.addCredits, styles.addCreditsFlexBox]}
            onPress={() => navigation.navigate("AddNewBank")}
          >
            <Image
              style={styles.addCircleIcon}
              contentFit="cover"
              source={require("../assets/addcircle2.png")}
            />
            <Text style={[styles.blc, styles.blcTypo]}>Add new bank</Text>
          </Pressable>
          <View style={styles.fileUploadStatus}>
            <View style={[styles.frameParent, styles.parentFlexBox]}>
              <View style={styles.iconContainerFlexBox}>
                <View
                  style={[styles.iconContainer, styles.iconContainerFlexBox]}
                >
                  <Image
                    style={styles.addCircleIcon}
                    contentFit="cover"
                    source={require("../assets/bank.png")}
                  />
                </View>
                <View
                  style={[styles.filenamepngWrapper, styles.addCreditsFlexBox]}
                >
                  <Text style={[styles.filenamepng, styles.filenamepngTypo]}>
                    Default
                  </Text>
                </View>
              </View>
              <Pressable style={styles.addCircleIcon} onPress={openTrashIcon}>
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require("../assets/trash.png")}
                />
              </Pressable>
            </View>
            <View style={styles.frame}>
              <Text style={styles.blcTypo}>Access Bank</Text>
              <View
                style={[styles.uploadSuccessfulParent, styles.parentFlexBox]}
              >
                <Text style={[styles.uploadSuccessful, styles.filenamepngTypo]}>
                  0123456789
                </Text>
                <Text
                  style={[styles.uploadSuccessful, styles.filenamepngTypo]}
                />
                <Text style={[styles.uploadSuccessful, styles.filenamepngTypo]}>
                  Jane Joe
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.fileUploadStatus}>
            <View style={[styles.frameParent, styles.parentFlexBox]}>
              <Text style={[styles.uploadSuccessful, styles.filenamepngTypo]}>
                Set as defaut
              </Text>
              <Pressable style={styles.addCircleIcon} onPress={openTrashIcon1}>
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require("../assets/trash.png")}
                />
              </Pressable>
            </View>
            <View style={styles.frame}>
              <Text style={styles.blcTypo}>Access Bank</Text>
              <View
                style={[styles.uploadSuccessfulParent, styles.parentFlexBox]}
              >
                <Text style={[styles.uploadSuccessful, styles.filenamepngTypo]}>
                  0123456789
                </Text>
                <Text
                  style={[styles.uploadSuccessful, styles.filenamepngTypo]}
                />
                <Text style={[styles.uploadSuccessful, styles.filenamepngTypo]}>
                  Jane Joe
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.headerPosition}>
          <View style={[styles.headerChild, styles.headerPosition]} />
          <View style={[styles.parent, styles.parentPosition]}>
            <Pressable
              style={styles.pressable}
              onPress={() => navigation.navigate("Others")}
            >
              <Image
                style={[styles.icon2, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/241.png")}
              />
            </Pressable>
            <Text style={styles.withdrawalAccount}>Withdrawal Account</Text>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={trashIconVisible}>
        <View style={styles.trashIconOverlay}>
          <Pressable style={styles.trashIconBg} onPress={closeTrashIcon} />
          <DeleteLinkedBankAccount onClose={closeTrashIcon} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={trashIcon1Visible}>
        <View style={styles.trashIcon1Overlay}>
          <Pressable style={styles.trashIcon1Bg} onPress={closeTrashIcon1} />
          <DeleteLinkedBankAccount onClose={closeTrashIcon1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    left: 20,
    position: "absolute",
  },
  addCreditsFlexBox: {
    paddingHorizontal: Padding.p_xs,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  blcTypo: {
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    color: Color.white,
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconContainerFlexBox: {
    width: 48,
    alignItems: "center",
    flexDirection: "row",
  },
  filenamepngTypo: {
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  headerPosition: {
    height: 74,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  addCircleIcon: {
    height: 24,
    width: 24,
  },
  blc: {
    marginLeft: 8,
  },
  addCredits: {
    borderRadius: Border.br_81xl,
    borderColor: Color.primary30,
    borderWidth: 2,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.primary,
    paddingHorizontal: Padding.p_xs,
    borderStyle: "solid",
  },
  iconContainer: {
    borderRadius: Border.br_104xl,
    backgroundColor: Color.primary30,
    height: 48,
    justifyContent: "center",
    width: 48,
  },
  filenamepng: {
    color: Color.warningDefault,
    textAlign: "left",
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
  },
  filenamepngWrapper: {
    borderRadius: Border.br_5xs,
    backgroundColor: "rgba(42, 42, 42, 0.64)",
    borderColor: Color.colorGray_100,
    borderWidth: 1,
    paddingVertical: Padding.p_11xs,
    marginLeft: 8,
  },
  trashIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  trashIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameParent: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  uploadSuccessful: {
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.white,
    textAlign: "left",
  },
  uploadSuccessfulParent: {
    marginTop: 4,
  },
  frame: {
    alignSelf: "stretch",
    marginTop: 16,
  },
  fileUploadStatus: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGray_400,
    width: 335,
    padding: Padding.p_base,
    marginTop: 16,
    overflow: "hidden",
  },
  trashIcon1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  trashIcon1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  addCreditsParent: {
    top: 98,
  },
  headerChild: {
    backgroundColor: Color.colorGray_1300,
  },
  icon2: {
    overflow: "hidden",
  },
  pressable: {
    left: 0,
    top: 0,
    height: 24,
    width: 24,
    position: "absolute",
  },
  withdrawalAccount: {
    left: 90,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    top: 0,
    textAlign: "center",
    color: Color.white,
    lineHeight: 24,
    position: "absolute",
  },
  parent: {
    top: 40,
    width: 245,
    height: 24,
  },
  languages: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.primary,
  },
});

export default Languages;