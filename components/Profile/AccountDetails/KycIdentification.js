import React from "react";
import { View, Text } from "react-native";
import FormHeader from "../../utils/FormHeader";
import { Icon } from "@rneui/themed";

export const KycIdentification = ({ navigation }) => {
  return (
    <View>
      <FormHeader
        header="Identification Documents"
        subHeader="To ensure the security of your account, your identification documents are being verified. Your information is handled with the utmost confidentiality."
      />

      <View>
        <View className="justify-between items-center flex-row w-[100%]  mb-[2%]">
          <Icon name="check-circle" type="material" color="#e2d53f" size={30} />
          <Text>In Progress</Text>
        </View>
        <View className="justify-between items-center flex-row w-[100%] mb-[10%]">
          <Icon name="verified" type="material" color="#28e068" size={30} />
          <Text>Verified</Text>
        </View>
      </View>

      <View className="h-[12%] w-[100%] bg-[#f4f4f4] rounded-[10%] justify-between items-center px-[5%] flex-row mb-[10%]">
        <Text>BVN</Text>
        <Icon name="check-circle" type="material" color="#e2d53f" size={30} />
      </View>
      <View className="h-[12%] w-[100%] bg-[#f4f4f4] rounded-[10%] justify-between items-center px-[5%] flex-row mb-[10%]">
        <Text>ID Document</Text>
        <Icon name="verified" type="material" color="#28e068" size={30} />
      </View>
    </View>
  );
};
