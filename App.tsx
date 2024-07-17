const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Splash from "./screens/Splash";
import VerifyEmail1 from "./screens/VerifyEmail1";
import VerifyEmail from "./screens/VerifyEmail";
import VerifyEmailResendOtp from "./screens/VerifyEmailResendOtp";
import CreateAccountTyping from "./screens/CreateAccountTyping";
import LoginFilledStateContaining from "./screens/LoginFilledStateContaining";
import CreateAccountFilled from "./screens/CreateAccountFilled";
import CreateAccountFillederror from "./screens/CreateAccountFillederror";
import Group4 from "./screens/Group4";
import Frame from "./components/Frame";
import Eye from "./components/Eye";
import Group from "./screens/Group";
import Group1 from "./screens/Group1";
import Pulse from "./components/Pulse";
import ComponentSet from "./components/ComponentSet";
import SetUpProfileError from "./screens/SetUpProfileError";
import ProgressButton from "./components/ProgressButton";
import Loader from "./screens/Loader";
import TurnOnNotificcations from "./screens/TurnOnNotificcations";
import Group2 from "./screens/Group2";
import Subscribe from "./screens/Subscribe";
import SubscribefreePlanSelected from "./components/SubscribefreePlanSelected";
import SubscribepayPerReleaseSele from "./components/SubscribepayPerReleaseSele";
import SubscribeyearlySelected from "./components/SubscribeyearlySelected";
import SuccessfulfreePlan from "./screens/SuccessfulfreePlan";
import Failed from "./screens/Failed";
import Group3 from "./screens/Group3";
import SubscribedFree from "./screens/SubscribedFree";
import Login from "./screens/Login";
import SettingUpProfile from "./screens/SettingUpProfile";
import CreateAccount from "./screens/CreateAccount";
import LoginActiveState from "./screens/LoginActiveState";
import ForgotPassword from "./screens/ForgotPassword";
import PasswordResetSuccessful from "./screens/PasswordResetSuccessful";
import InputField from "./components/InputField";
import SetUpProfile from "./screens/SetUpProfile";
import SetUpProfileApproved from "./screens/SetUpProfileApproved";
import VerifyEmail2Error from "./screens/VerifyEmail2Error";
import FileUploadStatus from "./components/FileUploadStatus";
import GenreDropdown from "./components/GenreDropdown";
import Stepper from "./components/Stepper";
import Toggle from "./components/Toggle";
import SuccessfulpaidPlans from "./screens/SuccessfulpaidPlans";
import SubscribedPremium from "./screens/SubscribedPremium";
import Success from "./screens/Success";
import DateTimeField from "./components/DateTimeField";
import Failed1 from "./screens/Failed1";
import AddCredits from "./components/AddCredits";
import SelectReleaseOption from "./components/SelectReleaseOption";
import PremiumUsersPreviewYourCon from "./screens/PremiumUsersPreviewYourCon";
import CompleteYourPaymentToFinal from "./components/CompleteYourPaymentToFinal";
import Group5 from "./screens/Group5";
import BlinkingCursor from "./components/BlinkingCursor";
import SearchActiveNotFound from "./screens/SearchActiveNotFound";
import Group6 from "./screens/Group6";
import Success1 from "./screens/Success1";
import Failed2 from "./screens/Failed2";
import Group7 from "./screens/Group7";
import Success2 from "./screens/Success2";
import UploadMusicOther from "./screens/UploadMusicOther";
import NewUserStreamingPlatformsS from "./screens/NewUserStreamingPlatformsS";
import PasswordChangeSuccessful from "./screens/PasswordChangeSuccessful";
import FAQs from "./screens/FAQs";
import Languages from "./screens/Languages";
import DeleteLinkedBankAccount from "./components/DeleteLinkedBankAccount";
import EditProfile from "./screens/EditProfile";
import PasswordChangeSuccessful1 from "./screens/PasswordChangeSuccessful1";
import TransactionDetailsIN from "./components/TransactionDetailsIN";
import TransactionDetailsIN1 from "./components/TransactionDetailsIN1";
import TopUpWallet2 from "./screens/TopUpWallet2";
import Withdraw1 from "./screens/Withdraw1";
import WalletinNGN from "./screens/WalletinNGN";
import WalletInfo1 from "./components/WalletInfo1";
import TopUpWallet3 from "./screens/TopUpWallet3";
import UploadMusicAlbum from "./screens/UploadMusicAlbum";
import StreamingPlatformsSelection from "./screens/StreamingPlatformsSelection";
import DashboardForNewUsers from "./screens/DashboardForNewUsers";
import ChangePassword from "./screens/ChangePassword";
import PasswordChangeSuccessful2 from "./screens/PasswordChangeSuccessful2";
import AddNewBank from "./screens/AddNewBank";
import Welcome from "./screens/Welcome";
import EnterAmount from "./screens/EnterAmount";
import EnterAmount1 from "./screens/EnterAmount1";
import SelectOffer from "./screens/SelectOffer";
import TopUpWalletlinkCopied from "./screens/TopUpWalletlinkCopied";
import Withdraw2 from "./screens/Withdraw2";
import NewUserStreamingPlatformsS1 from "./screens/NewUserStreamingPlatformsS1";
import NotificationsForNewUsers from "./screens/NotificationsForNewUsers";
import WalletForNewUsers from "./screens/WalletForNewUsers";
import StatsForNewUsers from "./screens/StatsForNewUsers";
import AccountValidated from "./screens/AccountValidated";
import PasswordChangeSuccessful3 from "./screens/PasswordChangeSuccessful3";
import Finishing from "./screens/Finishing";
import ConfirmTransaction from "./screens/ConfirmTransaction";
import UploadMusicAlbum1 from "./screens/UploadMusicAlbum1";
import UploadMusicSingle1 from "./screens/UploadMusicSingle1";
import UploadMusicOther1 from "./screens/UploadMusicOther1";
import CreateANewWallet from "./screens/CreateANewWallet";
import ConfirmTransaction1 from "./screens/ConfirmTransaction1";
import WithdrawalDone from "./screens/WithdrawalDone";
import CreateANewWallet1 from "./screens/CreateANewWallet1";
import CreateANewWallet2 from "./screens/CreateANewWallet2";
import CreateANewWallet3 from "./screens/CreateANewWallet3";
import CreateANewWallet4 from "./screens/CreateANewWallet4";
import CreateANewWallet5 from "./screens/CreateANewWallet5";
import UploadMusicAlbum2 from "./screens/UploadMusicAlbum2";
import UploadMusicSingle2 from "./screens/UploadMusicSingle2";
import UploadMusicSingle3 from "./screens/UploadMusicSingle3";
import UploadMusicOther2 from "./screens/UploadMusicOther2";
import WalletForNewUsers1 from "./screens/WalletForNewUsers1";
import AddSongsToAlbum from "./screens/AddSongsToAlbum";
import UploadMusicSingle4 from "./screens/UploadMusicSingle4";
import UploadMusicOther3 from "./screens/UploadMusicOther3";
import UploadMusicSingle5 from "./screens/UploadMusicSingle5";
import UploadMusicAlbumSongAdded from "./screens/UploadMusicAlbumSongAdded";
import UploadMusicSingle6 from "./screens/UploadMusicSingle6";
import RolesDropdown from "./components/RolesDropdown";
import UploadMusicOther4 from "./screens/UploadMusicOther4";
import UploadMusicSingle7 from "./screens/UploadMusicSingle7";
import UploadMusicSingle8 from "./screens/UploadMusicSingle8";
import PreviewYourContentDetails from "./screens/PreviewYourContentDetails";
import UploadMusicOther5 from "./screens/UploadMusicOther5";
import PreviewYourContentDetails1 from "./screens/PreviewYourContentDetails1";
import UploadMusicAlbum3 from "./screens/UploadMusicAlbum3";
import Finishing1 from "./screens/Finishing1";
import Finishing2 from "./screens/Finishing2";
import UploadMusicSingle9 from "./screens/UploadMusicSingle9";
import PreviewYourAlbumDetails from "./screens/PreviewYourAlbumDetails";
import UploadMusicSingle10 from "./screens/UploadMusicSingle10";
import Finishing3 from "./screens/Finishing3";
import Group8 from "./screens/Group8";
import Group9 from "./screens/Group9";
import Discover from "./screens/Discover";
import UploadedMusicOptions from "./components/UploadedMusicOptions";
import Notifications from "./screens/Notifications";
import Insights from "./screens/Insights";
import DeleteAnUploadedContent from "./components/DeleteAnUploadedContent";
import SelectedContentSingle from "./screens/SelectedContentSingle";
import SelectedContentAlbum from "./screens/SelectedContentAlbum";
import Nav from "./components/Nav";
import UploadYourContent from "./screens/UploadYourContent";
import UploadYourContent1 from "./screens/UploadYourContent1";
import UploadYourMusic from "./screens/UploadYourMusic";
import UploadYourMusic1 from "./screens/UploadYourMusic1";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import AboutApp from "./screens/AboutApp";
import NotificationSettings from "./screens/NotificationSettings";
import SubscribedPlus from "./screens/SubscribedPlus";
import LogOut from "./components/LogOut";
import Profile from "./screens/Profile";
import CancelPlan from "./components/CancelPlan";
import AddSocial from "./components/AddSocial";
import PlanCancelled from "./screens/PlanCancelled";
import Others from "./screens/Others";
import DropDown from "./components/DropDown";
import Withdraw from "./components/Withdraw";
import WalletInfo from "./components/WalletInfo";
import TopUpWallet from "./screens/TopUpWallet";
import TopUpWallet1 from "./screens/TopUpWallet1";
import WalletinCUSD from "./screens/WalletinCUSD";
import UploadMusicSingle from "./screens/UploadMusicSingle";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Rubik-Light": require("./assets/fonts/Rubik-Light.ttf"),
    "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Medium": require("./assets/fonts/Rubik-Medium.ttf"),
    "Rubik-SemiBold": require("./assets/fonts/Rubik-SemiBold.ttf"),
    "Rubik-Bold": require("./assets/fonts/Rubik-Bold.ttf"),
    "Rubik-MediumItalic": require("./assets/fonts/Rubik-MediumItalic.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerifyEmail1"
              component={VerifyEmail1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerifyEmail"
              component={VerifyEmail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerifyEmailResendOtp"
              component={VerifyEmailResendOtp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateAccountTyping"
              component={CreateAccountTyping}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginFilledStateContaining"
              component={LoginFilledStateContaining}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateAccountFilled"
              component={CreateAccountFilled}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateAccountFillederror"
              component={CreateAccountFillederror}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group4"
              component={Group4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group"
              component={Group}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group1"
              component={Group1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SetUpProfileError"
              component={SetUpProfileError}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Loader"
              component={Loader}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TurnOnNotificcations"
              component={TurnOnNotificcations}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group2"
              component={Group2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Subscribe"
              component={Subscribe}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SubscribefreePlanSelected"
              component={SubscribefreePlanSelected}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SubscribepayPerReleaseSele"
              component={SubscribepayPerReleaseSele}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SubscribeyearlySelected"
              component={SubscribeyearlySelected}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SuccessfulfreePlan"
              component={SuccessfulfreePlan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Failed"
              component={Failed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group3"
              component={Group3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SubscribedFree"
              component={SubscribedFree}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SettingUpProfile"
              component={SettingUpProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateAccount"
              component={CreateAccount}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginActiveState"
              component={LoginActiveState}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PasswordResetSuccessful"
              component={PasswordResetSuccessful}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SetUpProfile"
              component={SetUpProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SetUpProfileApproved"
              component={SetUpProfileApproved}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerifyEmail2Error"
              component={VerifyEmail2Error}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SuccessfulpaidPlans"
              component={SuccessfulpaidPlans}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SubscribedPremium"
              component={SubscribedPremium}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Success"
              component={Success}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Failed1"
              component={Failed1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PremiumUsersPreviewYourCon"
              component={PremiumUsersPreviewYourCon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CompleteYourPaymentToFinal"
              component={CompleteYourPaymentToFinal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group5"
              component={Group5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchActiveNotFound"
              component={SearchActiveNotFound}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group6"
              component={Group6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Success1"
              component={Success1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Failed2"
              component={Failed2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group7"
              component={Group7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Success2"
              component={Success2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadMusicOther"
              component={UploadMusicOther}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewUserStreamingPlatformsS"
              component={NewUserStreamingPlatformsS}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PasswordChangeSuccessful"
              component={PasswordChangeSuccessful}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FAQs"
              component={FAQs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Languages"
              component={Languages}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DeleteLinkedBankAccount"
              component={DeleteLinkedBankAccount}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PasswordChangeSuccessful1"
              component={PasswordChangeSuccessful1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransactionDetailsIN"
              component={TransactionDetailsIN}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransactionDetailsIN1"
              component={TransactionDetailsIN1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TopUpWallet2"
              component={TopUpWallet2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Withdraw1"
              component={Withdraw1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WalletinNGN"
              component={WalletinNGN}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WalletInfo1"
              component={WalletInfo1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TopUpWallet3"
              component={TopUpWallet3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadMusicAlbum"
              component={UploadMusicAlbum}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StreamingPlatformsSelection"
              component={StreamingPlatformsSelection}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DashboardForNewUsers"
              component={DashboardForNewUsers}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangePassword"
              component={ChangePassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PasswordChangeSuccessful2"
              component={PasswordChangeSuccessful2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddNewBank"
              component={AddNewBank}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EnterAmount"
              component={EnterAmount}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EnterAmount1"
              component={EnterAmount1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelectOffer"
              component={SelectOffer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TopUpWalletlinkCopied"
              component={TopUpWalletlinkCopied}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Withdraw2"
              component={Withdraw2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewUserStreamingPlatformsS1"
              component={NewUserStreamingPlatformsS1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NotificationsForNewUsers"
              component={NotificationsForNewUsers}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WalletForNewUsers"
              component={WalletForNewUsers}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StatsForNewUsers"
              component={StatsForNewUsers}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccountValidated"
              component={AccountValidated}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PasswordChangeSuccessful3"
              component={PasswordChangeSuccessful3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Finishing"
              component={Finishing}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ConfirmTransaction"
              component={ConfirmTransaction}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadMusicAlbum1"
              component={UploadMusicAlbum1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadMusicSingle1"
              component={UploadMusicSingle1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadMusicOther1"
              component={UploadMusicOther1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateANewWallet"
              component={CreateANewWallet}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ConfirmTransaction1"
              component={ConfirmTransaction1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WithdrawalDone"
              component={WithdrawalDone}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateANewWallet1"
              component={CreateANewWallet1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateANewWallet2"
              component={CreateANewWallet2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateANewWallet3"
              component={CreateANewWallet3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateANewWallet4"
              component={CreateANewWallet4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateANewWallet5"
              component={CreateANewWallet5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadMusicAlbum2"
              component={UploadMusicAlbum2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadMusicSingle2"
              component={UploadMusicSingle2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadMusicSingle3"
              component={UploadMusicSingle3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadMusicOther2"
              component={UploadMusicOther2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WalletForNewUsers1"
              component={WalletForNewUsers1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddSongsToAlbum"
              component={AddSongsToAlbum}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadMusicSingle4"
              component={UploadMusicSingle4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadMusicOther3"
              component={UploadMusicOther3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadMusicSingle5"
              component={UploadMusicSingle5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadMusicAlbumSongAdded"
              component={UploadMusicAlbumSongAdded}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadMusicSingle6"
              component={UploadMusicSingle6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadMusicOther4"
              component={UploadMusicOther4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadMusicSingle7"
              component={UploadMusicSingle7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadMusicSingle8"
              component={UploadMusicSingle8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PreviewYourContentDetails"
              component={PreviewYourContentDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadMusicOther5"
              component={UploadMusicOther5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PreviewYourContentDetails1"
              component={PreviewYourContentDetails1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadMusicAlbum3"
              component={UploadMusicAlbum3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Finishing1"
              component={Finishing1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Finishing2"
              component={Finishing2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadMusicSingle9"
              component={UploadMusicSingle9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PreviewYourAlbumDetails"
              component={PreviewYourAlbumDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadMusicSingle10"
              component={UploadMusicSingle10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Finishing3"
              component={Finishing3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group8"
              component={Group8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group9"
              component={Group9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Discover"
              component={Discover}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadedMusicOptions"
              component={UploadedMusicOptions}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notifications"
              component={Notifications}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Insights"
              component={Insights}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DeleteAnUploadedContent"
              component={DeleteAnUploadedContent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelectedContentSingle"
              component={SelectedContentSingle}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelectedContentAlbum"
              component={SelectedContentAlbum}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadYourContent"
              component={UploadYourContent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadYourContent1"
              component={UploadYourContent1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadYourMusic"
              component={UploadYourMusic}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadYourMusic1"
              component={UploadYourMusic1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PrivacyPolicy"
              component={PrivacyPolicy}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AboutApp"
              component={AboutApp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NotificationSettings"
              component={NotificationSettings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SubscribedPlus"
              component={SubscribedPlus}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogOut"
              component={LogOut}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CancelPlan"
              component={CancelPlan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddSocial"
              component={AddSocial}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PlanCancelled"
              component={PlanCancelled}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Others"
              component={Others}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Withdraw"
              component={Withdraw}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WalletInfo"
              component={WalletInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TopUpWallet"
              component={TopUpWallet}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TopUpWallet1"
              component={TopUpWallet1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WalletinCUSD"
              component={WalletinCUSD}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadMusicSingle"
              component={UploadMusicSingle}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
