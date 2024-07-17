import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, FontFamily, FontSize, Padding, Color } from "../GlobalStyles";

const Stepper = () => {
  return (
    <View style={styles.stepper}>
      <View style={[styles.complete, styles.defaultPosition]}>
        <View style={styles.frame}>
          <View style={styles.stepbaseitem}>
            <View style={[styles.dot, styles.dotLayout]} />
          </View>
        </View>
        <Text style={[styles.stepTitle, styles.stepTypo]}>Step Title</Text>
      </View>
      <View style={[styles.inProgress, styles.defaultPosition]}>
        <View style={styles.frame}>
          <View style={[styles.stepbaseitem1, styles.stepbaseitemBorder]}>
            <View style={[styles.dot, styles.dotLayout]} />
          </View>
        </View>
        <Text style={[styles.stepTitle1, styles.stepTypo]}>Step Title</Text>
      </View>
      <View style={[styles.default, styles.defaultPosition]}>
        <View style={styles.frame}>
          <View style={[styles.stepbaseitem2, styles.stepbaseitemBorder]}>
            <View style={[styles.dot2, styles.dotLayout]} />
          </View>
        </View>
        <Text style={[styles.stepTitle2, styles.stepTypo]}>Step Title</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultPosition: {
    alignItems: "center",
    top: 20,
    position: "absolute",
  },
  dotLayout: {
    height: 8,
    width: 8,
    overflow: "hidden",
    borderRadius: Border.br_1215xl,
  },
  stepTypo: {
    marginTop: 12,
    width: 60,
    textAlign: "center",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    fontSize: FontSize.btnSmallNormal_size,
  },
  stepbaseitemBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    padding: Padding.p_9xs,
    overflow: "hidden",
    borderRadius: Border.br_1215xl,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    backgroundColor: Color.primary30,
  },
  stepbaseitem: {
    padding: Padding.p_9xs,
    overflow: "hidden",
    borderRadius: Border.br_1215xl,
    backgroundColor: Color.white,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  frame: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  stepTitle: {
    color: Color.white,
  },
  complete: {
    left: 16,
  },
  stepbaseitem1: {
    shadowColor: "rgba(255, 255, 255, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    borderColor: Color.primary0,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderStyle: "solid",
  },
  stepTitle1: {
    color: Color.primary0,
  },
  inProgress: {
    left: 92,
  },
  dot2: {
    backgroundColor: Color.primary10,
  },
  stepbaseitem2: {
    backgroundColor: Color.primary0,
    borderColor: Color.primary10,
  },
  stepTitle2: {
    color: Color.primary20,
  },
  default: {
    left: 168,
  },
  stepper: {
    backgroundColor: Color.primary,
    width: 244,
    height: 82,
  },
});

export default Stepper;
