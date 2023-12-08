import React from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { UpdatePassword } from "./UpdatePassword";
import { ChangePin } from "./ChangePin";
import { WithdrawalAccounts } from "./WithdrawalAccounts";
import { TwoFactorAuthentication } from "./TwoFactorAuthentication";
import { GetHelp } from "./GetHelp";
import { AccountDetails } from "./AccountDetails/AccountDetails";

export const ProfileSecondScreen = ({ navigation, route }) => {
  const { use } = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: use,
      headerBackTitleVisible: false,
    });
  }, [navigation]);
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View className="flex-1 bg-[#ffff] flex-column justify-center p-[30px] ">
          {use === "Account Details" ? (
            <AccountDetails navigation={navigation} />
          ) : (
            <></>
          )}

          {use === "Change Pin" ? <ChangePin navigation={navigation} /> : <></>}
          {use === "Update Password" ? (
            <UpdatePassword navigation={navigation} />
          ) : (
            <></>
          )}
          {use === "Withdrawal Accounts" ? (
            <WithdrawalAccounts navigation={navigation} />
          ) : (
            <></>
          )}
          {use === "2FA" ? (
            <TwoFactorAuthentication navigation={navigation} />
          ) : (
            <></>
          )}
          {use === "Get Help" ? <GetHelp navigation={navigation} /> : <></>}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
