import React from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  Keyboard,
  ScrollView,
} from "react-native";
import { Icon } from "@rneui/themed";
import { KycFirstForm } from "./KycFirstForm";
import { KycSecondForm } from "./KycSecondForm";
import * as ImagePicker from "expo-image-picker";

export const KycScreen = ({ navigation }) => {
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
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View className="flex-1 bg-[#DAE8DA] flex-column justify-end pt-[40%]">
            <View></View>
            <View className="mb-[20px]">
              <Text className="text-2xl font-bold px-[20px] mb-[10px]">
                KYC
              </Text>
              <Text className="text-[12px] px-[20px] mb-[10px]">
                Financial regulators in Nigeria require you to verify your
                identity to use this service.
              </Text>
              <Text className="text-[12px] px-[20px]">
                This is a mandatory step that enables us serve you better.
              </Text>
            </View>

            <View className="bg-[#FFFF] min-h-[60%] w-[100%] rounded-tr-[50px] justify-between py-[30px] px-[30px]">
              <View className=" max-h-[100%] flex-column w-[100%] items-center">
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
              </View>
              <View className="w-[100%] justify-between flex-row mb-[20px]">
                {form === "second" ? (
                  <TouchableOpacity
                    onPress={() => setForm("first")}
                    className="h-[40] w-[25%] bg-[#DAE8DA] rounded-tr-[60px] rounded-b-[10px] rounded-tl-[10px] mt-[8%] justify-center"
                  >
                    <Icon name={"arrow-back"} type="material" size={30} />
                  </TouchableOpacity>
                ) : (
                  <View></View>
                )}
                <TouchableOpacity
                  onPress={() =>
                    form === "first"
                      ? setForm("second")
                      : navigation.navigate("SetPin")
                  }
                  className="h-[40] w-[25%] bg-[#DAE8DA] rounded-tr-[60px] rounded-b-[10px] rounded-tl-[10px] mt-[8%] justify-center"
                >
                  {form === "second" ? (
                    <Text className="font-semibold text-[14px] text-center">
                      Submit
                    </Text>
                  ) : (
                    <Icon name={"arrow-forward"} type="material" size={30} />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
