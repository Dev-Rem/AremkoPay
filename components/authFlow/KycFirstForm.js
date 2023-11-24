import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import CustomFormField from "../utils/CustomFormField";

export const KycFirstForm = () => {
  return (
    <View className="flex-column  w-[100%] items-center">
      <View className="w-[100%] m-[2%]">
        <Text className="font-medium m-[5]">First name</Text>
        <CustomFormField placeholder={"First name"} extraStyle={"h-[40px] "} />
      </View>

      <View className=" flex-row w-[100%] justify-between my-[2%]">
        <View className="w-[45%] ">
          <Text className="font-medium m-[5]">Middle name</Text>
          <CustomFormField
            placeholder={"Middle name"}
            extraStyle={"h-[40px] "}
          />
        </View>

        <View className="w-[45%] ">
          <Text className="font-medium m-[5]">Last name</Text>
          <CustomFormField placeholder={"Last name"} extraStyle={"h-[40px] "} />
        </View>
      </View>
      <View className="w-[100%]  m-[2%]">
        <Text className="font-medium m-[5]">Phone number</Text>
        <CustomFormField
          placeholder={"Phone number"}
          extraStyle={"h-[40px] "}
        />
        <Text className="font-light text-[10px] m-[5]">
          Note: Please input phone number in international format
        </Text>
      </View>

      <View className="w-[100%] m-[2%] ">
        <Text className="font-medium m-[5]">Country</Text>
        <CustomFormField placeholder={"Country"} extraStyle={"h-[40px] "} />
      </View>
    </View>
  );
};
