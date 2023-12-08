import { TextInput } from "react-native";
import React from "react";

const CustomFormField = ({
  extraStyle,
  placeholder,
  inputMode,
  secureTextEntry,
  maxLength,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      inputMode={inputMode}
      placeholderTextColor={"#b2b2b2"}
      secureTextEntry={secureTextEntry}
      maxLength={maxLength}
      className={`${extraStyle} bg-[#F2F2F2]  rounded-[10px] p-[10px] `}
    />
  );
};

export default CustomFormField;
