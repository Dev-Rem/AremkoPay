import React from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  Keyboard,
} from "react-native";
import { Icon } from "@rneui/themed";
export const DashboardScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View className="flex-1 bg-[#28e068] flex-column justify-between ">
          <View className="my-[13%] mx-[5%] flex-row justify-between">
            <TouchableOpacity className="flex-row">
              <Icon name={"account-circle"} type="material" size={30} />
              <Text className="pt-[6px] pl-[5] font-semibold">
                Hello, Aremu
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row">
              <Text className="pt-[8px] pr-[5] font-semibold">2304323421</Text>
              <Icon name={"content-copy"} type="material" size={20} />
            </TouchableOpacity>
          </View>
          <View className="bg-[#FFFF] min-h-[70%] w-[100%] rounded-tr-[50px] justify-center p-[30px] "></View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
