import * as React from "react";
import { StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import FrameComponent2 from "../components/FrameComponent2";
import { Color } from "../GlobalStyles";

const PlanCancelled = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.planCancelled}>
      <FrameComponent2
        success48740921={require("../assets/success4874092-1.png")}
        congratulations="Plan Cancelled"
        yourSubscriptionIsNowActi="Thank you for being a part of the Blaqk Stereo community. If you ever decide to re-subscribe, we'll be here to welcome you with open arms."
        goToDashboard="Great"
        success48740921IconMarginTop={-217}
        onButtonPress={() => navigation.navigate("Discover")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  planCancelled: {
    backgroundColor: Color.primary,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default PlanCancelled;