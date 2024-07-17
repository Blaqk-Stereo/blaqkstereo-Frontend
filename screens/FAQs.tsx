import * as React from "react";
import { Text, StyleSheet, View, Linking, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const FAQs = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.faqs, styles.faqsLayout]}>
      <View style={styles.findAnswersToCommonQuestioParent}>
        <Text style={[styles.findAnswersTo, styles.findAnswersToLayout]}>
          Find Answers to Common Questions
        </Text>
        <View style={styles.frameWrapper}>
          <View>
            <View style={styles.parentFlexBox}>
              <Text style={[styles.howCanI, styles.howCanITypo]}>
                How can I discover new music on Blaqk Stereo?
              </Text>
              <Image
                style={styles.arrowDownIcon}
                contentFit="cover"
                source={require("../assets/arrowdown.png")}
              />
            </View>
            <Text
              style={[styles.explorePersonalizedRecommend, styles.howCanITypo]}
            >{`Explore personalized recommendations based on your listening habits and preferences.
Discover curated playlists tailored to various genres, moods, and themes.
Follow your favorite artists to stay updated with their latest releases.
Engage with the community to discover new music through shared playlists, discussions, and recommendations.`}</Text>
          </View>
        </View>
        <View style={styles.frameChild} />
        <View style={styles.frameWrapper}>
          <View>
            <View
              style={[
                styles.whatIsTheBlaqkStereoNftMParent,
                styles.parentFlexBox,
              ]}
            >
              <Text style={[styles.howCanI, styles.howCanITypo]}>
                What is the Blaqk Stereo NFT Marketplace?
              </Text>
              <Image
                style={styles.arrowDownIcon}
                contentFit="cover"
                source={require("../assets/arrowdown.png")}
              />
            </View>
            <Text
              style={[styles.explorePersonalizedRecommend, styles.howCanITypo]}
            >{`The Blaqk Stereo NFT Marketplace is a platform where you can buy, sell, and collect unique music-related NFTs (Non-Fungible Tokens).
Discover and own exclusive digital assets, such as limited edition music releases, concert tickets, virtual merchandise, and artwork.
Engage with the vibrant community of music enthusiasts, artists, and collectors in the NFT space.`}</Text>
          </View>
        </View>
        <View style={styles.frameChild} />
        <View style={styles.frameWrapper}>
          <View>
            <View style={styles.parentFlexBox}>
              <Text style={[styles.howCanI, styles.howCanITypo]}>
                How can I participate in the Blaqk Stereo NFT Marketplace?
              </Text>
              <Image
                style={styles.arrowDownIcon}
                contentFit="cover"
                source={require("../assets/arrowdown.png")}
              />
            </View>
            <Text
              style={[styles.explorePersonalizedRecommend, styles.howCanITypo]}
            >{`Connect your compatible digital wallet to the Blaqk Stereo app to access the NFT Marketplace features.
Browse through the available NFT listings, including music releases, virtual concert experiences, and artist collectibles.
Make purchases using supported cryptocurrencies or digital payment mblcods.
Engage in auctions, explore curated collections, and discover emerging artists in the NFT space.`}</Text>
          </View>
        </View>
        <View style={styles.frameChild} />
        <View style={styles.frameWrapper}>
          <View>
            <View style={styles.parentFlexBox}>
              <Text style={[styles.howCanI, styles.howCanITypo]}>
                How can I manage my NFT collection on Blaqk Stereo?
              </Text>
              <Image
                style={styles.arrowDownIcon}
                contentFit="cover"
                source={require("../assets/arrowdown.png")}
              />
            </View>
            <Text
              style={[styles.explorePersonalizedRecommend, styles.howCanITypo]}
            >{`Access your NFT collection within the app to view, organize, and showcase your owned NFTs.
Set preferences for displaying your collection publicly or privately.
Interact with your NFTs, including transferring, gifting, or listing them for sale.
Stay informed about new additions to your favorite artist's collections or upcoming drops.`}</Text>
          </View>
        </View>
        <View style={styles.frameChild} />
        <View style={styles.frameWrapper}>
          <View>
            <View
              style={[
                styles.whatIsTheBlaqkStereoNftMParent,
                styles.parentFlexBox,
              ]}
            >
              <Text style={[styles.howCanI, styles.howCanITypo]}>
                How can I contact Blaqk Stereo support?
              </Text>
              <Image
                style={styles.arrowDownIcon}
                contentFit="cover"
                source={require("../assets/arrowdown.png")}
              />
            </View>
            <Text
              style={[styles.explorePersonalizedRecommend, styles.howCanITypo]}
            >
              support@blaqkstereo.com
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <View style={styles.parent}>
          <Pressable
            style={styles.pressable}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={[styles.icon, styles.faqsLayout]}
              contentFit="cover"
              source={require("../assets/241.png")}
            />
          </Pressable>
          <Text style={styles.frequentlyAskedQuestions}>
            Frequently Asked Questions
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  faqsLayout: {
    overflow: "hidden",
    width: "100%",
  },
  findAnswersToLayout: {
    width: 335,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
  },
  howCanITypo: {
    textAlign: "left",
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  parentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: 335,
  },
  headerPosition: {
    height: 74,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  findAnswersTo: {
    color: Color.primary0,
    textAlign: "center",
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    width: 335,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
  },
  howCanI: {
    width: 299,
    color: Color.white,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    textAlign: "left",
  },
  arrowDownIcon: {
    height: 24,
    width: 24,
  },
  explorePersonalizedRecommend: {
    color: Color.colorGray_1400,
    marginTop: 4,
    width: 335,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    textAlign: "left",
  },
  frameWrapper: {
    marginTop: 20,
    alignItems: "center",
  },
  frameChild: {
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderTopWidth: 1,
    width: 336,
    height: 1,
    marginTop: 20,
  },
  whatIsTheBlaqkStereoNftMParent: {
    alignItems: "center",
  },
  findAnswersToCommonQuestioParent: {
    marginLeft: -167.5,
    top: 86,
    left: "50%",
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.colorGray_1300,
  },
  icon: {
    height: "100%",
  },
  pressable: {
    left: 0,
    top: 0,
    height: 24,
    width: 24,
    position: "absolute",
  },
  frequentlyAskedQuestions: {
    left: 59,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    top: 0,
    color: Color.white,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 24,
    position: "absolute",
  },
  parent: {
    top: 40,
    left: 20,
    width: 275,
    height: 24,
    position: "absolute",
  },
  faqs: {
    backgroundColor: Color.primary,
    flex: 1,
    height: 1509,
  },
});

export default FAQs;