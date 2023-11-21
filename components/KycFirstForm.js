import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

export const KycFirstForm = () => {
  return (
    <View className="flex-column  w-[100%] items-center">
      <View className="w-[100%] m-[2%]">
        <Text className="font-medium m-[5]">First name</Text>
        <TextInput
          placeholder="First name"
          placeholderTextColor={"#b2b2b2"}
          className="h-[40px] w-[100%] bg-[#F2F2F2] rounded-[10px] p-[10px] "
        />
      </View>

      <View className=" flex-row w-[100%] justify-between my-[2%]">
        <View className="w-[45%] ">
          <Text className="font-medium m-[5]">Middle name</Text>
          <TextInput
            placeholder="Middle name"
            placeholderTextColor={"#b2b2b2"}
            className="h-[40px] bg-[#F2F2F2] rounded-[10px] p-[10px] "
          />
        </View>

        <View className="w-[45%] ">
          <Text className="font-medium m-[5]">Last name</Text>
          <TextInput
            placeholder="Last name"
            placeholderTextColor={"#b2b2b2"}
            className="h-[40px] bg-[#F2F2F2] rounded-[10px] p-[10px]"
          />
        </View>
      </View>
      <View className="w-[100%]  m-[2%]">
        <Text className="font-medium m-[5]">Phone number</Text>
        <TextInput
          placeholder="Phone number"
          placeholderTextColor={"#b2b2b2"}
          className="h-[40px] w-[100%] bg-[#F2F2F2] rounded-[10px] p-[10px] "
        />
        <Text className="font-light text-[10px] m-[5]">
          Note: Please input phone number in international format
        </Text>
      </View>

      <View className="w-[100%] m-[2%] ">
        <Text className="font-medium m-[5]">Country</Text>
        <TextInput
          placeholder="Country"
          placeholderTextColor={"#b2b2b2"}
          className="h-[40px] w-[100%] bg-[#F2F2F2] rounded-[10px] p-[10px] "
        />
      </View>
    </View>
  );
};
