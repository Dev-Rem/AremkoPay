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
import { CustomListitem } from "./CustomListitem";

export const ProfileScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View className="flex-1 bg-[#28e068] flex-column justify-end ">
          <View className="h-[25%] justify-end items-center px-[10%] py-[5%]">
            <View
              style={{
                backgroundColor: "#f1f1f1",
                width: "28%",
                aspectRatio: 1,
                borderRadius: "50%",
              }}
            ></View>

            <Text className="text-[20%] mb-[3%]">Aremu Oluwaseyi Festus</Text>
            <TouchableOpacity className="flex-row  ">
              <Text className="text-[15%] text-[#FFFF]">Account details</Text>
              <Icon
                name={"navigate-next"}
                type="material"
                size={20}
                color="#ffff"
              />
            </TouchableOpacity>

            {/* <View className="flex-row justify-between w-[100%]">
              <TouchableOpacity className="flex-row bg-[#ffff] px-[3%] py-[2%] rounded-[40%] opacity-[0.9] border-[1px]">
                <Text className="pt-[5px] pr-[5]">@username</Text>
                <Icon
                  name={"content-copy"}
                  type="material"
                  size={18}
                  style={{ paddingTop: 4 }}
                />
              </TouchableOpacity>
              <TouchableOpacity className="flex-row bg-[#ffff] px-[3%] py-[2%] rounded-[40%] opacity-[0.9] border-[1px]">
                <Text className="pt-[5px] pr-[5]">2304323421</Text>
                <Icon
                  name={"content-copy"}
                  type="material"
                  size={18}
                  style={{ paddingTop: 4 }}
                />
              </TouchableOpacity>
            </View> */}
          </View>

          <View className="bg-[#FFFF] min-h-[70%] w-[100%] rounded-tr-[50px] justify-start py-[5%] px-[20] ">
            <CustomListitem
              header="Change Pin"
              subHeader="Change your login pin"
              iconName="navigate-next"
              iconColor="#474747"
              headerColor="#28e068"
              onPress={() =>
                navigation.navigate("ProfileSecondScreen", {
                  use: "Change Pin",
                })
              }
            />
            <CustomListitem
              header="Update Password"
              subHeader="Change your account password"
              iconName="navigate-next"
              iconColor="#474747"
              onPress={() =>
                navigation.navigate("ProfileSecondScreen", {
                  use: "Update Password",
                })
              }
            />
            <CustomListitem
              header="Withdrawal accounts"
              subHeader="Add or remove withdrawal accounts"
              iconName="navigate-next"
              iconColor="#474747"
              onPress={() =>
                navigation.navigate("ProfileSecondScreen", {
                  use: "Withdrawal Accounts",
                })
              }
            />
            <CustomListitem
              header="Two-Factor-Authentication"
              subHeader="Set or change your 2fa settings"
              iconName="navigate-next"
              iconColor="#474747"
              onPress={() =>
                navigation.navigate("ProfileSecondScreen", {
                  use: "2FA",
                })
              }
            />
            <CustomListitem
              header="Get Help"
              subHeader="Get support or send feedback and reveiews"
              iconName="navigate-next"
              iconColor="#474747"
            />
            <CustomListitem
              header="Sign Out"
              iconName="logout"
              iconColor="#ff0000"
              headerColor="#ff0000"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
