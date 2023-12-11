import React from "react";
import { View, Text, Switch } from "react-native";
import { Icon } from "@rneui/themed";
import FormHeader from "../../utils/FormHeader";

export const RestrictAccount = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = React.useState(false);

  return (
    <View>
      <FormHeader
        header="Restrict Account"
        subHeader="Your satisfaction and peace of mind are our top priorities. If you have any specific requirements or concerns, please feel free to reach support team. Thank you for entrusting us with your account security."
      />
      <Text className="mb-[10%]">
        Restricting your account will unable you to do the following
      </Text>

      <View className="bg-[#f4f4f4] rounded-[10%] p-[5%]">
        <View className="justify-between items-center flex-row w-[100%]  mb-[3%]">
          <Icon name="done" type="material" color="#28e068" size={30} />
          <Text>Outward transfers</Text>
        </View>
        <View className="justify-between items-center flex-row w-[100%] mb-[3%]">
          <Icon name="done" type="material" color="#28e068" size={30} />
          <Text>Card transactions</Text>
        </View>
        <View className="justify-between items-center flex-row w-[100%] mb-[3%]">
          <Icon name="done" type="material" color="#28e068" size={30} />
          <Text>Online transactions</Text>
        </View>
      </View>
      <View className="h-[12%] w-[100%] bg-[#f4f4f4] rounded-[10%] justify-between items-center px-[5%] flex-row mt-[10%]">
        <Text>Restrict my account</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#28e068" }}
          thumbColor="#ffff"
          //   ios_backgroundColor="#28e068"
          onValueChange={() => setIsEnabled(!isEnabled)}
          value={isEnabled}
        />
      </View>
    </View>
  );
};
