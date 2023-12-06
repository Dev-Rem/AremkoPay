import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CustomFormField from "../utils/CustomFormField";
import ButtonCustom from "../utils/ButtonCustom";
import FormHeader from "../utils/FormHeader";
import { Overlay } from "../utils/Overlay";
import { Icon } from "@rneui/themed";
export const WithdrawalAccounts = ({ navigation }) => {
  const [showOverlay, setShowOverlay] = React.useState(false);
  return (
    <View>
      <FormHeader
        header="Withdrawal Accounts"
        subHeader="Manage your linked withdrawal accounts. Add, or remove your bank information to facilitate seamless transactions."
      />
      <Text className=" mb-[2%] text-[12%]">
        Note: You can only have two (2) withdrawal accounts
      </Text>
      <TouchableOpacity
        onPress={() => setShowOverlay(true)}
        className="flex-row items-center rounded-[10%]"
      >
        <Text className="text-[#28e068] font-semibold">
          Withdrawal accounts
        </Text>
        <Icon name={"expand-more"} type="material" size={30} color="#28e068" />
      </TouchableOpacity>

      <View className=" flex-column w-[100%] justify-between">
        <Text className="font-medium m-[5]">Account name</Text>
        <CustomFormField
          placeholder="Account name"
          inputMode="text"
          extraStyle="h-[60px] w-[100%] mb-[5%]"
        />
      </View>
      <View className="flex-row justify-between">
        <View className=" flex-column w-[45%] justify-between">
          <Text className="font-medium m-[5]">Account number</Text>
          <CustomFormField
            placeholder="Account number"
            inputMode="numeric"
            extraStyle="h-[60px] w-[100%] mb-[5%]"
          />
        </View>

        <View className=" flex-column w-[45%] justify-between">
          <Text className="font-medium m-[5]">Bank name</Text>
          <CustomFormField
            placeholder="Bank name"
            inputMode="text"
            extraStyle="h-[60px] w-[100%] mb-[5%]"
          />
        </View>
      </View>

      <ButtonCustom
        title="Add Account"
        onPress={() => navigation.navigate("Tabs")}
      />
      <Overlay showOverlay={showOverlay} setShowOverlay={setShowOverlay}>
        <View className="bg-[#ffff]  flex-row p-[3%] justify-between items-center mb-[2%] rounded-[10%]">
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
