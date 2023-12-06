import React from "react";
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { Icon } from "@rneui/themed";

export const Overlay = ({ showOverlay, setShowOverlay, children, item }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => setShow(false)}
      className="h-[100%]"
    >
      <Modal visible={showOverlay} animationType="slide" transparent={true}>
        <View className="flex-1 justify-end items-center ">
          <View className="bg-[#28e068] w-[100%] flex-column pt-[18%] px-[5%] rounded-tr-[60%] h-[45%] ">
            <TouchableOpacity
              className="absolute top-[20] right-[20]"
              onPress={() => setShowOverlay(false)}
            >
              <Icon name="close" type="material" color="black" size={40} />
            </TouchableOpacity>
            {/* Content of the overlay screen */}
            {children}
          </View>
        </View>
      </Modal>
    </TouchableWithoutFeedback>
  );
};
