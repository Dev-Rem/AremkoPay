import React from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";
import CustomFormField from "../utils/CustomFormField";
import ButtonCustom from "../utils/ButtonCustom";
import FormHeader from "../utils/FormHeader";
import { Overlay } from "../utils/Overlay";
import { Picker } from "@react-native-picker/picker";

export const TwoFactorAuthentication = ({ navigation }) => {
  const [showOverlay, setShowOverlay] = React.useState(false);
  const [selectedQuestion, setSelectedQuestion] = React.useState("");
  return (
    <View>
      <FormHeader
        header="Two-Factor Authentication (2FA)"
        subHeader="Enhance your account security with Two-Factor Authentication. Set up an extra layer of protection by answering security questions in addition to your regular credentials."
      />
      <View className=" flex-column w-[100%] justify-between">
        <Text className="font-medium m-[5]">Security questions</Text>
        <TouchableOpacity
          onPress={() => setShowOverlay(true)}
          className="h-[60px] w-[100%] mb-[5%] bg-[#F2F2F2] justify-center rounded-[10px] p-[10px] "
        >
          {selectedQuestion === "" ? (
            <Text className="text-[#b2b2b2]">Security questions</Text>
          ) : (
            <Text className="">{selectedQuestion}</Text>
          )}
        </TouchableOpacity>
      </View>
      <View className=" flex-column w-[100%] justify-between">
        <Text className="font-medium m-[5]">Secret answer</Text>
        <CustomFormField
          placeholder="Secret answer"
          inputMode="text"
          secureTextEntry={true}
          extraStyle="h-[60px] w-[100%] mb-[5%]"
        />
      </View>

      <ButtonCustom
        title="Set 2FA"
        onPress={() => navigation.navigate("Tabs")}
      />
      <Overlay showOverlay={showOverlay} setShowOverlay={setShowOverlay}>
        <Picker
          selectedValue={selectedQuestion}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedQuestion(itemValue)
          }
        >
          <Picker.Item
            label="Where were you born?"
            value="Where were you born?"
          />
          <Picker.Item
            label="What's your mothers maiden name?"
            value="What's your mothers maiden name?"
          />
        </Picker>
      </Overlay>
    </View>
  );
};
