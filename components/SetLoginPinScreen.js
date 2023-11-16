import React from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  Keyboard,
} from "react-native";
import { EnterLoginPin } from "./EnterLoginPin";
import { ConfirmLoginPin } from "./ConfirmLoginPin";

export const SetLoginPinScreen = ({ navigation }) => {
  const [form, setForm] = React.useState("first");
  const [pin, setPin] = React.useState("");
  const [confirmPin, setConfirmPin] = React.useState("");

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "height" : undefined}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View className="flex-1 bg-[#DAE8DA] flex-column justify-end pt-[40%]">
          <View></View>
          <View className="mb-[20px]">
            <Text className="text-2xl font-bold px-[20px] mb-[10px]">
              {form === "first" ? "Enter" : "Confirm"} login pin
            </Text>
            <Text className="text-[12px] px-[20px]">
              Before we proceed, let's set up a secure login PIN for your
              account. This PIN will be used to enhance the security of your
              account. Make sure to choose a PIN that is easy for you to
              remember, but not too obvious to others.
            </Text>
          </View>

          <View className="bg-[#FFFF] min-h-[60%] w-[100%] rounded-tr-[50px] justify-center py-[30px] ">
            {form === "first" ? (
              <EnterLoginPin pin={pin} setPin={setPin} setForm={setForm} />
            ) : (
              <ConfirmLoginPin
                confirmPin={confirmPin}
                setConfirmPin={setConfirmPin}
                navigation={navigation}
              />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
