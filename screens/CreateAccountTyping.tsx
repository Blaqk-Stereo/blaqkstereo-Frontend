import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const CreateAccountTyping = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.createAccountTyping}>
      <View style={[styles.newToBlaqkStereoParent, styles.parentPosition]}>
        <Text style={[styles.newToBlaqk, styles.blinker1Typo]}>
          Already on Blaqk Stereo?
        </Text>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={[styles.createAccount, styles.blinker1Typo]}>Login</Text>
        </Pressable>
      </View>
      <View style={[styles.frameParent, styles.parentPosition]}>
        <View style={styles.signInParent}>
          <Text style={[styles.signIn, styles.signInFlexBox]}>
            Let the journey begin!
          </Text>
          <Text style={styles.uploadYourMusic}>
            Upload your music, manage your royalties, and engage with the music
            community.
          </Text>
        </View>
        <View style={styles.frameGroup}>
          <View>
            <Pressable
              style={styles.inputLayout}
              onPress={() => navigation.navigate("CreateAccountFilled")}
            >
              <View style={[styles.inputFieldChild, styles.inputPosition]} />
              <Text style={styles.blinker}>|</Text>
              <Image
                style={[styles.eyeIcon, styles.eyeIconPosition]}
                contentFit="cover"
                source={require("../assets/property-1eye.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.inputField1, styles.inputLayout]}
              onPress={() => navigation.navigate("CreateAccountFillederror")}
            >
              <View style={styles.inputPosition} />
              <Text style={[styles.blinker1, styles.blinker1Position]}>
                user@mail.com
              </Text>
              <Image
                style={[styles.eyeIcon, styles.eyeIconPosition]}
                contentFit="cover"
                source={require("../assets/property-1eye.png")}
              />
            </Pressable>
            <View style={styles.inputFieldGroup}>
              <View style={styles.inputLayout}>
                <View style={styles.inputPosition} />
                <Text style={[styles.blinker1, styles.blinker1Position]}>
                  *************
                </Text>
                <Image
                  style={styles.eyeIconPosition}
                  contentFit="cover"
                  source={require("../assets/property-1eye.png")}
                />
              </View>
              <View style={styles.checkboxfselectedParent}>
                <Image
                  style={styles.checkboxfselectedIcon}
                  contentFit="cover"
                  source={require("../assets/checkboxfselected.png")}
                />
                <Text style={[styles.iAgreeToContainer, styles.blinker1Typo]}>
                  {`I agree to the `}
                  <Text style={styles.termsOfUse}>Terms of use</Text>
                  {` and `}
                  <Text style={styles.termsOfUse}>Privacy policy</Text>
                </Text>
              </View>
            </View>
          </View>
          <Pressable
            style={[styles.button1, styles.buttonFlexBox]}
            onPress={() => navigation.navigate("VerifyEmail1")}
          >
            <Text style={[styles.continue, styles.signInFlexBox]}>
              Continue
            </Text>
          </Pressable>
        </View>
      </View>
      <Image
        style={[styles.blaqkStereowhite300x1, styles.blinker1Position]}
        contentFit="cover"
        source={require("../assets/blaqk-stereowhite300x-13.png")}
      />
      <View style={[styles.extensionsKeyboardsDark, styles.extensionsLayout]}>
        <View
          style={[styles.extensionsKeyboardsDark1, styles.extensionsLayout]}
        />
        <Image
          style={[styles.extensionsKeyboardsDark1, styles.extensionsLayout]}
          contentFit="cover"
          source={require("../assets/background1.png")}
        />
        <View style={styles.keyboard}>
          <View style={[styles.return, styles.returnLayout]}>
            <Image
              style={[styles.keyIcon, styles.keyIconLayout]}
              contentFit="cover"
              source={require("../assets/key.png")}
            />
            <Text style={[styles.return1, styles.textTypo]}>Go</Text>
          </View>
          <View style={[styles.space, styles.spaceLayout]}>
            <Image
              style={[styles.keyIcon1, styles.spaceLayout]}
              contentFit="cover"
              source={require("../assets/key1.png")}
            />
            <Text style={[styles.space1, styles.textTypo]}>space</Text>
          </View>
          <View style={[styles.view, styles.viewLayout]}>
            <Image
              style={[styles.keyIcon2, styles.viewLayout]}
              contentFit="cover"
              source={require("../assets/key2.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>123</Text>
          </View>
          <Image
            style={[styles.backspaceIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/backspace.png")}
          />
          <View style={[styles.m, styles.mLayout]}>
            <Image
              style={[styles.keyIcon3, styles.mLayout]}
              contentFit="cover"
              source={require("../assets/key3.png")}
            />
            <Text style={[styles.l, styles.lTypo]}>m</Text>
          </View>
          <View style={[styles.n, styles.mLayout]}>
            <Image
              style={[styles.keyIcon3, styles.mLayout]}
              contentFit="cover"
              source={require("../assets/key4.png")}
            />
            <Text style={[styles.k, styles.lTypo]}>n</Text>
          </View>
          <View style={[styles.b, styles.mLayout]}>
            <Image
              style={[styles.keyIcon3, styles.mLayout]}
              contentFit="cover"
              source={require("../assets/key3.png")}
            />
            <Text style={[styles.k, styles.lTypo]}>b</Text>
          </View>
          <View style={[styles.v, styles.mLayout]}>
            <Image
              style={[styles.keyIcon3, styles.mLayout]}
              contentFit="cover"
              source={require("../assets/key4.png")}
            />
            <Text style={[styles.h, styles.lTypo]}>v</Text>
          </View>
          <View style={[styles.c, styles.mLayout]}>
            <Image
              style={[styles.keyIcon3, styles.mLayout]}
              contentFit="cover"
              source={require("../assets/key3.png")}
            />
            <Text style={[styles.h, styles.lTypo]}>c</Text>
          </View>
          <View style={[styles.x, styles.mLayout]}>
            <Image
              style={[styles.keyIcon3, styles.mLayout]}
              contentFit="cover"
              source={require("../assets/key4.png")}
            />
            <Text style={[styles.h, styles.lTypo]}>x</Text>
          </View>
          <View style={[styles.z, styles.mLayout]}>
            <Image
              style={[styles.keyIcon3, styles.mLayout]}
              contentFit="cover"
              source={require("../assets/key3.png")}
            />
            <Text style={[styles.h, styles.lTypo]}>z</Text>
          </View>
          <Image
            style={[styles.shiftIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/shift.png")}
          />
          <View style={[styles.l1, styles.sPosition]}>
            <Image
              style={[styles.keyIcon3, styles.mLayout]}
              contentFit="cover"
              source={require("../assets/key4.png")}
            />
            <Text style={[styles.l2, styles.lTypo]}>l</Text>
          </View>
          <View style={[styles.k1, styles.sPosition]}>
            <Image
              style={[styles.keyIcon3, styles.mLayout]}
              contentFit="cover"
              source={require("../assets/key3.png")}
            />
            <Text style={[styles.h, styles.lTypo]}>k</Text>
          </View>
          <View style={[styles.j1, styles.sPosition]}>
            <Image
              style={[styles.keyIcon3, styles.mLayout]}
              contentFit="cover"
              source={require("../assets/key4.png")}
            />
            <Text style={[styles.l2, styles.lTypo]}>j</Text>
          </View>
          <View style={[styles.h1, styles.sPosition]}>
            <Image
              style={[styles.keyIcon3, styles.mLayout]}
              contentFit="cover"
              source={require("../assets/key3.png")}
            />
            <Text style={[styles.k, styles.lTypo]}>h</Text>
          </View>
          <View style={[styles.g1, styles.sPosition]}>
            <Image
              style={[styles.keyIcon3, styles.mLayout]}
              contentFit="cover"
              source={require("../assets/key4.png")}
            />
            <Text style={[styles.k, styles.lTypo]}>g</Text>
          </View>
          <View style={[styles.f1, styles.sPosition]}>
            <Image
              style={[styles.keyIcon3, styles.mLayout]}
              contentFit="cover"
              source={require("../assets/key3.png")}
            />
            <Text style={[styles.f2, styles.lTypo]}>f</Text>
          </View>
          <View style={[styles.d1, styles.sPosition]}>
            <Image
              style={[styles.keyIcon3, styles.mLayout]}
              contentFit="cover"
              source={require("../assets/key4.png")}
            />
            <Text style={[styles.k, styles.lTypo]}>d</Text>
          </View>
          <View style={[styles.s, styles.sPosition]}>
            <Image
              style={[styles.keyIcon3, styles.mLayout]}
              contentFit="cover"
              source={require("../assets/key4.png")}
            />
            <Text style={[styles.h, styles.lTypo]}>s</Text>
          </View>
          <View style={[styles.a, styles.sPosition]}>
            <Image
              style={[styles.keyIcon3, styles.mLayout]}
              contentFit="cover"
              source={require("../assets/key3.png")}
            />
            <Text style={[styles.h, styles.lTypo]}>a</Text>
          </View>
          <View style={[styles.p, styles.mLayout]}>
            <Image
              style={[styles.keyIcon3, styles.mLayout]}
              contentFit="cover"
              source={require("../assets/key3.png")}
            />
            <Text style={[styles.k, styles.lTypo]}>p</Text>
          </View>
          <View style={[styles.o, styles.mLayout]}>
            <Image
              style={[styles.keyIcon3, styles.mLayout]}
              contentFit="cover"
              source={require("../assets/key4.png")}
            />
            <Text style={[styles.k, styles.lTypo]}>o</Text>
          </View>
          <View style={[styles.i, styles.mLayout]}>
            <Image
              style={[styles.keyIcon3, styles.mLayout]}
              contentFit="cover"
              source={require("../assets/key3.png")}
            />
            <Text style={[styles.l2, styles.lTypo]}>i</Text>
          </View>
          <View style={[styles.u, styles.mLayout]}>
            <Image
              style={[styles.keyIcon3, styles.mLayout]}
              contentFit="cover"
              source={require("../assets/key4.png")}
            />
            <Text style={[styles.k, styles.lTypo]}>u</Text>
          </View>
          <View style={[styles.y, styles.mLayout]}>
            <Image
              style={[styles.keyIcon3, styles.mLayout]}
              contentFit="cover"
              source={require("../assets/key3.png")}
            />
            <Text style={[styles.h, styles.lTypo]}>y</Text>
          </View>
          <View style={[styles.t, styles.mLayout]}>
            <Image
              style={[styles.keyIcon3, styles.mLayout]}
              contentFit="cover"
              source={require("../assets/key4.png")}
            />
            <Text style={[styles.f2, styles.lTypo]}>t</Text>
          </View>
          <View style={[styles.r, styles.mLayout]}>
            <Image
              style={[styles.keyIcon3, styles.mLayout]}
              contentFit="cover"
              source={require("../assets/key3.png")}
            />
            <Text style={[styles.f2, styles.lTypo]}>r</Text>
          </View>
          <View style={[styles.e, styles.mLayout]}>
            <Image
              style={[styles.keyIcon3, styles.mLayout]}
              contentFit="cover"
              source={require("../assets/key4.png")}
            />
            <Text style={[styles.k, styles.lTypo]}>e</Text>
          </View>
          <View style={[styles.w, styles.mLayout]}>
            <Image
              style={[styles.keyIcon3, styles.mLayout]}
              contentFit="cover"
              source={require("../assets/key4.png")}
            />
            <Text style={[styles.w1, styles.lTypo]}>w</Text>
          </View>
          <View style={[styles.q, styles.mLayout]}>
            <Image
              style={[styles.keyIcon3, styles.mLayout]}
              contentFit="cover"
              source={require("../assets/key3.png")}
            />
            <Text style={[styles.k, styles.lTypo]}>q</Text>
          </View>
          <Image
            style={styles.dictationIcon}
            contentFit="cover"
            source={require("../assets/dictation.png")}
          />
          <Image
            style={styles.emojiIcon}
            contentFit="cover"
            source={require("../assets/emoji.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    position: "absolute",
    alignItems: "center",
    left: "50%",
  },
  blinker1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
  },
  buttonFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  signInFlexBox: {
    letterSpacing: -1,
    textAlign: "left",
  },
  inputPosition: {
    backgroundColor: Color.colorGray_400,
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  eyeIconPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "88.34%",
    bottom: "26.92%",
    right: "4.66%",
    width: "7%",
    height: "46.15%",
    top: "26.92%",
    position: "absolute",
    overflow: "hidden",
  },
  inputLayout: {
    height: 52,
    width: 343,
  },
  blinker1Position: {
    top: "50%",
    position: "absolute",
  },
  extensionsLayout: {
    height: 291,
    width: 375,
    left: 0,
    position: "absolute",
  },
  returnLayout: {
    height: 42,
    width: 88,
    position: "absolute",
  },
  keyIconLayout: {
    borderRadius: Border.br_8xs,
    top: 0,
  },
  textTypo: {
    fontFamily: FontFamily.sFProText,
    fontWeight: "300",
    letterSpacing: 0,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    top: 10,
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  spaceLayout: {
    width: 182,
    height: 42,
    position: "absolute",
  },
  viewLayout: {
    width: 87,
    height: 42,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    width: 42,
    top: 108,
    height: 42,
    position: "absolute",
  },
  mLayout: {
    width: 32,
    height: 42,
    position: "absolute",
  },
  lTypo: {
    lineHeight: 28,
    fontSize: FontSize.size_4xl,
    top: 6,
    fontFamily: FontFamily.sFProText,
    fontWeight: "300",
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  sPosition: {
    top: 54,
    width: 32,
    height: 42,
    position: "absolute",
  },
  newToBlaqk: {
    color: Color.primary10,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "left",
  },
  createAccount: {
    fontSize: FontSize.btnSmallNormal_size,
    color: Color.white,
  },
  button: {
    borderRadius: Border.br_smi_5,
    backgroundColor: Color.primary20,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    marginTop: 4,
    overflow: "hidden",
  },
  newToBlaqkStereoParent: {
    marginLeft: -81.5,
    top: 720,
    alignItems: "center",
    left: "50%",
  },
  signIn: {
    fontSize: FontSize.mobileH3HeadingPage_size,
    lineHeight: 34,
    fontWeight: "600",
    fontFamily: FontFamily.mobileH3HeadingPage,
    color: Color.white,
  },
  uploadYourMusic: {
    color: Color.primary0,
    width: 335,
    textAlign: "center",
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  signInParent: {
    alignItems: "center",
  },
  inputFieldChild: {
    borderStyle: "solid",
    borderColor: Color.primary30,
    borderWidth: 1,
  },
  blinker: {
    width: "1.17%",
    left: "4.66%",
    top: "26.92%",
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    position: "absolute",
  },
  eyeIcon: {
    display: "none",
  },
  blinker1: {
    marginTop: -12,
    left: 16,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  inputField1: {
    marginTop: 24,
  },
  checkboxfselectedIcon: {
    width: 16,
    height: 16,
  },
  termsOfUse: {
    textDecoration: "underline",
  },
  iAgreeToContainer: {
    marginLeft: 4,
    color: Color.white,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
    textAlign: "left",
  },
  checkboxfselectedParent: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  inputFieldGroup: {
    marginTop: 24,
  },
  continue: {
    color: Color.primary,
    fontFamily: FontFamily.mobileBodyCopy,
    lineHeight: 24,
    letterSpacing: -1,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  button1: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_99xl,
    paddingVertical: Padding.p_sm,
    marginTop: 24,
    width: 335,
  },
  frameGroup: {
    marginTop: 20,
    alignItems: "center",
  },
  frameParent: {
    marginLeft: -171.5,
    top: 166,
    alignItems: "center",
    left: "50%",
  },
  blaqkStereowhite300x1: {
    marginTop: -324,
    marginLeft: -49.5,
    width: 99,
    height: 48,
    left: "50%",
    overflow: "hidden",
  },
  extensionsKeyboardsDark1: {
    top: 0,
  },
  keyIcon: {
    height: 42,
    width: 88,
    position: "absolute",
    left: 0,
  },
  return1: {
    left: 34,
  },
  return: {
    left: 281,
    top: 160,
  },
  keyIcon1: {
    borderRadius: Border.br_8xs,
    top: 0,
    left: 0,
  },
  space1: {
    left: 69,
  },
  space: {
    left: 93,
    top: 160,
  },
  keyIcon2: {
    borderRadius: Border.br_8xs,
    top: 0,
  },
  text: {
    left: 30,
  },
  view: {
    top: 160,
  },
  backspaceIcon: {
    left: 327,
  },
  keyIcon3: {
    borderRadius: Border.br_8xs,
    top: 0,
    left: 0,
  },
  l: {
    left: 6,
  },
  m: {
    top: 108,
    width: 32,
    left: 281,
  },
  k: {
    left: 9,
  },
  n: {
    left: 244,
    top: 108,
    width: 32,
  },
  b: {
    left: 206,
    top: 108,
    width: 32,
  },
  h: {
    left: 10,
  },
  v: {
    left: 169,
    top: 108,
    width: 32,
  },
  c: {
    left: 131,
    top: 108,
    width: 32,
  },
  x: {
    left: 94,
    top: 108,
    width: 32,
  },
  z: {
    left: 56,
    top: 108,
    width: 32,
  },
  shiftIcon: {
    left: 0,
  },
  l2: {
    left: 13,
  },
  l1: {
    left: 319,
  },
  k1: {
    left: 281,
  },
  j1: {
    left: 244,
  },
  h1: {
    left: 206,
  },
  g1: {
    left: 169,
  },
  f2: {
    left: 12,
  },
  f1: {
    left: 131,
  },
  d1: {
    left: 94,
  },
  s: {
    left: 57,
  },
  a: {
    left: 19,
  },
  p: {
    left: 337,
    top: 0,
  },
  o: {
    left: 300,
    top: 0,
  },
  i: {
    left: 262,
    top: 0,
  },
  u: {
    left: 225,
    top: 0,
  },
  y: {
    left: 187,
    top: 0,
  },
  t: {
    left: 150,
    top: 0,
  },
  r: {
    left: 112,
    top: 0,
  },
  e: {
    left: 75,
    top: 0,
  },
  w1: {
    left: 7,
  },
  w: {
    left: 38,
    top: 0,
  },
  q: {
    top: 0,
    left: 0,
  },
  dictationIcon: {
    width: 15,
    height: 25,
  },
  emojiIcon: {
    width: 27,
    height: 27,
  },
  keyboard: {
    left: 3,
    width: 369,
    height: 257,
    top: 10,
    position: "absolute",
  },
  extensionsKeyboardsDark: {
    top: 521,
  },
  createAccountTyping: {
    backgroundColor: Color.primary,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default CreateAccountTyping;