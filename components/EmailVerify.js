import React from "react";
import { Text, View, TextInput } from "react-native";
import ButtonCustom from "./utils/ButtonCustom";
import CustomFormField from "./utils/CustomFormField";
import FormHeader from "./utils/FormHeader";

export const EmailVerify = ({ setForm }) => {
  return (
    <>
      <FormHeader
        header={"Verify email address"}
        subHeader={
          "An email with a verification code has been sent to your inbox."
        }
      />

      <View className="flex-column w-[100%] items-center">
        <View className=" flex-column w-[100%]">
          <Text className="font-medium m-[5]">Verification code</Text>
          <CustomFormField
            extraStyle="h-[60px] w-[100%] mb-[5%] "
            placeholder={"Verification code"}
            secureTextEntry={true}
          />
        </View>

        <ButtonCustom title="Verify" onPress={() => setForm("signin")} />
      </View>
    </>
  );
};
