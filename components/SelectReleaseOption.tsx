import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const SelectReleaseOption = () => {
  return (
    <View style={styles.selectReleaseOption}>
      <View>
        <View style={styles.privateFlexBox1}>
          <Text style={[styles.private, styles.privateFlexBox]}>Private</Text>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-15.png")}
          />
        </View>
        <View style={styles.privateFlexBox1}>
          <Text style={[styles.private, styles.privateFlexBox]}>Public</Text>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-15.png")}
          />
        </View>
        <View style={styles.privateFlexBox1}>
          <Text style={[styles.private, styles.privateFlexBox]}>Schedule</Text>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-15.png")}
          />
        </View>
      </View>
      <View style={styles.property1private}>
        <View style={[styles.privateGroup, styles.privateFlexBox1]}>
          <Text style={[styles.private, styles.privateFlexBox]}>Private</Text>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-151.png")}
          />
        </View>
        <View style={styles.privateFlexBox1}>
          <Text style={[styles.private, styles.privateFlexBox]}>Public</Text>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-15.png")}
          />
        </View>
        <View style={styles.privateFlexBox1}>
          <Text style={[styles.private, styles.privateFlexBox]}>Schedule</Text>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-15.png")}
          />
        </View>
      </View>
      <View style={styles.property1private}>
        <View style={styles.privateFlexBox1}>
          <Text style={[styles.private, styles.privateFlexBox]}>Private</Text>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-15.png")}
          />
        </View>
        <View style={[styles.privateGroup, styles.privateFlexBox1]}>
          <Text style={[styles.private, styles.privateFlexBox]}>Public</Text>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-151.png")}
          />
        </View>
        <View style={styles.privateFlexBox1}>
          <Text style={[styles.private, styles.privateFlexBox]}>Schedule</Text>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-15.png")}
          />
        </View>
      </View>
      <View style={styles.property1private}>
        <View>
          <View style={styles.privateFlexBox1}>
            <Text style={[styles.private, styles.privateFlexBox]}>Private</Text>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-15.png")}
            />
          </View>
          <View style={styles.privateFlexBox1}>
            <Text style={[styles.private, styles.privateFlexBox]}>Public</Text>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-15.png")}
            />
          </View>
          <View style={styles.privateFlexBox1}>
            <Text style={[styles.private, styles.privateFlexBox]}>
              Schedule
            </Text>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-151.png")}
            />
          </View>
        </View>
        <View style={styles.inputField}>
          <View style={styles.inputFieldChild} />
          <Text
            style={[styles.blinker, styles.blinkerPosition]}
          >{`Choose the release date & time`}</Text>
          <Image
            style={[styles.calendarIcon, styles.blinkerPosition]}
            contentFit="cover"
            source={require("../assets/calendar.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  privateFlexBox: {
    textAlign: "left",
    lineHeight: 24,
  },
  privateFlexBox1: {
    padding: Padding.p_base,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_xs,
    width: 335,
  },
  blinkerPosition: {
    top: "50%",
    position: "absolute",
  },
  private: {
    fontSize: FontSize.mobileH5HeadingComponent_size,
    fontWeight: "600",
    fontFamily: FontFamily.mobileH3HeadingPage,
    color: Color.white,
  },
  frameChild: {
    width: 19,
    height: 19,
  },
  privateGroup: {
    backgroundColor: Color.colorGray_300,
  },
  property1private: {
    marginTop: 24,
  },
  inputFieldChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGray_400,
    position: "absolute",
  },
  blinker: {
    marginTop: -12,
    left: 16,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.primary0,
    textAlign: "left",
    lineHeight: 24,
  },
  calendarIcon: {
    marginTop: -10,
    right: 16,
    width: 20,
    height: 20,
  },
  inputField: {
    height: 52,
    width: 335,
  },
  selectReleaseOption: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.primary,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    overflow: "hidden",
    padding: Padding.p_xl,
  },
});

export default SelectReleaseOption;
