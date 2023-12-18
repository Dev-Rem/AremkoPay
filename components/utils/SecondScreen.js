import React from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { Withdraw } from "../Dashboard/Payments/Withdraw";
import { Airtime } from "../Dashboard/Payments/Airtime";
import { AccountDetails } from "../Profile/AccountDetails/AccountDetails";
import { ChangePin } from "../Profile/ChangePin";
import { UpdatePassword } from "../Profile/UpdatePassword";
import { WithdrawalAccounts } from "../Profile/WithdrawalAccounts";
import { TwoFactorAuthentication } from "../Profile/TwoFactorAuthentication";
import { GetHelp } from "../Profile/GetHelp";
import { PhoneNumber } from "../Profile/AccountDetails/PhoneNumber";
import { EmailAddress } from "../Profile/AccountDetails/EmailAddress";
import { KycIdentification } from "../Profile/AccountDetails/KycIdentification";
import { CloseAccount } from "../Profile/AccountDetails/CloseAccount";
import { RestrictAccount } from "../Profile/AccountDetails/RestrictAccount";
import { Data } from "../Dashboard/Payments/Data";

export const SecondScreen = ({ navigation, route }) => {
  const { use } = route.params;
  console.log(route);
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
          {use === "Withdraw" ? <Withdraw navigation={navigation} /> : <></>}
          {use === "Airtime" ? <Airtime navigation={navigation} /> : <></>}
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

          {use === "Phone Number" ? (
            <PhoneNumber navigation={navigation} />
          ) : (
            <></>
          )}
          {use === "Email Address" ? (
            <EmailAddress navigation={navigation} />
          ) : (
            <></>
          )}
          {use === "Kyc and Identification" ? (
            <KycIdentification navigation={navigation} />
          ) : (
            <></>
          )}
          {use === "Close Account" ? (
            <CloseAccount navigation={navigation} />
          ) : (
            <></>
          )}
          {use === "Restrict Account" ? (
            <RestrictAccount navigation={navigation} />
          ) : (
            <></>
          )}
          {use === "Data" ? <Data navigation={navigation} /> : <></>}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
