import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import ButtonCustom from "./utils/ButtonCustom";

export const SignIn = ({ navigation }) => {
  return (
    <>
      <Text className="text-2xl">Sign In</Text>
      <Text className="text-l">Sign in to your AremkoPay account</Text>

      <View className="flex-column  w-[100%] items-center">
        <TextInput
          placeholder="Email address"
          placeholderTextColor={"#b2b2b2"}
          className="h-[60px] w-[85%] bg-[#F2F2F2]  rounded-[10px] p-[20px] my-[8%]"
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={"#b2b2b2"}
          className="h-[60px] w-[85%] bg-[#F2F2F2] rounded-[10px] p-[20px] mb-[15%]"
        />
        <ButtonCustom
          title="Sign In"
          onPress={() => navigation.navigate("SetPin")}
        />
      </View>
    </>
  );
};
