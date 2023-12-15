import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FormHeader from "../../utils/FormHeader";
import { Icon } from "@rneui/themed";
export const TopUp = ({ navigation }) => {
  return (
    <View>
      <FormHeader header="NGN Account Info" subHeader="" />

      <View className="mb-[5%]">
        <Text className="text-[15%] px-[10px] text-[#939090] mb-[">
          Bank name
        </Text>
        <TouchableOpacity className="bg-[#F2F2F2]  rounded-[10px] p-[10px] flex-row justify-between">
          <Text className="text-[15%]">Wema Bank Plc</Text>
          <Icon name={"content-copy"} type="material" size={18} />
        </TouchableOpacity>
      </View>
      <View>
        <Text className="text-[15%] px-[10px] text-[#939090] mb-[">
          Account number
        </Text>
        <TouchableOpacity className="bg-[#F2F2F2]  rounded-[10px] p-[10px] flex-row justify-between">
          <Text className="text-[15%]">2304323421</Text>
          <Icon name={"content-copy"} type="material" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
