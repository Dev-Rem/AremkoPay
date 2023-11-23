import React from "react";
import { Text, View, TextInput } from "react-native";
import ButtonCustom from "./utils/ButtonCustom";
import CustomFormField from "./utils/CustomFormField";
import FormHeader from "./utils/FormHeader";

export const ForgotPassword = ({ setForm }) => {
  return (
    <>
      <FormHeader
        header={"Forgot Password"}
        subHeader={"Request code for password reset."}
      />

      <View className="flex-column  w-[100%] items-center">
        <View className=" flex-column w-[100%]">
          <Text className="font-medium m-[5]">Email address</Text>
          <CustomFormField
            extraStyle="h-[60px] w-[100%] mb-[5%]"
            placeholder={"Email address"}
            secureTextEntry={true}
          />
        </View>

        <ButtonCustom
          title="Send code"
          onPress={() => setForm("resetpassword")}
        />
      </View>
    </>
  );
};
