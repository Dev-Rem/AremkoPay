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
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-[100%] h-[10%]  justify-between items-center flex-row mb-[3%]"
    >
      <View>
        <Text
          className={`text-[18%] text-[${
            headerColor ? headerColor : "#28e068"
          }]`}
        >
          {header}
        </Text>
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
  );
};
