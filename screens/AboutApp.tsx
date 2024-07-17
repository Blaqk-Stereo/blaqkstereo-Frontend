import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const AboutApp = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.aboutApp, styles.iconLayout]}>
      <Text style={styles.redefiningMusicStreamingContainer}>
        <Text
          style={styles.redefiningMusicStreaming}
        >{`Redefining Music Streaming and NFT Experiences

Introduction: 
`}</Text>
        <Text
          style={styles.blaqkStereo10}
        >{`Blaqk Stereo (1.0) is a groundbreaking platform that combines the best of web3 technologies with the familiarity and simplicity of web2 music apps. Our mission is to create a seamless and immersive experience where music enthusiasts can explore, discover, and connect in a new era of digital music. Blaqk Stereo is not just a music streaming platform; it's a gateway to a vibrant community, cutting-edge NFT marketplace, and future possibilities.

`}</Text>
        <Text style={styles.redefiningMusicStreaming}>{`The Streaming Platform:
`}</Text>
        <Text
          style={styles.blaqkStereo10}
        >{`Blaqk Stereo's streaming platform offers a vast library of music from all genres, allowing you to dive into your favorite songs and explore new sounds. Discover personalized recommendations based on your unique taste and preferences, create playlists to curate your own musical journey, and follow your favorite artists to stay connected with their latest releases.

`}</Text>
        <Text style={styles.redefiningMusicStreaming}>{`The NFT Marketplace:
`}</Text>
        <Text
          style={styles.blaqkStereo10}
        >{`The Blaqk Stereo NFT Marketplace revolutionizes the way you engage with music through digital collectibles. Immerse yourself in a world of limited-edition music releases, virtual concert experiences, and exclusive artist collaborations. Own unique NFTs that represent special moments and interactions with your favorite artists, while supporting their creativity and unlocking new levels of fan engagement.

`}</Text>
        <Text
          style={styles.redefiningMusicStreaming}
        >{`The Blaqk Stereo Community:
`}</Text>
        <Text
          style={styles.blaqkStereo10}
        >{`Blaqk Stereo is more than just a platform; it's a community of passionate music enthusiasts, artists, and collectors. Connect with like-minded individuals, engage in discussions, and share your love for music. Discover shared playlists, join virtual events, and participate in community-driven initiatives that celebrate the power of music and creativity.

`}</Text>
        <Text
          style={styles.redefiningMusicStreaming}
        >{`The Future of Blaqk Stereo:
`}</Text>
        <Text
          style={styles.blaqkStereo10}
        >{`Blaqk Stereo is continually evolving, pushing boundaries, and exploring new frontiers. We are committed to embracing emerging technologies, collaborations, and innovative features that enhance your music streaming and NFT experiences. Stay tuned for exciting updates as we shape the future of music consumption and fan engagement.

`}</Text>
        <Text style={styles.redefiningMusicStreaming}>{`Conclusion:
`}</Text>
        <Text style={styles.blaqkStereo10}>
          Welcome to Blaqk Stereo, where the power of music meets the
          possibilities of the blockchain. Experience a seamless fusion of music
          streaming, NFTs, and community engagement like never before. Join us
          on this journey as we reimagine the way music is discovered, enjoyed,
          and celebrated.
        </Text>
      </Text>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <View style={[styles.parent, styles.parentLayout]}>
          <Pressable
            style={[styles.pressable, styles.parentLayout]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/241.png")}
            />
          </Pressable>
          <Text style={styles.aboutBlaqkStereo}>About Blaqk Stereo</Text>
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
  headerPosition: {
    height: 74,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  parentLayout: {
    height: 24,
    position: "absolute",
  },
  redefiningMusicStreaming: {
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
  },
  blaqkStereo10: {
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
  },
  redefiningMusicStreamingContainer: {
    marginLeft: -167.5,
    top: 86,
    left: "50%",
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "left",
    width: 335,
    color: Color.white,
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
    left: 0,
    height: 24,
    top: 0,
  },
  aboutBlaqkStereo: {
    left: 93,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    textAlign: "center",
    top: 0,
    lineHeight: 24,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    color: Color.white,
    position: "absolute",
  },
  parent: {
    top: 40,
    left: 20,
    width: 242,
  },
  aboutApp: {
    backgroundColor: Color.primary,
    flex: 1,
    height: 1745,
  },
});

export default AboutApp;