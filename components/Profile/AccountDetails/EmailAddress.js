import React from "react";
import { View } from "react-native";
import FormHeader from "../../utils/FormHeader";
import CustomFormField from "../../utils/CustomFormField";
import ButtonCustom from "../../utils/ButtonCustom";

export const EmailAddress = ({ navigation }) => {
  const [form, setForm] = React.useState("first");

  return (
    <View>
      <FormHeader
        header="Update Email Address"
        subHeader={
          form === "first"
            ? "Please enter your new email address. We will use this information to keep you informed about important updates and account-related notifications."
            : "An authentication verification has been sent to the provided email address."
        }
      />
      <CustomFormField
        placeholder="Email Address"
        inputMode="email"
        extraStyle="h-[60px] w-[100%]"
      />
      <ButtonCustom
        title={form === "first" ? "Next" : "Verify"}
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
