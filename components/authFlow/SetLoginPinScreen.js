import React from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Text,
  Keyboard,
} from "react-native";
import { EnterLoginPin } from "./EnterLoginPin";
import { ConfirmLoginPin } from "./ConfirmLoginPin";
import FormHeader from "../utils/FormHeader";

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
        <View className="flex-1 bg-[#28e068] flex-column   pt-[40%]">
          <View></View>

          <View className="bg-[#FFFF] h-[100%] w-[100%] rounded-tr-[50px] justify-center p-[30px] ">
            <FormHeader
              header={
                form === "first" ? "Enter login pin" : "Confirm login pin"
              }
              subHeader={
                form === "first" || form === "second"
                  ? "Make sure to choose a PIN that is easy for you to remember, but not too obvious to others."
                  : ""
              }
            />

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
