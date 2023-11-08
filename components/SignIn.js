import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

export const SignIn = () => {
  return (
    <>
      <Text className="text-2xl">Sign In</Text>
      <Text className="text-l">Sign in to your AremkoPay account</Text>

      <View className="flex-column  w-[100%] items-center">
        <TextInput
          placeholder="Email address"
          placeholderTextColor={"#b2b2b2"}
          className="h-[60] w-[85%] bg-[#F2F2F2] rounded-tr-[60px] rounded-b-[10px] rounded-tl-[10px] p-[20px] my-[8%]"
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={"#b2b2b2"}
          className="h-[60] w-[85%] bg-[#F2F2F2] rounded-tr-[60px] rounded-b-[10px] rounded-tl-[10px] p-[20px] mb-[15%]"
        />
        <TouchableOpacity className="h-[60] w-[85%] bg-[#DAE8DA] rounded-tr-[60px] rounded-b-[10px] rounded-tl-[10px] p-[15] mb-[10%]">
          <Text className="text-xl font-semibold text-center">Sign In</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
