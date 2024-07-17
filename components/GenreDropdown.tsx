import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const GenreDropdown = () => {
  return (
    <View style={styles.genreDropdown}>
      <Text style={styles.optionTypo}>Option 1</Text>
      <Text style={[styles.option2, styles.optionTypo]}>Option 2</Text>
      <Text style={[styles.option2, styles.optionTypo]}>Option 3</Text>
      <Text style={[styles.option2, styles.optionTypo]}>Option 4</Text>
      <Text style={[styles.option2, styles.optionTypo]}>Option 5</Text>
      <Text style={[styles.option2, styles.optionTypo]}>Option 6</Text>
      <Text style={[styles.option2, styles.optionTypo]}>Option 7</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  optionTypo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  option2: {
    marginTop: 20,
  },
  genreDropdown: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_300,
    width: 335,
    padding: Padding.p_base,
  },
});

export default GenreDropdown;
