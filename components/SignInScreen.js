import React from "react";
import { Keyboard } from "react-native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

export const SignInScreen = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View className="flex-1 bg-[#DAE8DA] flex-column justify-between ">
          <View></View>
          <View></View>

          <Image
            source={require("../assets/AremkoPay.png")}
            className="w-[85%] h-[80] rounded-t-[10] rounded-b-[10] m-[30]"
          />
          <View className="bg-[#FFFF] h-[60%] w-[100%] rounded-tr-[50] justify-center p-[30]">
            <Text className="text-2xl">Sign In to continue</Text>

            <View className="flex-column h-[100%] w-[100%] items-center">
              <TextInput
                placeholder="Email address"
                placeholderTextColor={"#b2b2b2"}
                className="h-[60] w-[85%] bg-[#F2F2F2] rounded-tr-[60] rounded-b-[10] rounded-tl-[10] p-[20] my-[8%]"
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor={"#b2b2b2"}
                className="h-[60] w-[85%] bg-[#F2F2F2] rounded-tr-[60] rounded-b-[10] rounded-tl-[10] p-[20] mb-[15%]"
              />
              <TouchableOpacity className="h-[60] w-[85%] bg-[#DAE8DA] rounded-tr-[60] rounded-b-[10] rounded-tl-[10] p-[15] mb-[5%]">
                <Text className="text-xl font-semibold text-center">
                  Sign In
                </Text>
              </TouchableOpacity>

              <View className="justify-between flex-row w-[85%]">
                <TouchableOpacity>
                  <Text className="font-semibold">Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text className="font-semibold">Forgot Password</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
