import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Nav = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.nav}>
      <View style={[styles.navChild, styles.iconLayout]} />
      <View style={styles.icons}>
        <Pressable
          style={styles.more}
          onPress={() => navigation.navigate("Others")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/more.png")}
          />
        </Pressable>
        <Pressable
          style={styles.more}
          onPress={() => navigation.navigate("WalletinCUSD")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/vuesaxboldemptywallet2.png")}
          />
        </Pressable>
        <Pressable
          style={styles.musicSquareAdd}
          onPress={() => navigation.navigate("UploadYourContent")}
        >
          <Text style={styles.uploadMusic}>Upload Music</Text>
        </Pressable>
        <Pressable
          style={styles.more}
          onPress={() => navigation.navigate("Insights")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/chartsquare.png")}
          />
        </Pressable>
        <Pressable
          style={styles.more}
          onPress={() => navigation.navigate("Discover")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/musicplaylist1.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    height: "100%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  navChild: {
    top: "100%",
    right: "-100%",
    bottom: "-100%",
    left: "100%",
    borderBottomRightRadius: Border.br_13xl,
    borderBottomLeftRadius: Border.br_13xl,
    backgroundColor: Color.colorGray_1500,
    position: "absolute",
  },
  more: {
    width: 28,
    height: 28,
  },
  uploadMusic: {
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.mobileH3HeadingPage,
    color: Color.white,
    textAlign: "left",
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
    backgroundColor: Color.primary,
    borderStyle: "solid",
    borderColor: Color.primary30,
    borderWidth: 2,
    alignItems: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  icons: {
    marginLeft: -167.5,
    bottom: 19,
    left: "50%",
    width: 335,
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },
  nav: {
    width: 375,
    height: 60,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
});

export default Nav;
