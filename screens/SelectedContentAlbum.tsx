import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import UploadedMusicOptions from "../components/UploadedMusicOptions";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const SelectedContentAlbum = () => {
  const [icon1Visible, setIcon1Visible] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const openIcon1 = useCallback(() => {
    setIcon1Visible(true);
  }, []);

  const closeIcon1 = useCallback(() => {
    setIcon1Visible(false);
  }, []);

  return (
    <>
      <View style={[styles.selectedContentalbum, styles.lineIconLayout]}>
        <Image
          style={styles.bgIcon}
          contentFit="cover"
          source={require("../assets/bg1.png")}
        />
        <Image
          style={[styles.selectedContentalbumChild, styles.navPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-6671.png")}
        />
        <View style={[styles.forLifeParent, styles.navPosition]}>
          <Text style={styles.forLife}>For Life</Text>
          <View style={styles.albumParent}>
            <Text style={[styles.album, styles.textTypo2]}>Album</Text>
            <Text style={[styles.text, styles.textTypo2]} />
            <Text style={[styles.text, styles.textTypo2]}>
              Released on 12 Jun, 2024
            </Text>
          </View>
        </View>
        <View style={[styles.ownerParent, styles.parentPosition]}>
          <View style={styles.owner}>
            <View style={[styles.authorParent, styles.parentFlexBox]}>
              <View>
                <Text style={[styles.description, styles.descriptionTypo]}>
                  UPC
                </Text>
                <Text style={[styles.text1, styles.textTypo1]}>
                  012345567894
                </Text>
              </View>
              <View style={styles.currentBid}>
                <Text style={[styles.releaseId, styles.descriptionTypo]}>
                  Release ID
                </Text>
                <Text style={[styles.text1, styles.textTypo1]}>123456</Text>
              </View>
            </View>
            <Image
              style={[styles.lineIcon, styles.lineIconLayout]}
              contentFit="cover"
              source={require("../assets/line1.png")}
            />
            <View style={[styles.currentBidParent, styles.parentFlexBox]}>
              <View>
                <Text style={[styles.blc1, styles.textTypo1]}>$20,589.765</Text>
                <Text style={[styles.totalEarning, styles.descriptionTypo]}>
                  Total Earning
                </Text>
              </View>
              <View style={styles.currentBid}>
                <View style={styles.group1137}>
                  <Image
                    style={styles.polygon1Icon}
                    contentFit="cover"
                    source={require("../assets/polygon-1.png")}
                  />
                  <Text style={[styles.text2, styles.textTypo1]}>0.19%</Text>
                </View>
                <Text style={[styles.description1, styles.descriptionTypo]}>
                  This week
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.yourFavouritArtists}>
            <Text style={[styles.topTracks, styles.text3Typo]}>Top Tracks</Text>
            <View style={styles.frameParent}>
              <View style={styles.ellipseParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-20901.png")}
                />
                <View style={styles.mineParent}>
                  <Text style={[styles.mine, styles.textTypo1]}>Mine</Text>
                  <Text style={[styles.kListens, styles.text3Typo]}>
                    80k Listens
                  </Text>
                </View>
              </View>
              <View style={styles.ellipseGroup}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-20902.png")}
                />
                <View style={styles.mineParent}>
                  <Text style={[styles.mine, styles.textTypo1]}>
                    Fire in th...
                  </Text>
                  <Text style={[styles.kListens, styles.text3Typo]}>
                    60k Listens
                  </Text>
                </View>
              </View>
              <View style={styles.ellipseGroup}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-20903.png")}
                />
                <View style={styles.mineParent}>
                  <Text style={[styles.mine, styles.textTypo1]}>
                    You are h...
                  </Text>
                  <Text style={[styles.kListens, styles.text3Typo]}>
                    39.3k Listens
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.popularPlaylists}>
            <Text style={[styles.topTracks, styles.text3Typo]}>
              Stores Breakdown
            </Text>
            <View style={styles.frameGroup}>
              <View style={styles.frameSpaceBlock}>
                <View style={[styles.youtubeMusicParent, styles.parentFlexBox]}>
                  <Text style={[styles.youtubeMusic, styles.text3Typo]}>
                    YouTube Music
                  </Text>
                  <Text style={[styles.text3, styles.text3Typo]}>4%</Text>
                </View>
                <Image
                  style={styles.barChartIcon}
                  contentFit="cover"
                  source={require("../assets/bar-chart.png")}
                />
              </View>
              <View style={[styles.frameView, styles.frameSpaceBlock]}>
                <View style={[styles.youtubeMusicParent, styles.parentFlexBox]}>
                  <Text style={[styles.youtubeMusic, styles.text3Typo]}>
                    Amazon
                  </Text>
                  <Text style={[styles.text3, styles.text3Typo]}>16%</Text>
                </View>
                <Image
                  style={styles.barChartIcon}
                  contentFit="cover"
                  source={require("../assets/bar-chart1.png")}
                />
              </View>
              <View style={[styles.frameView, styles.frameSpaceBlock]}>
                <View style={[styles.youtubeMusicParent, styles.parentFlexBox]}>
                  <Text style={[styles.youtubeMusic, styles.text3Typo]}>
                    Apple Music
                  </Text>
                  <Text style={[styles.text3, styles.text3Typo]}>70%</Text>
                </View>
                <Image
                  style={styles.barChartIcon}
                  contentFit="cover"
                  source={require("../assets/bar-chart2.png")}
                />
              </View>
              <View style={[styles.frameView, styles.frameSpaceBlock]}>
                <View style={[styles.youtubeMusicParent, styles.parentFlexBox]}>
                  <Text style={[styles.youtubeMusic, styles.text3Typo]}>
                    Spotify
                  </Text>
                  <Text style={[styles.text3, styles.text3Typo]}>10%</Text>
                </View>
                <Image
                  style={styles.barChartIcon}
                  contentFit="cover"
                  source={require("../assets/bar-chart3.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.popularPlaylists}>
            <Text style={[styles.topTracks, styles.text3Typo]}>
              Top Audience
            </Text>
            <View style={styles.frameParent}>
              <View style={styles.ellipseParent}>
                <View style={styles.chartParent}>
                  <Image
                    style={styles.chartIcon}
                    contentFit="cover"
                    source={require("../assets/chart.png")}
                  />
                  <Text style={[styles.text7, styles.textTypo]}>40%</Text>
                </View>
                <View style={styles.mineParent}>
                  <Text style={[styles.lagos, styles.text3Typo]}>Lagos</Text>
                  <Text style={[styles.kListens, styles.text3Typo]}>
                    80.09K Listeners
                  </Text>
                </View>
              </View>
              <View style={styles.ellipseGroup}>
                <View style={styles.chartParent}>
                  <Image
                    style={styles.chartIcon}
                    contentFit="cover"
                    source={require("../assets/chart.png")}
                  />
                  <Text style={[styles.text8, styles.textTypo]}>20%</Text>
                </View>
                <View style={styles.mineParent}>
                  <Text style={[styles.lagos, styles.text3Typo]}>Abuja</Text>
                  <Text style={[styles.kListens, styles.text3Typo]}>
                    36.82K Listeners
                  </Text>
                </View>
              </View>
              <View style={styles.ellipseGroup}>
                <View style={styles.chartParent}>
                  <Image
                    style={styles.chartIcon}
                    contentFit="cover"
                    source={require("../assets/chart1.png")}
                  />
                  <Text style={[styles.text9, styles.textTypo]}>12%</Text>
                </View>
                <View style={styles.mineParent}>
                  <Text style={[styles.lagos, styles.text3Typo]}>Anambra</Text>
                  <Text style={[styles.kListens, styles.text3Typo]}>
                    24.67K Listeners
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <View style={[styles.parent, styles.parentFlexBox]}>
            <Image
              style={[styles.icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/241.png")}
            />
            <Pressable style={styles.iconLayout1} onPress={openIcon1}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/icon.png")}
              />
            </Pressable>
          </View>
        </View>
        <View style={[styles.nav, styles.navPosition]}>
          <View style={[styles.navChild, styles.iconLayout]} />
          <View style={[styles.icons, styles.parentFlexBox]}>
            <Pressable
              style={styles.more}
              onPress={() => navigation.navigate("Others")}
            >
              <Image
                style={[styles.icon3, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/more.png")}
              />
            </Pressable>
            <Pressable
              style={styles.more}
              onPress={() => navigation.navigate("WalletinCUSD")}
            >
              <Image
                style={[styles.icon4, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vuesaxboldemptywallet.png")}
              />
            </Pressable>
            <Pressable
              style={styles.musicSquareAdd}
              onPress={() => navigation.navigate("UploadYourContent")}
            >
              <Text style={[styles.blc1, styles.textTypo1]}>Upload Music</Text>
            </Pressable>
            <Pressable
              style={styles.more}
              onPress={() => navigation.navigate("Insights")}
            >
              <Image
                style={[styles.icon5, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/chartsquare.png")}
              />
            </Pressable>
            <Pressable
              style={styles.more}
              onPress={() => navigation.navigate("Discover")}
            >
              <Image
                style={[styles.icon6, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/musicplaylist1.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={icon1Visible}>
        <View style={styles.icon1Overlay}>
          <Pressable style={styles.icon1Bg} onPress={closeIcon1} />
          <UploadedMusicOptions onClose={closeIcon1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  lineIconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  navPosition: {
    left: "50%",
    position: "absolute",
  },
  textTypo2: {
    opacity: 0.8,
    color: Color.colorLightgray_100,
    fontFamily: FontFamily.mobileBodyCopy,
    fontSize: FontSize.size_3xs,
  },
  parentPosition: {
    left: 20,
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  descriptionTypo: {
    color: Color.primary10,
    lineHeight: 16,
    fontSize: FontSize.btnSmallNormal_size,
    fontFamily: FontFamily.mobileBodyCopy,
  },
  textTypo1: {
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    lineHeight: 24,
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
  },
  text3Typo: {
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
  },
  frameSpaceBlock: {
    padding: Padding.p_xs,
    backgroundColor: Color.colorGray_1000,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
  },
  textTypo: {
    fontSize: FontSize.mobileH4HeadingSection_size,
    top: "50%",
    marginTop: -12,
    textAlign: "center",
    lineHeight: 24,
    color: Color.white,
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  groupChildPosition: {
    height: 74,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout1: {
    height: 24,
    width: 24,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  bgIcon: {
    height: 252,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  selectedContentalbumChild: {
    top: 88,
    height: 291,
    width: 335,
    borderRadius: Border.br_xs,
    marginLeft: -167.5,
    left: "50%",
  },
  forLife: {
    fontSize: FontSize.mobileH3HeadingPage_size,
    letterSpacing: -1,
    lineHeight: 34,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
  },
  album: {
    textAlign: "right",
  },
  text: {
    marginLeft: 4,
    textAlign: "left",
  },
  albumParent: {
    marginTop: 4,
    flexDirection: "row",
  },
  forLifeParent: {
    marginLeft: -86.5,
    top: 399,
    alignItems: "center",
  },
  description: {
    textAlign: "right",
  },
  text1: {
    lineHeight: 24,
    marginTop: 4,
    textAlign: "left",
    color: Color.white,
  },
  releaseId: {
    textAlign: "left",
  },
  currentBid: {
    alignItems: "flex-end",
  },
  authorParent: {
    width: 303,
    justifyContent: "space-between",
    alignItems: "center",
  },
  lineIcon: {
    alignSelf: "stretch",
    maxWidth: "100%",
    maxHeight: "100%",
    marginTop: 20,
    overflow: "hidden",
  },
  blc1: {
    lineHeight: 24,
    textAlign: "left",
    color: Color.white,
  },
  totalEarning: {
    marginTop: 4,
    textAlign: "left",
  },
  polygon1Icon: {
    width: 9,
    height: 9,
  },
  text2: {
    color: Color.errorDefault,
    marginLeft: 8,
    lineHeight: 24,
    textAlign: "left",
  },
  group1137: {
    flexDirection: "row",
    alignItems: "center",
  },
  description1: {
    textAlign: "right",
    marginTop: 4,
  },
  currentBidParent: {
    marginTop: 20,
    width: 303,
    justifyContent: "space-between",
    alignItems: "center",
  },
  owner: {
    backgroundColor: Color.colorGray_900,
    padding: Padding.p_base,
    width: 335,
    borderRadius: Border.br_xs,
  },
  topTracks: {
    fontSize: FontSize.mobileH5HeadingComponent_size,
    fontWeight: "500",
    color: Color.white,
    lineHeight: 24,
    textAlign: "left",
  },
  frameChild: {
    height: 101,
    width: 101,
  },
  mine: {
    textAlign: "center",
    lineHeight: 24,
    color: Color.white,
  },
  kListens: {
    color: Color.colorGray_1100,
    textAlign: "center",
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
  },
  mineParent: {
    marginTop: 8,
    alignItems: "center",
  },
  ellipseParent: {
    alignItems: "center",
  },
  ellipseGroup: {
    marginLeft: 16,
    alignItems: "center",
  },
  frameParent: {
    marginTop: 16,
    flexDirection: "row",
  },
  yourFavouritArtists: {
    paddingBottom: Padding.p_base,
    marginTop: 36,
  },
  youtubeMusic: {
    color: Color.primary0,
    fontSize: FontSize.btnSmallNormal_size,
    fontWeight: "500",
    textAlign: "left",
  },
  text3: {
    fontSize: FontSize.mobileH5HeadingComponent_size,
    fontWeight: "500",
    color: Color.white,
    textAlign: "left",
  },
  youtubeMusicParent: {
    width: 311,
    alignItems: "center",
  },
  barChartIcon: {
    height: 12,
    marginTop: 12,
    width: 311,
    borderRadius: Border.br_xs,
  },
  frameView: {
    marginTop: 16,
  },
  frameGroup: {
    justifyContent: "center",
    marginTop: 16,
  },
  popularPlaylists: {
    marginTop: 36,
  },
  chartIcon: {
    top: 11,
    left: 11,
    width: 80,
    height: 80,
    position: "absolute",
  },
  text7: {
    marginLeft: -19.5,
  },
  chartParent: {
    height: 102,
    width: 101,
  },
  lagos: {
    textAlign: "center",
    fontSize: FontSize.mobileH5HeadingComponent_size,
    fontWeight: "500",
    color: Color.white,
    lineHeight: 24,
  },
  text8: {
    marginLeft: -18.5,
  },
  text9: {
    marginLeft: -17.5,
  },
  ownerParent: {
    top: 477,
  },
  groupChild: {
    backgroundColor: Color.colorGray_1300,
  },
  icon: {
    overflow: "hidden",
  },
  icon1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  icon1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  parent: {
    top: 40,
    left: 20,
    position: "absolute",
    alignItems: "center",
    width: 335,
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
  icon3: {
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
  icon4: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
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
  icon5: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  icon6: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  icons: {
    bottom: 19,
    alignItems: "flex-end",
    width: 335,
    left: "50%",
    position: "absolute",
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
  selectedContentalbum: {
    flex: 1,
    height: 1603,
    overflow: "hidden",
    backgroundColor: Color.primary,
  },
});

export default SelectedContentAlbum;