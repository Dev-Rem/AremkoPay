import React from "react";
import { Text, View, TouchableOpacity, Modal, Pressable } from "react-native";
import CustomFormField from "../utils/CustomFormField";

export const KycSecondForm = ({ pickImage, types, type, setType }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <View className="flex-column  w-[100%] items-center">
      <View className="w-[100%] m-[2%] ">
        <Text className="font-medium m-[5]">Account type</Text>
        <TouchableOpacity
          onPress={() => setIsVisible(true)}
          className="h-[40px] w-[100%] bg-[#F2F2F2] rounded-[10px] p-[10px]"
        >
          {type !== null ? (
            <Text className="text-[black]">{type}</Text>
          ) : (
            <Text className="text-[#b2b2b2]">Account type</Text>
          )}
        </TouchableOpacity>
      </View>
      {type === "Corprate account" ? (
        <View className="w-[100%] m-[2%] ">
          <Text className="font-medium m-[5]">Company name</Text>
          <CustomFormField
            placeholder={"Company name"}
            extraStyle={"h-[40px] "}
          />
        </View>
      ) : (
        <></>
      )}
      <View className="w-[100%] m-[2%] ">
        <Text className="font-medium m-[5]">
          {type === "Corprate account"
            ? "Corprate TIN number"
            : "Bank verification number"}
        </Text>
        <CustomFormField
          placeholder={
            type === "Corprate account"
              ? "Corprate TIN number"
              : "Bank verification number"
          }
          extraStyle={"h-[40px] "}
          inputMode="numeric"
        />
      </View>
      <View className="w-[100%] m-[2%] ">
        <Text className="font-medium m-[5]">Document Upload</Text>
        <TouchableOpacity
          onPress={pickImage}
          className="h-[40px] w-[100%] bg-[#F2F2F2] rounded-[10px] p-[10px]"
        >
          <Text className="text-[#b2b2b2]">
            {type === "Corprate account"
              ? "CAC document"
              : "Identification document"}
          </Text>
        </TouchableOpacity>
        <Text className="font-light text-[10px] m-[5]">
          Note: Please make sure the document uploaded is clear
        </Text>
      </View>

      <Modal
        // animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          setIsVisible(!isVisible);
        }}
      >
        <View className=" flex-1 bg-[#545454] justify-center items-center opacity-[1]">
          <View className="w-[60%] max-h-[100%] bg-[#ffff] rounded-tr-[60px] rounded-b-[10px] rounded-tl-[10px] p-[20px]">
            {types.map((option, key) => (
              <TouchableOpacity
                key={key}
                onPress={() => {
                  setType(option);
                  setIsVisible(false);
                }}
                className="border-b-[1px] py-[10px]"
              >
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Pressable
            onPress={() => setIsVisible(!isVisible)}
            className="bg-[#DAE8DA] w-[60%] h-[7%] m-[5%] rounded-tr-[60px] rounded-b-[10px] rounded-tl-[10px] items-center justify-center"
          >
            <Text>Close</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};
