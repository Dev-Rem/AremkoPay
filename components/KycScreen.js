import React from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  Keyboard,
} from "react-native";
import { Icon } from "@rneui/themed";
import { KycFirstForm } from "./KycFirstForm";
import { KycSecondForm } from "./KycSecondForm";
import * as ImagePicker from "expo-image-picker";

export const KycScreen = () => {
  const [form, setForm] = React.useState("first");
  const [checked, setChecked] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const [types, setTypes] = React.useState([
    "Personal account",
    "Corprate account",
  ]);
  const [type, setType] = React.useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "height" : undefined}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View className="flex-1 bg-[#DAE8DA] flex-column justify-end pt-[40%]">
          <View></View>
          <Text className="text-2xl font-bold p-[20px] mt-[30px]">KYC</Text>
          <View className="bg-[#FFFF] min-h-[70%] w-[100%] rounded-tr-[50px] justify-center py-[60px] px-[30px]">
            {/* <Text className="text-l">
              This is a mandatory step that enables us serve you better.
            </Text> */}
            <View className="flex-column w-[100%] items-center">
              {form === "first" ? (
                <KycFirstForm />
              ) : (
                <KycSecondForm
                  pickImage={pickImage}
                  types={types}
                  type={type}
                  setType={setType}
                />
              )}

              <View className="w-[100%] justify-between flex-row">
                {form === "second" ? (
                  <TouchableOpacity
                    onPress={() => setForm("first")}
                    className="h-[60] w-[25%] bg-[#DAE8DA] rounded-tr-[60px] rounded-b-[10px] rounded-tl-[10px] p-[15px] mt-[8%]"
                  >
                    <Icon name={"arrow-back"} type="material" size={35} />
                  </TouchableOpacity>
                ) : (
                  <View></View>
                )}
                <TouchableOpacity
                  onPress={() => setForm("second")}
                  className="h-[60] w-[25%] bg-[#DAE8DA] rounded-tr-[60px] rounded-b-[10px] rounded-tl-[10px] p-[15px] mt-[8%]"
                >
                  <Icon name={"arrow-forward"} type="material" size={35} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};