import React from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import { CustomListitem } from "../../utils/CustomListitem";
import { HorizontalRule } from "../../utils/HorizontalRule";
import { Overlay } from "../../utils/Overlay";
import { PhoneNumber } from "./PhoneNumber";

export const AccountDetails = ({ navigation }) => {
  const [showOverlay, setShowOverlay] = React.useState(false);
  const [use, setUse] = React.useState("");

  return (
    <View>
      <View
        style={{
          backgroundColor: "#f1f1f1",
          width: "28%",
          aspectRatio: 1,
          borderRadius: "50%",
        }}
      ></View>

      <Text className="text-[20%] mt-[3%] font-semibold">
        Aremu Oluwaseyi Festus
      </Text>
      <HorizontalRule color="grey" height="0.5px" />
      <CustomListitem
        header="Aremu Oluwaseyi Festus"
        subHeader="Account name"
        disabled={true}
      />
      <CustomListitem
        header="871 Tafawa Balewa Way, Area 11 Garki FCT Abuja, Nigeria."
        subHeader="Address"
        disabled={true}
      />
      <CustomListitem
        header="+2349065002380"
        subHeader="Phone Number"
        iconName="navigate-next"
        headerColor="text-[#28e068]"
        iconColor="#474747"
        onPress={() =>
          navigation.navigate("AccountDetailsScreen", {
            use: "Phone Number",
          })
        }
      />
      <CustomListitem
        header="example@gmail.com"
        subHeader="Email Address"
        iconName="navigate-next"
        headerColor="text-[#28e068]"
        iconColor="#474747"
        onPress={() =>
          navigation.navigate("AccountDetailsScreen", {
            use: "Email Address",
          })
        }
      />
      <CustomListitem
        header="Verified"
        subHeader="Kyc and Identification"
        iconName="navigate-next"
        headerColor="text-[#28e068]"
        iconColor="#474747"
        onPress={() =>
          navigation.navigate("AccountDetailsScreen", {
            use: "Kyc and Identification",
          })
        }
      />
      <CustomListitem
        header="Close Account"
        subHeader="Deactivate your Aremkopay account"
        iconName="expand-more"
        headerColor="text-[#ef0e0e]"
        iconColor="#474747"
        onPress={() => {
          setShowOverlay(true);
          setUse("Close Account");
        }}
      />
      <CustomListitem
        header="Restrict Account"
        subHeader="Stop all transactions incase of emergencies"
        iconName="expand-more"
        headerColor="text-[#ef0e0e]"
        iconColor="#474747"
        onPress={() => {
          setShowOverlay(true);
          setUse("Restrict Account");
        }}
      />

      <Overlay showOverlay={showOverlay} setShowOverlay={setShowOverlay}>
        {use === "Phone Number" ? (
          <PhoneNumber
            navigation={navigation}
            setShowOverlay={setShowOverlay}
          />
        ) : (
          <></>
        )}
      </Overlay>
    </View>
  );
};
