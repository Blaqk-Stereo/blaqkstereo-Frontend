import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const AddSongsToAlbum = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.addSongsToAlbum, styles.iconLayout]}>
      <View style={[styles.groupParent, styles.parentPosition1]}>
        <View style={[styles.frameParent, styles.parentLayout]}>
          <View style={styles.imGoodBlueParent}>
            <Text style={styles.imGoodBlueTypo}>I'm Good (Blue)</Text>
            <View style={[styles.songParent, styles.buttonFlexBox]}>
              <Text style={styles.songTypo}>Song</Text>
              <Text style={styles.songTypo} />
              <Text style={styles.songTypo}>Davido</Text>
            </View>
          </View>
          <Image
            style={styles.groupChildPosition}
            contentFit="cover"
            source={require("../assets/rectangle-660.png")}
          />
          <Image
            style={[styles.addSquareIcon, styles.addIconLayout]}
            contentFit="cover"
            source={require("../assets/addsquare.png")}
          />
        </View>
        <View style={styles.frameGroupLayout}>
          <View style={styles.imGoodBlueParent}>
            <Text style={styles.imGoodBlueTypo}>She Loves You</Text>
            <View style={[styles.songParent, styles.buttonFlexBox]}>
              <Text style={styles.songTypo}>Song</Text>
              <Text style={styles.songTypo} />
              <Text style={styles.songTypo}>Davido</Text>
            </View>
          </View>
          <Image
            style={styles.groupChildPosition}
            contentFit="cover"
            source={require("../assets/rectangle-6601.png")}
          />
          <Image
            style={[styles.addSquareIcon1, styles.addIconLayout]}
            contentFit="cover"
            source={require("../assets/addsquare.png")}
          />
        </View>
        <Image
          style={styles.frameGroupLayout}
          contentFit="cover"
          source={require("../assets/group-1000000762.png")}
        />
        <Image
          style={styles.frameGroupLayout}
          contentFit="cover"
          source={require("../assets/group-1000000769.png")}
        />
        <View style={styles.frameGroupLayout}>
          <View style={styles.imGoodBlueParent}>
            <Text style={styles.imGoodBlueTypo}>About Damn</Text>
            <View style={[styles.songParent, styles.buttonFlexBox]}>
              <Text style={styles.songTypo}>Song</Text>
              <Text style={styles.songTypo} />
              <Text style={styles.songTypo}>Burna boy</Text>
            </View>
          </View>
          <Image
            style={styles.groupChildPosition}
            contentFit="cover"
            source={require("../assets/rectangle-6602.png")}
          />
          <Image
            style={[styles.addSquareIcon2, styles.addIconLayout]}
            contentFit="cover"
            source={require("../assets/addsquare.png")}
          />
        </View>
        <View style={styles.frameGroupLayout}>
          <View style={styles.imGoodBlueParent}>
            <Text style={styles.imGoodBlueTypo}>Quevedo: Bzrp Mu...</Text>
            <View style={[styles.songParent, styles.buttonFlexBox]}>
              <Text style={styles.songTypo}>Song</Text>
              <Text style={styles.songTypo} />
              <Text style={styles.songTypo}>Davido</Text>
            </View>
          </View>
          <Image
            style={styles.groupChildPosition}
            contentFit="cover"
            source={require("../assets/rectangle-6603.png")}
          />
          <Image
            style={[styles.addSquareIcon3, styles.addIconLayout]}
            contentFit="cover"
            source={require("../assets/addsquare.png")}
          />
        </View>
        <View style={styles.frameGroupLayout}>
          <View style={styles.imGoodBlueParent}>
            <Text style={styles.imGoodBlueTypo}>I Ain't Worried</Text>
            <View style={[styles.songParent, styles.buttonFlexBox]}>
              <Text style={styles.songTypo}>Song</Text>
              <Text style={styles.songTypo} />
              <Text style={styles.songTypo}>Burna boy</Text>
            </View>
          </View>
          <Image
            style={styles.groupChildPosition}
            contentFit="cover"
            source={require("../assets/rectangle-6604.png")}
          />
          <Image
            style={[styles.addSquareIcon4, styles.addIconLayout]}
            contentFit="cover"
            source={require("../assets/addsquare.png")}
          />
        </View>
        <View style={styles.frameGroupLayout}>
          <View style={[styles.superFreakyGirlParent, styles.parentPosition]}>
            <Text style={[styles.superFreakyGirl, styles.rectanglePosition]}>
              Super Freaky Girl
            </Text>
            <View style={styles.songParent2}>
              <Text style={styles.songTypo}>Song</Text>
              <Text style={styles.songTypo} />
              <Text style={styles.songTypo}>Rema</Text>
            </View>
          </View>
          <Image
            style={styles.groupChildPosition}
            contentFit="cover"
            source={require("../assets/rectangle-6605.png")}
          />
          <Image
            style={[styles.addSquareIcon5, styles.addIconLayout]}
            contentFit="cover"
            source={require("../assets/addsquare.png")}
          />
        </View>
        <Image
          style={styles.frameGroupLayout}
          contentFit="cover"
          source={require("../assets/group-1000000773.png")}
        />
        <View style={styles.frameGroupLayout}>
          <View style={[styles.asItWasParent, styles.parentPosition]}>
            <Text style={[styles.superFreakyGirl, styles.rectanglePosition]}>
              As It Was
            </Text>
            <View style={styles.songParent2}>
              <Text style={styles.songTypo}>Song</Text>
              <Text style={styles.songTypo} />
              <Text style={styles.songTypo}>Rema</Text>
            </View>
          </View>
          <Image
            style={styles.groupChildPosition}
            contentFit="cover"
            source={require("../assets/rectangle-6606.png")}
          />
          <Image
            style={[styles.addSquareIcon6, styles.addIconLayout]}
            contentFit="cover"
            source={require("../assets/addsquare.png")}
          />
        </View>
        <View style={styles.frameGroupLayout}>
          <View style={styles.imGoodBlueParent}>
            <Text style={styles.imGoodBlueTypo}>I Ain't Worried</Text>
            <View style={[styles.songParent, styles.buttonFlexBox]}>
              <Text style={styles.songTypo}>Song</Text>
              <Text style={styles.songTypo} />
              <Text style={styles.songTypo}>Burna boy</Text>
            </View>
          </View>
          <Image
            style={styles.groupChildPosition}
            contentFit="cover"
            source={require("../assets/rectangle-6607.png")}
          />
          <Image
            style={[styles.addSquareIcon7, styles.addIconLayout]}
            contentFit="cover"
            source={require("../assets/addsquare.png")}
          />
        </View>
      </View>
      <View style={styles.addSongsToAlbumChild} />
      <Pressable
        style={[styles.button, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("UploadMusicAlbumSongAdded")}
      >
        <Text style={[styles.addToAlbum, styles.addFlexBox]}>
          Add to Album (10 Selected)
        </Text>
      </Pressable>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Pressable
          style={[styles.pressable, styles.addSongsPosition]}
          onPress={() => navigation.navigate("Discover")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/241.png")}
          />
        </Pressable>
        <Text style={[styles.addSongs, styles.addSongsPosition]}>
          Add Song(s)
        </Text>
        <View style={[styles.rectangleParent, styles.parentLayout]}>
          <View style={[styles.rectangleView, styles.rectanglePosition]} />
          <Text style={[styles.searchForSong, styles.songTypo]}>
            Search for song
          </Text>
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/7.png")}
          />
          <View style={[styles.blinkingCursor, styles.rectangleLayout]}>
            <View style={[styles.rectangle, styles.rectangleLayout]} />
            <View style={styles.line} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  parentPosition1: {
    left: 355,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  parentLayout: {
    height: 48,
    width: 335,
  },
  buttonFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  addIconLayout: {
    height: 24,
    width: 24,
  },
  parentPosition: {
    height: 43,
    top: 3,
    left: 64,
    position: "absolute",
  },
  rectanglePosition: {
    top: 0,
    left: 0,
  },
  addFlexBox: {
    textAlign: "center",
    lineHeight: 24,
  },
  headerPosition: {
    height: 140,
    width: 375,
    top: 0,
    left: 0,
    position: "absolute",
  },
  addSongsPosition: {
    top: 40,
    position: "absolute",
  },
  songTypo: {
    color: Color.colorGray_1400,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    textAlign: "left",
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  rectangleLayout: {
    height: 21,
    width: 10,
    position: "absolute",
  },
  imGoodBlueTypo: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  songParent: {
    marginTop: 2,
  },
  imGoodBlueParent: {
    marginTop: -21,
    left: 64,
    top: "50%",
    position: "absolute",
  },
  groupChildPosition: {
    width: 48,
    borderRadius: Border.br_9xs,
    marginTop: -24,
    left: 0,
    top: "50%",
    height: 48,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  addSquareIcon: {
    right: 0,
    marginTop: -12,
    width: 24,
    top: "50%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  frameParent: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  addSquareIcon1: {
    right: 0,
    marginTop: -12,
    width: 24,
    top: "50%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  frameGroupLayout: {
    marginTop: 24,
    height: 48,
    width: 335,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  addSquareIcon2: {
    right: 0,
    marginTop: -12,
    width: 24,
    top: "50%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  addSquareIcon3: {
    right: 0,
    marginTop: -12,
    width: 24,
    top: "50%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  addSquareIcon4: {
    right: 0,
    marginTop: -12,
    width: 24,
    top: "50%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  superFreakyGirl: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    position: "absolute",
  },
  songParent2: {
    top: 19,
    left: 0,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  superFreakyGirlParent: {
    width: 116,
  },
  addSquareIcon5: {
    right: 0,
    marginTop: -12,
    width: 24,
    top: "50%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  asItWasParent: {
    width: 93,
  },
  addSquareIcon6: {
    right: 0,
    marginTop: -12,
    width: 24,
    top: "50%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  addSquareIcon7: {
    right: 0,
    marginTop: -12,
    width: 24,
    top: "50%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  groupParent: {
    top: 156,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  addSongsToAlbumChild: {
    marginLeft: -187.5,
    bottom: 0,
    height: 88,
    width: 375,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.primary,
  },
  addToAlbum: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH3HeadingPage,
    color: Color.primary,
    textAlign: "center",
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  button: {
    marginLeft: -167.5,
    bottom: 24,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    justifyContent: "center",
    paddingHorizontal: Padding.p_99xl,
    paddingVertical: Padding.p_sm,
    left: "50%",
    width: 335,
    flexDirection: "row",
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.colorGray_1600,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  pressable: {
    left: 20,
    height: 24,
    width: 24,
  },
  addSongs: {
    marginLeft: -45.5,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    textAlign: "center",
    lineHeight: 24,
    left: "50%",
    color: Color.white,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    top: 40,
  },
  rectangleView: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_1800,
    height: 48,
    width: 335,
    position: "absolute",
  },
  searchForSong: {
    top: 12,
    left: 44,
    position: "absolute",
  },
  icon1: {
    top: 14,
    left: 16,
    width: 20,
    height: 20,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
    overflow: "hidden",
  },
  rectangle: {
    top: 0,
    left: 0,
  },
  line: {
    height: "80.95%",
    width: "10%",
    top: "7.14%",
    right: "45%",
    bottom: "11.9%",
    left: "45%",
    borderStyle: "solid",
    borderColor: Color.white,
    borderRightWidth: 1,
    position: "absolute",
  },
  blinkingCursor: {
    marginTop: -10,
    left: 39,
    top: "50%",
    width: 10,
  },
  rectangleParent: {
    top: 80,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    left: 355,
    position: "absolute",
  },
  addSongsToAlbum: {
    flex: 1,
    height: 1032,
    overflow: "hidden",
    backgroundColor: Color.primary,
    width: "100%",
  },
});

export default AddSongsToAlbum;
