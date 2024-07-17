import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Failed2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.failed}>
      <View style={styles.failedFile1Parent}>
        <Image
          style={styles.failedFile1Icon}
          contentFit="cover"
          source={require("../assets/failedfile-11.png")}
        />
        <View>
          <View style={styles.uploadFailedParent}>
            <Text style={styles.uploadFailed}>Upload Failed</Text>
            <Text style={styles.wereSorryBut}>
              We’re sorry, but there was an issue processing your upload. Please
              check your content and try again.
            </Text>
          </View>
          <View style={styles.buttonParent}>
            <Pressable
              style={[styles.button, styles.buttonFlexBox]}
              onPress={() => navigation.navigate("UploadMusicAlbum1")}
            >
              <Text style={[styles.retryUpload, styles.cancelTypo]}>
                Retry upload
              </Text>
            </Pressable>
            <Pressable
              style={[styles.button1, styles.buttonFlexBox]}
              onPress={() => navigation.navigate("Discover")}
            >
              <Text style={[styles.cancel, styles.cancelTypo]}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_99xl,
    flexDirection: "row",
    borderRadius: Border.br_81xl,
    width: 335,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelTypo: {
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    fontSize: FontSize.mobileH5HeadingComponent_size,
    lineHeight: 24,
    textAlign: "center",
  },
  failedFile1Icon: {
    width: 200,
    height: 200,
  },
  uploadFailed: {
    fontSize: FontSize.mobileH2HeadingDefault_size,
    letterSpacing: -1,
    lineHeight: 34,
    fontWeight: "700",
    fontFamily: FontFamily.mobileH1HeadingDisplay,
    textAlign: "center",
    color: Color.white,
  },
  wereSorryBut: {
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.primary0,
    display: "flex",
    marginTop: 12,
    width: 335,
    justifyContent: "center",
    lineHeight: 24,
    textAlign: "center",
    alignItems: "center",
  },
  uploadFailedParent: {
    alignItems: "center",
  },
  retryUpload: {
    color: Color.primary,
  },
  button: {
    backgroundColor: Color.white,
  },
  cancel: {
    color: Color.white,
    fontWeight: "600",
    fontSize: FontSize.mobileH5HeadingComponent_size,
  },
  button1: {
    borderStyle: "solid",
    borderColor: Color.white,
    borderWidth: 1,
    marginTop: 16,
  },
  buttonParent: {
    marginTop: 24,
  },
  failedFile1Parent: {
    position: "absolute",
    marginTop: -219,
    marginLeft: -167.5,
    top: "50%",
    left: "50%",
    alignItems: "center",
  },
  failed: {
    backgroundColor: Color.primary,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Failed2;
