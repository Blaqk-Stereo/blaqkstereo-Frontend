import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Discover = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.discover}>
      <View style={[styles.bgParent, styles.childPosition]}>
        <Image
          style={[styles.bgIcon, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/bg2.png")}
        />
        <Pressable
          style={[styles.wrapper, styles.iconsPosition]}
          onPress={() => navigation.navigate("SelectedContentAlbum")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-667.png")}
          />
        </Pressable>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.singleParent}>
          <Text style={[styles.single, styles.singleTypo]}>Single</Text>
          <Text style={[styles.forLife, styles.forLifeSpaceBlock]}>
            For Life
          </Text>
        </View>
        <View style={styles.frameGroup}>
          <Pressable
            onPress={() => navigation.navigate("SelectedContentSingle")}
          >
            <Image
              style={[styles.frameChild, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-28733.png")}
            />
            <View style={styles.frameContainer}>
              <View style={styles.albumWrapper}>
                <Text style={styles.album}>Album</Text>
              </View>
              <Text style={styles.hardRock}>Hard rock</Text>
            </View>
          </Pressable>
          <View style={styles.vectorGroup}>
            <Image
              style={[styles.frameChild, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-2874.png")}
            />
            <View style={styles.frameContainer}>
              <View style={styles.albumWrapper}>
                <Text style={styles.album}>Single</Text>
              </View>
              <Text style={styles.hardRock}>Hard rock</Text>
            </View>
          </View>
        </View>
        <View style={styles.frameGroup}>
          <View>
            <Image
              style={[styles.frameChild, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-28734.png")}
            />
            <View style={styles.frameContainer}>
              <View style={styles.albumWrapper}>
                <Text style={styles.album}>Album</Text>
              </View>
              <Text style={styles.hardRock}>Hard rock</Text>
            </View>
          </View>
          <View style={styles.vectorGroup}>
            <View style={styles.groupChildLayout}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-28741.png")}
              />
              <Image
                style={[styles.groupChild, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-2875.png")}
              />
              <View style={[styles.dangerParent, styles.navPosition]}>
                <Image
                  style={styles.dangerIcon}
                  contentFit="cover"
                  source={require("../assets/danger.png")}
                />
                <Text style={[styles.takenDown, styles.forLifeSpaceBlock]}>
                  Taken down
                </Text>
              </View>
            </View>
            <View style={styles.frameContainer}>
              <View style={styles.albumWrapper}>
                <Text style={styles.album}>Album</Text>
              </View>
              <Text style={styles.hardRock}>Hard rock</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.discoverChild, styles.childPosition]} />
      <View style={[styles.nav, styles.navPosition]}>
        <View style={[styles.navChild, styles.iconLayout]} />
        <View style={[styles.icons, styles.iconsPosition]}>
          <Pressable
            style={styles.more}
            onPress={() => navigation.navigate("Others")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/more.png")}
            />
          </Pressable>
          <Pressable
            style={styles.more}
            onPress={() => navigation.navigate("WalletinCUSD")}
          >
            <Image
              style={[styles.icon2, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vuesaxboldemptywallet.png")}
            />
          </Pressable>
          <Pressable
            style={styles.musicSquareAdd}
            onPress={() => navigation.navigate("UploadYourContent")}
          >
            <Text style={[styles.uploadMusic, styles.forLifeTypo]}>
              Upload Music
            </Text>
          </Pressable>
          <Pressable
            style={styles.more}
            onPress={() => navigation.navigate("Insights")}
          >
            <Image
              style={[styles.icon3, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/chartsquare.png")}
            />
          </Pressable>
          <Pressable
            style={styles.more}
            onPress={() => navigation.navigate("Discover")}
          >
            <Image
              style={[styles.icon4, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/musicplaylist.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Image
          style={[styles.headerItem, styles.headerItemPosition]}
          contentFit="cover"
          source={require("../assets/notification.png")}
        />
        <Text style={[styles.yourUploads, styles.headerItemPosition]}>
          Your Uploads
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconsPosition: {
    width: 335,
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  singleTypo: {
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    lineHeight: 24,
  },
  forLifeSpaceBlock: {
    marginTop: 4,
    textAlign: "left",
  },
  groupChildLayout: {
    height: 158,
    width: 158,
  },
  navPosition: {
    left: "50%",
    position: "absolute",
  },
  forLifeTypo: {
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    color: Color.white,
  },
  headerPosition: {
    height: 80,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  headerItemPosition: {
    top: 48,
    position: "absolute",
  },
  bgIcon: {
    height: 252,
    width: 375,
    overflow: "hidden",
  },
  icon: {
    borderRadius: Border.br_5xl,
    marginLeft: -167.5,
  },
  wrapper: {
    top: 88,
    height: 291,
  },
  bgParent: {
    height: 379,
    width: 375,
  },
  single: {
    color: Color.colorGray_1400,
    textAlign: "left",
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
  },
  forLife: {
    fontSize: FontSize.mobileH3HeadingPage_size,
    letterSpacing: -1,
    lineHeight: 34,
    color: Color.white,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  singleParent: {
    alignItems: "center",
  },
  frameChild: {
    borderRadius: Border.br_5xs,
    width: 158,
  },
  album: {
    fontSize: FontSize.size_3xs,
    color: Color.colorLightgray_100,
    opacity: 0.8,
    textAlign: "left",
    fontFamily: FontFamily.mobileBodyCopy,
  },
  albumWrapper: {
    flexDirection: "row",
  },
  hardRock: {
    fontSize: FontSize.mobileH5HeadingComponent_size,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    marginTop: 8,
    color: Color.white,
    textAlign: "left",
  },
  frameContainer: {
    marginTop: 10,
  },
  vectorGroup: {
    marginLeft: 20,
  },
  frameGroup: {
    marginTop: 24,
    flexDirection: "row",
  },
  groupChild: {
    borderRadius: Border.br_5xs,
    width: 158,
    left: 0,
    top: 0,
    position: "absolute",
  },
  dangerIcon: {
    width: 20,
    height: 20,
  },
  takenDown: {
    color: Color.error40,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  dangerParent: {
    marginTop: -24,
    marginLeft: -39.25,
    top: "50%",
    alignItems: "center",
  },
  frameParent: {
    top: 399,
    alignItems: "center",
    left: 20,
    position: "absolute",
  },
  discoverChild: {
    height: 74,
    width: 375,
  },
  navChild: {
    top: "100%",
    right: "-100%",
    bottom: "-100%",
    left: "100%",
    borderBottomRightRadius: Border.br_13xl,
    borderBottomLeftRadius: Border.br_13xl,
    backgroundColor: Color.colorGray_1500,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  icon1: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  more: {
    width: 28,
    height: 28,
  },
  icon2: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  uploadMusic: {
    color: Color.white,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  musicSquareAdd: {
    shadowColor: "rgba(255, 255, 255, 0.18)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 24,
    elevation: 24,
    shadowOpacity: 1,
    borderRadius: Border.br_81xl,
    borderStyle: "solid",
    borderColor: Color.primary30,
    borderWidth: 2,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.primary,
  },
  icon3: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  icon4: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  icons: {
    bottom: 19,
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: -167.5,
  },
  nav: {
    marginLeft: 187.5,
    bottom: 0,
    height: 60,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: 375,
  },
  headerChild: {
    backgroundColor: Color.colorGray_1600,
  },
  headerItem: {
    right: 20,
    width: 24,
    height: 24,
  },
  yourUploads: {
    fontSize: FontSize.mobileH4HeadingSection_size,
    color: Color.white,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    textAlign: "left",
    lineHeight: 24,
    left: 20,
  },
  discover: {
    flex: 1,
    height: 1034,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.primary,
  },
});

export default Discover;