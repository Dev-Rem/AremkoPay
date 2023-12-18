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
  const [form, setForm] = React.useState("first");
  const [codeSent, setCodeSent] = React.useState(false);

  return (
    <View>
      <FormHeader
        header="Get Airtime"
        subHeader="Stay connected effortlessly. Recharge your phone with ease and enjoy uninterrupted communication. Choose your desired amount and top up in seconds!"
      />
      {form === "first" ? (
        <>
          <View className=" flex-column w-[100%] justify-between">
            <Text className="font-medium m-[5]">
              Choose your network provider
            </Text>
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
          <ButtonCustom title="Proceed" onPress={() => setForm("second")} />
        </>
      ) : (
        <>
          <View className="my-[3%]">
            <TouchableOpacity onPress={() => setCodeSent(true)}>
              <Text className="font-semibold text-[#28e068] mb-[5px]">
                Get transaction code
              </Text>
            </TouchableOpacity>
            {codeSent ? (
              <Text className="text-[10%]">
                A code has been sent to your registered phone number and email
                address. Please provide the code to complete your transaction.
              </Text>
            ) : (
              <></>
            )}
          </View>

          <View className=" flex-column w-[100%] justify-between">
            <Text className="font-medium m-[5]">Transaction code</Text>
            <CustomFormField
              placeholder="Code"
              inputMode="numeric"
              extraStyle="h-[60px] w-[100%] mb-[5%]"
            />
          </View>
          <ButtonCustom
            title="Buy Airtime"
            onPress={() => {
              navigation.navigate("Tabs");
            }}
          />
        </>
      )}
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
