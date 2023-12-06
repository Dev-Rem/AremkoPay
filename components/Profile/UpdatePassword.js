import React from "react";
import { View, Text } from "react-native";
import CustomFormField from "../utils/CustomFormField";
import FormHeader from "../utils/FormHeader";
import ButtonCustom from "../utils/ButtonCustom";
export const UpdatePassword = () => {
  return (
    <View>
      <FormHeader
        header="Update Password"
        subHeader="Strengthen your account security by updating your password. Choose a strong and unique combination of characters to keep your account safe."
      />
      <View className=" flex-column w-[100%] justify-between">
        <Text className="font-medium m-[5]">Old password</Text>
        <CustomFormField
          placeholder="Old password"
          inputMode="text"
          secureTextEntry={true}
          extraStyle="h-[60px] w-[100%] mb-[5%]"
        />
      </View>
      <View className=" flex-column w-[100%] justify-between">
        <Text className="font-medium m-[5]">New password</Text>
        <CustomFormField
          placeholder="New password"
          inputMode="text"
          secureTextEntry={true}
          extraStyle="h-[60px] w-[100%] mb-[5%]"
        />
      </View>

      <View className=" flex-column w-[100%] justify-between">
        <Text className="font-medium m-[5]">Confirm new password</Text>
        <CustomFormField
          placeholder="Confirm new password"
          inputMode="text"
          secureTextEntry={true}
          extraStyle="h-[60px] w-[100%] mb-[5%]"
        />
      </View>
      <ButtonCustom
        title="Change Password"
        onPress={() => navigation.navigate("Tabs")}
      />
    </View>
  );
};
