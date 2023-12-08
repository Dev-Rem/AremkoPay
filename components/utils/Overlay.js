import React from "react";
import {
  View,
  Modal,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Icon } from "@rneui/themed";

export const Overlay = ({ showOverlay, setShowOverlay, children, item }) => {
  return (
    <Modal visible={showOverlay} animationType="slide" transparent={true}>
      <View className="flex-1 justify-end items-center ">
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View className="bg-[#ffff]  w-[100%] flex-column pt-[10%] px-[5%] rounded-tr-[60%] h-[40%] border-[#28e068] border-[1px] ">
            <TouchableOpacity
              className="absolute top-[20] right-[20]"
              onPress={() => setShowOverlay(false)}
            >
              <Icon name="close" type="material" color="black" size={40} />
            </TouchableOpacity>
            {/* Content of the overlay screen */}
            {children}
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};
