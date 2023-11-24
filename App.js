import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SignInScreen } from "./components/authFlow/SignInScreen";
import { KycScreen } from "./components/authFlow/KycScreen";
import { SetLoginPinScreen } from "./components/authFlow/SetLoginPinScreen";
import { DashboardScreen } from "./components/DashboardScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Kyc" component={KycScreen} />
        <Stack.Screen name="SetPin" component={SetLoginPinScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
