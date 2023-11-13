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
          className="h-[60px] w-[95%] bg-[#F2F2F2] rounded-tr-[60px] rounded-b-[10px] rounded-tl-[10px] p-[20px] "
        />
      </View>

      <View className=" flex-row w-[100%] justify-between m-[2%]">
        <View className="w-[45%] ">
          <Text className="font-medium m-[5]">Middle name</Text>
          <TextInput
            placeholder="Middle name"
            placeholderTextColor={"#b2b2b2"}
            className="h-[60px] bg-[#F2F2F2] rounded-tr-[60px] rounded-b-[10px] rounded-tl-[10px] p-[20px] "
          />
        </View>

        <View className="w-[45%] ">
          <Text className="font-medium m-[5]">Last name</Text>
          <TextInput
            placeholder="Last name"
            placeholderTextColor={"#b2b2b2"}
            className="h-[60px] bg-[#F2F2F2] rounded-tr-[60px] rounded-b-[10px] rounded-tl-[10px] p-[20px]"
          />
        </View>
      </View>
      <View className="w-[100%]  m-[2%]">
        <Text className="font-medium m-[5]">Phone number</Text>
        <TextInput
          placeholder="Phone number"
          placeholderTextColor={"#b2b2b2"}
          className="h-[60px] w-[95%] bg-[#F2F2F2] rounded-tr-[60px] rounded-b-[10px] rounded-tl-[10px] p-[20px] "
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
          className="h-[60px] w-[95%] bg-[#F2F2F2] rounded-tr-[60px] rounded-b-[10px] rounded-tl-[10px] p-[20px] "
        />
      </View>
    </View>
  );
};
