import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

export type RolesDropdownType = {
  onClose?: () => void;
};

const RolesDropdown = ({ onClose }: RolesDropdownType) => {
  return (
    <View style={styles.rolesDropdown}>
      <Text style={styles.composerTypo}>Composer</Text>
      <Text style={[styles.coProducer, styles.composerTypo]}>Co-Producer</Text>
      <Text style={[styles.coProducer, styles.composerTypo]}>
        Cover Art Designer
      </Text>
      <Text style={[styles.coProducer, styles.composerTypo]}>Label</Text>
      <Text style={[styles.coProducer, styles.composerTypo]}>Lyricist</Text>
      <Text style={[styles.coProducer, styles.composerTypo]}>
        Mixing Engineer
      </Text>
      <Text style={[styles.coProducer, styles.composerTypo]}>Producer</Text>
      <Text style={[styles.coProducer, styles.composerTypo]}>Publisher</Text>
      <Text style={[styles.coProducer, styles.composerTypo]}>Songwriter</Text>
      <View style={[styles.otherParent, styles.inputFieldFlexBox]}>
        <Text style={styles.composerTypo}>Other</Text>
        <View style={[styles.inputField, styles.inputFieldFlexBox]}>
          <Text style={styles.blinker}>Type role here</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  composerTypo: {
    textAlign: "center",
    color: Color.white,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    fontFamily: FontFamily.mobileBodyCopy,
  },
  inputFieldFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  coProducer: {
    marginTop: 20,
  },
  blinker: {
    fontSize: FontSize.btnSmallNormal_size,
    color: Color.primary0,
    textAlign: "left",
    fontFamily: FontFamily.mobileBodyCopy,
  },
  inputField: {
    borderStyle: "solid",
    borderColor: Color.primary30,
    borderBottomWidth: 1,
    width: 256,
    overflow: "hidden",
    paddingRight: Padding.p_5xl,
    paddingBottom: Padding.p_9xs,
    marginLeft: 10,
  },
  otherParent: {
    marginTop: 20,
  },
  rolesDropdown: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_300,
    width: 335,
    padding: Padding.p_base,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default RolesDropdown;