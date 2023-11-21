import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";

export const EnterLoginPin = ({ pin, setPin, setForm }) => {
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
    <>
      <View className="flex-row mb-[10] justify-center mb-[10%]">
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
            <Text className="text-[20px]">{index + 1}</Text>
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
          onPress={() => setForm("second")}
          className="w-[25%] h-[20%] justify-center items-center m-[10] rounded-[10px]"
        >
          <Icon name="arrow-forward" type="material" size={35} />
        </TouchableOpacity>
      </View>
    </>
  );
};
