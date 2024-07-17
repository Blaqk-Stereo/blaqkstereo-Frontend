import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

export type DeleteAnUploadedContentType = {
  onClose?: () => void;
};

const DeleteAnUploadedContent = ({ onClose }: DeleteAnUploadedContentType) => {
  return (
    <View style={styles.deleteAnUploadedContent}>
      <View style={styles.prompt}>
        <Text style={styles.deleteUpload}>Delete Upload</Text>
        <Text style={styles.areYouSure}>
          Are you sure you want to delete this content? Deleting this
          track/album will permanently remove it from Blaqk Stereo, and all
          associated streams, statistics, and royalties will be lost.
        </Text>
        <View style={styles.frameParent}>
          <View style={[styles.yesDeleteWrapper, styles.wrapperFlexBox]}>
            <Text style={styles.yesDelete}>Yes, Delete</Text>
          </View>
          <View style={[styles.cancelWrapper, styles.wrapperFlexBox]}>
            <Text style={styles.cancel}>Cancel</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    paddingHorizontal: Padding.p_81xl,
    justifyContent: "center",
    flexDirection: "row",
    left: 0,
    width: 225,
    alignItems: "center",
    position: "absolute",
  },
  deleteUpload: {
    fontSize: FontSize.mobileH5HeadingComponent_size,
    fontWeight: "500",
    fontFamily: FontFamily.mobileH5HeadingComponent,
    textAlign: "center",
    color: Color.white,
    lineHeight: 24,
  },
  areYouSure: {
    color: Color.primary0,
    width: 295,
    marginTop: 20,
    fontFamily: FontFamily.mobileBodyCopy,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
    lineHeight: 24,
  },
  yesDelete: {
    fontWeight: "600",
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    color: Color.errorDefault,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "center",
    lineHeight: 24,
  },
  yesDeleteWrapper: {
    top: 0,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: Padding.p_5xs,
  },
  cancel: {
    fontSize: FontSize.btnSmallNormal_size,
    fontFamily: FontFamily.mobileBodyCopy,
    textAlign: "center",
    color: Color.white,
    lineHeight: 24,
  },
  cancelWrapper: {
    top: 40,
    paddingTop: Padding.p_5xs,
  },
  frameParent: {
    height: 72,
    width: 225,
    marginTop: 20,
  },
  prompt: {
    marginTop: -152,
    marginLeft: -163.5,
    top: "50%",
    left: "50%",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorGray_300,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xl,
    alignItems: "center",
    position: "absolute",
  },
  deleteAnUploadedContent: {
    backgroundColor: Color.colorGray_1200,
    width: 375,
    height: 812,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default DeleteAnUploadedContent;