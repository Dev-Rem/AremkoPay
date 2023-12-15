import React from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { PaymentBoxes } from "../../utils/PaymentBoxes";
export const PaymentsScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View className="flex-1 bg-[#ffff] pt-[5%] h-[80%] w-[100%] flex-row justify-center  flex-wrap">
          <PaymentBoxes iconName="cash-plus" boxTitle="Top Up" />
          <PaymentBoxes iconName="cash-minus" boxTitle="Withdraw" />
          <PaymentBoxes iconName="phone" boxTitle="Airtime" />
          <PaymentBoxes iconName="web" boxTitle="Data" />
          <PaymentBoxes iconName="lightbulb-on" boxTitle="Electricity" />
          <PaymentBoxes iconName="monitor" boxTitle="TV" />
          <PaymentBoxes iconName="airplane-takeoff" boxTitle="Book Flight" />
          <PaymentBoxes iconName="account-multiple" boxTitle="Beneficiaries" />
          <PaymentBoxes iconName="history" boxTitle="Transaction History" />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
