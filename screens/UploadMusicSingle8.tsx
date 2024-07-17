import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const UploadMusicSingle8 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.uploadMusicsingle, styles.iconLayout]}>
      <Pressable
        style={[styles.button, styles.frameFlexBox]}
        onPress={() => navigation.navigate("PreviewYourContentDetails")}
      >
        <Text style={styles.continue}>Continue</Text>
      </Pressable>
      <View style={styles.selectReleaseOption}>
        <View style={[styles.privateParent, styles.parentFlexBox]}>
          <Text style={styles.private}>Private</Text>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-152.png")}
          />
        </View>
        <View style={[styles.publicParent, styles.parentFlexBox]}>
          <Text style={styles.private}>Public</Text>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-16.png")}
          />
        </View>
        <View style={[styles.privateParent, styles.parentFlexBox]}>
          <Text style={styles.private}>Schedule</Text>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-152.png")}
          />
        </View>
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Pressable style={styles.pressable} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/241.png")}
          />
        </Pressable>
        <Text style={[styles.yourSingleHas, styles.yourSingleHasFlexBox]}>
          Your Single Has Been Added!
        </Text>
        <Text style={[styles.chooseARelease, styles.yourSingleHasFlexBox]}>
          Choose a release option for your upload.
        </Text>
        <View style={[styles.stepGroupHorizontal, styles.parentFlexBox]}>
          <View
            style={[styles.stepGroupHorizontalChild, styles.stepGroupPosition]}
          />
          <View style={styles.complete}>
            <View style={styles.frameFlexBox}>
              <View style={styles.stepbaseitemFlexBox}>
                <View style={styles.dot} />
              </View>
            </View>
            <Text style={[styles.stepTitle, styles.stepTypo]}>Add Song</Text>
          </View>
          <View style={styles.complete1}>
            <View style={styles.frameFlexBox}>
              <View style={styles.stepbaseitemFlexBox}>
                <View style={styles.dot} />
              </View>
            </View>
            <Text style={[styles.stepTitle, styles.stepTypo]}>Basic Info</Text>
          </View>
          <View style={styles.complete2}>
            <View style={styles.frameFlexBox}>
              <View style={styles.stepbaseitemFlexBox}>
                <View style={styles.dot} />
              </View>
            </View>
            <Text style={[styles.stepTitle, styles.stepTypo]}>Credits</Text>
          </View>
          <View style={styles.inProgress}>
            <View style={styles.frameFlexBox}>
              <View style={[styles.stepbaseitem3, styles.stepbaseitemFlexBox]}>
                <View style={styles.dot} />
              </View>
            </View>
            <Text style={[styles.stepTitle3, styles.stepTypo]}>Release</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  frameFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  parentFlexBox: {
    padding: Padding.p_base,
    justifyContent: "space-between",
    flexDirection: "row",
    width: 335,
  },
  headerPosition: {
    height: 210,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  yourSingleHasFlexBox: {
    textAlign: "center",
    lineHeight: 24,
    position: "absolute",
  },
  stepGroupPosition: {
    left: "50%",
    position: "absolute",
  },
  stepTypo: {
    marginTop: 12,
    width: 60,
    fontSize: FontSize.btnSmallNormal_size,
    textAlign: "center",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
  },
  stepbaseitemFlexBox: {
    padding: Padding.p_9xs,
    borderRadius: Border.br_1215xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
    overflow: "hidden",
  },
  continue: {
    color: Color.primary,
    textAlign: "left",
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  button: {
    bottom: 24,
    borderRadius: Border.br_81xl,
    paddingHorizontal: Padding.p_99xl,
    paddingVertical: Padding.p_sm,
    width: 335,
    backgroundColor: Color.white,
    flexDirection: "row",
    left: "50%",
    marginLeft: -167.5,
    position: "absolute",
  },
  private: {
    color: Color.white,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    textAlign: "left",
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    lineHeight: 24,
  },
  frameChild: {
    width: 19,
    height: 19,
  },
  privateParent: {
    borderRadius: Border.br_xs,
    justifyContent: "space-between",
    alignItems: "center",
  },
  publicParent: {
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_xs,
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectReleaseOption: {
    top: 218,
    left: 20,
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.colorGray_1300,
  },
  icon: {
    height: "100%",
  },
  pressable: {
    width: 24,
    height: 24,
    top: 40,
    left: 20,
    position: "absolute",
  },
  yourSingleHas: {
    marginLeft: -109.5,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    textAlign: "center",
    top: 40,
    color: Color.white,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    left: "50%",
  },
  chooseARelease: {
    top: 80,
    left: 57,
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.primary0,
    textAlign: "center",
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  stepGroupHorizontalChild: {
    marginLeft: -125,
    top: 24,
    borderColor: Color.white,
    borderTopWidth: 1,
    width: 251,
    height: 1,
    zIndex: 0,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  dot: {
    backgroundColor: Color.primary30,
    width: 8,
    height: 8,
    borderRadius: Border.br_1215xl,
    overflow: "hidden",
  },
  stepTitle: {
    color: Color.white,
  },
  complete: {
    zIndex: 1,
    alignItems: "center",
  },
  complete1: {
    zIndex: 2,
    alignItems: "center",
  },
  complete2: {
    zIndex: 3,
    alignItems: "center",
  },
  stepbaseitem3: {
    shadowColor: "rgba(255, 255, 255, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    borderColor: Color.primary0,
    borderWidth: 1,
    borderStyle: "solid",
  },
  stepTitle3: {
    color: Color.primary0,
  },
  inProgress: {
    zIndex: 4,
    alignItems: "center",
  },
  stepGroupHorizontal: {
    top: 120,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGray_400,
    left: "50%",
    position: "absolute",
    justifyContent: "space-between",
    marginLeft: -167.5,
  },
  uploadMusicsingle: {
    backgroundColor: Color.primary,
    flex: 1,
    height: 812,
  },
});

export default UploadMusicSingle8;