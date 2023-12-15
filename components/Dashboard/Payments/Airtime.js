import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CustomFormField from "../../utils/CustomFormField";
import ButtonCustom from "../../utils/ButtonCustom";
import { Overlay } from "../../utils/Overlay";
import { Picker } from "@react-native-picker/picker";
import FormHeader from "../../utils/FormHeader";

export const Airtime = ({ navigation }) => {
  const [showOverlay, setShowOverlay] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(null);
  return (
    <View>
      <FormHeader
        header="Get Airtime"
        subHeader="Stay connected effortlessly. Recharge your phone with ease and enjoy uninterrupted communication. Choose your desired amount and top up in seconds!"
      />
      <View className=" flex-column w-[100%] justify-between">
        <Text className="font-medium m-[5]">Choose your network provider</Text>
        <TouchableOpacity
          onPress={() => {
            setShowOverlay(true);
          }}
          className="bg-[#F2F2F2]  rounded-[10px] p-[10px] h-[60px] w-[100%] mb-[5%] justify-center"
        >
          <Text>
            {selectedValue == null ? "Network provider" : selectedValue}
          </Text>
        </TouchableOpacity>
      </View>
      <View className=" flex-column w-[100%] justify-between">
        <Text className="font-medium m-[5]">Phone number</Text>
        <CustomFormField
          placeholder="+234 123 456 78"
          inputMode="tel"
          extraStyle="h-[60px] w-[100%] mb-[5%]"
        />
      </View>
      <View className=" flex-column w-[100%] justify-between">
        <Text className="font-medium m-[5]">Airtime amount (NGN)</Text>
        <CustomFormField
          placeholder="0"
          inputMode="numeric"
          extraStyle="h-[60px] w-[100%] mb-[5%]"
        />
      </View>
      <ButtonCustom title="Proceed" />
      <Overlay showOverlay={showOverlay} setShowOverlay={setShowOverlay}>
        <View className="mt-[5%]">
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="MTN" value="MTN" />
            <Picker.Item label="GLO" value="GLO" />
            <Picker.Item label="AIRTEL" value="AIRTEL" />
            <Picker.Item label="9MOBILE" value="9MOBILE" />
          </Picker>
        </View>
      </Overlay>
    </View>
  );
};
