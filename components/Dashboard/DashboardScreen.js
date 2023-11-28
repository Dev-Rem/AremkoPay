import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Icon } from "@rneui/themed";
export const DashboardScreen = ({ navigation }) => {
  return (
    <View className="flex-1 bg-[#28e068] flex-column justify-between ">
      <View className="m-[3%] flex-row justify-between">
        <TouchableOpacity className="flex-row bg-[#ffff] px-[2%] pt-[3%] justify-center align-center rounded-[40%] opacity-[0.9] border-[1px]">
          <Text>Naira Account</Text>
          <Icon name={"expand-more"} type="material" size={20} />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row bg-[#ffff] px-[3%] py-[2%] rounded-[40%] opacity-[0.9] border-[1px]">
          <Text className="pt-[5px] pr-[5]">2304323421</Text>
          <Icon
            name={"content-copy"}
            type="material"
            size={18}
            style={{ paddingTop: 4 }}
          />
        </TouchableOpacity>
      </View>
      <View className="mx-[3%]">
        <TouchableOpacity className="flex-row">
          <Text className="text-[18px] mr-[8]">Current balance</Text>
          <Icon
            name={"visibility"}
            type="material"
            size={18}
            style={{ paddingTop: 2 }}
          />
        </TouchableOpacity>

        <Text className="text-[40%]">$20,000</Text>
        <Text className="text-[#ffff]">Ledger balance: $20,300</Text>
      </View>
      <View className="bg-[#FFFF] min-h-[70%] w-[100%] rounded-tr-[50px] justify-center p-[30px] "></View>
    </View>
  );
};
