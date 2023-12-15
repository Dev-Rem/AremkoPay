import React from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";
import FormHeader from "../../utils/FormHeader";
import CustomFormField from "../../utils/CustomFormField";
import ButtonCustom from "../../utils/ButtonCustom";
import { Overlay } from "../../utils/Overlay";
import { Icon } from "@rneui/themed";

export const Withdraw = ({ navigation }) => {
  const [codeSent, setCodeSent] = React.useState(false);
  const [showOverlay, setShowOverlay] = React.useState(false);
  return (
    <View>
      <FormHeader
        header="Withdraw your funds"
        subHeader={
          "You can  withdraw from your NGN account to an external accounts."
        }
      />
      <View className=" flex-column w-[100%] justify-between">
        <Text className="font-medium m-[5]">Select withdrawl amount</Text>
        <TouchableOpacity
          onPress={() => {
            setShowOverlay(true);
          }}
          className="bg-[#F2F2F2]  rounded-[10px] p-[10px] h-[60px] w-[100%] mb-[5%] justify-center"
        >
          <Text>Withdrawal account</Text>
        </TouchableOpacity>
      </View>
      <View className=" flex-column w-[100%] justify-between">
        <Text className="font-medium m-[5]">Amount to withdraw</Text>
        <CustomFormField
          placeholder="0.00"
          inputMode="decimal"
          extraStyle="h-[60px] w-[100%] mb-[5%]"
        />
      </View>
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

      <ButtonCustom title="Proceed" />
      <Overlay showOverlay={showOverlay} setShowOverlay={setShowOverlay}>
        <View className="bg-[#ffff]  flex-row p-[3%] justify-between items-center mb-[2%] mt-[5%] rounded-[10%]">
          <View>
            <Text>Account name</Text>
            <Text>Account number</Text>
            <Text>Bank name</Text>
          </View>
          <Icon name={"delete"} type="material" size={30} color="#28e068" />
        </View>
        <View className="bg-[#ffff]  flex-row p-[3%] justify-between items-center mb-[2%] rounded-[10%]">
          <View>
            <Text>Account name</Text>
            <Text>Account number</Text>
            <Text>Bank name</Text>
          </View>
          <Icon name={"delete"} type="material" size={30} color="#28e068" />
        </View>
      </Overlay>
    </View>
  );
};
