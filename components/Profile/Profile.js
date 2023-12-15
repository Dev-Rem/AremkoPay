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
import { CustomListitem } from "../utils/CustomListitem";

export const ProfileScreen = ({ navigation }) => {
  return (
    <View className="flex-1 bg-[#ffff] flex-column justify-start px-[30px] mb-[8%]">
      <View className="h-[25%] justify-end items-center  mb-[3%]">
        <View
          style={{
            backgroundColor: "#f1f1f1",
            width: "28%",
            aspectRatio: 1,
            borderRadius: "50%",
          }}
        ></View>

        <Text className="text-[20%] mb-[3%]">Aremu Oluwaseyi Festus</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProfileSecondScreen", {
              use: "Account Details",
            })
          }
          className="flex-row  "
        >
          <Text className="text-[15%] text-[#28e068]">Account details</Text>
          <Icon
            name={"navigate-next"}
            type="material"
            size={20}
            color="#28e068"
          />
        </TouchableOpacity>
      </View>

      {/* <View className="bg-[#FFFF] min-h-[70%] w-[100%] rounded-tr-[50px] justify-start py-[5%] px-[20] "> */}
      <CustomListitem
        header="Change Pin"
        subHeader="Change your login pin"
        iconName="navigate-next"
        iconColor="#474747"
        headerColor="text-[#28e068]"
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
        headerColor="text-[#28e068]"
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
        headerColor="text-[#28e068]"
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
        headerColor="text-[#28e068]"
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
        headerColor="text-[#28e068]"
        iconColor="#474747"
        onPress={() =>
          navigation.navigate("ProfileSecondScreen", {
            use: "Get Help",
          })
        }
      />
      <CustomListitem
        header="Sign Out"
        iconName="logout"
        iconColor="#ef0e0e"
        headerColor="text-[#ef0e0e]"
        onPress={() => navigation.navigate("SignIn")}
      />
    </View>
  );
};
