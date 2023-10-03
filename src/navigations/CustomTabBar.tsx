import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { Text, TouchableOpacity, View } from "react-native";

export const CustomTabBar = (props: any) => {
  return (
    <View style={{ position: "relative" }}>
      <BottomTabBar {...props} />
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 90,
          left: "50%",
          transform: [{ translateX: -30 }],
          backgroundColor: "tomato",
          width: 60,
          height: 60,
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        onPress={() => props.navigation.navigate("Center")}
      >
        <Text style={{ color: "white", fontSize: 25 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
