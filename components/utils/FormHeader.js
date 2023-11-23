import { Text } from "react-native";
import React from "react";

const FormHeader = ({ header, subHeader }) => {
  return (
    <>
      <Text className="text-2xl">{header}</Text>
      <Text className="text-l mb-[10%]">{subHeader}</Text>
    </>
  );
};

export default FormHeader;
