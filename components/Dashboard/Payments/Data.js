import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CustomFormField from "../../utils/CustomFormField";
import ButtonCustom from "../../utils/ButtonCustom";
import { Overlay } from "../../utils/Overlay";
import { Picker } from "@react-native-picker/picker";
import FormHeader from "../../utils/FormHeader";

export const Data = ({ navigation }) => {
  const [showOverlay, setShowOverlay] = React.useState(false);
  const [overlayUse, setOverlayUse] = React.useState(null);
  const [codeSent, setCodeSent] = React.useState(false);
  const [form, setForm] = React.useState("first");
  const [selectedValue, setSelectedValue] = React.useState({
    network_provider: "",
    data_package: "",
  });
  const handleChange = (key, value) => {
    setSelectedValue((prevState) => {
      return { ...prevState, [key]: value };
    });
  };
  return (
    <View>
      <FormHeader
        header="Get Data"
        subHeader="Buy the best data plans for your phone with ease and enjoy uninterrupted internet connection. Choose your desired package and top up in seconds!"
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
                setOverlayUse("np");
              }}
              className="bg-[#F2F2F2]  rounded-[10px] p-[10px] h-[60px] w-[100%] mb-[5%] justify-center"
            >
              <Text>
                {selectedValue.network_provider == ""
                  ? "Select network provider"
                  : selectedValue.network_provider}
              </Text>
            </TouchableOpacity>
          </View>

          <View className=" flex-column w-[100%] justify-between">
            <Text className="font-medium m-[5]">Data Packages</Text>
            <TouchableOpacity
              onPress={() => {
                setShowOverlay(true);
                setOverlayUse("dp");
              }}
              className="bg-[#F2F2F2]  rounded-[10px] p-[10px] h-[60px] w-[100%] mb-[5%] justify-center"
            >
              <Text>
                {selectedValue.data_package == ""
                  ? "Select data package"
                  : selectedValue.data_package}
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
          <ButtonCustom
            title="Proceed"
            onPress={() => {
              setForm("second");
            }}
          />
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
            title="Buy Data"
            onPress={() => {
              navigation.navigate("Tabs");
            }}
          />
        </>
      )}

      <Overlay showOverlay={showOverlay} setShowOverlay={setShowOverlay}>
        <View className="mt-[5%]">
          {overlayUse === "np" ? (
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue((prevState) => {
                  return { ...prevState, network_provider: itemValue };
                })
              }
            >
              <Picker.Item label="MTN" value="MTN" />
              <Picker.Item label="GLO" value="GLO" />
              <Picker.Item label="AIRTEL" value="AIRTEL" />
              <Picker.Item label="9MOBILE" value="9MOBILE" />
            </Picker>
          ) : (
            <></>
          )}
          {overlayUse === "dp" ? (
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue((prevState) => {
                  return { ...prevState, data_package: itemValue };
                })
              }
            >
              <Picker.Item
                label="2-DAY PLAN 2.5GB NGN500"
                value="2-DAY PLAN 2.5GB NGN500"
              />
              <Picker.Item
                label="7-DAY PLAN 5GB NGN1500"
                value="7-DAY PLAN 5GB NGN1500"
              />
              <Picker.Item
                label="30-DAY PLAN 20GB NGN5500"
                value="30-DAY PLAN 20GB NGN5500"
              />
              <Picker.Item
                label="60-DAY PLAN 200GB NGN20000"
                value="60-DAY PLAN 200GB NGN20000"
              />
            </Picker>
          ) : (
            <></>
          )}
        </View>
      </Overlay>
    </View>
  );
};
