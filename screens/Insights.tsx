import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Insights = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.insights}>
      <View style={styles.frameParent}>
        <View style={styles.frameFlexBox}>
          <View style={[styles.musicParent, styles.musicParentSpaceBlock1]}>
            <Image
              style={styles.musicIconLayout}
              contentFit="cover"
              source={require("../assets/music.png")}
            />
            <View style={[styles.parent, styles.groupParentSpaceBlock]}>
              <Text style={[styles.text, styles.mTypo1]}>200</Text>
              <Text style={[styles.songsUploaded, styles.listensClr]}>
                Songs Uploaded
              </Text>
            </View>
          </View>
          <View
            style={[styles.listenMusicParent, styles.musicParentSpaceBlock]}
          >
            <Image
              style={styles.musicIconLayout}
              contentFit="cover"
              source={require("../assets/listenmusic.png")}
            />
            <View style={[styles.kParent, styles.groupParentSpaceBlock]}>
              <Text style={[styles.text, styles.mTypo1]}>200.4k</Text>
              <Text style={[styles.songsUploaded, styles.listensClr]}>
                Total Listens
              </Text>
            </View>
          </View>
          <View
            style={[styles.downloadMusicParent, styles.musicParentSpaceBlock]}
          >
            <Image
              style={styles.musicIconLayout}
              contentFit="cover"
              source={require("../assets/downloadmusic.png")}
            />
            <View style={[styles.group, styles.groupParentSpaceBlock]}>
              <Text style={[styles.text, styles.mTypo1]}>200</Text>
              <Text style={[styles.songsUploaded, styles.listensClr]}>
                Total Downloads
              </Text>
            </View>
          </View>
          <View
            style={[styles.celoDollarCusdParent, styles.musicParentSpaceBlock]}
          >
            <Image
              style={styles.musicIconLayout}
              contentFit="cover"
              source={require("../assets/celodollarcusd2.png")}
            />
            <View style={[styles.kGroup, styles.groupParentSpaceBlock]}>
              <Text style={[styles.text, styles.mTypo1]}>$20.5K</Text>
              <Text style={[styles.songsUploaded, styles.listensClr]}>
                Total Earnings
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.yourFavouritArtists}>
          <Text style={[styles.yourMilestones, styles.textTypo1]}>
            Your Milestones
          </Text>
          <View style={[styles.frameContainer, styles.frameFlexBox]}>
            <View style={styles.ellipseParent}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/ellipse-20902.png")}
              />
              <View style={styles.groupParentSpaceBlock}>
                <Text style={[styles.m, styles.mTypo]}>1M</Text>
                <Text style={[styles.listens, styles.listensClr]}>Listens</Text>
              </View>
            </View>
            <View style={styles.musicParentSpaceBlock}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/ellipse-2090.png")}
              />
              <View style={styles.groupParentSpaceBlock}>
                <Text style={[styles.m, styles.mTypo]}>100K</Text>
                <Text style={[styles.listens, styles.listensClr]}>Likes</Text>
              </View>
            </View>
            <View style={styles.musicParentSpaceBlock}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/ellipse-2091.png")}
              />
              <View style={styles.groupParentSpaceBlock}>
                <Text style={[styles.m, styles.mTypo]}>1K</Text>
                <Text style={[styles.listens, styles.listensClr]}>
                  Downloads
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.yourFavouritArtists}>
          <Text style={[styles.yourMilestones, styles.textTypo1]}>
            Top Uploads
          </Text>
          <View
            style={[
              styles.popularPlaylistsInner,
              styles.frameParent5SpaceBlock,
            ]}
          >
            <View style={styles.frameParent1}>
              <View style={styles.vectorParent}>
                <Image
                  style={styles.rectangleIcon}
                  contentFit="cover"
                  source={require("../assets/rectangle-2873.png")}
                />
                <View style={styles.hardRockParent}>
                  <Text style={[styles.hardRock, styles.textTypo1]}>
                    Hard rock
                  </Text>
                  <View style={styles.albumParent}>
                    <Text style={styles.albumTypo}>Album</Text>
                    <Text style={[styles.text2, styles.albumTypo]} />
                    <Text style={[styles.text2, styles.albumTypo]}>
                      12.86k Listens
                    </Text>
                  </View>
                </View>
              </View>
              <Image
                style={styles.arrowIconLayout}
                contentFit="cover"
                source={require("../assets/arrowright1.png")}
              />
            </View>
          </View>
          <View
            style={[
              styles.popularPlaylistsInner,
              styles.frameParent5SpaceBlock,
            ]}
          >
            <View style={styles.frameParent1}>
              <View style={styles.vectorParent}>
                <Image
                  style={styles.rectangleIcon}
                  contentFit="cover"
                  source={require("../assets/rectangle-28731.png")}
                />
                <View style={styles.hardRockParent}>
                  <Text style={[styles.hardRock, styles.textTypo1]}>
                    Bad Guy
                  </Text>
                  <View style={styles.albumParent}>
                    <Text style={styles.albumTypo}>Single</Text>
                    <Text style={[styles.text2, styles.albumTypo]} />
                    <Text style={[styles.text2, styles.albumTypo]}>
                      10.9k Listens
                    </Text>
                  </View>
                </View>
              </View>
              <Image
                style={styles.arrowIconLayout}
                contentFit="cover"
                source={require("../assets/arrowright1.png")}
              />
            </View>
          </View>
          <View
            style={[
              styles.popularPlaylistsInner,
              styles.frameParent5SpaceBlock,
            ]}
          >
            <View style={styles.frameParent1}>
              <View style={styles.vectorParent}>
                <Image
                  style={styles.rectangleIcon}
                  contentFit="cover"
                  source={require("../assets/rectangle-28732.png")}
                />
                <View style={styles.hardRockParent}>
                  <Text style={[styles.hardRock, styles.textTypo1]}>
                    Bad Guy
                  </Text>
                  <View style={styles.albumParent}>
                    <Text style={styles.albumTypo}>Single</Text>
                    <Text style={[styles.text2, styles.albumTypo]} />
                    <Text style={[styles.text2, styles.albumTypo]}>
                      4.2k Listens
                    </Text>
                  </View>
                </View>
              </View>
              <Image
                style={styles.arrowIconLayout}
                contentFit="cover"
                source={require("../assets/arrowright1.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.yourFavouritArtists}>
          <Text style={[styles.yourMilestones, styles.textTypo1]}>
            Stores Breakdown
          </Text>
          <View style={styles.frameParent4}>
            <View style={styles.frameParent5SpaceBlock}>
              <View style={styles.frameParent1}>
                <Text style={[styles.youtubeMusic, styles.thisWeekTypo]}>
                  YouTube Music
                </Text>
                <Text style={[styles.hardRock, styles.textTypo1]}>4%</Text>
              </View>
              <Image
                style={styles.barChartIcon}
                contentFit="cover"
                source={require("../assets/bar-chart.png")}
              />
            </View>
            <View
              style={[
                styles.popularPlaylistsInner,
                styles.frameParent5SpaceBlock,
              ]}
            >
              <View style={styles.frameParent1}>
                <Text style={[styles.youtubeMusic, styles.thisWeekTypo]}>
                  Amazon
                </Text>
                <Text style={[styles.hardRock, styles.textTypo1]}>16%</Text>
              </View>
              <Image
                style={styles.barChartIcon}
                contentFit="cover"
                source={require("../assets/bar-chart1.png")}
              />
            </View>
            <View
              style={[
                styles.popularPlaylistsInner,
                styles.frameParent5SpaceBlock,
              ]}
            >
              <View style={styles.frameParent1}>
                <Text style={[styles.youtubeMusic, styles.thisWeekTypo]}>
                  Apple Music
                </Text>
                <Text style={[styles.hardRock, styles.textTypo1]}>70%</Text>
              </View>
              <Image
                style={styles.barChartIcon}
                contentFit="cover"
                source={require("../assets/bar-chart2.png")}
              />
            </View>
            <View
              style={[
                styles.popularPlaylistsInner,
                styles.frameParent5SpaceBlock,
              ]}
            >
              <View style={styles.frameParent1}>
                <Text style={[styles.youtubeMusic, styles.thisWeekTypo]}>
                  Spotify
                </Text>
                <Text style={[styles.hardRock, styles.textTypo1]}>10%</Text>
              </View>
              <Image
                style={styles.barChartIcon}
                contentFit="cover"
                source={require("../assets/bar-chart3.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.yourFavouritArtists}>
          <Text style={[styles.yourMilestones, styles.textTypo1]}>
            Top Audience
          </Text>
          <View style={styles.frameParent9}>
            <View style={styles.ellipseParent}>
              <View style={styles.chartParent}>
                <Image
                  style={styles.chartIcon}
                  contentFit="cover"
                  source={require("../assets/chart.png")}
                />
                <Text style={[styles.text9, styles.textTypo]}>40%</Text>
              </View>
              <View style={styles.lagosParent}>
                <Text style={[styles.text, styles.mTypo1]}>Lagos</Text>
                <Text style={[styles.listens, styles.listensClr]}>
                  80.09K Listeners
                </Text>
              </View>
            </View>
            <View style={styles.musicParentSpaceBlock}>
              <View style={styles.chartParent}>
                <Image
                  style={styles.chartIcon}
                  contentFit="cover"
                  source={require("../assets/chart.png")}
                />
                <Text style={[styles.text10, styles.textTypo]}>20%</Text>
              </View>
              <View style={styles.lagosParent}>
                <Text style={[styles.text, styles.mTypo1]}>Abuja</Text>
                <Text style={[styles.listens, styles.listensClr]}>
                  36.82K Listeners
                </Text>
              </View>
            </View>
            <View style={styles.musicParentSpaceBlock}>
              <View style={styles.chartParent}>
                <Image
                  style={styles.chartIcon}
                  contentFit="cover"
                  source={require("../assets/chart1.png")}
                />
                <Text style={[styles.text11, styles.textTypo]}>12%</Text>
              </View>
              <View style={styles.lagosParent}>
                <Text style={[styles.text, styles.mTypo1]}>Anambra</Text>
                <Text style={[styles.listens, styles.listensClr]}>
                  24.67K Listeners
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.nav}>
        <View style={[styles.navChild, styles.iconLayout]} />
        <View style={[styles.icons, styles.iconsPosition]}>
          <Pressable
            style={styles.more}
            onPress={() => navigation.navigate("Others")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/more.png")}
            />
          </Pressable>
          <Pressable
            style={styles.more}
            onPress={() => navigation.navigate("WalletinCUSD")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vuesaxboldemptywallet.png")}
            />
          </Pressable>
          <Pressable
            style={styles.musicSquareAdd}
            onPress={() => navigation.navigate("UploadYourContent")}
          >
            <Text style={[styles.uploadMusic, styles.mTypo]}>Upload Music</Text>
          </Pressable>
          <Pressable
            style={styles.more}
            onPress={() => navigation.navigate("Insights")}
          >
            <Image
              style={[styles.icon2, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/chartsquare1.png")}
            />
          </Pressable>
          <Pressable
            style={styles.more}
            onPress={() => navigation.navigate("Discover")}
          >
            <Image
              style={[styles.icon3, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/musicplaylist1.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Text style={[styles.yourInsights, styles.wrapperPosition]}>
          Your Insights
        </Text>
        <Pressable
          style={[styles.wrapper, styles.wrapperPosition]}
          onPress={() => navigation.navigate("Notifications")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/notification.png")}
          />
        </Pressable>
        <View style={[styles.frameParent13, styles.iconsPosition]}>
          <View style={styles.vectorParent}>
            <Text style={[styles.yourMilestones, styles.textTypo1]}>
              All Stores
            </Text>
            <Image
              style={[styles.arrowRightIcon3, styles.arrowIconLayout]}
              contentFit="cover"
              source={require("../assets/arrowright2.png")}
            />
          </View>
          <View style={styles.vectorParent}>
            <Text style={[styles.thisWeek, styles.thisWeekTypo]}>
              This week
            </Text>
            <Image
              style={[styles.arrowRightIcon3, styles.arrowIconLayout]}
              contentFit="cover"
              source={require("../assets/arrowright3.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  musicParentSpaceBlock1: {
    padding: Padding.p_xl,
    backgroundColor: Color.colorGray_1000,
    borderRadius: Border.br_xl,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  groupParentSpaceBlock: {
    marginTop: 12,
    alignItems: "center",
  },
  mTypo1: {
    textAlign: "center",
    fontSize: FontSize.mobileH5HeadingComponent_size,
  },
  listensClr: {
    color: Color.colorGray_1100,
    textAlign: "center",
  },
  musicParentSpaceBlock: {
    marginLeft: 16,
    alignItems: "center",
  },
  textTypo1: {
    color: Color.white,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
  },
  frameFlexBox: {
    flexWrap: "wrap",
    width: 335,
    flexDirection: "row",
  },
  mTypo: {
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    color: Color.white,
  },
  frameParent5SpaceBlock: {
    padding: Padding.p_xs,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGray_1000,
  },
  albumTypo: {
    opacity: 0.8,
    color: Color.colorLightgray_100,
    fontFamily: FontFamily.mobileBodyCopy,
    textAlign: "left",
    fontSize: FontSize.size_3xs,
  },
  thisWeekTypo: {
    fontSize: FontSize.btnSmallNormal_size,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
  },
  textTypo: {
    fontSize: FontSize.mobileH4HeadingSection_size,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    color: Color.white,
    lineHeight: 24,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  iconsPosition: {
    marginLeft: -167.5,
    left: "50%",
    justifyContent: "space-between",
    flexDirection: "row",
    width: 335,
    position: "absolute",
  },
  headerPosition: {
    height: 124,
    left: 0,
    top: 0,
    width: 375,
    position: "absolute",
  },
  wrapperPosition: {
    top: 48,
    position: "absolute",
  },
  arrowIconLayout: {
    height: 16,
    width: 16,
  },
  musicIconLayout: {
    height: 36,
    width: 36,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    overflow: "hidden",
  },
  text: {
    color: Color.white,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    lineHeight: 24,
  },
  songsUploaded: {
    width: 119,
    marginTop: 2,
    fontSize: FontSize.size_3xs,
    color: Color.colorGray_1100,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
  },
  parent: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  musicParent: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    alignItems: "center",
  },
  kParent: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  listenMusicParent: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    padding: Padding.p_xl,
    backgroundColor: Color.colorGray_1000,
    borderRadius: Border.br_xl,
  },
  group: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  downloadMusicParent: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    padding: Padding.p_xl,
    backgroundColor: Color.colorGray_1000,
    borderRadius: Border.br_xl,
  },
  kGroup: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  celoDollarCusdParent: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    padding: Padding.p_xl,
    backgroundColor: Color.colorGray_1000,
    borderRadius: Border.br_xl,
  },
  yourMilestones: {
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
  },
  frameChild: {
    height: 101,
    width: 101,
  },
  m: {
    textAlign: "center",
    fontSize: FontSize.mobileH5HeadingComponent_size,
  },
  listens: {
    fontSize: FontSize.size_3xs,
    color: Color.colorGray_1100,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
  },
  ellipseParent: {
    alignItems: "center",
  },
  frameContainer: {
    marginTop: 16,
  },
  yourFavouritArtists: {
    marginTop: 40,
  },
  rectangleIcon: {
    width: 46,
    height: 48,
    borderRadius: Border.br_5xs,
  },
  hardRock: {
    textAlign: "left",
    fontSize: FontSize.mobileH5HeadingComponent_size,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
  },
  text2: {
    marginLeft: 4,
  },
  albumParent: {
    marginTop: 8,
    flexDirection: "row",
  },
  hardRockParent: {
    marginLeft: 10,
  },
  vectorParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent1: {
    justifyContent: "space-between",
    width: 311,
    alignItems: "center",
    flexDirection: "row",
  },
  popularPlaylistsInner: {
    marginTop: 16,
  },
  youtubeMusic: {
    color: Color.primary0,
    textAlign: "left",
  },
  barChartIcon: {
    borderRadius: Border.br_xs,
    height: 12,
    width: 311,
    marginTop: 12,
  },
  frameParent4: {
    justifyContent: "center",
    marginTop: 16,
  },
  chartIcon: {
    top: 11,
    left: 11,
    width: 80,
    height: 80,
    position: "absolute",
  },
  text9: {
    marginLeft: -19.5,
    left: "50%",
    top: "50%",
    marginTop: -12,
    fontSize: FontSize.mobileH4HeadingSection_size,
    textAlign: "center",
    position: "absolute",
  },
  chartParent: {
    height: 102,
    width: 101,
  },
  lagosParent: {
    marginTop: 8,
    alignItems: "center",
  },
  text10: {
    marginLeft: -18.5,
    left: "50%",
    top: "50%",
    marginTop: -12,
    fontSize: FontSize.mobileH4HeadingSection_size,
    textAlign: "center",
    position: "absolute",
  },
  text11: {
    marginLeft: -17.5,
    left: "50%",
    top: "50%",
    marginTop: -12,
    fontSize: FontSize.mobileH4HeadingSection_size,
    textAlign: "center",
    position: "absolute",
  },
  frameParent9: {
    marginTop: 16,
    flexDirection: "row",
  },
  frameParent: {
    top: 140,
    left: 20,
    position: "absolute",
  },
  navChild: {
    top: "100%",
    right: "-100%",
    bottom: "-100%",
    left: "100%",
    backgroundColor: Color.colorGray_1500,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  icon: {
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
  icon1: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  uploadMusic: {
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "left",
    lineHeight: 24,
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
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.primary,
  },
  icon2: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  icon3: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  icons: {
    bottom: 19,
    alignItems: "flex-end",
  },
  nav: {
    marginLeft: 187.5,
    bottom: 0,
    height: 60,
    width: 375,
    left: "50%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.colorGray_1600,
  },
  yourInsights: {
    fontSize: FontSize.mobileH4HeadingSection_size,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
    color: Color.white,
    lineHeight: 24,
    textAlign: "left",
    left: 20,
  },
  wrapper: {
    right: 20,
    width: 24,
    height: 24,
  },
  arrowRightIcon3: {
    marginLeft: 4,
  },
  thisWeek: {
    color: Color.colorGray_1100,
    textAlign: "center",
  },
  frameParent13: {
    top: 92,
    alignItems: "center",
  },
  insights: {
    flex: 1,
    height: 1690,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.primary,
  },
});

export default Insights;