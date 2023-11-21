import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

export const SignUp = () => {
  return (
    <>
      <Text className="text-2xl">Sign Up</Text>
      <Text className="text-l">Create an AremkoPay account</Text>

      <View className="flex-column w-[100%] items-center">
        <TextInput
          placeholder="Email address"
          placeholderTextColor={"#b2b2b2"}
          className="h-[60] w-[85%] bg-[#F2F2F2] rounded-[10px] p-[20px] my-[8%]"
        />
        <View className=" flex-row w-[85%] justify-between">
          <TextInput
            placeholder="Password"
            placeholderTextColor={"#b2b2b2"}
            className="h-[60] w-[45%] bg-[#F2F2F2] rounded-[10px] p-[20px] "
          />

          <TextInput
            placeholder="Confirm password"
            placeholderTextColor={"#b2b2b2"}
            className="h-[60] w-[45%] bg-[#F2F2F2] rounded-[10px] p-[20px] mb-[15%]"
          />
        </View>

        <TouchableOpacity className="h-[60] w-[85%] bg-[#DAE8DA] rounded-tr-[60px] rounded-b-[10px] rounded-tl-[10px] p-[15px] mb-[10%]">
          <Text className="text-xl font-semibold text-center">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
