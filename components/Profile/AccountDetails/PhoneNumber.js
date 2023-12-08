import React from "react";
import FormHeader from "../../utils/FormHeader";
import { View, Text } from "react-native";
import CustomFormField from "../../utils/CustomFormField";
import ButtonCustom from "../../utils/ButtonCustom";

export const PhoneNumber = ({ navigation }) => {
  const [form, setForm] = React.useState("first");
  return (
    <View>
      <FormHeader
        header="Update Your Contact Number"
        subHeader={
          form === "first"
            ? "Kindly share your new phone number so we can stay connected with you."
            : "An authentication verification has been dispatched to the provided phone number."
        }
      />

      {form === "first" ? (
        <View className=" flex-column w-[100%] justify-between">
          <Text className="font-medium m-[5]">Phone Number</Text>
          <CustomFormField
            placeholder="Phone Number"
            inputMode="tel"
            extraStyle="h-[60px] w-[100%]"
          />
        </View>
      ) : (
        <View className=" flex-column w-[100%] justify-between">
          <Text className="font-medium m-[5]">Verification Code</Text>
          <CustomFormField
            placeholder="Verification Code"
            inputMode="tel"
            maxLength={6}
            extraStyle="h-[60px] w-[100%]"
          />
        </View>
      )}
      <ButtonCustom
        title={form === "first" ? "Next" : "Done"}
        onPress={() => {
          form === "first"
            ? setForm("second")
            : navigation.navigate("ProfileSecondScreen", {
                use: "Account Details",
              });
        }}
      />
    </View>
  );
};
