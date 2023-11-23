import React from "react";
import { Text, View, TextInput } from "react-native";
import ButtonCustom from "./utils/ButtonCustom";
export const EmailVerify = () => {
  return (
    <>
      <Text className="text-2xl">Verify email address</Text>
      <Text className="text-l">
        An email with a verification code has been sent to your inbox.
      </Text>

      <View className="flex-column w-[100%] items-center">
        <TextInput
          placeholder="Verification code"
          placeholderTextColor={"#b2b2b2"}
          className="h-[60] w-[85%] bg-[#F2F2F2] rounded-[10px] p-[20px] my-[8%]"
        />

        <ButtonCustom title="Verify" />
      </View>
    </>
  );
};
