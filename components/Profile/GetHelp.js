import React from "react";
import { View, Text } from "react-native";
import FormHeader from "../utils/FormHeader";

export const GetHelp = ({ navigation }) => {
  return (
    <View>
      <FormHeader
        header="Get Help"
        subHeader="Need assistance? Our support team is here to help! Reach out for any questions, concerns, or technical issues, and we'll get back to you as soon as possible."
      />
      <View className="flex-column items-left w-[100%] mt-[5%]">
        <Text className="text-[20%] font-semibold text-[#28e068]">
          Phone Contact
        </Text>
        <Text className="text-[18%]">+234 802 526 0000</Text>
      </View>
      <View className="flex-column items-left w-[100%] mt-[5%]">
        <Text className="text-[20%] font-semibold text-[#28e068]">Website</Text>
        <Text className="text-[18%]">www.aremkogroup.com</Text>
      </View>
      <View className="flex-column items-left w-[100%] mt-[5%]">
        <Text className="text-[20%] font-semibold text-[#28e068]">
          Email Address
        </Text>
        <Text className="text-[18%]">info@aremkogroup.com</Text>
      </View>
      <View className="flex-column items-left w-[100%] mt-[5%]">
        <Text className="text-[20%] font-semibold text-[#28e068]">Address</Text>
        <Text className="text-[18%]">
          Area 11, 871 Tafawa Balewa Way, Garki 900001, Abuja FCT, Nigeria.
        </Text>
      </View>
      <View className="flex-column items-left w-[100%] mt-[5%]">
        <Text className="text-[20%] font-semibold text-[#28e068]">
          Opening Hours
        </Text>
        <Text className="text-[18%]">Monday - Friday</Text>
        <Text className="text-[18%]">08:00 AM - 05:00 PM (WAT)</Text>
      </View>
    </View>
  );
};
