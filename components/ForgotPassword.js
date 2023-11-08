import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

export const ForgotPassword = ({setForm}) => {
  return (
    <>
      <Text className="text-2xl">Forgot Password</Text>
      <Text className="text-l">Request code for password reset</Text>

      <View className="flex-column  w-[100%] items-center">
        <TextInput
          placeholder="Email address"
          placeholderTextColor={"#b2b2b2"}
          className="h-[60] w-[85%] bg-[#F2F2F2] rounded-tr-[60px] rounded-b-[10px]] rounded-tl-[10px] p-[20px] my-[8%]"
        />
        <TouchableOpacity onPress={()=>setForm('resetpassword')} className="h-[60] w-[85%] bg-[#DAE8DA] rounded-tr-[60px] rounded-b-[10px] rounded-tl-[10px] p-[15] mb-[10%]">
          <Text className="text-xl font-semibold text-center">Send code</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
