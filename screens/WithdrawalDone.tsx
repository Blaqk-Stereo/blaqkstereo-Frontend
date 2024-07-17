import * as React from "react";
import { StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import FrameComponent2 from "../components/FrameComponent2";
import { Color } from "../GlobalStyles";

const WithdrawalDone = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.withdrawalDone}>
      <FrameComponent2
        success48740921={require("../assets/transaction-1.png")}
        congratulations="Withdrawal in Progress!"
        yourSubscriptionIsNowActi="Your withdrawal is in progress. Keep an eye on your transaction history for updates, and your fund will soon be on its way to its destination."
        goToDashboard="Done"
        success48740921IconMarginTop={-207}
        onButtonPress={() => navigation.navigate("WalletinCUSD")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  withdrawalDone: {
    backgroundColor: Color.primary,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default WithdrawalDone;
