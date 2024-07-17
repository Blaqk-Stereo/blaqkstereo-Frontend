import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const UploadMusicSingle10 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.uploadMusicsingle}>
      <View style={styles.inputFieldParent}>
        <View style={styles.inputLayout}>
          <View style={styles.inputFieldChild} />
          <Text style={[styles.blinker, styles.davidoTypo]}>Rodo</Text>
          <Image
            style={[styles.eyeIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/eye5.png")}
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
          <View style={[styles.galleryAddParent, styles.yesPosition]}>
            <Image
              style={styles.galleryAddIcon}
              contentFit="cover"
              source={require("../assets/galleryadd.png")}
            />
            <View style={styles.uploadYourImageFileHereParent}>
              <Text style={[styles.uploadYourImage, styles.sizeShouldBeTypo]}>
                Upload cover artwork
              </Text>
              <Text style={[styles.sizeShouldBe, styles.sizeShouldBeTypo]}>
                Size should be at least 3000x3000px
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.inputField1, styles.inputLayout]}>
          <View style={styles.inputFieldChild} />
          <Text style={[styles.blinker1, styles.blinkerTypo]}>
            Add featured artists
          </Text>
          <Text style={[styles.blinker2, styles.blinkerTypo]}>
            (Use a comma to add new artist)
          </Text>
        </View>
        <View style={[styles.frameParent, styles.parentFlexBox]}>
          <View style={styles.parentSpaceBlock}>
            <Text style={[styles.davido, styles.davidoTypo]}>Davido</Text>
            <Image
              style={[styles.closeCircleIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/closecircle.png")}
            />
          </View>
          <View style={[styles.wizkidParent, styles.parentSpaceBlock]}>
            <Text style={[styles.davido, styles.davidoTypo]}>Wizkid</Text>
            <Image
              style={[styles.closeCircleIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/closecircle.png")}
            />
          </View>
          <View style={[styles.wizkidParent, styles.parentSpaceBlock]}>
            <Text style={[styles.davido, styles.davidoTypo]}>Tiwa Savage</Text>
            <Image
              style={[styles.closeCircleIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/closecircle.png")}
            />
          </View>
          <View style={[styles.wizkidParent, styles.parentSpaceBlock]}>
            <Text style={[styles.davido, styles.davidoTypo]}>
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
          <View style={styles.inputFieldChild} />
          <Text style={[styles.blinker, styles.davidoTypo]}>
            US-R1H-20-12345
          </Text>
        </View>
        <View
          style={[styles.containsExplicitContentParent, styles.parentFlexBox]}
        >
          <Text style={[styles.davido, styles.davidoTypo]}>
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
            <Text style={[styles.yes, styles.yesTypo]}>Yes</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("UploadMusicAlbumSongAdded")}
      >
        <Text style={[styles.next, styles.nextTypo]}>Next</Text>
      </Pressable>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Pressable
          style={[styles.pressable, styles.addSongPosition]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/241.png")}
          />
        </Pressable>
        <Text style={[styles.addSong, styles.addSongPosition]}>Add Song</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  davidoTypo: {
    fontFamily: FontFamily.mobileBodyCopy,
    textAlign: "left",
    color: Color.white,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  layoutPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  yesPosition: {
    top: "50%",
    position: "absolute",
  },
  sizeShouldBeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.mobileBodyCopy,
  },
  inputLayout: {
    height: 52,
    width: 335,
  },
  blinkerTypo: {
    color: Color.primary0,
    textAlign: "left",
    fontFamily: FontFamily.mobileBodyCopy,
    top: "50%",
    position: "absolute",
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
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
  yesTypo: {
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  nextTypo: {
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
  addSongPosition: {
    top: 40,
    position: "absolute",
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
    textAlign: "left",
    color: Color.white,
    left: 16,
    marginTop: -12,
    top: "50%",
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
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  sizeShouldBe: {
    lineHeight: 16,
    color: Color.primary10,
    marginTop: 4,
    fontSize: FontSize.btnSmallNormal_size,
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
  },
  upload: {
    marginTop: 16,
    height: 264,
    width: 335,
  },
  blinker1: {
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    left: 16,
    marginTop: -12,
  },
  blinker2: {
    marginTop: -5,
    right: 34,
    fontSize: FontSize.size_3xs,
  },
  inputField1: {
    marginTop: 16,
  },
  davido: {
    textAlign: "left",
    color: Color.white,
  },
  closeCircleIcon: {
    marginLeft: 10,
  },
  wizkidParent: {
    marginLeft: 16,
  },
  frameParent: {
    width: 355,
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
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    width: 335,
    flexDirection: "row",
  },
  inputFieldParent: {
    top: 98,
    left: 20,
    position: "absolute",
  },
  next: {
    color: Color.primary,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  button: {
    marginLeft: -167.5,
    bottom: 24,
    backgroundColor: Color.white,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    alignItems: "center",
    left: "50%",
    width: 335,
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.colorGray_1600,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  pressable: {
    height: 24,
    width: 24,
    left: 20,
  },
  addSong: {
    marginLeft: -36.5,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    textAlign: "center",
    lineHeight: 24,
    left: "50%",
    color: Color.white,
  },
  uploadMusicsingle: {
    backgroundColor: Color.primary,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default UploadMusicSingle10;
