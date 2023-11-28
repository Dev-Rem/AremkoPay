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
import { ResetPassword } from "./ResetPassword";
import { EmailVerify } from "./EmailVerify";
export const SignInScreen = ({ navigation }) => {
  const [form, setForm] = React.useState("signin");
  const [checked, setChecked] = React.useState(false);
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View className="flex-1 bg-[#ffff] flex-column justify-center p-[30px] ">
          <View className="mb-[20%] w-[100%] justify-center items-center">
            <Image
              source={require("../../assets/AremkoPay.png")}
              className="w-[90%] h-[70px] "
            />
          </View>

          {form === "signup" ? (
            <>
              <SignUp setForm={setForm} />
              <View className="justify-between flex-row w-[100%]">
                <TouchableOpacity onPress={() => setForm("signin")}>
                  <Text className="font-semibold">Sign In</Text>
                </TouchableOpacity>

                <View className="flex-row justify-between">
                  <Checkbox
                    value={checked}
                    onValueChange={() => setChecked(!checked)}
                    color={checked ? "#28e068" : undefined}
                    style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }}
                  />
                  <TouchableOpacity>
                    <Text className="font-semibold">
                      I accept terms & conditions.
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          ) : (
            <></>
          )}
          {form === "signin" ? (
            <>
              <SignIn navigation={navigation} />
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
              <ForgotPassword setForm={setForm} />
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
          {form === "resetpassword" ? (
            <>
              <ResetPassword setForm={setForm} />
              <View className="justify-between flex-row w-[100%]">
                <TouchableOpacity onPress={() => setForm("forgotpassword")}>
                  <Text className="font-semibold">Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setForm("resetpassword")}>
                  <Text className="font-semibold">Resend code</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <></>
          )}
          {form === "verifyemail" ? (
            <>
              <EmailVerify setForm={setForm} />
              <View className="justify-between flex-row w-[100%]">
                <TouchableOpacity onPress={() => setForm("signup")}>
                  <Text className="font-semibold">Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setForm("resetpassword")}>
                  <Text className="font-semibold">Resend code</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <></>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
