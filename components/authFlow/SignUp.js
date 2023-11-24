import React from "react";
import { Text, View, TextInput } from "react-native";
import ButtonCustom from "../utils/ButtonCustom";
import CustomFormField from "../utils/CustomFormField";
import FormHeader from "../utils/FormHeader";

export const SignUp = ({ setForm }) => {
  return (
    <>
      <FormHeader
        header={"Sign Up"}
        subHeader={"Create an AremkoPay account"}
      />

      <View className="flex-column w-[100%] items-center">
        <View className="flex-column w-[100%]">
          <Text className="font-medium m-[5]">Email address</Text>
          <CustomFormField
            extraStyle="h-[60px] w-[100%] mb-[5%]"
            placeholder={"Email address"}
            inputMode={"email"}
          />
        </View>

        <View className=" flex-row w-[100%] justify-between">
          <View className="flex-column w-[45%]">
            <Text className="font-medium m-[5]">Password</Text>
            <CustomFormField
              extraStyle="h-[60px] mb-[5%]"
              placeholder={"Password"}
              secureTextEntry={true}
            />
          </View>
          <View className="flex-column w-[45%]">
            <Text className="font-medium m-[5]">Confirm password</Text>
            <CustomFormField
              extraStyle="h-[60px] my-[5%] p-[10px]"
              placeholder={"Confirm password"}
              secureTextEntry={true}
            />
          </View>
        </View>

        <ButtonCustom title="Sign Up" onPress={() => setForm("verifyemail")} />
      </View>
    </>
  );
};
