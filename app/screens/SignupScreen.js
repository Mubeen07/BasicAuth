import React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";

const SignupScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Signup Screen</Text>
      <Button onPress={() => navigation.navigate("HomeScreen")}>
        Go to HomeScreen
      </Button>
    </View>
  );
};

export { SignupScreen };
