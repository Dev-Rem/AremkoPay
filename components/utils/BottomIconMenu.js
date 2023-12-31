import React from "react";
import { View, Pressable } from "react-native";
import NavigationIcon from "./NavigationIcon";

export const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View className="flex-row absolute bottom-[0] bg-[#ffff]  border-[0.5px]">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View
            key={index}
            className="flex-1 justify-center align-center rounded-[2px] border-[#333B42]"
          >
            <Pressable onPress={onPress} className="mb-[10px]">
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                  padding: 10,
                }}
              >
                <NavigationIcon route={label} isFocused={isFocused} />
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};
