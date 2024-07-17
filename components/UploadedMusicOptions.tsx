import React, { useState, useCallback } from "react";
import { View, StyleSheet, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import DeleteAnUploadedContent from "./DeleteAnUploadedContent";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type UploadedMusicOptionsType = {
  onClose?: () => void;
};

const UploadedMusicOptions = ({ onClose }: UploadedMusicOptionsType) => {
  const [frameContainer2Visible, setFrameContainer2Visible] = useState(false);

  const openFrameContainer2 = useCallback(() => {
    setFrameContainer2Visible(true);
  }, []);

  const closeFrameContainer2 = useCallback(() => {
    setFrameContainer2Visible(false);
  }, []);

  return (
    <>
      <View style={styles.uploadedMusicOptions}>
        <View style={styles.parentFlexBox}>
          <Image
            style={styles.exportIcon}
            contentFit="cover"
            source={require("../assets/export.png")}
          />
          <Text style={styles.openInBlaqk}>Open in Blaqk Stereo App</Text>
        </View>
        <View style={[styles.sendSqaure2Parent, styles.parentFlexBox]}>
          <Image
            style={styles.exportIcon}
            contentFit="cover"
            source={require("../assets/sendsqaure2.png")}
          />
          <Text style={styles.openInBlaqk}>Share</Text>
        </View>
        <Pressable
          style={[styles.sendSqaure2Parent, styles.parentFlexBox]}
          onPress={openFrameContainer2}
        >
          <Image
            style={styles.exportIcon}
            contentFit="cover"
            source={require("../assets/trash1.png")}
          />
          <Text style={styles.openInBlaqk}>Delete</Text>
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer2Visible}>
        <View style={styles.frameContainer2Overlay}>
          <Pressable
            style={styles.frameContainer2Bg}
            onPress={closeFrameContainer2}
          />
          <DeleteAnUploadedContent onClose={closeFrameContainer2} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  exportIcon: {
    width: 16,
    height: 16,
  },
  openInBlaqk: {
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    lineHeight: 24,
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.white,
    textAlign: "center",
    marginLeft: 16,
  },
  sendSqaure2Parent: {
    marginTop: 20,
  },
  frameContainer2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  uploadedMusicOptions: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_300,
    padding: Padding.p_base,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default UploadedMusicOptions;