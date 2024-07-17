import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import InputField2 from "../components/InputField2";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, Padding, Border, FontSize } from "../GlobalStyles";

const UploadMusicSingle10 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.uploadMusicsingle}>
      <View style={styles.inputFieldParent}>
        <InputField2
          blinker="Rodo"
          eye={require("../assets/eye5.png")}
          blinkerMarginTop="unset"
        />
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
        <View style={styles.inputField}>
          <View style={styles.inputFieldChild} />
          <Text style={[styles.blinker, styles.blinkerTypo]}>
            Add featured artists
          </Text>
          <Text style={[styles.blinker1, styles.blinkerTypo]}>
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
        <View style={styles.inputField}>
          <View style={styles.inputFieldChild} />
          <Text style={[styles.blinker2, styles.blinkerPosition]}>
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
              style={[styles.vectorIcon, styles.layoutPosition]}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
            <Image
              style={[styles.vectorIcon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
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
  layoutPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
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
  davidoTypo: {
    fontFamily: FontFamily.mobileBodyCopy,
    textAlign: "left",
    color: Color.white,
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
    backgroundColor: Color.colorGray_400,
    alignItems: "center",
  },
  blinkerPosition: {
    left: 16,
    marginTop: -12,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  yesTypo: {
    fontFamily: FontFamily.mobileH6HeadingSubHead,
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
    left: 16,
    marginTop: -12,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  blinker1: {
    marginTop: -5,
    right: 34,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  inputField: {
    height: 52,
    marginTop: 16,
    width: 335,
  },
  davido: {
    textAlign: "left",
    color: Color.white,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
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
  blinker2: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.mobileBodyCopy,
    top: "50%",
    position: "absolute",
  },
  vectorIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  vectorIcon1: {
    right: 4,
    marginTop: -12,
    width: 24,
    top: "50%",
    position: "absolute",
  },
  yes: {
    marginTop: -7,
    marginLeft: -23,
    color: Color.success50,
    textAlign: "left",
    fontSize: FontSize.btnSmallNormal_size,
    left: "50%",
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
  },
  inputFieldParent: {
    top: 98,
    left: 20,
    position: "absolute",
  },
  next: {
    color: Color.primary,
    fontFamily: FontFamily.mobileH6HeadingSubHead,
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
    color: Color.white,
    left: "50%",
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