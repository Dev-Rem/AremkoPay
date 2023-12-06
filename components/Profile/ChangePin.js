import React from "react";
import { View, Text } from "react-native";
import CustomFormField from "../utils/CustomFormField";
import ButtonCustom from "../utils/ButtonCustom";
import FormHeader from "../utils/FormHeader";

export const ChangePin = ({ navigation }) => {
  return (
    <View>
      <FormHeader
        header="Change your login PIN"
        subHeader="Enhance your account security by updating your PIN."
      />
      <View className=" flex-column w-[100%] justify-between">
        <Text className="font-medium m-[5]">Old pin</Text>
        <CustomFormField
          placeholder="Old pin"
          inputMode="numeric"
          secureTextEntry={true}
          extraStyle="h-[60px] w-[100%] mb-[5%]"
        />
      </View>
      <View className="flex-row justify-between">
        <View className=" flex-column w-[45%] justify-between">
          <Text className="font-medium m-[5]">New pin</Text>
          <CustomFormField
            placeholder="New pin"
            inputMode="numeric"
            secureTextEntry={true}
            extraStyle="h-[60px] w-[100%] mb-[5%]"
          />
        </View>

        <View className=" flex-column w-[45%] justify-between">
          <Text className="font-medium m-[5]">Confirm new pin</Text>
          <CustomFormField
            placeholder="Confirm new pin"
            inputMode="numeric"
            secureTextEntry={true}
            extraStyle="h-[60px] w-[100%] mb-[5%]"
          />
        </View>
      </View>

      <ButtonCustom
        title="Change Pin"
        onPress={() => navigation.navigate("Tabs")}
      />
    </View>
  );
};
