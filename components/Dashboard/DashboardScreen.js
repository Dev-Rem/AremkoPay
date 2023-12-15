import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { Icon } from "@rneui/themed";
import { PaymentBoxes } from "../utils/PaymentBoxes";
import { Overlay } from "../utils/Overlay";
import { TopUp } from "./Payments/TopUp";
export const DashboardScreen = ({ navigation }) => {
  const [showOverlay, setShowOverlay] = React.useState(false);
  return (
    <View className="flex-1 bg-[#ffff] flex-column justify-between ">
      <View className="m-[3%] flex-row justify-between">
        <Image
          source={require("../../assets/AremkoPay.png")}
          className="w-[50%] h-[45px] rounded-[10%] "
        />
        <TouchableOpacity className="flex-column bg-[#ffff] px-[3%] py-[2%] rounded-[40%]">
          <Text className="text-[12px] text-[#939090]">Account number</Text>
          <View className="flex-row">
            <Text className="pt-[5px] pr-[5] font-semibold">2304323421</Text>
            <Icon
              name={"content-copy"}
              type="material"
              size={18}
              style={{ paddingTop: 4, fontWeight: "bold" }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View className="mx-[3%]">
        <TouchableOpacity className="flex-row">
          <Text className="text-[18px] mr-[8] text-[#939090]">
            Current balance
          </Text>
          <Icon
            name={"visibility"}
            type="material"
            size={18}
            style={{ paddingTop: 2 }}
          />
        </TouchableOpacity>

        <Text className="text-[40%]">$20,000</Text>
        <Text className="text-[#ffff]">Ledger balance: $20,300</Text>
      </View>
      <View className="bg-[#28e068] pt-[15%] h-[70%] rounded-tr-[50px] w-[100%] flex-row justify-center  flex-wrap">
        <PaymentBoxes
          iconName="cash-plus"
          boxTitle="Top Up"
          navigation={navigation}
          onPress={() => setShowOverlay(true)}
        />
        <PaymentBoxes
          iconName="cash-minus"
          boxTitle="Withdraw"
          onPress={() =>
            navigation.navigate("DashboardSecondScreen", { use: "Withdraw" })
          }
        />
        <PaymentBoxes
          iconName="phone"
          boxTitle="Airtime"
          onPress={() =>
            navigation.navigate("DashboardSecondScreen", { use: "Airtime" })
          }
        />
        <PaymentBoxes iconName="web" boxTitle="Data" />
        <PaymentBoxes iconName="lightbulb-on" boxTitle="Electricity" />
        <PaymentBoxes iconName="monitor" boxTitle="TV" />
        <PaymentBoxes iconName="airplane-takeoff" boxTitle="Book Flight" />
        <PaymentBoxes iconName="account-multiple" boxTitle="Beneficiaries" />
        <PaymentBoxes iconName="history" boxTitle="Transaction History" />
      </View>
      <Overlay showOverlay={showOverlay} setShowOverlay={setShowOverlay}>
        <TopUp navigation={navigation} />
      </Overlay>
    </View>
  );
};
