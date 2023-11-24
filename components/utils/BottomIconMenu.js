import React from "react";
import { View, Pressable } from "react-native";
import NavigationIcon from "./NavigationIcon";

export const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View className="flex-row absolute bottom-[0] bg-[#ffff] rounded-tr-[60px] border-[1px]">
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
            className="flex-1 justify-center align-center my-[5px] rounded-[2px] border-[#333B42]"
          >
            <Pressable onPress={onPress} className="mb-[5%]">
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                  padding: 15,
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
