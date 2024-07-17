import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";

const UploadMusicSingle4 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.uploadMusicsingle}>
      <View style={styles.inputFieldParent}>
        <View style={styles.inputLayout}>
          <View style={[styles.inputFieldChild, styles.layoutPosition]} />
          <Text style={[styles.blinker, styles.blinkerTypo]}>Rodo</Text>
          <Image
            style={[styles.eyeIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/eye3.png")}
          />
        </View>
        <View style={styles.upload}>
          <Image
            style={styles.rectangle4Icon}
            contentFit="cover"
            source={require("../assets/rectangle41.png")}
          />
          <LinearGradient
            style={[styles.layout, styles.layoutPosition]}
            locations={[0, 1]}
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.7)"]}
          />
          <View style={styles.galleryAddParent}>
            <Image
              style={styles.galleryAddIcon}
              contentFit="cover"
              source={require("../assets/galleryadd.png")}
            />
            <View style={styles.uploadYourImageFileHereParent}>
              <Text
                style={[styles.uploadYourImage, styles.uploadYourImageTypo]}
              >
                Upload cover artwork
              </Text>
              <Text style={styles.sizeShouldBe}>
                Size should be at least 3000x3000px
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.inputField1, styles.inputLayout]}>
          <View style={[styles.inputFieldChild, styles.layoutPosition]} />
          <Text style={[styles.blinker1, styles.blinkerTypo]}>
            Add featured artists
          </Text>
          <Text style={[styles.blinker2, styles.blinkerTypo]}>
            (Use a comma to add new artist)
          </Text>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.parentSpaceBlock}>
            <Text style={[styles.davido, styles.blinkerTypo]}>Davido</Text>
            <Image
              style={[styles.closeCircleIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/closecircle.png")}
            />
          </View>
          <View style={[styles.wizkidParent, styles.parentSpaceBlock]}>
            <Text style={[styles.davido, styles.blinkerTypo]}>Wizkid</Text>
            <Image
              style={[styles.closeCircleIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/closecircle.png")}
            />
          </View>
          <View style={[styles.wizkidParent, styles.parentSpaceBlock]}>
            <Text style={[styles.davido, styles.blinkerTypo]}>Tiwa Savage</Text>
            <Image
              style={[styles.closeCircleIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/closecircle.png")}
            />
          </View>
          <View style={[styles.wizkidParent, styles.parentSpaceBlock]}>
            <Text style={[styles.davido, styles.blinkerTypo]}>
              Adekunle Gold
            </Text>
            <Image
              style={[styles.closeCircleIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/closecircle.png")}
            />
          </View>
        </View>
        <View style={[styles.inputField1, styles.inputLayout]}>
          <View style={[styles.inputFieldChild, styles.layoutPosition]} />
          <Text style={[styles.blinker, styles.blinkerTypo]}>Hip-hop</Text>
          <Image
            style={[styles.arrowRightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/arrowright4.png")}
          />
        </View>
        <View style={[styles.inputField1, styles.inputLayout]}>
          <View style={[styles.inputFieldChild, styles.layoutPosition]} />
          <Text style={[styles.blinker, styles.blinkerTypo]}>
            US-R1H-20-12345
          </Text>
        </View>
        <View style={styles.containsExplicitContentParent}>
          <Text style={[styles.davido, styles.blinkerTypo]}>
            Contains explicit content?
          </Text>
          <View style={styles.toggle}>
            <Image
              style={[styles.vectorIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
            <Image
              style={[styles.vectorIcon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector3.png")}
            />
            <Text style={styles.yes}>Yes</Text>
          </View>
        </View>
      </View>
      <View style={styles.uploadMusicsingleChild} />
      <Pressable
        style={[styles.button, styles.buttonPosition]}
        onPress={() => navigation.navigate("UploadMusicSingle6")}
      >
        <Text style={styles.next}>Next</Text>
      </Pressable>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Pressable style={styles.pressable} onPress={() => navigation.goBack()}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/241.png")}
          />
        </Pressable>
        <Text style={styles.yourSingleHas}>Your Single Has Been Added!</Text>
        <Text style={[styles.followTheseSteps, styles.uploadYourImageTypo]}>
          Follow these steps to complete your upload.
        </Text>
        <View style={[styles.stepGroupHorizontal, styles.buttonPosition]}>
          <View
            style={[styles.stepGroupHorizontalChild, styles.stepGroupPosition]}
          />
          <View
            style={[styles.stepGroupHorizontalItem, styles.stepGroupPosition]}
          />
          <View style={styles.complete}>
            <View style={[styles.frame, styles.frameFlexBox]}>
              <View style={styles.stepbaseitem}>
                <View style={[styles.dot, styles.dotLayout]} />
              </View>
            </View>
            <Text style={[styles.stepTitle, styles.stepTypo]}>Add Song</Text>
          </View>
          <View style={styles.inProgress}>
            <View style={[styles.frame, styles.frameFlexBox]}>
              <View style={[styles.stepbaseitem1, styles.stepbaseitemBorder]}>
                <View style={[styles.dot, styles.dotLayout]} />
              </View>
            </View>
            <Text style={[styles.stepTitle1, styles.stepTypo]}>Basic Info</Text>
          </View>
          <View style={styles.default}>
            <View style={[styles.frame, styles.frameFlexBox]}>
              <View style={[styles.stepbaseitem2, styles.stepbaseitemBorder]}>
                <View style={[styles.dot2, styles.dotLayout]} />
              </View>
            </View>
            <Text style={[styles.stepTitle2, styles.stepTypo]}>Credits</Text>
          </View>
          <View style={styles.default1}>
            <View style={[styles.frame, styles.frameFlexBox]}>
              <View style={[styles.stepbaseitem2, styles.stepbaseitemBorder]}>
                <View style={[styles.dot2, styles.dotLayout]} />
              </View>
            </View>
            <Text style={[styles.stepTitle2, styles.stepTypo]}>Release</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layoutPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  blinkerTypo: {
    textAlign: "left",
    fontFamily: FontFamily.mobileBodyCopy,
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  uploadYourImageTypo: {
    textAlign: "center",
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  inputLayout: {
    height: 52,
    width: 335,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  parentSpaceBlock: {
    paddingBottom: Padding.p_3xs,
    paddingRight: Padding.p_5xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_base,
    justifyContent: "center",
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorGray_400,
  },
  buttonPosition: {
    marginLeft: -167.5,
    flexDirection: "row",
    left: "50%",
    width: 335,
    position: "absolute",
  },
  headerPosition: {
    height: 210,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  stepGroupPosition: {
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    top: 24,
    marginLeft: -125,
    left: "50%",
    position: "absolute",
  },
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  dotLayout: {
    height: 8,
    width: 8,
    borderRadius: Border.br_1215xl,
    overflow: "hidden",
  },
  stepTypo: {
    marginTop: 12,
    width: 60,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    fontSize: FontSize.btnSmallNormal_size,
    textAlign: "center",
  },
  stepbaseitemBorder: {
    borderWidth: 1,
    padding: Padding.p_9xs,
    borderRadius: Border.br_1215xl,
    borderStyle: "solid",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  inputFieldChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGray_400,
    position: "absolute",
  },
  blinker: {
    color: Color.white,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    fontFamily: FontFamily.mobileBodyCopy,
    left: 16,
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  eyeIcon: {
    height: "46.15%",
    width: "6.99%",
    top: "26.92%",
    right: "4.69%",
    bottom: "26.92%",
    left: "88.33%",
    display: "none",
  },
  rectangle4Icon: {
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
    height: 264,
    width: 335,
    position: "absolute",
  },
  layout: {
    backgroundColor: "transparent",
    position: "absolute",
    overflow: "hidden",
  },
  galleryAddIcon: {
    width: 32,
    height: 32,
  },
  uploadYourImage: {
    color: Color.white,
  },
  sizeShouldBe: {
    lineHeight: 16,
    color: Color.primary10,
    marginTop: 4,
    fontSize: FontSize.btnSmallNormal_size,
    textAlign: "center",
    fontFamily: FontFamily.mobileBodyCopy,
  },
  uploadYourImageFileHereParent: {
    alignItems: "center",
    marginTop: 16,
  },
  galleryAddParent: {
    marginTop: -46,
    marginLeft: -103.5,
    alignItems: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  upload: {
    marginTop: 16,
    height: 264,
    width: 335,
  },
  blinker1: {
    color: Color.primary0,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    fontFamily: FontFamily.mobileBodyCopy,
    left: 16,
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  blinker2: {
    marginTop: -5,
    right: 34,
    fontSize: FontSize.size_3xs,
    color: Color.primary0,
    top: "50%",
    position: "absolute",
  },
  inputField1: {
    marginTop: 16,
  },
  davido: {
    color: Color.white,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    fontFamily: FontFamily.mobileBodyCopy,
  },
  closeCircleIcon: {
    marginLeft: 10,
  },
  wizkidParent: {
    marginLeft: 16,
  },
  frameParent: {
    width: 355,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  arrowRightIcon: {
    right: 16,
    top: "50%",
    position: "absolute",
    marginTop: -12,
    width: 24,
  },
  vectorIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  vectorIcon1: {
    right: 4,
    top: "50%",
    position: "absolute",
    marginTop: -12,
    width: 24,
  },
  yes: {
    marginTop: -7,
    marginLeft: -23,
    color: Color.success50,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    fontSize: FontSize.btnSmallNormal_size,
    left: "50%",
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  toggle: {
    width: 70,
    height: 30,
  },
  containsExplicitContentParent: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_300,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    width: 335,
  },
  inputFieldParent: {
    top: 218,
    left: 20,
    position: "absolute",
  },
  uploadMusicsingleChild: {
    marginLeft: -187.5,
    bottom: 0,
    height: 88,
    width: 375,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.primary,
  },
  next: {
    color: Color.primary,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 24,
  },
  button: {
    bottom: 16,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_81xl,
    marginLeft: -167.5,
  },
  headerChild: {
    backgroundColor: Color.colorGray_1300,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  pressable: {
    top: 40,
    height: 24,
    width: 24,
    left: 20,
    position: "absolute",
  },
  yourSingleHas: {
    marginLeft: -109.5,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    top: 40,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    textAlign: "center",
    left: "50%",
    color: Color.white,
    lineHeight: 24,
    position: "absolute",
  },
  followTheseSteps: {
    top: 80,
    left: 44,
    color: Color.primary0,
    position: "absolute",
  },
  stepGroupHorizontalChild: {
    borderColor: Color.primary30,
    width: 251,
    zIndex: 0,
  },
  stepGroupHorizontalItem: {
    borderColor: Color.white,
    width: 126,
    zIndex: 1,
  },
  dot: {
    backgroundColor: Color.primary30,
  },
  stepbaseitem: {
    padding: Padding.p_9xs,
    borderRadius: Border.br_1215xl,
    backgroundColor: Color.white,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  frame: {
    flexDirection: "row",
  },
  stepTitle: {
    color: Color.white,
  },
  complete: {
    zIndex: 2,
    alignItems: "center",
  },
  stepbaseitem1: {
    shadowColor: "rgba(255, 255, 255, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    borderColor: Color.primary0,
    backgroundColor: Color.white,
  },
  stepTitle1: {
    color: Color.primary0,
  },
  inProgress: {
    zIndex: 3,
    alignItems: "center",
  },
  dot2: {
    backgroundColor: Color.primary10,
  },
  stepbaseitem2: {
    backgroundColor: Color.primary0,
    borderColor: Color.primary10,
  },
  stepTitle2: {
    color: Color.primary20,
  },
  default: {
    zIndex: 4,
    alignItems: "center",
  },
  default1: {
    zIndex: 5,
    alignItems: "center",
  },
  stepGroupHorizontal: {
    top: 120,
    padding: Padding.p_base,
    justifyContent: "space-between",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGray_400,
  },
  uploadMusicsingle: {
    flex: 1,
    height: 992,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.primary,
  },
});

export default UploadMusicSingle4;
