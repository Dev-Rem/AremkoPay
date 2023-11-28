import React from "react";
import { View, Text } from "react-native";
import { Icon } from "@rneui/themed";

const NavigationIcon = ({ route, isFocused }) => {
  // Map route names to corresponding icons
  const iconMap = {
    Dashboard: "dashboard",
    Profile: "account-circle",
    Wallet: "account-balance-wallet",
    Payments: "payment",
  };

  const iconName = iconMap[route] || "help-outline"; // Use a default icon if no mapping is found

  return (
    <View>
      <Icon
        name={iconName}
        type="material"
        color={isFocused ? "#28e068" : "black"}
        size={25}
      />
      <Text
        style={{
          color: isFocused ? "#28e068" : "black",
          fontSize: 8,
          textAlign: "center",
        }}
      >
        {route}
      </Text>
    </View>
  );
};

export default NavigationIcon;
