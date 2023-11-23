import { Text, TouchableOpacity } from "react-native";
import React from "react";

const ButtonCustom = ({ onPress, extraStyle, title }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${extraStyle} h-[60] w-[85%] bg-[#28e068] rounded-tr-[60px] rounded-b-[10px] rounded-tl-[10px] p-[15] mb-[10%]`}
    >
      <Text className="text-xl font-semibold text-center">{title} </Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;
