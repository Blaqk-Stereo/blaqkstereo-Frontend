import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";

const Frame = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.wallet3Parent}>
      <Pressable
        style={styles.wallet3Layout}
        onPress={() => navigation.navigate("WalletForNewUsers")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/wallet3.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.notification, styles.wallet3Layout]}
        onPress={() => navigation.navigate("NotificationsForNewUsers")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/notification1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wallet3Layout: {
    height: 24,
    width: 24,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  notification: {
    marginLeft: 24,
  },
  wallet3Parent: {
    flexDirection: "row",
    alignItems: "center",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
});

export default Frame;
