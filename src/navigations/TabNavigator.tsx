import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, Text, TouchableOpacity } from "react-native";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import MuscleScreen from "../screens/MuscleScreen";
import { CustomTabBar } from "./CustomTabBar";
import OpacityScreen from "../screens/OpacityScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          bottom: 30,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 90,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Info"
              color="#000"
            />
          ),
          headerLeft: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Info"
              color="#000"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign
              name="search1"
              size={size}
              color={color}
              style={{ marginRight: 48 }}
            />
          ),
          tabBarLabel: () => (
            <Text style={{ marginRight: 48, fontSize: 10, color: "#999" }}>
              Search
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Muscle"
        component={MuscleScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="arm-flex-outline"
              size={size}
              color={color}
              style={{ marginLeft: 48 }}
            />
          ),
          tabBarLabel: () => (
            <Text style={{ marginLeft: 48, fontSize: 10, color: "#999" }}>
              Muscle
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="idcard" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
