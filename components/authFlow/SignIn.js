import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import ButtonCustom from "../utils/ButtonCustom";
import CustomFormField from "../utils/CustomFormField";
import FormHeader from "../utils/FormHeader";

export const SignIn = ({ navigation }) => {
  return (
    <>
      <FormHeader
        header={"Sign In"}
        subHeader={"Sign in to your AremkoPay account."}
      />

      <View className="flex-column  w-[100%] items-center">
        <View className=" flex-column w-[100%] justify-between">
          <Text className="font-medium m-[5]">Email address</Text>
          <CustomFormField
            extraStyle="h-[60px] w-[100%] mb-[5%]"
            placeholder={"Email address"}
            inputMode={"email"}
          />
        </View>
        <View className=" flex-column w-[100%] justify-between">
          <Text className="font-medium m-[5]">Password</Text>
          <CustomFormField
            extraStyle="h-[60px] w-[100%] mb-[5%]"
            placeholder={"Password"}
            secureTextEntry={true}
          />
        </View>

        <ButtonCustom
          title="Sign In"
          onPress={() => navigation.navigate("Tabs")}
        />
      </View>
    </>
  );
};
