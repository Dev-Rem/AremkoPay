import React from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Image,
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
        <View className="flex-1 bg-[#ffff] flex-column  justify-center p-[30px] pt-[30%]">
          <View className="mb-[20%] w-[100%] justify-center items-center">
            <Image
              source={require("../../assets/AremkoPay.png")}
              className="w-[90%] h-[70px] "
            />
          </View>
          <FormHeader
            header={form === "first" ? "Enter login pin" : "Confirm login pin"}
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
