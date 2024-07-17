import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import AddSocial from "../components/AddSocial";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Profile = () => {
  const [frameContainer9Visible, setFrameContainer9Visible] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const openFrameContainer9 = useCallback(() => {
    setFrameContainer9Visible(true);
  }, []);

  const closeFrameContainer9 = useCallback(() => {
    setFrameContainer9Visible(false);
  }, []);

  return (
    <>
      <View style={[styles.profile, styles.iconLayout]}>
        <View style={[styles.rectangleParent, styles.parentLayout1]}>
          <LinearGradient
            style={[styles.groupChild, styles.parentLayout1]}
            locations={[0, 0.47, 1]}
            colors={[
              "rgba(161, 26, 79, 0.4)",
              "rgba(161, 6, 68, 0.4)",
              "rgba(126, 19, 65, 0.4)",
            ]}
          />
          <View style={[styles.backgroundParent, styles.parentLayout1]}>
            <Image
              style={[styles.backgroundParent, styles.parentLayout1]}
              contentFit="cover"
              source={require("../assets/background.png")}
            />
            <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("../assets/ellipse-2101.png")}
            />
            <View style={styles.janeDoeParent}>
              <Text style={[styles.janeDoe, styles.janeDoeTypo]}>Jane Doe</Text>
              <Text style={[styles.janeyjune, styles.janeyjuneTypo]}>
                @Janeyjune
              </Text>
              <Text style={[styles.joined01Aug, styles.joined01AugTypo]}>
                Joined 01 Aug, 2023
              </Text>
              <Pressable
                style={styles.editProfileWrapper}
                onPress={() => navigation.navigate("EditProfile")}
              >
                <Text style={[styles.editProfile, styles.joined01AugTypo]}>
                  Edit Profile
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View>
            <Text style={[styles.artistProfiles, styles.janeDoeTypo]}>
              Artist Profiles
            </Text>
            <View style={styles.frameGroup}>
              <View style={styles.mdispotifyParent}>
                <Image
                  style={styles.mdispotifyIcon}
                  contentFit="cover"
                  source={require("../assets/mdispotify.png")}
                />
                <View style={styles.spotifyForArtistsParent}>
                  <Text
                    style={[styles.spotifyForArtists, styles.yourProfileTypo]}
                  >
                    Spotify for Artists
                  </Text>
                  <Text style={[styles.notConnected, styles.joined01AugTypo]}>
                    Not Connected
                  </Text>
                </View>
              </View>
              <View style={styles.simpleIconsaudiomackParent}>
                <Image
                  style={styles.mdispotifyIcon}
                  contentFit="cover"
                  source={require("../assets/simpleiconsaudiomack.png")}
                />
                <View style={styles.spotifyForArtistsParent}>
                  <Text
                    style={[styles.spotifyForArtists, styles.yourProfileTypo]}
                  >
                    Audiomack
                  </Text>
                  <Text style={[styles.notConnected, styles.joined01AugTypo]}>
                    Not Connected
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.socialsParent}>
            <Text style={[styles.artistProfiles, styles.janeDoeTypo]}>
              Socials
            </Text>
            <View style={styles.frameGroup}>
              <Pressable
                style={styles.mdispotifyParent}
                onPress={openFrameContainer9}
              >
                <Image
                  style={styles.mdispotifyIcon}
                  contentFit="cover"
                  source={require("../assets/mdisoundcloud.png")}
                />
                <View style={styles.soundcloudParent}>
                  <Text
                    style={[styles.spotifyForArtists, styles.yourProfileTypo]}
                  >
                    Soundcloud
                  </Text>
                  <Text style={[styles.notConnected, styles.joined01AugTypo]}>
                    Not Added
                  </Text>
                </View>
              </Pressable>
              <View style={styles.riinstagramFillParent}>
                <Image
                  style={styles.mdispotifyIcon}
                  contentFit="cover"
                  source={require("../assets/riinstagramfill.png")}
                />
                <View style={styles.soundcloudParent}>
                  <Text
                    style={[styles.spotifyForArtists, styles.yourProfileTypo]}
                  >
                    Instagram
                  </Text>
                  <Text style={[styles.notConnected, styles.joined01AugTypo]}>
                    Not Added
                  </Text>
                </View>
              </View>
              <View style={styles.riinstagramFillParent}>
                <Image
                  style={styles.mdispotifyIcon}
                  contentFit="cover"
                  source={require("../assets/mditwitter.png")}
                />
                <View style={styles.soundcloudParent}>
                  <Text
                    style={[styles.spotifyForArtists, styles.yourProfileTypo]}
                  >
                    Twitter
                  </Text>
                  <Text style={[styles.notConnected, styles.joined01AugTypo]}>
                    Not Added
                  </Text>
                </View>
              </View>
              <View style={styles.riinstagramFillParent}>
                <Image
                  style={styles.mdispotifyIcon}
                  contentFit="cover"
                  source={require("../assets/icbaselinefacebook.png")}
                />
                <View style={styles.soundcloudParent}>
                  <Text
                    style={[styles.spotifyForArtists, styles.yourProfileTypo]}
                  >
                    Facebook
                  </Text>
                  <Text style={[styles.notConnected, styles.joined01AugTypo]}>
                    Not Added
                  </Text>
                </View>
              </View>
              <View style={styles.riinstagramFillParent}>
                <Image
                  style={styles.mdispotifyIcon}
                  contentFit="cover"
                  source={require("../assets/mdiyoutube.png")}
                />
                <View style={styles.spotifyForArtistsParent}>
                  <Text
                    style={[styles.spotifyForArtists, styles.yourProfileTypo]}
                  >
                    YouTube
                  </Text>
                  <Text style={[styles.notConnected, styles.joined01AugTypo]}>
                    Not Added
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.headerPosition}>
          <View style={[styles.headerChild, styles.headerPosition]} />
          <View style={[styles.parent, styles.parentLayout]}>
            <Pressable
              style={[styles.pressable, styles.parentLayout]}
              onPress={() => navigation.navigate("Others")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/241.png")}
              />
            </Pressable>
            <Text style={[styles.yourProfile, styles.yourProfileTypo]}>
              Your Profile
            </Text>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer9Visible}>
        <View style={styles.frameContainer9Overlay}>
          <Pressable
            style={styles.frameContainer9Bg}
            onPress={closeFrameContainer9}
          />
          <AddSocial onClose={closeFrameContainer9} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  parentLayout1: {
    width: 335,
    position: "absolute",
  },
  janeDoeTypo: {
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  janeyjuneTypo: {
    fontFamily: FontFamily.mobileBodyCopy,
    textAlign: "left",
  },
  joined01AugTypo: {
    fontSize: FontSize.btnSmallNormal_size,
    lineHeight: 24,
  },
  yourProfileTypo: {
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    fontSize: FontSize.mobileH5HeadingComponent_size,
    lineHeight: 24,
    color: Color.white,
  },
  headerPosition: {
    height: 74,
    width: 375,
    top: 0,
    left: 0,
    position: "absolute",
  },
  parentLayout: {
    height: 24,
    position: "absolute",
  },
  groupChild: {
    top: 10,
    borderRadius: 30,
    height: 161,
    backgroundColor: "transparent",
    left: 0,
  },
  backgroundParent: {
    height: 160,
    top: 0,
    left: 0,
  },
  groupItem: {
    top: 20,
    left: 195,
    width: 120,
    height: 120,
    position: "absolute",
  },
  janeDoe: {
    width: 87,
    textAlign: "left",
    color: Color.white,
    lineHeight: 34,
    letterSpacing: -1,
    fontSize: FontSize.mobileH3HeadingPage_size,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  janeyjune: {
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    marginTop: 4,
    lineHeight: 24,
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.white,
  },
  joined01Aug: {
    marginTop: 4,
    fontFamily: FontFamily.mobileBodyCopy,
    textAlign: "left",
    color: Color.white,
  },
  editProfile: {
    color: Color.primary,
    textAlign: "center",
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  editProfileWrapper: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_11xs,
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 4,
  },
  janeDoeParent: {
    top: 19,
    left: 20,
    position: "absolute",
  },
  rectangleParent: {
    top: 84,
    height: 171,
    left: 20,
  },
  artistProfiles: {
    textAlign: "left",
    color: Color.white,
    lineHeight: 34,
    letterSpacing: -1,
    fontSize: FontSize.mobileH3HeadingPage_size,
    fontFamily: FontFamily.mobileH3HeadingPage,
    fontWeight: "600",
  },
  mdispotifyIcon: {
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  spotifyForArtists: {
    textAlign: "left",
  },
  notConnected: {
    color: Color.primary10,
    fontFamily: FontFamily.mobileBodyCopy,
    textAlign: "left",
  },
  spotifyForArtistsParent: {
    marginLeft: 16,
  },
  mdispotifyParent: {
    flexDirection: "row",
  },
  simpleIconsaudiomackParent: {
    marginTop: 40,
    flexDirection: "row",
  },
  frameGroup: {
    marginTop: 24,
  },
  frameContainer9Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer9Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  soundcloudParent: {
    marginLeft: 16,
    justifyContent: "center",
  },
  riinstagramFillParent: {
    marginTop: 32,
    flexDirection: "row",
  },
  socialsParent: {
    marginTop: 54,
  },
  frameParent: {
    top: 279,
    left: 20,
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.colorGray_1300,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  pressable: {
    width: 24,
    top: 0,
    left: 0,
  },
  yourProfile: {
    left: 123,
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  parent: {
    top: 40,
    width: 212,
    left: 20,
  },
  profile: {
    backgroundColor: Color.primary,
    flex: 1,
    height: 1000,
    overflow: "hidden",
  },
});

export default Profile;
