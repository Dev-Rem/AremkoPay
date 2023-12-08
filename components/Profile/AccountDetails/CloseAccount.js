import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import FormHeader from "../../utils/FormHeader";
import { Overlay } from "../../utils/Overlay";
import { Picker } from "@react-native-picker/picker";
import ButtonCustom from "../../utils/ButtonCustom";

export const CloseAccount = ({ navigation }) => {
  const [selectedAnswer, setSelectedAnswer] = React.useState("");
  const [showOverlay, setShowOverlay] = React.useState(false);

  return (
    <View>
      <FormHeader
        header="Sad To See You Go"
        subHeader="If you've decided to close your account, we want to ensure a smooth and secure process. Please take a moment to review the following information before proceeding. "
      />
      <Text className="text-[10%] mb-[2%] text-[#28e068]">
        1. Closing your account will result in the permanent deletion of your
        data and the termination of all associated services.
      </Text>
      <Text className="text-[10%] mb-[2%] text-[#28e068]">
        2. If you have any outstanding balances or unresolved matters, please
        address them before initiating the closure.
      </Text>
      <Text className="text-[10%] mb-[2%] text-[#28e068]">
        3. We appreciate your understanding and would like to thank you for
        being a part of our community.
      </Text>
      <Text className="text-[10%] mb-[10%] text-[#28e068]">
        4. If you have any questions or concerns, our support team is here to
        assist you during this process. Your satisfaction and feedback are
        important to us.
      </Text>

      <View className=" flex-column w-[100%] justify-between">
        <Text className="font-medium m-[5]">
          Your reason for closing your account?
        </Text>
        <TouchableOpacity
          onPress={() => setShowOverlay(true)}
          className="h-[60px] w-[100%] mb-[5%] bg-[#F2F2F2] justify-center rounded-[10px] p-[10px] "
        >
          {selectedAnswer === "" ? (
            <Text className="text-[#b2b2b2]">Reasons</Text>
          ) : (
            <Text className="">{selectedAnswer}</Text>
          )}
        </TouchableOpacity>
      </View>
      <ButtonCustom title="Next" />
      <Overlay showOverlay={showOverlay} setShowOverlay={setShowOverlay}>
        <Picker
          selectedValue={selectedAnswer}
          onValueChange={(itemValue, itemIndex) => setSelectedAnswer(itemValue)}
        >
          <Picker.Item label="I have a complaint" value="I have a complaint" />
          <Picker.Item
            label="Requirements and Fees"
            value="Requirements and Fees"
          />
          <Picker.Item
            label="Poor Customer Service"
            value="Poor Customer Service"
          />
          <Picker.Item label="Switching Banks" value="Switching Banks" />
          <Picker.Item label="Bank Insurance" value="Bank Insurance" />
          <Picker.Item label="Becoming Unbanked" value="Becoming Unbanked" />
          <Picker.Item label="Not Tech Savy" value="Not Tech Savy" />
        </Picker>
      </Overlay>
    </View>
  );
};
