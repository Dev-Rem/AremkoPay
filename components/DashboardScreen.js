import React from "react";
import {
  View,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  Keyboard,
} from "react-native";
export const DashboardScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View className="flex-1 bg-[#28e068] flex-column justify-between ">
          <View></View>
          {/* <Image
            source={require("../assets/AremkoPay.png")}
            className="w-[85%] h-[80px] rounded-t-[10px] rounded-b-[10px] m-[30px]"
          /> */}
          <View className="bg-[#FFFF] min-h-[70%] w-[100%] rounded-tr-[50px] justify-center p-[30px] "></View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
