import React from "react";
import { View } from "react-native";

export const HorizontalRule = ({ color, height }) => {
  return (
    <View
      style={{
        borderBottomWidth: height || 1,
        borderBottomColor: color || "black",
        marginVertical: 10,
      }}
    />
  );
};
