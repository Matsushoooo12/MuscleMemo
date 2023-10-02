import { View, Text, Button } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate("Detail")}
      />
      <Button
        title="Go to Setting modal"
        onPress={() => navigation.navigate("Setting")}
      />
    </View>
  );
};

export default HomeScreen;
