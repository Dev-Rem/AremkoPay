import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import CustomFormField from "./utils/CustomFormField";
import ButtonCustom from "./utils/ButtonCustom";

export const ResetPassword = ({ setForm }) => {
  return (
    <>
      <Text className="text-2xl">Reset Password</Text>
      <Text className="text-l">Reset sent to example@email.com</Text>
      <Text className="text-l mb-[10%]">
        Provide reset code and new password
      </Text>

      <View className="flex-column w-[100%] items-center">
        <View className="flex-column w-[100%] ">
          <Text className="font-medium m-[5]">Reset code</Text>
          <CustomFormField
            extraStyle="h-[60px] w-[100%] mb-[5%]"
            placeholder={"Reset code"}
            secureTextEntry={true}
          />
        </View>

        <View className=" flex-row w-[100%] justify-between">
          <View className="flex-column w-[45%] ">
            <Text className="font-medium m-[5]">New password</Text>
            <CustomFormField
              extraStyle="h-[60px] my-[5%]"
              placeholder={"New password"}
              secureTextEntry={true}
            />
          </View>
          <View className="flex-column w-[45%] ">
            <Text className="font-medium m-[5]">Confirm password</Text>
            <CustomFormField
              extraStyle="h-[60px] my-[5%]"
              placeholder={"Confirm new Password code"}
              secureTextEntry={true}
            />
          </View>
        </View>

        <ButtonCustom
          title={"Reset Password"}
          onPress={() => setForm("signin")}
        />
      </View>
    </>
  );
};
