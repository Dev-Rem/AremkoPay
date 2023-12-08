import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Icon } from "@rneui/themed";

export const CustomListitem = ({
  header,
  subHeader,
  headerColor,
  iconName,
  iconColor,
  onPress,
  disabled,
}) => {
  return !disabled ? (
    <TouchableOpacity
      onPress={onPress}
      className="w-[100%] h-[10%]  justify-between items-center flex-row mb-[3%]"
    >
      <View>
        <Text className={`${headerColor} text-[18%]`}>{header}</Text>
        <Text className="text-[12%] text-[#474747]">{subHeader}</Text>
      </View>
      <Icon
        name={iconName}
        type="material"
        size={30}
        color={`${iconColor}`}
        style={{ paddingTop: 4 }}
      />
    </TouchableOpacity>
  ) : (
    <View className="my-[2%]">
      <Text
        className={`text-[18%] ${headerColor ? headerColor : "text-[#28e068]"}`}
      >
        {header}
      </Text>
      <Text className="text-[12%] text-[#474747]">{subHeader}</Text>
    </View>
  );
};
