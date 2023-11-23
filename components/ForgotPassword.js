import React from "react";
import { Text, View, TextInput } from "react-native";
import ButtonCustom from "./utils/ButtonCustom";

export const ForgotPassword = ({ setForm }) => {
  return (
    <>
      <Text className="text-2xl">Forgot Password</Text>
      <Text className="text-l">Request code for password reset</Text>

      <View className="flex-column  w-[100%] items-center">
        <TextInput
          placeholder="Email address"
          placeholderTextColor={"#b2b2b2"}
          className="h-[60] w-[85%] bg-[#F2F2F2] rounded-[10px] p-[20px] my-[8%]"
        />
        <ButtonCustom title="Send code" />
      </View>
    </>
  );
};
