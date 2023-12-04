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
import { ListItem } from "@rneui/themed";
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
            <TouchableOpacity className="w-[100%] h-[50px] justify-between items-center flex-row mb-[3%] ">
              <View>
                <Text className="text-[18%] text-[#28e068]">Change pin</Text>
                <Text className="text-[12%] text-[#474747]">
                  Change your login pin{" "}
                </Text>
              </View>

              <Icon
                name={"navigate-next"}
                type="material"
                size={30}
                color="#474747"
                style={{ paddingTop: 4 }}
              />
            </TouchableOpacity>
            <TouchableOpacity className="w-[100%] h-[10%]  justify-between items-center flex-row mb-[3%]">
              <View>
                <Text className="text-[18%] text-[#28e068]">
                  Update password
                </Text>
                <Text className="text-[12%] text-[#474747]">
                  Change your account password
                </Text>
              </View>
              <Icon
                name={"navigate-next"}
                type="material"
                size={30}
                color="#474747"
                style={{ paddingTop: 4 }}
              />
            </TouchableOpacity>
            <TouchableOpacity className="w-[100%] h-[10%] justify-between items-center flex-row mb-[3%]">
              <View>
                <Text className="text-[18%] text-[#28e068]">
                  Withdrawal accounts
                </Text>
                <Text className="text-[12%] text-[#474747]">
                  Add or remove withdrawal accounts
                </Text>
              </View>
              <Icon
                name={"navigate-next"}
                type="material"
                size={30}
                color="#474747"
                style={{ paddingTop: 4 }}
              />
            </TouchableOpacity>
            <TouchableOpacity className="w-[100%] h-[10%]  justify-between items-center flex-row mb-[3%]">
              <View>
                <Text className="text-[18%] text-[#28e068]">
                  Two-Factor-Authentication
                </Text>
                <Text className="text-[12%] text-[#474747]">
                  Set or change your 2fa settings
                </Text>
              </View>
              <Icon
                name={"navigate-next"}
                type="material"
                size={30}
                color="#474747"
                style={{ paddingTop: 4 }}
              />
            </TouchableOpacity>
            <TouchableOpacity className="w-[100%] h-[10%]  justify-between items-center flex-row mb-[3%]">
              <View>
                <Text className="text-[18%] text-[#28e068]">Get Help</Text>
                <Text className="text-[12%] text-[#474747]">
                  Get support or send feedback and reveiews
                </Text>
              </View>
              <Icon
                name={"navigate-next"}
                type="material"
                size={30}
                color="#474747"
                style={{ paddingTop: 4 }}
              />
            </TouchableOpacity>
            <TouchableOpacity className="w-[100%] h-[10%]  justify-between items-center flex-row mb-[3%]">
              <View>
                <Text className="text-[18%] text-[#ff0000]">Sign out</Text>
              </View>
              <Icon name={"logout"} type="material" size={25} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
