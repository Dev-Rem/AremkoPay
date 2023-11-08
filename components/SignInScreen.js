import React from "react";
import {
  View,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  Keyboard,
} from "react-native";
import Checkbox from "expo-checkbox";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { ForgotPassword } from "./ForgotPassword";
export const SignInScreen = () => {
  const [form, setForm] = React.useState("signin");
  const [checked, setChecked] = React.useState(false);
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View className="flex-1 bg-[#DAE8DA] flex-column justify-between ">
          <View></View>
          <View></View>

          <Image
            source={require("../assets/AremkoPay.png")}
            className="w-[85%] h-[80] rounded-t-[10] rounded-b-[10] m-[30]"
          />
          <View className="bg-[#FFFF] h-[60%] w-[100%] rounded-tr-[50] justify-center p-[30] ">
            {form === "signup" ? (
              <>
                {/* Sign Up Form */}
                <SignUp />
              </>
            ) : (
              <></>
            )}
            {form === "signin" ? (
              <>
                {/* Sign In Form */}
                <SignIn />
              </>
            ) : (
              <></>
            )}
            {form === "forgotpassword" ? (
              <>
                {/* Sign In Form */}
                <ForgotPassword />
              </>
            ) : (
              <></>
            )}

            {form === "signup" ? (
              <View className="justify-between flex-row w-[100%]">
                <TouchableOpacity onPress={() => setForm("signin")}>
                  <Text className="font-semibold">Sign In</Text>
                </TouchableOpacity>

                <View className="flex-row justify-between">
                  <Checkbox
                    value={checked}
                    onValueChange={() => setChecked(!checked)}
                    color={checked ? "#DAE8DA" : undefined}
                    style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }}
                  />
                  <TouchableOpacity>
                    <Text className="font-semibold">
                      I accept terms & conditions.
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <></>
            )}
            {form === "signin" ? (
              <>
                <View className="justify-between flex-row w-[100%]">
                  <TouchableOpacity onPress={() => setForm("signup")}>
                    <Text className="font-semibold">Sign Up</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setForm("forgotpassword")}>
                    <Text className="font-semibold">Forgot Password</Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <></>
            )}
            {form === "forgotpassword" ? (
              <>
                <View className="justify-between flex-row w-[100%]">
                  <TouchableOpacity onPress={() => setForm("signin")}>
                    <Text className="font-semibold">Sign in</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setForm("")}>
                    <Text className="font-semibold"></Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <></>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
