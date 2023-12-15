import { Icon } from "@rneui/themed";
import { onPress } from "deprecated-react-native-prop-types/DeprecatedTextPropTypes";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export const PaymentBoxes = ({ boxTitle, iconName, onPress, navigation }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-[25%] h-[20%] justify-center items-center m-[10] bg-[#ffff] rounded-[10%]"
    >
      <Icon name={iconName} type="material-community" color="black" size={35} />
      <Text className="font-semibold text-[12%] text-center">{boxTitle}</Text>
    </TouchableOpacity>
  );
};
