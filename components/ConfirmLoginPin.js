import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";

export const ConfirmLoginPin = ({ confirmPin, setConfirmPin, navigation }) => {
  const handleNumberPress = (num) => {
    if (confirmPin.length < 4) {
      setConfirmPin(confirmPin + num);
    }
  };

  const handleDeletePress = () => {
    if (confirmPin.length > 0) {
      setConfirmPin(confirmPin.slice(0, -1));
    }
  };
  return (
    <>
      <View className="flex-row mb-[10] justify-center mb-[10%]">
        {Array.from({ length: 4 }).map((_, index) => (
          <TouchableOpacity
            key={index}
            className="w-[5%] h-[20px] rounded-[30px] ${bg-[#f4f4f4]} mx-[5%] border-[2px] border-[gray]"
            style={{
              backgroundColor: confirmPin.length > index ? "gray" : "#ffff",
            }}
          ></TouchableOpacity>
        ))}
      </View>
      <View className=" h-[70%] w-[100%] flex-row justify-center  flex-wrap">
        {Array.from({ length: 9 }).map((_, index) => (
          <TouchableOpacity
            key={index}
            className="w-[25%] h-[20%] justify-center items-center m-[10] bg-[#f4f4f4] rounded-tr-[60px] rounded-b-[10px] rounded-tl-[10px]"
            onPress={() => handleNumberPress(index + 1)}
          >
            <Text className="text-[20px]">{index + 1}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          onPress={handleDeletePress}
          className="w-[25%] h-[20%] justify-center items-center m-[10]  rounded-tr-[60px] rounded-b-[10px] rounded-tl-[10px]"
        >
          <Icon name="backspace" type="material" size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleNumberPress(0)}
          className="w-[25%] h-[20%] justify-center items-center m-[10] bg-[#f4f4f4] rounded-tr-[60px] rounded-b-[10px] rounded-tl-[10px]"
        >
          <Text className="text-[20px]">0</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[25%] h-[20%] justify-center items-center m-[10] rounded-tr-[60px] rounded-b-[10px] rounded-tl-[10px]">
          <Icon name="check" type="material" size={35} />
        </TouchableOpacity>
      </View>
    </>
  );
};
