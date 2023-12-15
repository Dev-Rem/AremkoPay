import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SignInScreen } from "./components/authFlow/SignInScreen";
import { KycScreen } from "./components/authFlow/KycScreen";
import { SetLoginPinScreen } from "./components/authFlow/SetLoginPinScreen";
import { DashboardScreen } from "./components/Dashboard/DashboardScreen";
import { LogBox } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabBar } from "./components/utils/BottomIconMenu";
import { WalletScreen } from "./components/Wallet/Wallet";
import { ProfileScreen } from "./components/Profile/Profile";
import { ProfileSecondScreen } from "./components/Profile/ProfileSecondScreen";
import { AccountDetailsScreen } from "./components/Profile/AccountDetails/AccountDetailsScreen";
import { PaymentsSecondScreen } from "./components/Dashboard/Payments/PaymentsSecondScreen";

LogBox.ignoreAllLogs();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName={"Dashboard"}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

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
        <Stack.Screen
          name="ProfileSecondScreen"
          component={ProfileSecondScreen}
        />
        <Stack.Screen
          name="AccountDetailsScreen"
          component={AccountDetailsScreen}
        />
        <Stack.Screen
          name="PaymentsSecondScreen"
          component={PaymentsSecondScreen}
        />
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
