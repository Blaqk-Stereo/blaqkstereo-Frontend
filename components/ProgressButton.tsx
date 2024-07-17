import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const ProgressButton = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.progressButton}>
      <View style={[styles.property11, styles.propertyPosition]}>
        <View style={styles.buttonfullcircle}>
          <Image
            style={styles.arrowRight}
            contentFit="cover"
            source={require("../assets/arrow--right1.png")}
          />
        </View>
        <Image
          style={[styles.property11Child, styles.property13ItemPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-1901.png")}
        />
        <Image
          style={[styles.property11Item, styles.itemPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-1911.png")}
        />
      </View>
      <View style={[styles.property12, styles.propertyPosition]}>
        <View style={styles.buttonfullcircle}>
          <Image
            style={styles.arrowRight}
            contentFit="cover"
            source={require("../assets/arrow--right1.png")}
          />
        </View>
        <Image
          style={[styles.property11Child, styles.property13ItemPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-1901.png")}
        />
        <Image
          style={[styles.property12Item, styles.itemPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-192.png")}
        />
      </View>
      <View style={[styles.property13, styles.propertyPosition]}>
        <View style={styles.buttonfullcircle}>
          <Image
            style={styles.arrowRight}
            contentFit="cover"
            source={require("../assets/arrow--right1.png")}
          />
        </View>
        <Image
          style={[styles.property11Child, styles.property13ItemPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-1901.png")}
        />
        <Image
          style={styles.property13ItemPosition}
          contentFit="cover"
          source={require("../assets/ellipse-1912.png")}
        />
      </View>
      <View style={[styles.property14, styles.propertyPosition]}>
        <View style={styles.buttonfullcircle}>
          <Image
            style={styles.arrowRight}
            contentFit="cover"
            source={require("../assets/arrow--right1.png")}
          />
        </View>
        <Image
          style={[styles.property11Child, styles.property13ItemPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-1901.png")}
        />
        <Image
          style={styles.property13ItemPosition}
          contentFit="cover"
          source={require("../assets/ellipse-1913.png")}
        />
      </View>
      <Pressable
        style={styles.property15}
        onPress={() => navigation.navigate("CreateAccount")}
      >
        <Image
          style={styles.property13ItemPosition}
          contentFit="cover"
          source={require("../assets/ellipse-1914.png")}
        />
        <Text style={[styles.button, styles.itemPosition]}>Let’s go</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  propertyPosition: {
    bottom: "14.29%",
    top: "11.11%",
    width: "13.02%",
    height: "74.6%",
    position: "absolute",
  },
  property13ItemPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  itemPosition: {
    left: "50%",
    position: "absolute",
  },
  arrowRight: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  buttonfullcircle: {
    height: "65.96%",
    width: "65.96%",
    top: "17.02%",
    right: "17.02%",
    bottom: "17.02%",
    left: "17.02%",
    borderRadius: Border.br_65xl,
    backgroundColor: Color.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_122xl,
    paddingVertical: Padding.p_xl,
    position: "absolute",
  },
  property11Child: {
    opacity: 0.08,
  },
  property11Item: {
    height: "50%",
    bottom: "50%",
    width: "50%",
    left: "50%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    top: "0%",
    overflow: "hidden",
  },
  property11: {
    right: "80.89%",
    left: "6.09%",
  },
  property12Item: {
    width: "50%",
    left: "50%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    top: "0%",
    overflow: "hidden",
    bottom: "0%",
    height: "100%",
  },
  property12: {
    right: "61.77%",
    left: "25.21%",
  },
  property13: {
    right: "42.66%",
    left: "44.32%",
  },
  property14: {
    right: "23.55%",
    left: "63.43%",
  },
  button: {
    marginTop: -12,
    marginLeft: -27,
    top: "50%",
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.mobileH3HeadingPage,
    color: Color.primary,
    textAlign: "center",
  },
  property15: {
    top: 14,
    left: 596,
    width: 94,
    height: 94,
    position: "absolute",
  },
  progressButton: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.primary,
    borderStyle: "dashed",
    borderColor: "#7b61ff",
    borderWidth: 1,
    width: 722,
    height: 126,
    overflow: "hidden",
  },
});

export default ProgressButton;
