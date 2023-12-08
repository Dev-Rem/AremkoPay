import React from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { PhoneNumber } from "./PhoneNumber";
import { EmailAddress } from "./EmailAddress";

export const AccountDetailsScreen = ({ navigation, route }) => {
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
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
