import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";

const UploadMusicOther2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.uploadMusicother}>
      <Pressable
        style={styles.inputFieldParent}
        onPress={() => navigation.navigate("UploadMusicOther3")}
      >
        <View style={styles.inputLayout}>
          <View style={styles.inputFieldChild} />
          <Text style={[styles.blinker, styles.blinkerTypo1]}>
            Enter the title of your single
          </Text>
          <Image
            style={[styles.eyeIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/eye4.png")}
          />
        </View>
        <View style={styles.upload}>
          <View style={[styles.rectangle4, styles.rectangle4Layout]} />
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
          <View style={styles.inputFieldChild} />
          <Text style={[styles.blinker, styles.blinkerTypo1]}>
            Add featured artists
          </Text>
          <Text style={[styles.blinker2, styles.blinkerTypo]}>
            (Use a comma to add new artist)
          </Text>
        </View>
        <View style={[styles.inputField1, styles.inputLayout]}>
          <View style={styles.inputFieldChild} />
          <Text style={[styles.blinker, styles.blinkerTypo1]}>
            Select the genre
          </Text>
          <Image
            style={[styles.arrowRightIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/arrowright6.png")}
          />
        </View>
        <View style={[styles.inputField1, styles.inputLayout]}>
          <View style={styles.inputFieldChild} />
          <Text style={[styles.blinker, styles.blinkerTypo1]}>
            Enter IRSC Code
          </Text>
          <Text style={[styles.blinker5, styles.blinkerTypo]}>
            (If available)
          </Text>
        </View>
        <View
          style={[
            styles.containsExplicitContentParent,
            styles.stepGroupHorizontalFlexBox,
          ]}
        >
          <Text style={[styles.containsExplicitContent, styles.blinkerTypo1]}>
            Contains explicit content?
          </Text>
          <View style={styles.toggle}>
            <Image
              style={[styles.vectorIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
            <Image
              style={[styles.vectorIcon1, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
            <Text style={styles.no}>No</Text>
          </View>
        </View>
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
        <Text style={styles.yourContentHas}>Your Content Has Been Added!</Text>
        <Text style={[styles.followTheseSteps, styles.uploadYourImageTypo]}>
          Follow these steps to complete your content.
        </Text>
        <View style={[styles.stepGroupHorizontal, styles.buttonPosition]}>
          <View
            style={[styles.stepGroupHorizontalChild, styles.stepGroupPosition]}
          />
          <View
            style={[styles.stepGroupHorizontalItem, styles.stepGroupPosition]}
          />
          <View style={styles.complete}>
            <View style={styles.frameFlexBox}>
              <View style={styles.stepbaseitem}>
                <View style={[styles.dot, styles.dotLayout]} />
              </View>
            </View>
            <Text style={[styles.stepTitle, styles.stepTypo]}>Add Item</Text>
          </View>
          <View style={styles.inProgress}>
            <View style={styles.frameFlexBox}>
              <View style={[styles.stepbaseitem1, styles.stepbaseitemBorder]}>
                <View style={[styles.dot, styles.dotLayout]} />
              </View>
            </View>
            <Text style={[styles.stepTitle1, styles.stepTypo]}>Basic Info</Text>
          </View>
          <View style={styles.default}>
            <View style={styles.frameFlexBox}>
              <View style={[styles.stepbaseitem2, styles.stepbaseitemBorder]}>
                <View style={[styles.dot2, styles.dotLayout]} />
              </View>
            </View>
            <Text style={[styles.stepTitle2, styles.stepTypo]}>Credits</Text>
          </View>
          <View style={styles.default1}>
            <View style={styles.frameFlexBox}>
              <View style={[styles.stepbaseitem2, styles.stepbaseitemBorder]}>
                <View style={[styles.dot2, styles.dotLayout]} />
              </View>
            </View>
            <Text style={[styles.stepTitle2, styles.stepTypo]}>Release</Text>
          </View>
        </View>
      </View>
      <View style={styles.uploadMusicotherChild} />
      <View style={[styles.button, styles.frameFlexBox]}>
        <Text style={styles.next}>Next</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  blinkerTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangle4Layout: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGray_400,
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
  blinkerTypo: {
    fontSize: FontSize.size_3xs,
    marginTop: -5,
    textAlign: "left",
    color: Color.primary0,
    fontFamily: FontFamily.mobileBodyCopy,
    top: "50%",
    position: "absolute",
  },
  iconPosition: {
    height: 24,
    width: 24,
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  stepGroupHorizontalFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerPosition: {
    height: 210,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  buttonPosition: {
    marginLeft: -167.5,
    left: "50%",
    width: 335,
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
    justifyContent: "center",
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  frameFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  inputFieldChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGray_400,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  blinker: {
    left: 16,
    color: Color.primary0,
    top: "50%",
    marginTop: -12,
    textAlign: "left",
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
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
  rectangle4: {
    left: 0,
    top: 0,
    borderRadius: Border.br_mini,
    height: 264,
    width: 335,
    position: "absolute",
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
  blinker2: {
    right: 34,
  },
  inputField1: {
    marginTop: 16,
  },
  arrowRightIcon: {
    right: 16,
  },
  blinker5: {
    right: 152,
  },
  containsExplicitContent: {
    color: Color.white,
  },
  vectorIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    width: "100%",
  },
  vectorIcon1: {
    left: 4,
  },
  no: {
    marginTop: -7,
    marginLeft: 3,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    fontSize: FontSize.btnSmallNormal_size,
    color: Color.white,
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
    alignItems: "center",
    marginTop: 16,
    width: 335,
    flexDirection: "row",
  },
  inputFieldParent: {
    top: 218,
    left: 20,
    position: "absolute",
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
  yourContentHas: {
    marginLeft: -117.5,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    fontSize: FontSize.mobileH5HeadingComponent_size,
    top: 40,
    textAlign: "center",
    color: Color.white,
    left: "50%",
    lineHeight: 24,
    position: "absolute",
  },
  followTheseSteps: {
    top: 80,
    left: 41,
    color: Color.primary0,
    position: "absolute",
    textAlign: "center",
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
    flexDirection: "row",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGray_400,
  },
  uploadMusicotherChild: {
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
    bottom: 24,
    borderRadius: Border.br_81xl,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    opacity: 0.5,
    backgroundColor: Color.white,
    marginLeft: -167.5,
    left: "50%",
    width: 335,
    position: "absolute",
  },
  uploadMusicother: {
    flex: 1,
    height: 940,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.primary,
  },
});

export default UploadMusicOther2;