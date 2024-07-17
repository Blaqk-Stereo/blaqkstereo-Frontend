import * as React from "react";
import { Text, StyleSheet, Linking, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const PrivacyPolicy = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.privacyPolicy, styles.iconLayout]}>
      <View style={styles.lastUpdated21stJune2023Parent}>
        <Text style={styles.lastUpdated21st}>
          Last Updated 21st June, 2023.
        </Text>
        <Text style={styles.introductionAtBlaqkContainer}>
          <Text style={styles.introduction}>{`Introduction: 
`}</Text>
          <Text
            style={styles.atBlaqkStereo}
          >{`At Blaqk Stereo, we prioritize the privacy and security of our users. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our platform. By accessing or using Blaqk Stereo, you consent to the terms outlined in this Privacy Policy.

`}</Text>
          <Text style={styles.introduction}>{`Information We Collect: 
`}</Text>
          <Text
            style={styles.atBlaqkStereo}
          >{`We collect information you provide when creating an account, such as your name, email address, and password. Additionally, we may collect information about your music preferences, playlists, and interactions within the app. We use cookies and similar technologies to gather usage data and improve your experience.

`}</Text>
          <Text style={styles.introduction}>{`How We Use Your Information: 
`}</Text>
          <Text
            style={styles.atBlaqkStereo}
          >{`We use the information we collect to personalize your music recommendations, improve our services, and enhance your overall experience. Your data may be used to communicate with you, provide support, and deliver important updates or promotional offers. We do not sell your personal information to third parties.

`}</Text>
          <Text style={styles.introduction}>{`Data Security: 
`}</Text>
          <Text
            style={styles.atBlaqkStereo}
          >{`We implement security measures to protect your personal information from unauthorized access, alteration, or disclosure. We use encryption, firewalls, and secure servers to safeguard your data. However, it's important to note that no mblcod of transmission over the internet or electronic storage is 100% secure.

`}</Text>
          <Text style={styles.introduction}>{`Third-Party Services: 
`}</Text>
          <Text
            style={styles.atBlaqkStereo}
          >{`Blaqk Stereo may integrate with third-party services or include links to external websites. These services and websites have their own privacy policies, and we encourage you to review them. We are not responsible for the practices or content of third parties.

`}</Text>
          <Text style={styles.introduction}>{`Your Choices and Rights: 
`}</Text>
          <Text
            style={styles.atBlaqkStereo}
          >{`You have the right to access, update, and delete your personal information. You can manage your communication preferences and opt-out of promotional emails. However, please note that certain essential communications related to your account or our services may still be sent.

`}</Text>
          <Text style={styles.introduction}>{`Changes to this Privacy Policy: 
`}</Text>
          <Text
            style={styles.atBlaqkStereo}
          >{`We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any significant changes by posting a prominent notice or sending a direct communication.

`}</Text>
          <Text style={styles.introduction}>{`Contact Us: 
`}</Text>
          <Text
            style={styles.atBlaqkStereo}
          >{`If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us by sending an email to `}</Text>
          <Text style={styles.atBlaqkStereo}>support@blaqkstereo.com</Text>
          <Text style={styles.atBlaqkStereo}>{`.

`}</Text>
          <Text style={styles.introduction}>{`Conclusion: 
`}</Text>
          <Text style={styles.atBlaqkStereo}>
            Your privacy is important to us at Blaqk Stereo. We are committed to
            protecting your personal information and ensuring transparency in
            our practices. By using our platform, you agree to this Privacy
            Policy. Please review it periodically for any updates or changes.
          </Text>
        </Text>
      </View>
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
          <Text style={styles.privacyPolicy1}>Privacy Policy</Text>
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
  lastUpdated21st: {
    color: Color.primary0,
    width: 335,
    textAlign: "center",
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
  },
  introduction: {
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
  },
  atBlaqkStereo: {
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
  },
  introductionAtBlaqkContainer: {
    textAlign: "left",
    marginTop: 20,
    color: Color.white,
    width: 335,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  lastUpdated21stJune2023Parent: {
    marginLeft: -168.5,
    top: 88,
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
    width: 24,
    left: 0,
    height: 24,
    top: 0,
  },
  privacyPolicy1: {
    left: 113,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    top: 0,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    color: Color.white,
    textAlign: "center",
    lineHeight: 24,
    position: "absolute",
  },
  parent: {
    top: 40,
    left: 20,
    width: 221,
  },
  privacyPolicy: {
    backgroundColor: Color.primary,
    flex: 1,
    height: 1824,
  },
});

export default PrivacyPolicy;
