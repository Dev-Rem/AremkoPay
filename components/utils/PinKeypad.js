import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";

export const PinKeypad = ({
  pin,
  setPin,
  form,
  setForm,
  navigation,
  nextScreen,
}) => {
  const handleNumberPress = (num) => {
    if (pin.length < 4) {
      setPin(pin + num);
    }
  };

  const handleDeletePress = () => {
    if (pin.length > 0) {
      setPin(pin.slice(0, -1));
    }
  };

  return (
    <View>
      <View className="flex-row  justify-center mb-[8%]">
        {Array.from({ length: 4 }).map((_, index) => (
          <TouchableOpacity
            key={index}
            className="w-[5%] h-[20px] rounded-[30px] bg-[#f4f4f4] mx-[5%] border-[2px] border-[gray]"
            style={{
              backgroundColor: pin.length > index ? "gray" : "#ffff",
            }}
          ></TouchableOpacity>
        ))}
      </View>
      <View className=" h-[70%] w-[100%] flex-row justify-center  flex-wrap">
        {Array.from({ length: 9 }).map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleNumberPress(index + 1)}
            className="w-[25%] h-[20%] justify-center items-center m-[10] bg-[#f4f4f4] rounded-[10px]"
          >
            <Text className="text-[25px]">{index + 1}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          onPress={() => handleDeletePress()}
          className="w-[25%] h-[20%] justify-center items-center m-[10]  rounded-[10px]"
        >
          <Icon name="backspace" type="material" size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleNumberPress(0)}
          className="w-[25%] h-[20%] justify-center items-center m-[10] bg-[#f4f4f4] rounded-[10px]"
        >
          <Text className="text-[20px]">0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            form === "first"
              ? setForm("second")
              : navigation.navigate({ nextScreen });
          }}
          className="w-[25%] h-[20%] bg-[#28e068] justify-center items-center m-[10] rounded-[10px]"
        >
          <Icon
            name={form === "first" ? "arrow-forward" : "done-all"}
            type="material"
            size={35}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
