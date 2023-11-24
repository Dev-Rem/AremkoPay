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
export const WalletScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View className="flex-1 bg-[#28e068] flex-column justify-end ">
          <View className="bg-[#FFFF] min-h-[70%] w-[100%] rounded-tr-[50px] justify-center p-[30px] "></View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
